import React from "react";

interface MenuItemProps {
  language: "en" | "es" | "fr" | "na" | "ar" | "zh";
  itemName: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ language, itemName }) => {
  const translations: Record<
    string,
    Record<
      "en" | "es" | "fr" | "na" | "ar" | "zh",
      { price: string; itemName: string }
    >
  > = {
    "Chicken Strips": {
      en: {
        price: "$7.09",
        itemName: "Chicken Strips",
      },
      es: {
        price: "$154.68",
        itemName: "Tiras de pollo",
      },
      fr: {
        price: "€6.48",
        itemName: "Lanières de poulet",
      },
      na: {
        price: "7.09 béeso",
        itemName: "Naaltsoosí Bíla’ Da’aztł’ó’ígíí",
      },
      ar: {
        price: "د.إ26.06",
        itemName: "شرائح الدجاج",
      },
      zh: {
        price: "¥54.76",
        itemName: "鸡条",
      },
    },
    "Fried Chicken Sandwich": {
      en: {
        price: "$6.59",
        itemName: "Fried Chicken Sandwich",
      },
      es: {
        price: "$143.78",
        itemName: "Sándwich de pollo frito",
      },
      fr: {
        price: "€6.02",
        itemName: "Sandwich au poulet frit",
      },
      na: {
        price: "6.59 béeso",
        itemName: "Bilasáana Kéyahí Ki’ Da’aztł’ó’ígíí",
      },
      ar: {
        price: "د.إ21.63",
        itemName: "شطيرة الدجاج المقلي",
      },
      zh: {
        price: "¥45.50",
        itemName: "炸鸡三明治",
      },
    },
    "Grilled Chicken Sandwich": {
      en: {
        price: "$8.79",
        itemName: "Grilled Chicken Sandwich",
      },
      es: {
        price: "$192.27",
        itemName: "Sándwich de pollo a la parrilla",
      },
      fr: {
        price: "€8.03",
        itemName: "Sandwich au poulet grillé",
      },
      na: {
        price: "8.79 béeso",
        itemName: "Bila’ Da’aztł’ó’ígíí Hashkéhé",
      },
      ar: {
        price: "د.إ30.42",
        itemName: "شطيرة الدجاج المشوي",
      },
      zh: {
        price: "¥63.33",
        itemName: "烤鸡三明治",
      },
    },
    "Spicy Fried Chicken Sandwich": {
      en: {
        price: "$7.89",
        itemName: "Spicy Fried Chicken Sandwich",
      },
      es: {
        price: "$172.31",
        itemName: "Sándwich de pollo frito picante",
      },
      fr: {
        price: "€7.21",
        itemName: "Sandwich épicé au poulet frit",
      },
      na: {
        price: "7.89 béeso",
        itemName: "Bila’ Da’aztł’ó’ígíí Nahat’á",
      },
      ar: {
        price: "د.إ27.54",
        itemName: "شطيرة الدجاج المقلية الحارة",
      },
      zh: {
        price: "¥57.45",
        itemName: "香辣炸鸡三明治",
      },
    },
    "Market Salad": {
      en: {
        price: "$8.99",
        itemName: "Market Salad",
      },
      es: {
        price: "$196.68",
        itemName: "Ensalada de mercado",
      },
      fr: {
        price: "€8.21",
        itemName: "Salade du marché",
      },
      na: {
        price: "8.99 béeso",
        itemName: "Tsé Náakai Nahat’á",
      },
      ar: {
        price: "د.إ32.38",
        itemName: "سلطة السوق",
      },
      zh: {
        price: "¥67.76",
        itemName: "市场沙拉",
      },
    },
    "Spicy Southwest Salad": {
      en: {
        price: "$9.39",
        itemName: "Spicy Southwest Salad",
      },
      es: {
        price: "$204.68",
        itemName: "Ensalada del suroeste picante",
      },
      fr: {
        price: "€8.58",
        itemName: "Salade épicée du sud-ouest",
      },
      na: {
        price: "9.39 béeso",
        itemName: "Nahat’á Hashkéhé Tsé Náakai",
      },
      ar: {
        price: "د.إ34.74",
        itemName: "سلطة الجنوب الغربي الحارة",
      },
      zh: {
        price: "¥72.43",
        itemName: "辣西南沙拉",
      },
    },
    "Waffle Fries": {
      en: {
        price: "$2.99",
        itemName: "Waffle Fries",
      },
      es: {
        price: "$65.85",
        itemName: "Papas Fritas Belgas",
      },
      fr: {
        price: "€2.73",
        itemName: "Frites gaufres",
      },
      na: {
        price: "2.99 béeso",
        itemName: "Béésh łichííʼ łigaií",
      },
      ar: {
        price: "د.إ8.72",
        itemName: "بطاطس وافل",
      },
      zh: {
        price: "¥18.30",
        itemName: "华夫薯条",
      },
    },
    "Fruit Cup": {
      en: { price: "$5.39", itemName: "Fruit Cup" },
      es: { price: "$6.39", itemName: "Copa de Frutas" },
      fr: { price: "€6.39", itemName: "Coupe de Fruits" },
      na: { price: "5.39 béeso", itemName: "Naaltsoosí Bíla’ Da’aztł’ó’ígíí" },
      ar: { price: "د.إ15.75", itemName: "كوب فواكه" },
      zh: { price: "¥32.99", itemName: "水果杯" },
    },
    "Side Salad": {
      en: {
        price: "$5.45",
        itemName: "Side Salad",
      },
      es: {
        price: "$118.91",
        itemName: "Ensalada lateral",
      },
      fr: {
        price: "€4.98",
        itemName: "Salade d'accompagnement",
      },
      na: {
        price: "5.45 béeso",
        itemName: "Tsé Náakai Hashkéhé",
      },
      ar: {
        price: "د.إ20.93",
        itemName: "سلطة جانبية",
      },
      zh: {
        price: "¥43.63",
        itemName: "配菜沙拉",
      },
    },

    "Eight Count Chicken Nuggets": {
      en: {
        price: "$4.99",
        itemName: "8 ct Nuggets",
      },
      es: {
        price: "$109.69",
        itemName: "8 unidades de nuggets",
      },
      fr: {
        price: "€4.56",
        itemName: "8 pièces de nuggets",
      },
      na: {
        price: "4.99 béeso",
        itemName: "Tłʼoghí Dííłdaʼaztłʼóʼígíí",
      },
      ar: {
        price: "د.إ15.49",
        itemName: "٨ قطعة من الدجاج ناجتس",
      },
      zh: {
        price: "¥32.53",
        itemName: "8块鸡块",
      },
    },
    "Twelve Count Chicken Nuggets": {
      en: {
        price: "$6.99",
        itemName: "12 ct Nuggets",
      },
      es: {
        price: "$153.59",
        itemName: "12 unidades de nuggets",
      },
      fr: {
        price: "€6.38",
        itemName: "12 pièces de nuggets",
      },
      na: {
        price: "6.99 béeso",
        itemName: "Naaltsoosí Bílaʼ Daʼaztłʼóʼígíí",
      },
      ar: {
        price: "د.إ22.04",
        itemName: "١٢ قطعة من الدجاج ناجتس",
      },
      zh: {
        price: "¥43.88",
        itemName: "12块鸡块",
      },
    },

    "Yogurt Parfait": {
      en: {
        price: "$6.29",
        itemName: "Yogurt Parfait",
      },
      es: {
        price: "$137.26",
        itemName: "Parfait de yogur",
      },
      fr: {
        price: "€5.74",
        itemName: "Parfait au yaourt",
      },
      na: {
        price: "6.29 béeso",
        itemName: "Yogurt Parfait Tsé Náakai",
      },
      ar: {
        price: "د.إ23.87",
        itemName: "الزبادي بارفيه",
      },
      zh: {
        price: "¥49.68",
        itemName: "酸奶花盛宴",
      },
    },
  };

  const { price, itemName: translatedItemName } =
    translations[itemName][language];

  return (
    <div className="menu-item">
      <h3>{translatedItemName}</h3>
      <p>{price}</p>
    </div>
  );
};

export default MenuItem;
