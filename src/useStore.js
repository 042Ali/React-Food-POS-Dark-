import { create } from "zustand";

export const useStore = create((set) => ({
  selectedProducts: [],
  addProduct: (product) =>
    set((state) => {
      const existingProduct = state.selectedProducts.find(
        (p) => p.id === product.id
      );
      if (existingProduct) {
        return {
          selectedProducts: state.selectedProducts.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      } else {
        return {
          selectedProducts: [
            ...state.selectedProducts,
            { ...product, quantity: 1 },
          ],
        };
      }
    }),
  clearCart: () => set({ selectedProducts: [] }),
}));
