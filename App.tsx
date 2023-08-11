import { SafeAreaView, StatusBar } from 'react-native';

import ShoppingCart from './src/pages/ShoppingCart';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ShoppingCart />
    </SafeAreaView>
  );
}
