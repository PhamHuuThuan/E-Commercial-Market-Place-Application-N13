import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput, SafeAreaView, ScrollView } from 'react-native';
import styles from '../styles/style';

const products = [
  {
    id: 1,
    name: 'Shoes',
    image: require('../../assets/image/listShoes1.png'),
    rating: 4.5,
    price: '$299',
  },
  {
    id: 2,
    name: 'Tablet',
    image: require('../../assets/image/listShoes2.png'),
    rating: 4.0,
    price: '$499',
  },
  {
    id: 3,
    name: 'Shoes 3',
    image: require('../../assets/image/listShoes1.png'),
    rating: 5.0,
    price: '$299',
  },
  {
    id: 4,
    name: 'Shoes 4',
    image: require('../../assets/image/listShoes1.png'),
    rating: 4.2,
    price: '$499',
  },
];

const ProductListing = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(prev => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={stylesLocal.scrollContainer}>
        <View style={stylesLocal.header}>
          <View style={stylesLocal.headerLeft}>
            <Pressable>
              <Image source={require('../../assets/image/left-chevron.png')} style={styles.direcBtn} />
            </Pressable>
            <Text style={styles.headingText}>Fresh Fruits</Text>
          </View>
          <View style={stylesLocal.headerRight}>
            <Pressable>
              <Image source={require('../../assets/image/cart.png')} style={[styles.direcBtn, { marginRight: 5 }]} />
            </Pressable>
            <Pressable>
              <Image source={require('../../assets/image/profile.png')} style={styles.profileBtn} />
            </Pressable>
          </View>
        </View>

        <View style={stylesLocal.searchContainer}>
          <View style={stylesLocal.formSearch}>
            <Image source={require('../../assets/image/search.png')} style={{ width: 16, height: 16 }} />
            <TextInput placeholder='Search' style={{ width: '90%' }} />
          </View>
          <Pressable>
            <Image source={require('../../assets/image/sort.png')} style={[styles.direcBtn, { backgroundColor: '#F1F1F1', marginLeft: 20 }]} />
          </Pressable>
        </View>

        {/* Images Section */}
        <View style={stylesLocal.imageContainer}>
          <Pressable style={stylesLocal.categoryBox}>
            <View style={[stylesLocal.imageWrapper, { backgroundColor: '#e8aaff' }]}>
              <Image source={require('../../assets/image/iphone-16.png')} style={stylesLocal.image} resizeMode="contain" />
            </View>
            <Text style={stylesLocal.labelText}>Electronics</Text>
          </Pressable>

          <Pressable style={stylesLocal.categoryBox}>
            <View style={[stylesLocal.imageWrapper, { backgroundColor: '#8cbeff' }]}>
              <Image source={require('../../assets/image/giay.png')} style={stylesLocal.image} resizeMode="contain" />
            </View>
            <Text style={stylesLocal.labelText}>Fashion</Text>
          </Pressable>

          <Pressable style={stylesLocal.categoryBox}>
            <View style={[stylesLocal.imageWrapper, { backgroundColor: '#ffda95' }]}>
              <Image source={require('../../assets/image/beauty.png')} style={stylesLocal.image} resizeMode="contain" />
            </View>
            <Text style={stylesLocal.labelText}>Beauty</Text>
          </Pressable>
        </View>

        <View style={stylesLocal.shoesContainer}>
          <Pressable style={stylesLocal.shoesBox}>
            <View style={stylesLocal.infoContainer}>
              <Text style={stylesLocal.shoesText}>Shoes</Text>
              <Text style={stylesLocal.discountText}>50% OFF</Text>
              <Pressable style={stylesLocal.buyNowButton}>
                <Text style={stylesLocal.buyNowText}>Buy Now</Text>
              </Pressable>
            </View>
            <Image source={require('../../assets/image/fashion.png')} style={stylesLocal.image} resizeMode="contain" />
          </Pressable>
        </View>

        <View style={stylesLocal.shoeImagesContainer}>
          <Image source={require('../../assets/image/imgShoes1.png')} style={stylesLocal.shoeImage} resizeMode="contain" />
          <Image source={require('../../assets/image/imgShoes2.png')} style={stylesLocal.shoeImage} resizeMode="contain" />
        </View>

        <View style={stylesLocal.recommendedContainer}>
          <Text style={stylesLocal.recommendedText}>Recommended for You</Text>
          <Pressable onPress={toggleShowAll}>
            <Text style={stylesLocal.viewAllText}>{showAll ? 'View Less' : 'View All'}</Text>
          </Pressable>
        </View>

        {/* Product Listing Section */}
        <View style={stylesLocal.productContainer}>
          {(showAll ? products : products.slice(0, 2)).map(product => (
            <View key={product.id} style={stylesLocal.productBox}>
              <Image source={product.image} style={stylesLocal.productImage} resizeMode="contain" />
              <Text style={stylesLocal.productName}>{product.name}</Text>
              <View style={stylesLocal.ratingPriceContainer}>
                <Text style={stylesLocal.productRating}>⭐ {product.rating}</Text>
                <Text style={stylesLocal.productPrice}>{product.price}</Text>
              </View>
            </View>
          ))}
        </View>
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
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  formSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  categoryBox: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  imageWrapper: {
    borderRadius: 50,
    overflow: 'hidden',
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  productBox: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productRating: {
    fontSize: 14,
    color: 'gray',
  },
  productPrice: {
    fontSize: 16,
    color: '#00cfda',
    fontWeight: 'bold',
  },
  shoesContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  shoesBox: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    overflow: 'hidden',
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  shoesText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00cfda',
  },
  discountText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  buyNowButton: {
    backgroundColor: 'black',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 5,
    width: 100,
  },
  buyNowText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  shoeImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  shoeImage: {
    flex: 1,
    marginHorizontal: 5,
    width: '100%',
    height: 150,
  },
  recommendedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  recommendedText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: 'gray',
    marginLeft: 50,
  },
  ratingPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  seeAllText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#00cfda',
    marginVertical: 20,
  },
});

export default ProductListing;
