import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { CryptoCurrency, Pair } from "./types/index";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[];
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({ cryptoCurrencies }));
    },
    fetchData: async (pair) => {
      const data = await fetchCurrentCryptoPrice(pair);
      console.log(data);
    },
  }))
);
