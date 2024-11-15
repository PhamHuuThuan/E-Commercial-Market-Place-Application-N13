import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
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
import SignUp  from './SignUp';
import Login from './Login';
import Profile from './Profile';
import Favorites from './Favorites';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBar = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('HomeProductListing');

  const handleTabPress = (routeName) => {
    setSelectedTab(routeName);
    navigation.navigate(routeName);
  };

  const getTabColor = (routeName) => {
    return selectedTab === routeName ? 'rgba(28, 199, 229, 1)' : 'black';
  };

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity onPress={() => handleTabPress('HomeProductListing')}>
        <View style={{ alignItems: 'center' }}>
          <Icon name="home" size={24} color={getTabColor('HomeProductListing')} />
          <Text style={{ color: getTabColor('HomeProductListing') }}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress('Filter')}>
        <View style={{ alignItems: 'center' }}>
          <Icon name="search" size={24} color={getTabColor('Filter')} />
          <Text style={{ color: getTabColor('Filter') }}>Search</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress('ProductDetail1')}>
        <View style={{ alignItems: 'center' }}>
          <Icon name="mail" size={24} color={getTabColor('ProductDetail1')} />
          <Text style={{ color: getTabColor('ProductDetail1') }}>Inbox</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress('Favorites')}>
        <View style={{ alignItems: 'center' }}>
          <Icon name="heart" size={24} color={getTabColor('Favorites')} />
          <Text style={{ color: getTabColor('Favorites') }}>Favorites</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress('SignUp')}>
        <View style={{ alignItems: 'center' }}>
          <Icon name="person" size={24} color={getTabColor('SignUp')} />
          <Text style={{ color: getTabColor('SignUp') }}>Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Định nghĩa các màn hình trong Tab.Navigator
const TabScreen = () => (
  <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
    <Tab.Screen name="HomeProductListing" component={HomeProductListing} />
    <Tab.Screen name="Filter" component={Filter} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="SignUp" component={SignUp} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="TabScreen">
      <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail1"
          component={ProductDetail1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductFeedback"
          component={ProductFeedback}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail2"
          component={ProductDetail2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductListing_GridView"
          component={ProductListing_GridView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckoutPayment"
          component={CheckoutPayment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckoutCard"
          component={CheckoutCard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
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
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});
