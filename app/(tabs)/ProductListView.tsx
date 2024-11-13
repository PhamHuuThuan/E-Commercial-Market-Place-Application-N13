import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput, SafeAreaView, Dimensions, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../styles/style';

const { width: viewportWidth } = Dimensions.get('window');

const banners = [
  { id: 1, image: require('../../assets/images/iPhone_16.jpg') },
  { id: 2, image: require('../../assets/images/Apple-Iphone-15.png') },
  { id: 3, image: require('../../assets/images/macbook.png') },
  { id: 4, image: require('../../assets/images/ipad.png') },
];

const viewConfigRef = { viewAreaCoveragePercentThreshold: 50 };
const onViewRef = ({ viewableItems }) => {
  if (viewableItems.length > 0) {
    setActiveSlide(viewableItems[0].index);
  }
};

const ProductListing = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const flatListRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, cartResponse] = await Promise.all([
          fetch('https://api.mockfly.dev/mocks/551e2234-6785-4d2c-812e-265d0239a339/ProductsElectronics'),
          fetch('https://api.mockfly.dev/mocks/551e2234-6785-4d2c-812e-265d0239a339/carts')
        ]);

        const productsData = await productsResponse.json();
        const cartData = await cartResponse.json();

        setProducts(productsData);
        setCartItems(cartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(product => {
    return (!selectedCategory || product.category === selectedCategory) &&
           (!selectedType || product.type === selectedType);
  });

  const productsToShow = showAll ? filteredProducts : filteredProducts.slice(0, 4);

  const addToCart = async (item) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      quantity: 1, // Initial quantity
      price: item.price,
    };
  
    try {
      const response = await fetch('https://api.mockfly.dev/mocks/551e2234-6785-4d2c-812e-265d0239a339/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      });
  
      if (response.ok) {
        const newItem = await response.json();
        setCartItems((prevItems) => [...prevItems, newItem]);
      } else {
        console.error('Failed to add item to cart:', response.status);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  const renderItem = ({ item }) => (
    <View style={stylesLocal.slide}>
      <Image source={item.image} style={stylesLocal.bannerImage} />
    </View>
  );

  const renderPhoneItem = ({ item }) => (
    <Pressable style={stylesLocal.phoneCard}
    onPress={() => navigation.navigate('ProductDetail1')}>
      <Image source={{uri: item.image}} style={stylesLocal.phoneImage} />
      <View style={stylesLocal.phoneInfo}>
        <Text style={stylesLocal.phoneName}>{item.name}</Text>
        <View style={stylesLocal.ratingContainer}>
          <Text style={stylesLocal.ratingText}>⭐ {item.rating}</Text>
          <Text style={stylesLocal.reviewText}>({item.reviews})</Text>
        </View>
      </View>
      <Text style={stylesLocal.phonePrice}>{item.price}</Text>
      <Pressable style={stylesLocal.addButton} 
      onPress={()=>{addToCart(item)}}>
        <Text style={stylesLocal.addButtonText}>+</Text>
      </Pressable>
    </Pressable>
  );

  const renderHeader = () => (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable
          onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/left-chevron.png')} style={styles.direcBtn} />
          </Pressable>
          <Text style={styles.headingText}>Electronics</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable style={{position: 'relative'}}>
            <View style={{position: 'absolute', top: -10, right: 10, backgroundColor: 'red', width: cartItems.length<10?15:25, height: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{cartItems.length}</Text>
            </View>
            <Image source={require('../../assets/images/cart.png')} style={[styles.direcBtn, { marginRight: 20 }]} />
          </Pressable>
          <Pressable>
            <Image source={require('../../assets/images/avatar.png')} style={styles.profileBtn} />
          </Pressable>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <View style={stylesLocal.formSearch}>
          <Image source={require('../../assets/images/search.png')} style={{ width: 16, height: 16 }} />
          <TextInput placeholder='Search' style={{ width: '90%' }} />
        </View>
        <Pressable>
          <Image source={require('../../assets/images/sort.png')} style={[styles.direcBtn, { backgroundColor: '#F1F1F1', marginLeft: 20 }]} />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.headingText}>Categories</Text>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.seeallText}>See all</Text>
            <Pressable>
              <Image source={require('../../assets/images/right-arrow.png')} style={styles.seeallBtn} />
            </Pressable>
          </Pressable>
        </View>
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 20 }}>
          <Pressable 
            style={[
              styles.typeProduct, 
              { 
                backgroundColor: '#DFC0FF', 
                borderWidth: selectedCategory === "phone" ? 2 : 0, 
                borderColor: selectedCategory === "phone" ? '#28a745' : 'transparent',
                borderRadius: 5 
              }
            ]}
            onPress={() => setSelectedCategory("phone")}
          >
            <Image source={require('../../assets/images/Apple-Iphone-15.png')} style={{ width: 60, height: 65 }} />
          </Pressable>

          <Pressable 
            style={[
              styles.typeProduct, 
              { 
                backgroundColor: '#B5DFF9', 
                borderWidth: selectedCategory === "ipad" ? 2 : 0, 
                borderColor: selectedCategory === "ipad" ? '#28a745' : 'transparent',
                borderRadius: 5 
              }
            ]}
            onPress={() => setSelectedCategory("ipad")}
          >
            <Image source={require('../../assets/images/ipad.png')} style={{ width: 60, height: 65 }} />
          </Pressable>

          <Pressable 
            style={[
              styles.typeProduct, 
              { 
                backgroundColor: '#F6BCAE', 
                borderWidth: selectedCategory === "macbook" ? 2 : 0, 
                borderColor: selectedCategory === "macbook" ? '#28a745' : 'transparent',
                borderRadius: 5 
              }
            ]}
            onPress={() => setSelectedCategory("macbook")}
          >
            <Image source={require('../../assets/images/macbook.png')} style={{ width: 80, height: 50 }} />
          </Pressable>
        </View>
        <View style={{ marginTop: 20, alignItems: 'center' }}>
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <Pressable
            style={[styles.filterBtn, selectedType === "Best Sales" && { backgroundColor: 'rgba(122, 228, 240, 0.2)' }]}
            onPress={() => setSelectedType("Best Sales")}
          >
            <Text style={[styles.filterText, selectedType === "Best Sales" && { color: 'rgba(0, 208, 255, 1)', fontWeight: 'bold' }]}>Best Sales</Text>
          </Pressable>

          <Pressable
            style={[styles.filterBtn, selectedType === "Best Matched" && { backgroundColor: 'rgba(122, 228, 240, 0.2)' }]}
            onPress={() => setSelectedType("Best Matched")}
          >
            <Text style={[styles.filterText, selectedType === "Best Matched" && { color: 'rgba(0, 208, 255, 1)', fontWeight: 'bold' }]}>Best Matched</Text>
          </Pressable>

          <Pressable
            style={[styles.filterBtn, selectedType === "Popular" && { backgroundColor: 'rgba(122, 228, 240, 0.2)' }]}
            onPress={() => setSelectedType("Popular")}
          >
            <Text style={[styles.filterText, selectedType === "Popular" && { color: 'rgba(0, 208, 255, 1)', fontWeight: 'bold' }]}>Popular</Text>
          </Pressable>
        </View>
        </View>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productsToShow}
        renderItem={renderPhoneItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={() => (
          <View style={{ alignItems: 'center' }}>
          {filteredProducts.length > 4 && (
            <Pressable
              style={{ width: 350, height: 30, backgroundColor: 'rgba(244, 244, 244, 1)', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 20 }}
              onPress={() => setShowAll(!showAll)} // Toggle the showAll state
            >
              <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgba(190, 190, 190, 1)' }}>
                {showAll ? 'Show Less' : 'See All'}
              </Text>
            </Pressable>
          )}
            <FlatList
              data={banners}
              renderItem={renderItem}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              onViewableItemsChanged={onViewRef.current}
              viewabilityConfig={viewConfigRef.current}
              ref={flatListRef}
              style={{ height: 200 }}
            />
            <View style={stylesLocal.paginationContainer}>
              {banners.map((_, index) => (
                <View
                  key={index}
                  style={[
                    stylesLocal.dotStyle,
                    { opacity: index === activeSlide ? 1 : 0.3 },
                  ]}
                />
              ))}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const stylesLocal = StyleSheet.create({
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
  slide: {
    width: viewportWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '90%',
    height: 138,
    resizeMode: 'contain',
  },
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -20,
    left: 150,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
  phoneCard: {
    width: '90%',
    height: 70, // Đảm bảo chiều cao nhỏ hơn
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  phoneImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  phoneInfo: {
    flex: 1,
    marginLeft: 10,
  },
  phoneName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#FFD700',
    marginRight: 5,
  },
  reviewText: {
    fontSize: 10,
    color: '#888',
  },
  phonePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default ProductListing;