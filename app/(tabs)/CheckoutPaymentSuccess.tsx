import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from '../styles/style';

const CheckoutPayment = () => {
  const [rating, setRating] = useState(0);

  const handleStarPress = (index: number) => {
    setRating(index + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={stylesLocal.scrollContainer}>
        <View style={stylesLocal.header}>
          <Pressable>
            <Image source={require('../../assets/image/check.png')} style={stylesLocal.checkIcon} />
          </Pressable>
        </View>
        
        <View style={stylesLocal.messageContainer}>
          <Text style={stylesLocal.successMessage}>Order placed successfully!</Text>
          <Text style={stylesLocal.description}>
            Commodo eu ut sunt qui minim et fugiat elit nisi enim.
          </Text>
        </View>

        <View style={stylesLocal.detailsContainer}>
          <View style={stylesLocal.subtotalContainer}>
            <Text style={stylesLocal.subtotalText}>Subtotal</Text>
            <Text style={stylesLocal.subtotalAmount}>$2,800</Text>
          </View>

          <View style={stylesLocal.lineSeparator} />
          <View style={stylesLocal.subtotalContainer}>
            <Text style={stylesLocal.subtotalText}>Tax (10%)</Text>
            <Text style={stylesLocal.subtotalAmount}>$280</Text>
          </View>

          <View style={stylesLocal.lineSeparator} />
          <View style={stylesLocal.subtotalContainer}>
            <Text style={stylesLocal.subtotalText}>Card</Text>
            <View style={stylesLocal.cardContainer}>
              <Pressable>
                <Image source={require('../../assets/image/visa.png')} style={stylesLocal.checkVisa} />
              </Pressable>
              <Text style={stylesLocal.subtotalAmount}>******2334</Text>
            </View>
          </View>

          <View style={stylesLocal.lineSeparator} />
          <View style={stylesLocal.subtotalContainer}>
            <Text style={stylesLocal.subtotalText}>Total</Text>
            <View style={stylesLocal.totalContainer}>
              <Text style={stylesLocal.successText}>Success</Text>
              <Text style={stylesLocal.totalAmount}>$3,080</Text>
            </View>
          </View>
        </View>
        
        <View style={stylesLocal.experienceContainer}>
          <Text style={stylesLocal.experienceTitle}>How was your experience?</Text>
          <View style={stylesLocal.starsContainer}>
            {[...Array(5)].map((_, index) => (
              <Pressable key={index} onPress={() => handleStarPress(index)}>
                <Image 
                  source={rating > index 
                    ? require('../../assets/image/star-filled.png') 
                    : require('../../assets/image/star-outline.png')}
                  style={stylesLocal.starIcon} 
                />
              </Pressable>
            ))}
          </View>
        </View>

        <Pressable style={stylesLocal.addToCartButton}>
          <Image source={require('../../assets/image/home.png')} style={stylesLocal.cartIcon} />
          <Text style={stylesLocal.addToCartText}>Back to Home</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
};

const stylesLocal = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  checkIcon: {
    width: 50,
    height: 50,
  },
  messageContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  successMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00cfda',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  detailsContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    marginTop: 30,
  },
  checkVisa: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtotalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtotalAmount: {
    fontSize: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  successText: {
    fontSize: 16,
    color: '#00c700',
    marginRight: 10,
    backgroundColor: '#d0f0c0',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  totalAmount: {
    fontSize: 16,
    color: '#00c700',
  },
  lineSeparator: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  experienceContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  experienceTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  starIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 2,
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
    marginRight: 10,
  },
  addToCartText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CheckoutPayment;