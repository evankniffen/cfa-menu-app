// App.tsx
import React from "react";
import OrderForm from "./components/OrderForm";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1 className="menu-title">Chick-fil-A Menu Translator</h1>
      <OrderForm />
    </div>
  );
};

export default App;
