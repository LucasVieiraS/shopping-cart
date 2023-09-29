import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CartData from "../../mocks/CartData";

import Card from "./components/Card";
import Header from "./components/Header";

import { ProductProps } from "../../interfaces/ProductProps";

export default function ShoppingCart() {
  const [products, setProducts] = useState<ProductProps[]>(CartData.items.list)

  return (
    <>
      <Header title={CartData.header.title}/>
      <View style={style.cartView}>
        <Text style={style.cartTitle}>{CartData.details.name}</Text>
        <Card details={CartData.details}/>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  cartTitle: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
  },
  cartView: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
