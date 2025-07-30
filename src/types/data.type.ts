export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "combo" | "extra" | "bebida";
  popular?: boolean;
  spicyLevel?: number;
  sauceCount?: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
  selectedSauces?: string[];
  cartId: string;
}
