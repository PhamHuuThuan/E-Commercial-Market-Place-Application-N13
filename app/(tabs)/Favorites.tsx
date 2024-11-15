import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();

  // Giả sử chúng ta có dữ liệu sản phẩm yêu thích trong local storage hoặc từ API
  useEffect(() => {
    // Đây là ví dụ về dữ liệu giả định
    const fetchedFavorites = [
      {
        id: '1',
        name: 'Product 1',
        price: '10 USD',
        image: 'https://example.com/image1.jpg',
      },
      {
        id: '2',
        name: 'Product 2',
        price: '15 USD',
        image: 'https://example.com/image2.jpg',
      },
      // Thêm các sản phẩm khác
    ];
    setFavorites(fetchedFavorites);
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderFavoriteItem = ({ item }) => (
    <View style={styles.favoriteItem}>
      <Image source={{ uri: item.image }} style={styles.favoriteImage} />
      <View style={styles.favoriteInfo}>
        <Text style={styles.favoriteName}>{item.name}</Text>
        <Text style={styles.favoritePrice}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton}>
        <Icon name="trash-2" size={20} color="#dc3545" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Icon name="arrow-left" size={20} color="#000" />
      </TouchableOpacity>

      <Text style={styles.header}>Your Favorites</Text>

      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>No favorite products yet!</Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  goBackButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
    zIndex: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
  favoriteItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  favoriteImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  favoriteInfo: {
    flex: 1,
    marginLeft: 15,
  },
  favoriteName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  favoritePrice: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Favorites;
