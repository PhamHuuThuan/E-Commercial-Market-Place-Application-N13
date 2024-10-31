import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput, SafeAreaView, ScrollView } from 'react-native';
import styles from '../styles/style';

const ProductListing = () => {
  interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [showRelevantAll, setShowRelevantAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://671e62361dfc429919822348.mockapi.io/ListProduct/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image
          key={i}
          source={i <= 4 ? require('../../assets/image/star-filled.png') : require('../../assets/image/star-outline.png')}
          style={stylesLocal.starIcon}
        />
      );
    }
    return stars;
  };

  const displayedProducts = showAll ? products : products.slice(0, 4);
  const relevantProducts = showRelevantAll ? displayedProducts : displayedProducts.slice(0, 2);

  return (
    <SafeAreaView style={styles.container}>
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

      <View style={stylesLocal.centerImageContainer}>
        <Image 
          source={require('../../assets/image/productCenter.png')} 
          style={stylesLocal.centerImage} 
          resizeMode="cover" 
        />
      </View>

      <View style={stylesLocal.nextContainer}>
        <View style={stylesLocal.lineContainer}>
          <View style={stylesLocal.blueLine} />
          <View style={stylesLocal.dotContainer}>
            <View style={stylesLocal.dot} />
            <View style={stylesLocal.dot} />
            <View style={stylesLocal.dot} />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={stylesLocal.productContainer}>
        {displayedProducts.map((product) => (
          <View key={product.id} style={stylesLocal.productCard}>
            <Image source={{ uri: product.image }} style={stylesLocal.productImage} resizeMode="contain" />
            
            <View style={stylesLocal.productInfoContainer}>
              <Text style={stylesLocal.productName}>{product.name}</Text>
              <Pressable style={stylesLocal.addButton}>
                <Text style={stylesLocal.addButtonText}>+</Text>
              </Pressable>
            </View>

            <View style={stylesLocal.ratingAndPriceContainer}>
              <View style={stylesLocal.ratingContainer}>{renderStars()}</View>
              <Text style={stylesLocal.productPrice}>${product.price}</Text>
            </View>
          </View>
        ))}

        <Pressable style={stylesLocal.seeAllButton} onPress={() => setShowAll(!showAll)}>
          <Text style={stylesLocal.seeAllText}>{showAll ? "Show less" : "See all"}</Text>
        </Pressable>

        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
          <Text style={styles.headingText}>Relevant products</Text>
          <Pressable onPress={() => setShowRelevantAll(!showRelevantAll)}>
            <Text style={stylesLocal.seeallText}>{showRelevantAll ? "Show less" : "See all"}</Text>
          </Pressable>
        </View>

        <View style={stylesLocal.relevantProductContainer}>
          {relevantProducts.map((product) => (
            <View key={product.id} style={stylesLocal.relevantProductCard}>
              <Image source={{ uri: product.image }} style={stylesLocal.productImageSmall} resizeMode="contain" />
              
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={stylesLocal.productName}>{product.name}</Text>
                <View style={stylesLocal.ratingContainer}>{renderStars()}</View>
              </View>
              
              <View style={{ flexDirection: 'column' }}>
                <Pressable style={stylesLocal.addButton}>
                  <Text style={stylesLocal.addButtonText}>+</Text>
                </Pressable>
                <Text style={stylesLocal.productPrice}>${product.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const stylesLocal = StyleSheet.create({
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
  centerImageContainer: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 15,
    marginTop: 20,
  },
  centerImage: {
    width: '100%',
    height: 100,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  productCard: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  productInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 15,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingAndPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    width: 15,
    height: 15,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  seeAllButton: {
    alignSelf: 'center',
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#6C63FF',
    borderRadius: 5,
    width: '100%',
  },
  seeAllText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  blueLine: {
    height: 10,
    width: '30%',
    backgroundColor: '#14C6C6',
    marginLeft: 10,
    borderRadius: 15,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D3D3D3',
    marginLeft: 5,
  },
  seeallText: { 
    color: '#6C63FF',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginRight: 5,
  },
  relevantProductContainer: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  relevantProductCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  productImageSmall: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});

export default ProductListing;