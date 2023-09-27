import { ProductProps } from '../../../../interfaces/ProductProps';
import { View, Text, Image} from 'react-native'

export default function Product({ data }: { data: ProductProps }) {
  return <View>
    <Text>{ data.name }</Text>
    <Image source={data.image} alt="Image"/>
  </View>
}
