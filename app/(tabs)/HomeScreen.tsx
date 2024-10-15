import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput, SafeAreaView, Dimensions} from 'react-native';
import styles from '../styles/style';
import Carousel, { Pagination } from 'react-native-snap-carousel'

const ProductListing = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1, flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable>
            <Image source={require('../../assets/images/left-chevron.png')} style={styles.direcBtn}/>
          </Pressable>
          <Text style={styles.headingText}>Electronics</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable>
            <Image source={require('../../assets/images/cart.png')} style={[styles.direcBtn, {marginRight: 20}]}/>
          </Pressable>
          <Pressable>
            <Image source={require('../../assets/images/avatar.png')} style={styles.profileBtn}/>
          </Pressable>
        </View>
      </View>
      <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
        <View style={stylesLocal.formSearch}>
          <Image source={require('../../assets/images/search.png')} style={{width: 16, height: 16}}/>
          <TextInput placeholder='Search' style={{width: '90%'}}/>
        </View>
        <Pressable>
            <Image source={require('../../assets/images/sort.png')} style={[styles.direcBtn, {backgroundColor: '#F1F1F1', marginLeft: 20}]}/>
        </Pressable>
      </View>
      <View style={{flex:1.5, flexDirection: 'column', alignItems: 'center'}}>
        <View style={{width: '100%' ,flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Text style={styles.headingText}>Categories</Text>
          <Pressable style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.seeallText}>See all</Text>
            <Pressable>
              <Image source={require('../../assets/images/right-arrow.png')} style={styles.seeallBtn}/>
            </Pressable>
          </Pressable>
        </View>
        <View style={{width: '100%' ,flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 20}}>
          <View style={[styles.typeProduct, {backgroundColor: '#DFC0FF'}]}>
            <Image source={require('../../assets/images/Apple-Iphone-15.png')} style={{width: 60, height: 65}}/>
          </View>
          <View style={[styles.typeProduct, {backgroundColor: '#B5DFF9'}]}>
            <Image source={require('../../assets/images/ipad.png')} style={{width: 60, height: 65}}/>
          </View>
          <View style={[styles.typeProduct, {backgroundColor: '#F6BCAE'}]}>
            <Image source={require('../../assets/images/macbook.png')} style={{width: 80, height: 50}}/>
          </View>
        </View>
      </View>
      <View style={{flex: 3, flexDirection: 'column', alignItems: 'center'}}>
        <View style={{width: '100%' ,flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <Pressable style={[styles.filterBtn,{backgroundColor: 'rgba(122, 228, 240, 0.2)'}]}>
            <Text style={[styles.filterText, {color: 'rgba(0, 208, 255, 1)', fontWeight: 'bold'}]}>Best Sales</Text>
          </Pressable>
          <Pressable style={styles.filterBtn}>
            <Text style={styles.filterText}>Best Matched</Text>
          </Pressable>
          <Pressable style={styles.filterBtn}>
            <Text style={styles.filterText}>Popular</Text>
          </Pressable>
        </View>
        <View style={{flex:1}}>

        </View>
        <Pressable style={{width: 350, height: 30, backgroundColor: 'rgba(244, 244, 244, 1)', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
          <Text style={{fontSize: 16, fontWeight: '500', color: 'rgba(190, 190, 190, 1)'}}>See all</Text>
        </Pressable>
      </View>
      <View style={{flex:1}}></View>
      <View style={{flex:0.5}}></View>
    </SafeAreaView>
  );
};

const stylesLocal = StyleSheet.create({
  formSearch:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  }
});

export default ProductListing;
