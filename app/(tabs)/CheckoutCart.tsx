import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import styles from '../styles/style';

const CheckoutToCard = () => {
  const [quantities, setQuantities] = useState([1, 1, 1, 1]);
  const [voucher, setVoucher] = useState('');

  const products = [
    {
      image: require('../../assets/image/headphone1.png'),
      name: 'Headphone',
      title: 'Consequat ex eu',
      price: 500,
    },
    {
      image: require('../../assets/image/headphone2.png'),
      name: 'Wireless Earbuds',
      title: 'Aenean commodo ligula',
      price: 300,
    },
    {
      image: require('../../assets/image/headphone3.png'),
      name: 'Noise Cancelling Headphones',
      title: 'Curabitur sit amet mauris',
      price: 700,
    },
    {
      image: require('../../assets/image/headphone4.png'),
      name: 'Gaming Headset',
      title: 'Vestibulum ante ipsum primis',
      price: 400,
    },
  ];

  const updateQuantity = (index: number, change: number) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      if (change < 0 && newQuantities[index] > 1) {
        newQuantities[index] -= 1;
      } else if (change > 0) {
        newQuantities[index] += 1;
      }
      return newQuantities;
    });
  };

  const totalPrice = products.reduce((total, product, index) => {
    return total + product.price * quantities[index];
  }, 0).toFixed(2);

  const handleApplyVoucher = () => {
    console.log(`Applying voucher: ${voucher}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={stylesLocal.scrollContainer}>
        <View style={stylesLocal.header}>
          <Pressable>
            <Image source={require('../../assets/image/left-chevron.png')} style={styles.direcBtn} />
          </Pressable>
          <Text style={stylesLocal.headingText}>Checkout</Text>
        </View>
        
        {products.map((product, index) => (
          <View key={index} style={stylesLocal.productContainer}>
            <Image 
              source={product.image} 
              style={stylesLocal.productImage} 
              resizeMode="contain"
            />
            <View style={stylesLocal.detailsContainer}>
              <Text style={stylesLocal.productName}>{product.name}</Text>
              <Text style={stylesLocal.productTitle}>{product.title}</Text>
              <Text style={stylesLocal.productPrice}>${product.price}</Text>
            </View>
            <View style={stylesLocal.quantityContainer}>
              <Pressable onPress={() => updateQuantity(index, -1)}>
                <Text style={stylesLocal.quantityButton}>-</Text>
              </Pressable>
              <Text style={stylesLocal.productQuantity}>{quantities[index]}</Text>
              <Pressable onPress={() => updateQuantity(index, 1)}>
                <Text style={stylesLocal.quantityButton}>+</Text>
              </Pressable>
            </View>
          </View>
        ))}

        <View style={stylesLocal.voucherContainer}>
          <Text style={stylesLocal.voucherTitle}>Voucher</Text>
          <View style={stylesLocal.voucherRow}>
            <TextInput 
              style={stylesLocal.voucherInput}
              value={voucher}
              onChangeText={setVoucher}
              placeholder="Enter your voucher code"
            />
            <Pressable style={stylesLocal.applyButton} onPress={handleApplyVoucher}>
              <Text style={stylesLocal.applyButtonText}>Apply</Text>
            </Pressable>
          </View>
        </View>

        <View style={stylesLocal.totalPriceContainer}>
          <Text style={stylesLocal.totalPriceLabel}>Total:</Text>
          <Text style={stylesLocal.totalPriceValue}>${totalPrice}</Text>
        </View>

        <Pressable style={stylesLocal.addToCartButton}>
          <Text style={stylesLocal.addToCartText}>Next</Text>
          <Image source={require('../../assets/image/iconNext.png')} style={stylesLocal.cartIcon} />
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
};

const stylesLocal = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    borderColor: '#ddd',
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  totalPriceLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalPriceValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  productQuantity: {
    fontSize: 14,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productTitle: {
    fontSize: 11,
    color: '#666',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  voucherContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  voucherTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  voucherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  voucherInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00d6ee',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 10,
    width: '90%',
  },
  cartIcon: {
    width: 20,
    height: 20,
  },
  addToCartText: {
    fontSize: 16,
    color: '#fff',
    marginRight: 10,
    fontWeight: 'bold',
  },
});

export default CheckoutToCard;