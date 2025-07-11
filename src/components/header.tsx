import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="w-full bg-slate-900 border-b-2 border-yellow-400">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center border-2 border-orange-400">
              <span className="text-xl">🌙</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-yellow-400">Noche de Alitas</h1>
              <p className="text-orange-400 text-sm font-medium">Las mejores alitas de la noche</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-yellow-400">
            <Phone className="w-4 h-4" />
            <span className="font-bold text-lg">0995551611</span>
          </div>
        </div>
      </div>
    </header>
  )
}
