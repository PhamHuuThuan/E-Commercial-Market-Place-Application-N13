import * as React from 'react';
import { Text, View, TextInput, Pressable, SafeAreaView, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './ProductListView';
import ProductDetail1 from './ProductDetail1';
import Filter from './Filters';
import Payment from './PayMent';
import ProductListing_GridView from './ProductListingGridView';
import ProductDetail2 from './ProductDetail2';
import HomeProductListing from './HomeProductListing';
import CheckoutPayment from './CheckoutPaymentSuccess';
import CheckoutCard from './CheckoutCart';
import ProductFeedback from './ProductFeedback';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="ProductFeedback">
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

        <Stack.Screen
          name="ProductListing-GridView"
          component={ProductListing_GridView}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetail2"
          component={ProductDetail2}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="HomeProductListing"
          component={HomeProductListing}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="CheckoutPayment"
          component={CheckoutPayment}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="CheckoutCard"
          component={CheckoutCard}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="ProductFeedback"
          component={ProductFeedback}
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
