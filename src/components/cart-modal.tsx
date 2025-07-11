"use client";

import { CartItem } from "@/types/data.type";
import { MessageCircle, Minus, Plus, ShoppingCart } from "lucide-react";
import { PrimeIcons } from "primereact/api";
import { Badge } from "primereact/badge";
import Button from "./Buttons/Button";

interface CartModalProps {
  isOpen: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onOrderNow: () => void;
  onClearCart: () => void;
}

export function CartModal({
  isOpen,
  cartItems,
  onClose,
  onUpdateQuantity,
  onOrderNow,
  onClearCart,
}: CartModalProps) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "combo":
        return "bg-orange-500 text-white";
      case "extra":
        return "bg-yellow-500 text-black";
      case "bebida":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50'>
      <div className='bg-slate-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden border-2 border-yellow-400 shadow-2xl'>
        {/* Header del Modal */}
        <div className='bg-slate-900 px-6 py-4 border-b-2 border-yellow-400'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <ShoppingCart className='w-6 h-6 text-yellow-400' />
              <div>
                <h3 className='text-xl font-bold text-yellow-400'>Mi Carrito</h3>
                <p className='text-orange-400 text-sm'>
                  {totalItems} {totalItems === 1 ? "artículo" : "artículos"}
                </p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <Button
                onClick={onClearCart}
                // variant="ghost"
                className='text-red-400 hover:text-red-300 hover:bg-red-900/20 p-2'
                title='Vaciar carrito'
                icon={PrimeIcons.TRASH}
              />
              <Button
                // variant="ghost"
                onClick={onClose}
                className='text-gray-400 hover:text-white hover:bg-slate-700 rounded-md p-2'
                icon={PrimeIcons.TIMES}
              />
            </div>
          </div>
        </div>

        {/* Contenido del carrito */}
        <div className='overflow-y-auto max-h-[60vh] p-6'>
          {cartItems.length === 0 ? (
            <div className='text-center py-8'>
              <ShoppingCart className='w-16 h-16 text-gray-500 mx-auto mb-4' />
              <p className='text-gray-400 text-lg'>Tu carrito está vacío</p>
              <p className='text-gray-500 text-sm'>Agrega algunos productos para comenzar</p>
            </div>
          ) : (
            <div className='space-y-4'>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className='bg-slate-700 rounded-lg p-4 border border-slate-600 hover:border-yellow-400 transition-all duration-200'>
                  <div className='flex items-start gap-4'>
                    {/* Imagen del producto */}
                    <div className='relative'>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className='w-16 h-16 object-cover rounded-lg'
                      />
                      <Badge
                        className={`absolute -top-1 -right-1 ${getCategoryColor(
                          item.category
                        )} text-xs px-1 py-0`}>
                        {item.category.charAt(0).toUpperCase()}
                      </Badge>
                    </div>

                    {/* Información del producto */}
                    <div className='flex-1'>
                      <h4 className='text-orange-400 font-bold text-lg'>{item.name}</h4>
                      <p className='text-gray-300 text-sm mb-2'>{item.description}</p>
                      <p className='text-yellow-400 font-bold'>${item.price} c/u</p>
                    </div>

                    {/* Controles de cantidad */}
                    <div className='flex flex-col items-end gap-2'>
                      <div className='flex items-center gap-2 bg-slate-800 rounded-lg p-1'>
                        <Button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className='w-8 h-8 p-0 bg-red-500 hover:bg-red-600 rounded-md'
                          icon={<Minus className='w-4 h-4' />}
                        />
                        <span className='text-yellow-400 font-bold text-lg mx-3 min-w-[2rem] text-center'>
                          {item.quantity}
                        </span>
                        <Button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className='w-8 h-8 p-0 bg-green-500 hover:bg-green-600 rounded-md'
                          icon={<Plus className='w-4 h-4' />}
                        />
                      </div>
                      <p className='text-orange-400 font-bold text-lg'>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer con total y botón de pedido */}
        {cartItems.length > 0 && (
          <div className='bg-slate-900 px-6 py-4 border-t-2 border-yellow-400'>
            <div className='flex items-center justify-between mb-4'>
              <div>
                <p className='text-gray-400 text-sm'>Total del pedido</p>
                <p className='text-yellow-400 font-bold text-2xl'>${totalPrice.toFixed(2)}</p>
              </div>
              <div className='text-right'>
                <p className='text-gray-400 text-sm'>
                  {totalItems} {totalItems === 1 ? "artículo" : "artículos"}
                </p>
                <p className='text-orange-400 text-sm'>Precios incluyen IVA</p>
              </div>
            </div>

            <div className='w-full'>
              <Button
                block
                onClick={onOrderNow}
                className='bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-lg border-2 border-green-400 hover:border-green-300 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl'
                sm>
                <div className="w-full flex justify-center items-center">
                  <MessageCircle className='w-5 h-5 mr-2' />
                  Pedir Ahora por WhatsApp
                </div>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
