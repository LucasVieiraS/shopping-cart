import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import logo from "../../../assets/logo.png";

import { CartProps } from "../../interfaces/CartProps";

import Card from "./components/Card";
import Header from "./components/Header";

export default function ShoppingCart() {
  const [products, setProducts] = useState<CartProps[]>([
    {
      id: 1,
      name: 'ETEC Cidade do Livro',
      description: 'A basket of sorted goods',
      price: 40,
      image: logo
    },
    {
      id: 2,
      name: 'TESTE',
      description: 'A basket of sorted goodss agddagad adgdagda',
      price: 125,
      image: logo
    }
  ])

  return (
    <>
      <Header />
      <View style={style.cartView}>
        <Text style={style.cartTitle}>Shopping Cart</Text>
        {
          products.map((cartData: CartProps) => {
            return <Card data={cartData} key={cartData.id}/>
          })
        }
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
