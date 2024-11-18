import React, { useState, useRef, useEffect}  from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput, SafeAreaView, Dimensions, FlatList, ScrollView, ActivityIndicator, Modal } from 'react-native';
import styles from '../styles/style';

const { width: viewportWidth } = Dimensions.get('window');

const ProductDetail1 = ({ navigation, route }) => {
    const { product } = route.params;
    const [noti, setNoti] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Tính tổng giá trị giỏ hàng mỗi khi cartItems thay đổi
        const calculateTotal = () => {
          const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
          setTotal(totalPrice);
        };
    
        calculateTotal();
      }, [cartItems]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const cartResponse = await fetch('https://67346676a042ab85d11a004f.mockapi.io/EcoMarket/carts');
            const cartData = await cartResponse.json();
      
            setCartItems(cartData);
          } catch (error) {
            console.error('Error fetching cart data:', error);
          }
        };
      
        fetchData();
      }, []); 
      
      const renderCartItem = ({ item }) => (
        <View style={stylesLocal.cartItem}>
          <Image source={{ uri: item.image }} style={stylesLocal.cartItemImage} />
          <View style={stylesLocal.cartItemInfo}>
            <Text style={stylesLocal.cartItemName}>{item.name}</Text>
            <Text style={stylesLocal.cartItemPrice}>${item.price}</Text>
            <Text style={stylesLocal.cartItemQuantity}>Quantity: {item.quantity}</Text>
            <Text style={[stylesLocal.cartItemName, {color: 'red'}]}>Cash: {item.price*item.quantity}</Text>
          </View>
        </View>
      );

  return (
    <SafeAreaView style={[styles.container, {alignItems: 'center'}]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Pressable
            onPress={()=>{navigation.goBack()}}>
                <Image source={require('../../assets/images/left-chevron.png')} style={styles.direcBtn} />
            </Pressable>
            <Text style={styles.headingText}>{product.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable style={{position: 'relative'}}
                onPress={() => setCartVisible(true)} style={stylesLocal.cartButton}>
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
        <ScrollView>
            <View>
                <Image source={{uri: product.image1}} 
                style={{width: 375, height: 200, borderRadius: 5}}/>
            </View>
            <View style={{ width: 380 ,flexDirection: 'row', marginTop: 20, justifyContent: 'space-between'}}>
                <Text style={styles.headingText}>${product.price}</Text>
                <View style={[stylesLocal.ratingContainer, {marginRight: 10}]}>
                    <Text style={stylesLocal.ratingText}>⭐ {product.rating}</Text>
                    <Text style={stylesLocal.reviewText}>({product.reviews} reviews)</Text>
                </View>
            </View>
            <View style={{width: 375, marginTop: 20, paddingTop: 20, borderTopWidth: 1, borderTopColor: 'rgba(236, 236, 236, 1)'}}>
                <Text style={styles.headingText}>Description</Text>
                <Text style={{width: '90%', fontSize: 14, color: 'rgba(190, 190, 190, 1)', marginLeft: 10, marginTop: 10}}>{product.description}</Text>
                <View style={{marginTop: 20, marginLeft: 10, flexDirection: 'row'}}>
                    <View style={{justifyContent: 'space-between', marginRight: 75}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}> 
                            <Image source={require('../../assets/images/trans.png')} 
                            style={{width: 24, height: 24, marginRight: 10}} />
                            <Text style={{fontSize: 14, color: 'rgba(190, 190, 190, 1)'}}>Express</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}> 
                            <Image source={require('../../assets/images/star.png')} 
                            style={{width: 24, height: 24, marginRight: 10}} />
                            <Text style={{fontSize: 14, color: 'rgba(190, 190, 190, 1)'}}>Good review</Text>
                        </View>
                    </View>
                    <View style={{justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}> 
                            <Image source={require('../../assets/images/back.png')} 
                            style={{width: 24, height: 24, marginRight: 10}} />
                            <Text style={{fontSize: 14, color: 'rgba(190, 190, 190, 1)'}}>30-day free return</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}> 
                            <Image source={require('../../assets/images/achive.png')} 
                            style={{width: 24, height: 24, marginRight: 10}} />
                            <Text style={{fontSize: 14, color: 'rgba(190, 190, 190, 1)'}}>Authorized shop</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{width: '100%', marginTop: 20, paddingTop: 20, borderTopWidth: 1, borderTopColor: 'rgba(236, 236, 236, 1)'}}>
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.headingText}>Reviews</Text>
                    <Pressable><Text style={{fontSize: 14, color: 'rgba(190, 190, 190, 1)', marginRight: 10}}>See all ></Text></Pressable>
                </View>
                <View style={{marginTop: 20, marginBottom: 20, flexDirection: 'row'}}>
                    <View style={{marginLeft: 30}}>
                        <Text style={styles.headingText}>{product.rating}/5</Text>
                        <Text style={[stylesLocal.reviewText, {marginLeft: 10, marginTop: 10}]}>({product.reviews} reviews)</Text>
                    </View>
                    <View style={{marginLeft: 150, height: 120, justifyContent: 'space-evenly'}} >
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{width: 72, height: 5, borderRadius: 50, backgroundColor: 'rgba(217, 217, 217, 1)', marginRight: 10}}>
                                <View style={{width: 50, height: 5, borderRadius: 50, backgroundColor: 'rgba(237, 189, 32, 1)', marginRight: 10}}></View>
                            </View>
                            <Text style={stylesLocal.reviewText}>5</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{width: 72, height: 5, borderRadius: 50, backgroundColor: 'rgba(217, 217, 217, 1)', marginRight: 10}}>
                                <View style={{width: 20, height: 5, borderRadius: 50, backgroundColor: 'rgba(237, 189, 32, 1)', marginRight: 10}}></View>
                            </View>
                            <Text style={stylesLocal.reviewText}>4</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{width: 72, height: 5, borderRadius: 50, backgroundColor: 'rgba(217, 217, 217, 1)', marginRight: 10}}>
                                <View style={{width: 15, height: 5, borderRadius: 50, backgroundColor: 'rgba(237, 189, 32, 1)', marginRight: 10}}></View>
                            </View>
                            <Text style={stylesLocal.reviewText}>3</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{width: 72, height: 5, borderRadius: 50, backgroundColor: 'rgba(217, 217, 217, 1)', marginRight: 10}}>
                                <View style={{width: 10, height: 5, borderRadius: 50, backgroundColor: 'rgba(237, 189, 32, 1)', marginRight: 10}}></View>
                            </View>
                            <Text style={stylesLocal.reviewText}>2</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{width: 72, height: 5, borderRadius: 50, backgroundColor: 'rgba(217, 217, 217, 1)', marginRight: 10}}>
                                <View style={{width: 5, height: 5, borderRadius: 50, backgroundColor: 'rgba(237, 189, 32, 1)', marginRight: 10}}></View>
                            </View>
                            <Text style={stylesLocal.reviewText}>1</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginLeft: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/1e36/7048/a09819519fec2ae49c883f687c76c9e4?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dngvvS3I-yRO1zXsKH58ubI9BdgCVSbFUo43lebQoF5ua-T9sy-hTX7pXojG2xtPFpATrGgGZm0fDE1dXlRT-C4FnVyQzNSB4UqYVsl2X70k6f7bPkfG3tvg~48RtvIJXQqoZHVuKfWuymWXYnNQwGci5lOZ5OdXtgdyJ3bz9Prr9bQxhLrp683TM0Kbg9TD2ns5nUyotrOf-tnl-MugPc0jjI9vNN8LLIZX5XfNe2QS4WB-sowWX09jyQ5qcM7dgthchGe~oLMYgE~lKiNnGHVNwrk4EqZllq93VkB~x0~j-pw~eNZHI1xt-8DAvclBiTIS5QGVvFBvPQN-T0PcdQ__'}}
                        style={{width: 36, height: 36}} />
                        <View style={{width: '45%'}}>
                            <Text style={styles.headingText}>Jevon Raynor</Text>
                            <Text style={[stylesLocal.reviewText, {marginLeft: 10}]}>Deserunt minim incididunt cillum</Text>
                        </View>
                        <Text style={[stylesLocal.reviewText, {marginLeft: 10}]}>A day ago</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/0ecb/0264/ed6bae405d7a1f06d2b702842000ca23?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OepP1vugvM1vlFl2paH0BtUY~o0mz~jeDm~8v6ipBwJymwj6gVCkHlmDHB8jGN9gMQMWEaOuJ6UTXUqUSaSCZ0ViVeyeKC0bZzf5dJfAzh0J49EotPxEzTyOE4z6AKVZPDkP5FvZO37hNnolQHmA7wDg8IA076Qox1JDJtkMCYEQojfJaZx7-SiYrdiZuEQVVbsTnzTk~oS3OawFuG50Blr8cwuKhBhNGXqXWxCtzIe4KjuWdSn~9vZWofLEHnVhuz5UCbQn1GqAQl1I0OVEq80P7ix07SZDCin7HGVig4N5it0mZssgPJe-GsbpxGaGUTQ3X18xfSYOsGyPmekjzA__'}}
                        style={{width: 36, height: 36}} />
                        <View style={{width: '45%'}}>
                            <Text style={styles.headingText}>Jason D.</Text>
                            <Text style={[stylesLocal.reviewText, {marginLeft: 10}]}>Magna pariatur sit et ullamco paria</Text>
                        </View>
                        <Text style={[stylesLocal.reviewText, {marginLeft: 10}]}>3 days ago</Text>
                    </View>
                </View>
                <View style={{width: '100%', marginBottom: 20,marginTop: 20, paddingTop: 20, borderTopWidth: 1, borderTopColor: 'rgba(236, 236, 236, 1)'}}>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={styles.headingText}>Relevant products</Text>
                        <Pressable><Text style={{fontSize: 14, color: 'rgba(190, 190, 190, 1)', marginRight: 10}}>See all ></Text></Pressable>
                    </View>
                    <View style={{marginLeft: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <View style={{width: 100, height: 140, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'rgba(248, 248, 248, 1)', borderRadius: 10}}>
                            <Image source={require('../../assets/images/black_headphone.png')} 
                            style={{width: 50, height: 75}} />
                            <View style={{width: '100%', marginTop: 5}}>
                                <Text style={[styles.headingText, {fontSize: 10}]}>Headphone</Text>
                                <View style={{width: '100%', paddingLeft: 10,marginTop: 5, paddingRight: 10, flexDirection: 'row', justifyContent:'space-between'}}>
                                    <Text style={[stylesLocal.ratingText, {fontSize: 10}]}>⭐ 4.5</Text>
                                    <Text style={[styles.headingText, {fontSize: 10}]}>$99</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width: 100, height: 140, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'rgba(248, 248, 248, 1)', borderRadius: 10}}>
                            <Image source={require('../../assets/images/black_headphone.png')} 
                            style={{width: 50, height: 75}} />
                            <View style={{width: '100%', marginTop: 5}}>
                                <Text style={[styles.headingText, {fontSize: 10}]}>Headphone</Text>
                                <View style={{width: '100%', paddingLeft: 10,marginTop: 5, paddingRight: 10, flexDirection: 'row', justifyContent:'space-between'}}>
                                    <Text style={[stylesLocal.ratingText, {fontSize: 10}]}>⭐ 4.5</Text>
                                    <Text style={[styles.headingText, {fontSize: 10}]}>$99</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width: 100, height: 140, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'rgba(248, 248, 248, 1)', borderRadius: 10}}>
                            <Image source={require('../../assets/images/black_headphone.png')} 
                            style={{width: 50, height: 75}} />
                            <View style={{width: '100%', marginTop: 5}}>
                                <Text style={[styles.headingText, {fontSize: 10}]}>Headphone</Text>
                                <View style={{width: '100%', paddingLeft: 10,marginTop: 5, paddingRight: 10, flexDirection: 'row', justifyContent:'space-between'}}>
                                    <Text style={[stylesLocal.ratingText, {fontSize: 10}]}>⭐ 4.5</Text>
                                    <Text style={[styles.headingText, {fontSize: 10}]}>$99</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row', alignItems: 'center', marginLeft: 10, paddingBottom: 20}}>
                    <View style={{width: 40, height: 40, backgroundColor: 'rgba(0, 224, 255, 1)', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../../assets/images/ring.png')} 
                        style={{width: 24, height: 24}} />
                    </View>
                    <Text style={[stylesLocal.reviewText, {marginLeft: 20, width: '65%'}]}>Notify me of promotions</Text>
                    <Pressable style={[{width: 40, height: 20, borderRadius: 50, justifyContent: 'center', paddingLeft: 5, paddingRight: 5}, {backgroundColor: noti ? 'rgba(0, 224, 255, 1)' : 'rgba(217, 217, 217, 1)', alignItems: noti ? 'flex-end': 'flex-start'}]}
                    onPress={()=>setNoti(noti?false:true)} >
                        <View style={[{width: 16, height: 16, borderRadius: 50, backgroundColor: 'white'}]}></View>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20, paddingTop: 20, borderTopWidth: 1, borderTopColor: 'rgba(236, 236, 236, 1)'}}>
            <Pressable style={{position: 'relative', width: 40, height: 40, borderColor: 'rgba(0, 224, 255, 1)', borderWidth: 0.5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => setCartVisible(true)} >
                <Image source={require('../../assets/images/cartblue.png')} 
                style={{width: 24, height: 24}}/>
                <View style={{position: 'absolute', top: -10, right: -5, backgroundColor: 'red', width: cartItems.length<10?15:25, height: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>{cartItems.length}</Text>
                </View>
            </Pressable>
            <Pressable style={{height: 40, width: '70%', backgroundColor: 'rgba(0, 224, 255, 1)', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => navigation.navigate('ProductDetail2')}>
                <Text style={{color: 'white'}}>Buy now</Text>
            </Pressable>
        </View>
        <Modal
        visible={cartVisible}
        animationType="slide"
        onRequestClose={() => setCartVisible(false)}
      >
        <SafeAreaView style={stylesLocal.cartContainer}>
          <View style={stylesLocal.cartHeader}>
            <Text style={stylesLocal.cartTitle}>Your Cart</Text>
            <Pressable onPress={() => setCartVisible(false)}>
              <Text style={stylesLocal.closeButton}>Close</Text>
            </Pressable>
          </View>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id.toString()}
            style={{ flex: 1 }}
          />
          <Pressable style={{height: 50, width: '90%', backgroundColor: 'rgba(0, 224, 255, 1)', borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginLeft: '5%'}}
            onPress={() => {
                navigation.navigate('Payment', {
                  cartItems: cartItems,
                  total: total,
                });
              }}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Buy now - Total: ${total}</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const stylesLocal = StyleSheet.create({
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
      cartContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
      cartHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20,
      },
      cartTitle: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      closeButton: {
        fontSize: 18,
        color: '#007BFF',
        marginRight: 20
      },
      cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginLeft: 20,
        marginRight: 20,
      },
      cartItemImage: {
        width: 50,
        height: 50,
        marginRight: 10,
      },
      cartItemInfo: {
        flex: 1,
      },
      cartItemName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      cartItemPrice: {
        fontSize: 14,
        color: '#888',
      },
      cartItemQuantity: {
        fontSize: 14,
        color: '#555',
      }
});

export default ProductDetail1;