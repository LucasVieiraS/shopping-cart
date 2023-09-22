import { Image, StyleSheet, Text, View } from "react-native";
import { CartProps } from "../../../../interfaces/CartProps";

import { formatCurrency } from "react-native-format-currency";

export default function Card({ data }: { data: CartProps }) {
  const [valueFormattedWithSymbol] = formatCurrency({amount: data.price, code: 'BRL'})

  return (
    <>
      <View style={style.farmView}>
        <Image source={data.image} style={style.farmImage} />
        <Text style={style.farmName}>{data.name}</Text>
      </View>
      <Text style={style.description}>
        {data.description}
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
