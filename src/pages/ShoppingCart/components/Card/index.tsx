import { Image, StyleSheet, Text, View } from "react-native";

import { formatCurrency } from "react-native-format-currency";

import icon from '../../../../../assets/icon.png'

type CardProps = {
  name: string,
  farmName: string,
  description: string,
  price: number,
  button: string,
}

export default function Card({ details }: { details: CardProps }) {
  const [valueFormattedWithSymbol] = formatCurrency({amount: details.price, code: 'BRL'})

  return (
    <>
      <View style={style.farmView}>
        <Image source={icon} style={style.farmImage} />
        <Text style={style.farmName}>{details.name}</Text>
      </View>
      <Text style={style.description}>
        {details.description}
      </Text>
      <Text style={style.price}>{valueFormattedWithSymbol}</Text>
    </>
  );
}

const style = StyleSheet.create({
  description: {
    color: "#A3A3A3",
    fontStyle: "italic",
  },
  price: {
    fontSize: 20,
    lineHeight: 36,
    color: "#2A9F85",
    marginTop: 8,
    fontWeight: "500",
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, .1)',
    paddingBottom: 6,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontWeight: "bold",
  },
  farmImage: {
    width: 32,
    height: 32,
  },
  farmView: {
    flexDirection: "row",
    paddingVertical: 12,
  },
});
