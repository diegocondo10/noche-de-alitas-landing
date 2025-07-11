import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t-2 border-yellow-400 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌙</span>
            <span className="text-yellow-400 font-bold text-lg">Noche de Alitas</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-orange-400">
              <Phone className="w-4 h-4" />
              <span className="font-bold">0995551611</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300 text-sm">Todos los precios incluyen IVA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
