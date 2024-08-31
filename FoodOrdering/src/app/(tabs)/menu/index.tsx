import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';
import Colors from '@/src/constants/Colors';
import { Image, ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';

export default function MenuScreen() {
  return (
    <FlatList data={products} renderItem={({ item }) => <ProductListItem product={item} />} numColumns={2} contentContainerStyle={{ gap: 10 }} columnWrapperStyle={{ gap: 10 }} />

  );
}
