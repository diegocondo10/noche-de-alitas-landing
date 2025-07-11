"use client";

import { MenuItem } from "@/types/data.type";
import Button from "./Buttons/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./Card";

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export function MenuCard({ item, onAddToCart }: MenuCardProps) {
  return (
    <Card className='relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-slate-600 hover:border-yellow-400 bg-slate-800 rounded-lg'>
      {/* Botón Agregar al Carrito - Esquina Superior Izquierda */}
      {/* <Button
        onClick={() => onAddToCart(item)}
        className='absolute top-3 left-3 z-10 w-8 h-8 p-0 bg-green-500 hover:bg-green-600 border-2 border-green-400 hover:border-green-300 rounded-full shadow-lg'
        icon={PrimeIcons.PLUS}
        sm
      /> */}

      {/* Imagen del producto */}
      <div className='relative'>
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className='w-full h-32 object-cover'
        />
      </div>

      <CardHeader className='pb-2 px-3 pt-3'>
        <CardTitle className='text-base font-bold text-orange-400'>{item.name}</CardTitle>
        <CardDescription className='text-gray-300 text-xs leading-tight'>
          {item.description}
        </CardDescription>
      </CardHeader>

      <CardContent className='px-3 pb-3'>
        <div className='flex items-center justify-between'>
          <span className='text-xl font-bold text-yellow-400'>${item.price}</span>
          <Button
            onClick={() => onAddToCart(item)}
            className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-3 text-sm border border-orange-400 hover:border-orange-300 rounded-md transition-all duration-200'
            sm
            label='Agregar'
          />
        </div>
      </CardContent>
    </Card>
  );
}
