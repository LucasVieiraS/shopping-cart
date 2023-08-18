import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import top from "../../../assets/top.png";
import logo from "../../../assets/logo.png";

const screenWidth = Dimensions.get("screen").width;

const imageHeight = 578;
const imageWidth = 768;

export default function ShoppingCart() {
  return (
    <>
      <Image source={top} style={style.top} />
      <Text style={style.title}>Shopping Cart Details</Text>
      <View style={style.cartView}>
        <Text style={style.cartTitle}>Shopping Cart</Text>
        <View style={style.farmView}>
          <Image source={logo} style={style.farmImage} />
          <Text style={style.farmName}>ETEC Cidade do Livro's Farm</Text>
        </View>
        <Text style={style.description}>A basket filled with sorted products</Text>
        <Text>R$40,00</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  top: {
    width: "100%",
    height: (imageHeight / imageWidth) * screenWidth,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 26,
    width: "100%",
    textAlign: "center",
    color: "white",
    position: "absolute",
    padding: 16,
  },
  description: {
    color: '#A3A3A3',
    fontStyle: 'italic',
  },
  cartTitle: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
  },
  cartView: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontWeight: 'bold',
  },
  farmImage: {
    width: 32,
    height: 32,
  },
  farmView: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
});
