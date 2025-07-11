"use client";

import { CartItem } from "@/types/data.type";
import { ShoppingCart } from "lucide-react";
import { PrimeIcons } from "primereact/api";
import { Badge } from "primereact/badge";
import Button from "./Buttons/Button";

interface CartBarProps {
  cartItems: CartItem[];
  onViewCart: () => void;
}

export function CartBar({ cartItems, onViewCart }: CartBarProps) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-slate-900 border-t-2 border-yellow-400 shadow-2xl z-40'>
      <div className='max-w-6xl mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          {/* Información básica del carrito */}
          <div className='flex items-center gap-4'>
            <div className='relative'>
              <ShoppingCart className='w-7 h-7 text-yellow-400' />
              <Badge className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center p-0'>
                {totalItems}
              </Badge>
            </div>
            <div>
              <p className='text-yellow-400 font-bold text-lg'>
                {totalItems} {totalItems === 1 ? "artículo" : "artículos"}
              </p>
              <p className='text-orange-400 text-sm'>Total: ${totalPrice.toFixed(2)}</p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className='flex items-center gap-3'>
            <Button
              onClick={onViewCart}
              // variant='outline'
              className='bg-slate-800 hover:bg-slate-700 text-yellow-400 border-2 border-yellow-400 hover:border-yellow-300 font-bold py-2 px-4 rounded-lg transition-all duration-200'
              icon={PrimeIcons.EYE}
              label='Ver Carrito'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
