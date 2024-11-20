import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from '../styles/style';

const ProductDetail2 = ({ route, navigation }) => {
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeButton, setActiveButton] = useState<'increase' | 'decrease' | null>(null);
  const [selectedImage, setSelectedImage] = useState(product.image);

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Product not found!</Text>
      </SafeAreaView>
    );
  }

  const pricePerItem = product.price;
  const totalPrice = (quantity * pricePerItem).toFixed(2);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);

    switch (color) {
      case 'Titan Xanh':
        setSelectedImage(product.image2); // Display image2 for "Titan Xanh"
        break;
      case 'Titan Tự nhiên':
        setSelectedImage(product.image3); // Display image3 for "Titan Tự nhiên"
        break;
      case 'Titan Trắng':
        setSelectedImage(product.image4); // Display image4 for "Titan Trắng"
        break;
      case 'Titan Đen':
        setSelectedImage(product.image5); // Display image5 for "Titan Đen"
        break;
      default:
        setSelectedImage(product.image); // Default image
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={stylesLocal.scrollContainer}>
        <View style={stylesLocal.header}>
          <View style={stylesLocal.headerLeft}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/image/left-chevron.png')} style={styles.direcBtn} />
            </Pressable>
            <Text style={styles.headingText}>{product.name}</Text>
          </View>
        </View>

        <View style={stylesLocal.centerImageContainer}>
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage }}
              style={stylesLocal.centerImage}
              resizeMode="contain"
            />
          ) : (
            <Text>Loading product image...</Text>
          )}
        </View>

        {/* Images Row: Display multiple images */}
        <View style={stylesLocal.imageRow}>
          {product.image2 && (
            <Pressable onPress={() => setSelectedImage(product.image2)}>
              <Image
                source={{ uri: product.image2 }}
                style={stylesLocal.smallImage}
                resizeMode="cover"
              />
            </Pressable>
          )}
          {product.image3 && (
            <Pressable onPress={() => setSelectedImage(product.image3)}>
              <Image
                source={{ uri: product.image3 }}
                style={stylesLocal.smallImage}
                resizeMode="cover"
              />
            </Pressable>
          )}
          {product.image4 && (
            <Pressable onPress={() => setSelectedImage(product.image4)}>
              <Image
                source={{ uri: product.image4 }}
                style={stylesLocal.smallImage}
                resizeMode="cover"
              />
            </Pressable>
          )}
          {product.image5 && (
            <Pressable onPress={() => setSelectedImage(product.image5)}>
              <Image
                source={{ uri: product.image5 }}
                style={stylesLocal.smallImage}
                resizeMode="cover"
              />
            </Pressable>
          )}
        </View>

        <View style={stylesLocal.informationContainer}>
          <Text style={stylesLocal.priceText}>${pricePerItem.toFixed(2)}</Text>
          <Text style={stylesLocal.offerText}>Buy 1 Get 1</Text>
        </View>

        <View style={stylesLocal.titleContainer}>
          <Text style={styles.headingText}>{product.name}</Text>
          <View style={stylesLocal.ratingContainer}>
            <Image source={require('../../assets/image/star-filled.png')} style={stylesLocal.ratingImage} />
            <Text style={stylesLocal.starText}>4.5</Text>
          </View>
        </View>

        <Text style={stylesLocal.descriptionText}>{product.description}</Text>

        <Text style={stylesLocal.colorTitle}>Color</Text>
        <View style={stylesLocal.colorContainer}>
          {/* Color Options as Text */}
          <Pressable
            style={[
              stylesLocal.colorTextBox,
              selectedColor === 'Titan Xanh' && stylesLocal.selectedColorTextBox,
            ]}
            onPress={() => handleColorChange('Titan Xanh')}
          >
            <Text style={stylesLocal.colorText}>Titan Xanh</Text>
          </Pressable>

          <Pressable
            style={[
              stylesLocal.colorTextBox,
              selectedColor === 'Titan Tự nhiên' && stylesLocal.selectedColorTextBox,
            ]}
            onPress={() => handleColorChange('Titan Tự nhiên')}
          >
            <Text style={stylesLocal.colorText}>Titan Tự nhiên</Text>
          </Pressable>

          <Pressable
            style={[
              stylesLocal.colorTextBox,
              selectedColor === 'Titan Trắng' && stylesLocal.selectedColorTextBox,
            ]}
            onPress={() => handleColorChange('Titan Trắng')}
          >
            <Text style={stylesLocal.colorText}>Titan Trắng</Text>
          </Pressable>

          <Pressable
            style={[
              stylesLocal.colorTextBox,
              selectedColor === 'Titan Đen' && stylesLocal.selectedColorTextBox,
            ]}
            onPress={() => handleColorChange('Titan Đen')}
          >
            <Text style={stylesLocal.colorText}>Titan Đen</Text>
          </Pressable>
        </View>

        <Text style={stylesLocal.sizeTitle}>RAM</Text>
        <View style={stylesLocal.sizeContainer}>
          <Pressable style={stylesLocal.sizeBoxContainer}>
            {['256GB', '512GB', '1TB'].map((size, index) => (
              <Pressable
                key={size}
                style={[
                  stylesLocal.sizeBox,
                  selectedSize === size && stylesLocal.selectedSizeBox,
                  index < 2 && stylesLocal.rightBorder,
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
              style={[
                stylesLocal.quantityButton,
                activeButton === 'decrease' ? stylesLocal.selectedQuantityButton : activeButton === 'increase' ? stylesLocal.inactiveQuantityButton : {},
              ]}
            >
              <Text style={stylesLocal.quantityButtonText}>-</Text>
            </Pressable>
            <Text style={stylesLocal.quantityText}>{quantity}</Text>
            <Pressable
              onPress={() => {
                setQuantity(quantity + 1);
                setActiveButton('increase');
              }}
              style={[
                stylesLocal.quantityButton,
                activeButton === 'increase' ? stylesLocal.selectedQuantityButton : activeButton === 'decrease' ? stylesLocal.inactiveQuantityButton : {},
              ]}
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
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  centerImage: {
    width: '100%',
    height: 400,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  smallImage: {
    width: 60,
    height: 60,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  informationContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00d6ee',
  },
  offerText: {
    fontSize: 14,
    color: '#888',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderColor: 'gray',
    backgroundColor: '#f9f9f9',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingImage: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  starText: {
    fontSize: 14,
    color: '#f1a900',
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 15,
    paddingHorizontal: 10,
    color: '#333',
  },
  colorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginHorizontal: 10,
  },
  colorContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginHorizontal: 10,
  },
  colorTextBox: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    width: 'auto',
    minWidth: 100,
  },
  selectedColorTextBox: {
    backgroundColor: '#00d6ee',
    borderColor: '#00d6ee',
  },
  colorText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  sizeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 10,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },
  sizeBoxContainer: {
    flexDirection: 'row',
  },
  sizeBox: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedSizeBox: {
    backgroundColor: '#00d6ee',
    borderColor: '#00d6ee',
  },
  sizeText: {
    fontSize: 14,
    color: '#000',
  },
  quantityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
  quantityTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#00d6ee',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  selectedQuantityButton: {
    backgroundColor: '#00c6ee',
  },
  inactiveQuantityButton: {
    backgroundColor: '#ddd',
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sizeGuideContainer: {
    marginTop: 30,
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  sizeGuideHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  sizeGuideText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sizeGuideArrow: {
    fontSize: 16,
    color: '#00d6ee',
  },
  addToCartButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00d6ee',
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  cartIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  addToCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});


export default ProductDetail2;
