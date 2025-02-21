export interface Product {
  id: string;
  name: string;
  weight: string;
  description: string;
  price: string;
  image: any;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Яки шримп",
    weight: "210 г",
    description: "Креветка, огурец, сыр гауда, тобико, чеснок, лук зелёный",
    price: "810₽",
    image: require("../assets/productImages/yaki_shrimp.png"),
  },
  {
    id: "2",
    name: "Спайси унаги",
    weight: "205 г",
    description: "Угорь, огурец, такуан, тобико, кунжут, сыр сливочный",
    price: "890₽",
    image: require("../assets/productImages/spicy_unagi.png"),
  },
  {
    id: "3",
    name: "Яки салмон",
    weight: "200 г",
    description: "Лосось, авокадо, сыр гауда, тобико, икра горбуши",
    price: "1030₽",
    image: require("../assets/productImages/yaki_salmon.png"),
  },
  {
    id: "4",
    name: "Уми-юми",
    weight: "200 г",
    description: "Лосось, креветка, сыр сливочный, авокадо, тобико",
    price: "1050₽",
    image: require("../assets/productImages/umi_yumi.png"),
  },
];
