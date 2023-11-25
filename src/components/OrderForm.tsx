import React, { useState } from "react";
import MenuItem from "./MenuItem";
import "./OrderForm.css";

const OrderForm: React.FC = () => {
  const [language, setLanguage] = useState<
    "en" | "es" | "fr" | "na" | "ar" | "zh"
  >("en");

  const handleLanguageChange = (
    newLanguage: "en" | "es" | "fr" | "na" | "ar" | "zh"
  ) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleLanguageChange("en")}>English</button>
        <button onClick={() => handleLanguageChange("es")}>Español</button>
        <button onClick={() => handleLanguageChange("fr")}>Français</button>
        <button onClick={() => handleLanguageChange("na")}>Navajo</button>
        <button onClick={() => handleLanguageChange("ar")}>العربية</button>
        <button onClick={() => handleLanguageChange("zh")}>中文</button>
      </div>
      <div className="menu-grid">
        <MenuItem language={language} itemName="Chicken Strips" />
        <MenuItem language={language} itemName="Fried Chicken Sandwich" />
        <MenuItem language={language} itemName="Grilled Chicken Sandwich" />
        <MenuItem language={language} itemName="Spicy Fried Chicken Sandwich" />
        <MenuItem language={language} itemName="Market Salad" />
        <MenuItem language={language} itemName="Spicy Southwest Salad" />
        <MenuItem language={language} itemName="Waffle Fries" />
        <MenuItem language={language} itemName="Fruit Cup" />
        <MenuItem language={language} itemName="Side Salad" />
        <MenuItem language={language} itemName="Eight Count Chicken Nuggets" />
        <MenuItem language={language} itemName="Twelve Count Chicken Nuggets" />
        <MenuItem language={language} itemName="Yogurt Parfait" />
      </div>
    </div>
  );
};

export default OrderForm;
