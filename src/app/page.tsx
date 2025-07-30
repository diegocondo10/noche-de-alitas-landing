"use client";

import { CartBar } from "@/components/cart-bar";
import { CartModal } from "@/components/cart-modal";
import { Header } from "@/components/header";
import { MenuSection } from "@/components/menu-section";
import ComboSauceModal from "@/components/combo-sauce-modal";
import { CartItem, MenuItem } from "@/types/data.type";
import { uuidV4 } from "@/utils/uuid";
import { useState } from "react";

const menuItems: MenuItem[] = [
  // Combos
  {
    id: "combo-1",
    name: "La Probadita",
    description: "4 alitas + papa pequeña + 1 salsa a elección",
    price: 4.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "combo",
    spicyLevel: 2,
    sauceCount: 1,
  },
  {
    id: "combo-2",
    name: "Siete Pecados",
    description: "7 alitas + papa grande + 2 salsas a elección",
    price: 7.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "combo",
    popular: true,
    spicyLevel: 3,
    sauceCount: 2,
  },
  {
    id: "combo-3",
    name: "Doce Rounds",
    description: "12 alitas + papa grande + 3 salsas a elección",
    price: 12.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "combo",
    popular: true,
    spicyLevel: 3,
    sauceCount: 3,
  },
  {
    id: "combo-4",
    name: "La Manada",
    description: "20 alitas + 2 papas grandes + 4 salsas a elección",
    price: 22.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "combo",
    spicyLevel: 2,
    sauceCount: 4,
  },
  {
    id: "combo-5",
    name: "Noche Legendaria",
    description: "30 alitas + 2 papas grandes + 4 salsas a elección",
    price: 32.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "combo",
    spicyLevel: 4,
    sauceCount: 4,
  },
  // Extras
  {
    id: "extra-1",
    name: "Papas Fritas",
    description: "Papas fritas crujientes y doradas",
    price: 2.5,
    image: "/placeholder.svg?height=200&width=300",
    category: "extra",
  },
  {
    id: "extra-2",
    name: "Salsa Adicional",
    description: "Salsa extra de tu elección",
    price: 1.0,
    image: "/placeholder.svg?height=200&width=300",
    category: "extra",
  },
  // Bebidas
  {
    id: "bebida-1",
    name: "Coca-Cola Personal",
    description: "Coca-Cola 350ml",
    price: 1.0,
    image: "/placeholder.svg?height=200&width=300",
    category: "bebida",
  },
  {
    id: "bebida-2",
    name: "Cola 1.35 Litro",
    description: "Bebida cola familiar 1.35L",
    price: 2.0,
    image: "/placeholder.svg?height=200&width=300",
    category: "bebida",
  },
];

export default function NocheAlitasLanding() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [comboToCustomize, setComboToCustomize] = useState<MenuItem | null>(null);
  const [showSauceModal, setShowSauceModal] = useState(false);

  const addItemToCart = (item: MenuItem, sauces: string[] = []) => {
    setCartItems((prevItems) => {
      if (item.category !== "combo") {
        const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
          return prevItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
          );
        }
      }

      return [
        ...prevItems,
        { ...item, quantity: 1, selectedSauces: sauces, cartId: uuidV4() },
      ];
    });
  };

  const handleAddToCart = (item: MenuItem) => {
    if (item.category === "combo" && item.sauceCount && item.sauceCount > 0) {
      setComboToCustomize(item);
      setShowSauceModal(true);
    } else {
      addItemToCart(item);
    }
  };

  const updateQuantity = (cartId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems((prevItems) => prevItems.filter((item) => item.cartId !== cartId));
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.cartId === cartId ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setShowCartModal(false);
  };

  const generateWhatsAppMessage = (cartItems: CartItem[]) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    let message = `🌙 *NOCHE DE ALITAS* 🍗\n\n📋 *MI PEDIDO:*\n\n`;

    cartItems.forEach((item) => {
      message += `• *${item.name}* x${item.quantity}\n`;
      message += `  ${item.description}\n`;
      if (item.selectedSauces && item.selectedSauces.length > 0) {
        message += `  Salsas: ${item.selectedSauces.join(", ")}\n`;
      }
      message += `  $${item.price} c/u = $${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `💰 *TOTAL: $${totalPrice.toFixed(2)}*\n\n`;
    message += `🍯 *Salsas disponibles:* BBQ, Maracúya, Tamarindo, Piña, Picante, Mora\n\n`;
    message += `📝 Por favor confirmen mi pedido y me indican el tiempo de entrega.\n\n`;
    message += `¡Gracias! 🌟`;
    console.log("MESSAGE: ", message);
    return encodeURIComponent(message);
  };

  const handleOrderNow = () => {
    if (cartItems.length === 0) return;

    const whatsappMessage = generateWhatsAppMessage(cartItems);
    const whatsappNumber = "593939533288";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    // console.log(whatsappMessage);
    window.open(whatsappUrl, "_blank");
    setShowCartModal(false);
  };

  return (
    <div className='min-h-screen w-full'>
      <div className='bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800'>
        <Header />
        {/* <HeroSection /> */}
        <MenuSection menuItems={menuItems} onAddToCart={handleAddToCart} />
        <ComboSauceModal
          combo={comboToCustomize}
          isOpen={showSauceModal}
          onClose={() => setShowSauceModal(false)}
          onConfirm={(sauces) => {
            if (comboToCustomize) {
              addItemToCart(comboToCustomize, sauces);
            }
            setShowSauceModal(false);
            setComboToCustomize(null);
          }}
        />
        <CartBar cartItems={cartItems} onViewCart={() => setShowCartModal(true)} />
        <CartModal
          isOpen={showCartModal}
          cartItems={cartItems}
          onClose={() => setShowCartModal(false)}
          onUpdateQuantity={updateQuantity}
          onOrderNow={handleOrderNow}
          onClearCart={clearCart}
        />
      </div>
    </div>
  );
}
