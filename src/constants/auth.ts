import { AuthService } from '@/services/auth/auth.service';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      type: 'credentials',
      credentials: {
        email: {
          label: 'Correo',
          type: 'email',
        },
        password: {
          label: 'Contraseña',
          type: 'password',
        },
      },
      //@ts-ignore
      async authorize(credentials) {
        try {
          const data = await AuthService.getInstance().login(
            credentials.email,
            credentials.password
          );
          return {
            accessToken: data.access,
            refreshToken: data.refresh,
            perfil: data.profile,
            ...data.profile,
          };
        } catch (error) {
          console.error('Error al autenticar:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user || trigger === 'update') {
        token = {
          ...token,
          ...(session?.user || {}),
          ...(user || {}),
          //@ts-ignore
          perfil: session?.user || user.perfil,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      //@ts-ignore
      session.user = token.perfil;
      return session;
    },
  },

  pages: {
    signIn: '/login',
    error: '/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // Un mes
    updateAge: 24 * 60 * 60, // Cada 24 horas
  },
  secret: process.env.NEXTAUTH_SECRET,
};
