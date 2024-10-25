import CryptoSearchForm from "./components/CryptoSearchForm";
import { useCryptoStore } from "./store";
import "./index.css";
import { useEffect } from "react";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";

function App() {
  const { fetchCryptos } = useCryptoStore();
  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Crypto App <span>Viewer</span>
        </h1>
        <div className="content">
          <CryptoSearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  );
}

export default App;
