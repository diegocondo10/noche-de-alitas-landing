"use client";

import { MenuCard } from "@/components/menu-card";
import { MenuItem } from "@/types/data.type";

interface MenuSectionProps {
  menuItems: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

export function MenuSection({ menuItems, onAddToCart }: MenuSectionProps) {
  const combos = menuItems.filter((item) => item.category === "combo");
  const extras = menuItems.filter((item) => item.category === "extra");
  const bebidas = menuItems.filter((item) => item.category === "bebida");

  return (
    <section className='w-full py-8 pb-32'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-8'>
          <h3 className='text-2xl md:text-3xl font-bold text-yellow-400 mb-2'>Nuestro Menú</h3>
          <p className='text-orange-300 text-base'>
            Todos los precios incluyen IVA • Salsas: BBQ, Maracúya, Tamarindo, Piña, Picante, Mora
          </p>
        </div>

        {/* Combos */}
        <div className='mb-8'>
          <h4 className='text-xl font-bold text-orange-400 mb-4 flex items-center gap-2'>
            🍗 Combos
          </h4>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {combos.map((item) => (
              <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>

        {/* Extras */}
        <div className='mb-8'>
          <h4 className='text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2'>
            🍟 Extras
          </h4>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {extras.map((item) => (
              <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>

        {/* Bebidas */}
        <div className='mb-8'>
          <h4 className='text-xl font-bold text-blue-400 mb-4 flex items-center gap-2'>
            🥤 Bebidas
          </h4>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {bebidas.map((item) => (
              <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
