import { create } from "zustand";

export const useCart = create((set) => ({
  cart: JSON.parse(window.localStorage.getItem('cart')) || [],
  total: JSON.parse(window.localStorage.getItem('total')) || 0,
  addToCart: (product) => {
    window.localStorage.setItem('cart', JSON.stringify([...useCart.getState().cart, product]));
    window.localStorage.setItem('total', JSON.stringify(useCart.getState().total + 1));
    set((state) => ({ cart: [...state.cart, product], total: state.total + 1 }));
  },
  removeFromCart: (product) => {
    window.localStorage.setItem('cart', JSON.stringify(useCart.getState().cart.filter((item) => item.id !== product.id)));
    window.localStorage.setItem('total', JSON.stringify(useCart.getState().total - 1));
    set((state) => ({ cart: state.cart.filter((item) => item.id !== product.id), total: state.total - 1 }));
  },
  clearCart: () => set({ cart: [] }),
  isProductInCart: (product) => useCart.getState().cart.some((item) => item.id === product.id),
}));