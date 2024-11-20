import React, { useState, useEffect } from 'react';
import { View, Button, Text, TextInput, StyleSheet, ScrollView, FlatList, Pressable, Image } from 'react-native';
import axios from 'axios';

export default function App({ navigation }) {
  const [userInput, setUserInput] = useState('');
  const [suggestedProducts, setSuggestedProducts] = useState('');
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const API_KEY = '';  // Thay bằng API key

  // Lấy dữ liệu sản phẩm từ API
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://api.mockfly.dev/mocks/551e2234-6785-4d2c-812e-265d0239a339/ProductsElectronics');
      const data = await response.json();
      setAllProducts(data); // Lưu dữ liệu sản phẩm vào state
    } catch (error) {
      console.error('Lỗi khi lấy sản phẩm:', error);
    }
  };
  
  const getSuggestions = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo",  // Sử dụng model ChatGPT 3.5
          messages: [{
            role: "user",
            content: `Bạn vào vai một nhân viên tư vấn sản phẩm cửa hàng. Sử dụng câu từ thu hút khách hàng mua hàng. Khách hàng có câu hỏi như sau: Tôi cần một sản phẩm như ${userInput}. Bạn có thể giúp tôi tìm sản phẩm phù hợp nhất với nhu cầu sử dụng hàng ngày không? Hãy đưa ra một số lựa chọn với mức giá hợp lý nhất và lý do vì sao nó lại tốt cho tôi. Câu đầu hãy liệt kê danh sách sản phẩm mà bạn khuyến nghị theo dạng ["Product1", "Product2"] `
          }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
          },
        }
      );

      const suggestions = response.data.choices[0].message.content;
      setSuggestedProducts(suggestions);

        // Lấy danh sách các tên sản phẩm từ ChatGPT
        const productNames = extractProductNames(suggestions); // Trích xuất tên sản phẩm từ chuỗi gợi ý

        // Lọc các sản phẩm trong CSDL có tên trùng với gợi ý
        const filteredProducts = allProducts.filter(product =>
            productNames.includes(product.name)
        );

        setRecommendedItems(filteredProducts);
    } catch (error) {
      console.error('Lỗi khi gọi ChatGPT API:', error);
    }
  };

    // Hàm trích xuất tên sản phẩm từ chuỗi gợi ý
    const extractProductNames = (suggestions) => {
        try {
          const regex = /\[(.*?)\]/; // Biểu thức chính quy để tìm các tên sản phẩm trong dấu []
          const match = suggestions.match(regex);
          if (match) {
            // Tách các tên sản phẩm và loại bỏ dấu ngoặc kép
            return match[1].split(',').map(item => item.trim().replace(/"/g, ''));
          }
          return [];
        } catch (error) {
          console.error('Lỗi khi phân tích tên sản phẩm:', error);
          return [];
        }
      };

  // Lấy sản phẩm khi component được mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const renderPhoneItem = ({ item }) => (
    <Pressable style={styles.phoneCard}
    onPress={() => navigation.navigate('ProductDetail1', { product: item })}>
      <Image source={{uri: item.image}} style={styles.phoneImage} />
      <View style={styles.phoneInfo}>
        <Text style={styles.phoneName}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
          <Text style={styles.reviewText}>({item.reviews})</Text>
        </View>
      </View>
      <Text style={styles.phonePrice}>${item.price}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập sở thích sản phẩm của bạn..."
        value={userInput}
        onChangeText={setUserInput}
      />
      <Button title="Gợi ý sản phẩm" onPress={getSuggestions} />
      {suggestedProducts ? (
        <ScrollView style={{height: '60%', marginTop: 20}}>
            <Text style={styles.result}>Gợi ý sản phẩm: {suggestedProducts}</Text>
        </ScrollView>
      ) : null}
      {recommendedItems.length > 0 ? (
        <FlatList
          data={recommendedItems}  // Dữ liệu sản phẩm đã lọc
          renderItem={renderPhoneItem} // Sử dụng renderPhoneItem để hiển thị từng sản phẩm
          keyExtractor={(item) => item.id.toString()
          }
          style={{}}
        />
      ) : (
        <Text style={styles.result}>Không có sản phẩm phù hợp.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
  result: {fontSize: 16 },
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
});
