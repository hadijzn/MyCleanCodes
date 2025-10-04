
import { create } from 'zustand';

const useBasketStore = create((set, get) => ({
      basket: [],
      addToBasket: (product) =>
      set((state) => ({
         basket: [...state.basket, product],
        })),
      deleteBasket: (product) =>
        set((state) => ({
        basket: state.basket.filter((item) => item.id !== product.id),
        })),
      getTotalPrice: () =>
        get().basket.reduce((sum, item) => sum + item.price, 0),
}));

export default useBasketStore;
