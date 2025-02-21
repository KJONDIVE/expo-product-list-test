// *** IMPORT ***
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  LayoutChangeEvent,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// *** OTHER ***
import { Product } from "../data/productData";

// *** INTERFACE ***
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // *** USE STATE ***
  const [imageHeight, setImageHeight] = useState<number>(0);

  // *** HANDLE ***
  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setImageHeight(width);
  };

  return (
    <View onLayout={handleLayout} style={styles.card}>
      <Image
        source={product.image}
        style={[styles.image, { height: imageHeight }]}
      />
      <View style={styles.nameWeightContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.weight}>{product.weight}</Text>
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {product.description}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.price}>{product.price}</Text>
        <Ionicons
          style={styles.icon}
          name="arrow-forward-outline"
          size={18}
          color={"white"}
        />
      </TouchableOpacity>
    </View>
  );
};

// *** STYLES ***
const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 5,
    paddingBottom: 20,
    width: "48%",
  },
  image: {
    width: "100%",
    borderRadius: 20,
  },
  nameWeightContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  name: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  weight: {
    color: "#8E8E93",
    fontSize: 14,
    marginHorizontal: 5,
  },
  description: {
    color: "#8E8E93",
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    backgroundColor: "#363533",
    borderRadius: 12,
    marginTop: 12,
    paddingVertical: 9,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  price: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  icon: {
    marginLeft: 5,
  },
});

export default ProductCard;
