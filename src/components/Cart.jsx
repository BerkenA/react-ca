import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: {},

      addToCart: (product) =>
        set((state) => {
          const cart = { ...state.cart };
          if (cart[product.id]) {
            cart[product.id].quantity++;
          } else {
            cart[product.id] = {
              image: product.image,
              title: product.title,
              quantity: 1,
              price: product.discountedPrice || product.price,
            };
          }
          return { cart };
        }),

      removeFromCart: (id) =>
        set((state) => {
          const cart = { ...state.cart };
          if (cart[id]) {
            if (cart[id].quantity > 1) {
              cart[id].quantity--;
            } else {
              delete cart[id];
            }
          }
          return { cart };
        }),

      clearCart: () => set({ cart: {} }),

      getTotalPrice: () => {
        const cart = get().cart;
        return Object.values(cart).reduce(
          (sum, product) => sum + product.price * product.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useCartStore;
