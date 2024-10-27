import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput, SafeAreaView, Dimensions, FlatList, ScrollView } from 'react-native';
import styles from '../styles/style';

const ProductDetail = () => {
  return (
    <SafeAreaView style={[styles.container, {alignItems: 'center'}]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Pressable>
                <Image source={require('../../assets/images/left-chevron.png')} style={styles.direcBtn} />
            </Pressable>
            <Text style={styles.headingText}>Headphone</Text>
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
        <View>
            <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/bc98/ce2a/91aabe8f25895b029c3835581aef2336?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q5A~iWL5LcHb3KZblzr3ZKsgsDgT9vAxhMQMNmfT28tnm1VoS14yNbKBeW32BgJHXDjHpztgAThYl-IZdTlkCRf1rD4g~iCr-qEeJwFmTu81wAFz5nhPSxtS0AbChL71Z9eej~xrVGuQ-HwdTZBlZS6xteeCeDNh6fHJJLGxr51chvlbPxcRWxxvp6aVO1c-wNUY8Nfo7Djad6VKQMaueoU5qAYMlv26d7Rt5PuFkeADZRKzf319oAd8KJEgNVzeHoZnB~eMNrdscKmbPmUjEpmi53lEbA2uEhvk6xG9G7Jef033QJkALgj7X7FxViA7DH41ECDCmKzs8Z~S1qsdaA__'}} 
            style={{width: 375, height: 200, borderRadius: 5}}/>
        </View>
        <View style={{ width: '100%' ,flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
            <Text style={styles.headingText}>$59</Text>
            <View style={[stylesLocal.ratingContainer, {marginRight: 10}]}>
                <Text style={stylesLocal.ratingText}>⭐ 4.5</Text>
                <Text style={stylesLocal.reviewText}>(99 reviews)</Text>
            </View>
        </View>
        <View>
            <Image />
        </View>
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
      }
});

export default ProductDetail;