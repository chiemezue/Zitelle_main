import { useState } from "react";
import Tata from "./Tata";
import QuoteForm from "./QuoteForm";

const PlyWoodPage = () => {
  const [quoteData, setQuoteData] = useState({
    productType: "",
    thickness: "",
    finishColour: "",
  });

  return (
    <>
      <Tata setQuoteData={setQuoteData} />

      <QuoteForm selectedProduct={quoteData} />
    </>
  );
};

export default PlyWoodPage;
