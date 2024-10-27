import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput, SafeAreaView, Dimensions, FlatList, ScrollView } from 'react-native';
import styles from '../styles/style';

const { width: viewportWidth } = Dimensions.get('window');

const phones = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    rating: 4.5,
    reviews: 1200,
    price: '$999',
    image: require('../../assets/images/Apple-Iphone-15.png'),
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23',
    rating: 4.7,
    reviews: 950,
    price: '$899',
    image: require('../../assets/images/Apple-Iphone-15.png'),
  },
  {
    id: 3,
    name: 'Google Pixel 8',
    rating: 4.6,
    reviews: 800,
    price: '$799',
    image: require('../../assets/images/Apple-Iphone-15.png'),
  },
  {
    id: 4,
    name: 'OnePlus 12',
    rating: 4.4,
    reviews: 600,
    price: '$749',
    image: require('../../assets/images/Apple-Iphone-15.png'),
  },
];

const banners = [
  { id: 1, image: require('../../assets/images/iPhone_16.jpg') },
  { id: 2, image: require('../../assets/images/Apple-Iphone-15.png') },
  { id: 3, image: require('../../assets/images/macbook.png') },
  { id: 4, image: require('../../assets/images/ipad.png') },
];

const ProductListing = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={stylesLocal.slide}>
      <Image source={item.image} style={stylesLocal.bannerImage} />
    </View>
  );

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveSlide(viewableItems.index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const [cart, setCart] = useState([]);

  const addToCart = (phone) => {
    setCart([...cart, phone]);
  };

  const renderPhoneItem = ({ item }) => (
    <View style={stylesLocal.phoneCard}>
      <Image source={item.image} style={stylesLocal.phoneImage} />
      <View style={stylesLocal.phoneInfo}>
        <Text style={stylesLocal.phoneName}>{item.name}</Text>
        <View style={stylesLocal.ratingContainer}>
          <Text style={stylesLocal.ratingText}>⭐ {item.rating}</Text>
          <Text style={stylesLocal.reviewText}>({item.reviews})</Text>
        </View>
      </View>
      <Text style={stylesLocal.phonePrice}>{item.price}</Text>
      <Pressable style={stylesLocal.addButton} onPress={() => addToCart(item)}>
        <Text style={stylesLocal.addButtonText}>+</Text>
      </Pressable>
    </View>
  );

  const renderHeader = () => (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable>
            <Image source={require('../../assets/images/left-chevron.png')} style={styles.direcBtn} />
          </Pressable>
          <Text style={styles.headingText}>Electronics</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable>
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
          <View style={[styles.typeProduct, { backgroundColor: '#DFC0FF' }]}>
            <Image source={require('../../assets/images/Apple-Iphone-15.png')} style={{ width: 60, height: 65 }} />
          </View>
          <View style={[styles.typeProduct, { backgroundColor: '#B5DFF9' }]}>
            <Image source={require('../../assets/images/ipad.png')} style={{ width: 60, height: 65 }} />
          </View>
          <View style={[styles.typeProduct, { backgroundColor: '#F6BCAE' }]}>
            <Image source={require('../../assets/images/macbook.png')} style={{ width: 80, height: 50 }} />
          </View>
        </View>
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Pressable style={[styles.filterBtn, { backgroundColor: 'rgba(122, 228, 240, 0.2)' }]}>
              <Text style={[styles.filterText, { color: 'rgba(0, 208, 255, 1)', fontWeight: 'bold' }]}>Best Sales</Text>
            </Pressable>
            <Pressable style={styles.filterBtn}>
              <Text style={styles.filterText}>Best Matched</Text>
            </Pressable>
            <Pressable style={styles.filterBtn}>
              <Text style={styles.filterText}>Popular</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={phones}
        renderItem={renderPhoneItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={() => (
          <View style={{alignItems: 'center'}}>
            <Pressable style={{ width: 350, height: 30, backgroundColor: 'rgba(244, 244, 244, 1)', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 20}}>
                <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgba(190, 190, 190, 1)' }}>See all</Text>
            </Pressable>
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