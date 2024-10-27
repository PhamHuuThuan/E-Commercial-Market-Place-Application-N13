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
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, paddingTop: 20, borderTopWidth: 1, borderTopColor: 'rgba(236, 236, 236, 1)'}}>
            <Pressable style={{width: 40, height: 40, borderColor: 'rgba(0, 224, 255, 1)', borderWidth: 0.5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/f098/e60e/4b26942409e13aa2c3dda427580702b3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q3uVQM0AkMFsyQ9V3G~U1Q7w96fHwnNK2rtXtP7mRVVYti-N1WcO1azHVDoylUSA6A2fiKKtSKNm6ZQzsijW7b1VnCiPv-5sEmgf36t8IR4cTyQDnVKEi6ytaqRVlID2HUHgseKQGFjzAIHhfN8Jn9emyL1VWJIM-88m6VrTlif-n6SHR1zJYao6sX7U2I754mYoGM9AiEFk7BqzK-~ltD44R9JWCECX-O5yV7BuGtg8IGEhoEAlgwdTjDQyJP0CyPIJ7S-xcUXK8FRMNAKofJ7v3oZa8rWh-QgmuudpHilpzYZVlw-zp14KW1f-wvQtbsirCRmUQCw7kn6z9QoarQ__'}} 
                style={{width: 24, height: 24}}/>
            </Pressable>
            <Pressable style={{height: 40, width: '70%', backgroundColor: 'rgba(0, 224, 255, 1)', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white'}}>Buy now</Text>
            </Pressable>
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