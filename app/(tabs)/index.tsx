import * as React from 'react';
import { Text, View, TextInput, Pressable, SafeAreaView, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './ProductListView';
import ProductDetail1 from './ProductDetail1';
import Filter from './Filters';
import Payment from './PayMent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Payment">
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ headerShown: false}} // Ẩn tên màn hình
        />
        <Stack.Screen
          name="ProductDetail1"
          component={ProductDetail1}
          options={{ headerShown: false}} // Ẩn tên màn hình
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{ headerShown: false}} // Ẩn tên màn hình
        />
        <Stack.Screen 
          name="Payment"
          component={Payment}
          options={{ headerShown: false }} // Ẩn 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
  }
});
