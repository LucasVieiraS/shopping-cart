import { Dimensions, Image, Text, StyleSheet } from "react-native";

import top from "../../../../../assets/top.png";
import { HeaderProps } from "../../../../interfaces/HeaderProps";

const screenWidth = Dimensions.get("screen").width;

const imageHeight = 578;
const imageWidth = 768;

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <Image source={top} style={style.top} />
      <Text style={style.title}>Shopping Cart Details</Text>
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
});
