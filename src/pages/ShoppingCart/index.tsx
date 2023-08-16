import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import topo from "../../../assets/topo.png";

const screenWidth = Dimensions.get("screen").width;

const imageHeight = 578;
const imageWidth = 768;

export default function ShoppingCart() {
  return (
    <>
      <Image source={topo} style={style.topo} />
      <Text style={style.titulo}>Detalhes do Carrinho</Text>
      <View>
        <Text>Carrinho de Compras</Text>
        <Text>Fazenda ETEC Cidade do Livro</Text>
        <Text>Uma cesta com produtos selecionados cuidadosamente</Text>
        <Text>R$40,00</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  topo: {
    width: "100%",
    height: (imageHeight / imageWidth) * screenWidth,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 26,
    width: "100%",
    textAlign: "center",
    color: "white",
    position: "absolute",
    padding: 16,
  },
});
