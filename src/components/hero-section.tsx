import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-900 to-slate-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-400">¡Ordena Ahora!</h2>
        <p className="text-lg text-orange-300 mb-4">Elige tu combo favorito y recíbelo caliente</p>
        <div className="flex items-center justify-center gap-1">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-2 text-yellow-300 font-semibold">5.0 ⭐</span>
        </div>
      </div>
    </section>
  )
}
