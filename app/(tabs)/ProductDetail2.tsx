import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from '../styles/style';

const ProductDetail2 = ({navigation}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeButton, setActiveButton] = useState<'increase' | 'decrease' | null>(null);
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const pricePerItem = 2.99;

  const totalPrice = (quantity * pricePerItem).toFixed(2);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={stylesLocal.scrollContainer}>
        <View style={stylesLocal.header}>
          <View style={stylesLocal.headerLeft}>
            <Pressable
            onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/image/left-chevron.png')} style={styles.direcBtn} />
            </Pressable>
            <Text style={styles.headingText}>T-Shirt</Text>
          </View>
        </View>
        
        <View style={stylesLocal.centerImageContainer}>
          <Image 
            source={require('../../assets/image/imgT-shirt.png')} 
            style={stylesLocal.centerImage} 
            resizeMode="cover" 
          />
        </View>
        
        <View style={stylesLocal.imageRow}>
          <Image source={require('../../assets/image/image.png')} style={stylesLocal.smallImage} />
          <Image source={require('../../assets/image/image1.png')} style={stylesLocal.smallImage} />
          <Image source={require('../../assets/image/image2.png')} style={stylesLocal.smallImage} />
          <Image source={require('../../assets/image/image3.png')} style={stylesLocal.smallImage} />
        </View>

        <View style={stylesLocal.informationContainer}>
          <Text style={stylesLocal.priceText}>${pricePerItem.toFixed(2)}</Text>
          <Text style={stylesLocal.offerText}>Buy 1 Get 1</Text>
        </View>
        
        <View style={stylesLocal.titleContainer}>
          <Text style={styles.headingText}>Hoodie shirt</Text>
          <View style={stylesLocal.ratingContainer}>
            <Image source={require('../../assets/image/star-filled.png')} style={stylesLocal.ratingImage} />
            <Text style={stylesLocal.starText}>4.5</Text>
          </View>
        </View>
        
        <Text style={stylesLocal.descriptionText}>Occaecat est deserunt tempor offici</Text>
        <Text style={stylesLocal.colorTitle}>Color</Text>
        <View style={stylesLocal.colorContainer}>
          <Pressable style={[stylesLocal.colorBox, { backgroundColor: '#9e1d1d', width: 30, height: 30, borderRadius: 15 }]} />
          <Pressable style={[stylesLocal.colorBox, { backgroundColor: '#e92e00', width: 40, height: 40, borderRadius: 20 }]} />
          <Pressable style={[stylesLocal.colorBox, { backgroundColor: '#4069e5', width: 50, height: 50, borderRadius: 25 }]} />
        </View>

        <Text style={stylesLocal.sizeTitle}>Size</Text>
        <View style={stylesLocal.sizeContainer}>
          <Pressable style={stylesLocal.sizeBoxContainer}>
            {sizes.map((size, index) => (
              <Pressable 
                key={size}
                style={[
                  stylesLocal.sizeBox,
                  selectedSize === size && stylesLocal.selectedSizeBox,
                  index < sizes.length - 1 && stylesLocal.rightBorder,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text style={stylesLocal.sizeText}>{size}</Text>
              </Pressable>
            ))}
          </Pressable>
        </View>
        
        <Text style={stylesLocal.quantityTitle}>Quantity</Text>
        <View style={stylesLocal.quantityTotalContainer}>
          <View style={stylesLocal.quantityContainer}>
            <Pressable 
              onPress={() => {
                setQuantity(Math.max(1, quantity - 1));
                setActiveButton('decrease');
              }}
              style={[stylesLocal.quantityButton, activeButton === 'decrease' ? stylesLocal.selectedQuantityButton : (activeButton === 'increase' ? stylesLocal.inactiveQuantityButton : {})]}
            >
              <Text style={stylesLocal.quantityButtonText}>-</Text>
            </Pressable>
            <Text style={stylesLocal.quantityText}>{quantity}</Text>
            <Pressable 
              onPress={() => {
                setQuantity(quantity + 1);
                setActiveButton('increase');
              }}
              style={[stylesLocal.quantityButton, activeButton === 'increase' ? stylesLocal.selectedQuantityButton : (activeButton === 'decrease' ? stylesLocal.inactiveQuantityButton : {})]}
            >
              <Text style={stylesLocal.quantityButtonText}>+</Text>
            </Pressable>
          </View>
          <Text style={stylesLocal.totalText}>Total: ${totalPrice}</Text>
        </View>
        <View style={stylesLocal.sizeGuideContainer}>
          <View style={stylesLocal.separatorLine} />
          <View style={stylesLocal.sizeGuideHeader}>
            <Text style={stylesLocal.sizeGuideText}>Size Guide</Text>
            <Text style={stylesLocal.sizeGuideArrow}>{'>'}</Text>
          </View>
        </View>
        <View style={stylesLocal.sizeGuideContainer}>
          <View style={stylesLocal.separatorLine} />
          <View style={stylesLocal.sizeGuideHeader}>
            <Text style={stylesLocal.sizeGuideText}>Reviews (99)</Text>
            <Text style={stylesLocal.sizeGuideArrow}>{'>'}</Text>
          </View>
        </View>
        <Pressable style={stylesLocal.addToCartButton}>
          <Image source={require('../../assets/image/addToCard.png')} style={stylesLocal.cartIcon} />
          <Text style={stylesLocal.addToCartText}>Add to Cart</Text>
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
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  centerImageContainer: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 15,
    marginTop: 20,
  },
  centerImage: {
    width: '100%',
    height: 200,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  smallImage: {
    flex: 1,
    height: 80,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  informationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00d6ee',
  },
  offerText: {
    fontSize: 14,
    color: '#be78f8',
    backgroundColor: '#f1f1f1',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 130,
  },
  ratingImage: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  starText: {
    fontSize: 14,
    color: '#000',
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
    marginHorizontal: 10,
  },
  colorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginHorizontal: 10,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },
  colorBox: {
    marginHorizontal: 5,
  },
  sizeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginHorizontal: 10,
  },
  sizeContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  sizeBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 1,
  },
  sizeBox: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    alignItems: 'center',
  },
  rightBorder: {
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  selectedSizeBox: {
    borderColor: '#00d6ee',
    backgroundColor: '#00d6ee',
  },
  sizeText: {
    fontSize: 16,
    color: '#000',
  },
  quantityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginHorizontal: 10,
  },
  quantityTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  selectedQuantityButton: {
    borderColor: '#00d6ee',
    backgroundColor: '#00d6ee',
  },
  inactiveQuantityButton: {
    backgroundColor: '#f1f1f1',
  },
  quantityButtonText: {
    fontSize: 20,
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sizeGuideContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  sizeGuideHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  sizeGuideText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sizeGuideArrow: {
    fontSize: 25,
  },
  separatorLine: {
    height: 1,
    width: '90%',
    backgroundColor: '#ccc',
    marginTop: 10,
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

export default ProductDetail2;
