// *** IMPORT ***
import React from "react";
import {
  FlatList,
  StyleSheet,
  ListRenderItem,
  SafeAreaView,
} from "react-native";
import { useSelector } from "react-redux";

// *** OTHER ***
import ProductCard from "../components/ProductCard";
import { Product } from "../data/productData";

// *** INERFACE ***
interface RootState {
  products: {
    products: Product[];
  };
}

const ProductListScreen: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard product={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

// *** STYLES ***
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181715",
    paddingTop: 20,
  },
  columnWrapper: {
    justifyContent: "center",
  },
});

export default ProductListScreen;
