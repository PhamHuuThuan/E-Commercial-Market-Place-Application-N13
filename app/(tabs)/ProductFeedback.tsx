import React, { useCallback, useState } from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Pressable, Image, TextInput, SafeAreaView, Dimensions, FlatList, ScrollView } from 'react-native';
import styles from '../styles/style';
import RangeSlider from 'rn-range-slider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Thumb = () => <View style={stylesLocal.thumb} />;
const Rail = () => <View style={stylesLocal.rail} />;
const RailSelected = () => <View style={stylesLocal.railSelected} />;
const Label = ({ text }) => <Text style={stylesLocal.label}>{text}</Text>;
const Notch = () => <View style={stylesLocal.notch} />;

const ProductFeedback = () => {
  const [rating, setRating] = useState(0);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(1000000000);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <SafeAreaView style={[styles.container, {alignItems: 'center'}]}>
          <View style={{width: '100%',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'rgba(236, 236, 236, 1)', paddingBottom: 20, paddingTop: 20}}>
                <Text></Text>
                <Text style={[styles.headingText, {fontSize: 18}]}>Feebacks</Text>
                <Pressable>
                    <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/e72a/8d03/825cfc72c7ac46f8807fa9e433f687cb?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cT-xPumpTjxkHyu5raF1LUC4Um70oXqB0~jVu86W54yEL6h3m8lP3Oc2p9f~ejihWXFwbNZ1RsAFK3uLCYXfkZUXfuQxZfgvRwMFbtmMxDiHYtTVkpLaQdLs~DmW8dvJQmCkPwLC2J6dEGyKfYDYR0DZx1l0AsH414vGmtVxfIMfWXoMZ-bg5ie-gdOuwKay72nbRk0VaUgWrm8dBT5wE9EIx2reW30pxEJDzh2IntYfLhzjdvOFxyxqmL8x68HnsqG8x9FYE4wh1aBEkEMBFJCFtcI8~EEZKVctCw8QtbtQn4dQPVC9wJBomFNLxNuyv8YvI4N-N88Xa21wI5Il8g__'}}
                    style={{width: 16, height: 16, marginRight: 20}}/>
                </Pressable>
            </View>
            <View style={{flexDirection: 'row', marginTop: 30}}>
              <Image source={require('../../assets/images/happiness.png')}
              style={{width: 36, height: 36, marginRight: 50}} />
              <Image source={require('../../assets/images/surprised.png')}
              style={{width: 36, height: 36, marginRight: 50}} />
              <Image source={require('../../assets/images/sad.png')}
              style={{width: 36, height: 36}} />
            </View>
            <View style={{flexDirection: 'row', marginTop: 30}}>
              <Pressable style={{flexDirection: 'row' ,justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(61, 243, 243, 0.16)', borderRadius: 20, padding: 10}}>
                <Text style={{color: 'rgba(16, 222, 222, 1)'}}>Service</Text>
                <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/e402/409e/83b4aedd9f42cfe7230dc280c8b38678?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FjsPo5pkCzfgF1xpOzOmhtmIUPxJh9OEuIqQAMZByzTF-qMNuc3ZM7nLyzY3dYJpDwigKc5ZhGYPNUq5dn1iHBxxFw9QA0ItS2iUmzuY96qFtwZNR4gC0Asj6uamk-ZeuCUbkXNZt8vsC~cBNnIpqETkTJhK6InGhP-vS4BY0iOpJ01LcvaXO9WlIOVzPMF~bJDcYCL4ObIU9hyRkjTiRKXVtTOcwVUVXvE~cXyt4ZTnN-oY7NlYWG68x~cLz-F4vv3Gk3hkqEZg2VR1-0rJYQdRUE5JVeviXSYKYItn8Hjqeh2ZxjdVLfRls~YMDAQAoVG5DIgmEBeg1uXsrQlG8w__'}}
                style={{width: 20, height: 20, marginLeft: 10}} />
              </Pressable>
              <Pressable style={{flexDirection: 'row' ,justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(61, 243, 243, 0.16)', borderRadius: 20, padding: 10}}>
                <Text style={{color: 'rgba(0, 0, 0, 0.6)'}}>Quantity</Text>
                <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/f740/265d/26c6bc13170e35cd4a1655f7a45fa746?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jWmZ33E3b-HJIvEx8g9SRS3OZ3ExnkqlLGmMTza-tIYSqSKznJS4XFC0TItQyMey8lFbyFdM32rOw0DWmA1tCXki2OcxM79HTox9sheh-lSvaUeaS5GV6-p4n6KS3EXvXxxfX4SNbHqTN0lDtA4cxZUW4OxY1tBXGIYfPQBlJDGX9gY9wUjrtJ6dwR6VDdkzg~wNtyw6A7I2eipxse~KxdZ6LsZyIkEhy1fIU9CpTBYQ9CjalYNUZ4-9cX7xcx8Ec938n7byo~E5WFNXzV0optC6xyM8ao3esMrgax2vFS4ZSPbirETg94IXlZLGTEVvW-Eux-D~9XrSVK8hY4Kr9g__'}}
                style={{width: 20, height: 20, marginLeft: 10}} />
              </Pressable>
            </View>
            <View style={{width: '100%', marginTop: 20}}>
              <Text style={styles.headingText}>Care to share more?</Text>
              <TextInput 
              multiline={true}
              numberOfLines={4} 
              style={{width: '90%', height: 75, borderWidth: 1, fontSize: 16, borderColor: 'gray', padding: 10,marginLeft: 20, textAlignVertical: 'top'}}
              placeholder='Type your feedbacks' />
            </View>
            <View style={{width: '100%', marginTop: 20}}>
              <Text style={styles.headingText}>Upload images</Text>
              <View style={{marginTop: 10, marginLeft: 20, flexDirection: 'row'}}>
                <Pressable style={{width: 75, height: 75, borderStyle: 'dashed', borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginRight: 20}}>
                  <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/f740/265d/26c6bc13170e35cd4a1655f7a45fa746?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jWmZ33E3b-HJIvEx8g9SRS3OZ3ExnkqlLGmMTza-tIYSqSKznJS4XFC0TItQyMey8lFbyFdM32rOw0DWmA1tCXki2OcxM79HTox9sheh-lSvaUeaS5GV6-p4n6KS3EXvXxxfX4SNbHqTN0lDtA4cxZUW4OxY1tBXGIYfPQBlJDGX9gY9wUjrtJ6dwR6VDdkzg~wNtyw6A7I2eipxse~KxdZ6LsZyIkEhy1fIU9CpTBYQ9CjalYNUZ4-9cX7xcx8Ec938n7byo~E5WFNXzV0optC6xyM8ao3esMrgax2vFS4ZSPbirETg94IXlZLGTEVvW-Eux-D~9XrSVK8hY4Kr9g__'}}
                  style={{width: 30, height: 30}} />
                </Pressable>
                <Pressable style={{width: 75, height: 75, position: 'relative', justifyContent: 'center', alignItems: 'center', marginRight: 20}}>
                  <Image source={require('../../assets/images/Apple-Iphone-15.png')}
                  style={{width: 75, height: 75}} />
                  <Pressable style={{position: 'absolute', right: 0, top: 0}}>
                    <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/4a9c/74e4/e1a08a81b80e6ce0a970b350553410c1?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eiuJYY1pY5prYIQPFCg2VrhwFMVSH44z~m4MogGn~n81Cd--kn3nBsiREXw7hI8Y9PCMvfUfi7TA855IFCAu8TZNP0hQiwvegvN5LlpmqsYsG~4RfS4~m~jpQkcLjxgUERbMqS8ED-5YOoqco5GE0Vb6rQejtwxSCHPLZbbZ79ApLWfLJmQFEEv7m8MMPXC33lsfFBi0mfX9nariSimpAfMqTSYklwwRsJv9gYY8z7cLm46ICgg0iOR9orpe8-sWWGRZUFDFmYcoyKDw~AHdXB5c6ttyqpyuhRuEhkSxYt2-w2JZ7nnYrmvQ1Uj5xbWpxcED9Gz3Ft7QySCI3fR0Sg__'}} 
                    style={{width: 12, height: 12}} />
                  </Pressable>
                </Pressable>
              </View>
            </View>
            <View style={{width: '100%', marginTop: 20}}>
              <Text style={styles.headingText}>Rating</Text>
              <View style={{width: '100%', alignItems: 'center'}}>
                <View style={stylesLocal.stars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity key={star} onPress={() => setRating(star)}>
                        <MaterialIcons
                        name={star <= rating ? 'star' : 'star-border'}
                        size={48}
                        style={star <= rating ? stylesLocal.starSelected : stylesLocal.starUnselected}
                        />
                    </TouchableOpacity>
                    ))}
                </View>
              </View>
            </View>
            <Pressable style={{width: '80%', height: 50, backgroundColor: 'rgba(103, 187, 255, 1)', borderRadius: 5, marginTop: 20, marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 18}}>Submit</Text>
            </Pressable>
    </SafeAreaView>
  );
};

const stylesLocal = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  slider: {
      height: 8,
      width: '70%',
      marginTop: 20,
      marginLeft: 60
  },
  thumb: {
    width: 12,
    height: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1
  },
  rail: {
    flex: 1,
    height: 4,
    backgroundColor: 'rgba(169, 242, 255, 1)',
  },
  railSelected: {
    height: 4,
    backgroundColor: 'rgba(15, 166, 192, 1)',
  },
  label: {
    position: 'absolute',
    top: -30,
    fontSize: 12,
    color: 'black',
  },
  notch: {
    width: 8,
    height: 8,
    backgroundColor: 'rgba(15, 166, 192, 1)',
    transform: [{ rotate: '45deg' }],
  },
  stars: {
    flexDirection: 'row',
  },
  starUnselected: {
    color: '#aaa',
  },
  starSelected: {
    color: '#ffb300',
  },
});

export default ProductFeedback;