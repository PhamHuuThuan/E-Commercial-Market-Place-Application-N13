import React, { useState, useRef } from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Pressable, Image, TextInput, SafeAreaView, Dimensions, FlatList, ScrollView } from 'react-native';
import styles from '../styles/style';
import RadioGroup from 'react-native-radio-buttons-group';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Payment = ({navigation, route }) => {
  const { cartItems, total } = route.params;
  const [selectedId, setSelectedId] = useState('1');

    const paymentMethods = [
      {
        id: '1',
        label: 'Credit Card',
        value: 'credit_card',
        image: 'https://s3-alpha-sig.figma.com/img/cf5b/91f0/2a3db75c08602be69cc72f8f2a92e2da?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p1Tj1BTx5Lx-DOODXb7SGTr6nBB3QyxiCpUeAPL8FsAppT6vRS3uAr6TJxCMG8X7hw3E-FwOtlbav84iLxPt65~8nbvPxxRMUiOVdylXgs9XnfTngwt4Q3pCR4NX1O38sG48X9bUY40gp79GxbQtCM6H~sp3Qdm5FNXd09kdwC6WNj9dIs-uDBvVOURAC0q63C1Ai7zvPJNEzD1oypD97cj2-Md084yGsk-5ZnqHr46TKPBRcWxCwj7111ASfTBpcAAk~9mZys045ONPXL7Pqm-FXxuLxxqmLchIyOuhDJ2EZYVR5Rcr~LxZZpPGHoUnkU5-2CABZ7PLQvANuVmY-Q__',
        cardNumber: '**** **** **** 1234',
      },
      {
        id: '2',
        label: 'PayPal',
        value: 'paypal',
        image: 'https://s3-alpha-sig.figma.com/img/6e8c/5d9a/4e31aaa0114c9a096145f4f9ede666bb?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kLUBZIrEjr4U98bPjI2Q~lV3p0keT2t1CR0kVemWmn-8CpwPXfiUea0KUaOFSqDmppIZpsvoSj9URJAnMsr9pYUj6dWGpUdOhrDbpOnlpBcqZgmLWRprstX5d760wOUIjwnYygt5ohtL0HrTrVYPyqeZCkcIsoCVxa8PZItkcFOpAS-~~Mt5e-RGiiiCz0fB7~w3QKTH9tvO8SFzlzPJfNuSuDjl9jMy5GruhZzaxokpGo94pAYlAxO~0~Dj2wXidieWgRUjKMZ8VOVySIxc3~aKXbXGoW53ZgqAB5D0x24sEqp1Zorj9ecjCU4XpddGtqgU5HSqgkIMmx986VnADA__',
        cardNumber: 'user@example.com',
      },
      {
        id: '3',
        label: 'Bank Transfer',
        value: 'bank_transfer',
        image: 'https://s3-alpha-sig.figma.com/img/903a/70df/639ab1920d37c18164fe65367a052c41?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~q6Vm-C-rPRsFgVAFJ2UdpN0slxDt9lwxcg5wuQMc4qRFd-UcF0fNw9hm5gRZqDLvL9P1jh1UaAHj-id9NFdY3rcoqP3aZocD-WS-l2kpzPLwCjiSJeewBrGjFUsAqwybd-ltfDeMwB2-AY0W5kAhE2tpP2SoqGpQVE~WBW7ZKd3fZcvt4lZfQCMiYwNHIDUVHvD8a3w8tw53bj6fXOFWt93ZdbUr8MtZMQA~lYBgGYYPMsdMlTIdR4pSj7elBclINeyIph24~zU8n-J1lX98JlhPJGZUSOy1qbpwSIXT1uqu8wMbGD7VonHjvEXI-RTqHyJA0NYpT62KpfjFHy7A__',
        cardNumber: '**** **** **** 5678',
      },
    ];
  return (
    <SafeAreaView style={[styles.container, {alignItems: 'center'}]}>
        <View style={{width: '100%',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 20, paddingTop: 20}}>
            <Pressable
            onPress={()=>{navigation.goBack()}} >
                <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/79cc/9bf2/a660a466e291bda29237869e510a59c5?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jgmHTyQOfxWCXkPATNmTyIr6MBIUn8nPLvfGcLVyVAK9nGsXWZxl9N-FpgFuNCZfxK5zGguP2lf5A9s8KC~c4O0Ar5nk6VnK5eBCQY7elyTEjjlo4X~jsiUHbJayjje~h-0Z7p3Kf1AEO-wtSlB9HWbDZ4tyYf8L017YgGWkI2jjHB3zDpWpZK6XpjpMvV1cKeCXLRyx6jrHK444kAYn5-U75enIgcL3UZhkW2Vu1qNbvRz7OGPXxqfZJVnUO-4tel2JR2dSmySqvQdv7JySsjeUr3s~zV3vw44xSoMNWMZJsgxDW2B1QbPG0~d3rLy-7~Y-D4hq8VQKb26tZi-bYA__'}}
                        style={{width: 24, height: 24}}/>
            </Pressable>
            <Text style={[styles.headingText, {fontSize: 18}]}>Payment</Text>
            <Text></Text>
        </View>
        <View style={{flex: 1, marginTop: 50}}>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '500'}}>Total</Text>
                <Text style={[styles.headingText, {fontSize: 24, marginTop: 10}]}>${total}</Text>
            </View>
            <View style={{marginTop: 50}}>
                {paymentMethods.map((method) => (
                    <View key={method.id} style={stylesLocal.row}>
                        <Image source={{ uri: method.image }} style={stylesLocal.image} />
                        <Text style={stylesLocal.cardNumber}>{method.cardNumber}</Text>
                        <TouchableOpacity onPress={() => setSelectedId(method.id)}>
                            <MaterialIcons
                            name={selectedId === method.id ? 'radio-button-checked' : 'radio-button-unchecked'}
                            size={24}
                            color={selectedId === method.id ? '#ffb300' : '#aaa'}
                            />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <Pressable style={{flexDirection: 'row', width: 300, height: 45, backgroundColor: 'rgba(78, 185, 239, 1)', justifyContent: 'center', alignItems: 'center', borderRadius: 3}}
            onPress={() => {
              navigation.navigate('CheckoutPayment', {
                cartItems: cartItems,
                total: total,
              });
            }} >
                <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/5eaf/eb06/2f7856170dd039a5a00dc431971f8333?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qqmLv~qJldBXqgXXBuYii2cZSMNRT2AEa8aLQN-4Hp64MxYk17X-CIItW8FfogPIJSklkpUf17bF3ZpP5jNyjAL4eFBvmeVW8J2ihwyxcLhUSA6Hq87jAoaGeZ0b~9zXnQ1vqkVZQn77DKuhCuWRYYgK21dkEg89UMArViSTlSpJsuDaHieLCrq22H~sRExIImyBOj3y0mMWx3dKo7R1SV8lN-ZMR-18lm4nYeFuBrKpIVKz9fs56FM7CpIz-0IPt0sBCS5wzRybyB-pVEPjC4wQzCMpkS8HS6hSzT3b~SC1sI4zfLYBkzUUPV55i2fqI9wr50Vvh~EPIEBs7WFUYA__'}}
                style={{width: 24, height: 24, marginRight: 10}} />
                <Text style={{color: '#fff'}}>Pay now</Text>
            </Pressable>
            <Pressable style={{marginTop: 20, flexDirection: 'row', width: 300, height: 45, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 3}}
              >
                <Image source={require('../../assets/images/plus.png')} style={{width: 16, height: 16, marginRight: 10}} />
                <Text style={{fontSize: 14, color: 'rgba(78, 185, 239, 1)'}}>Add new card</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  );
};

const stylesLocal = StyleSheet.create({
    row: {
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: 'rgba(201, 201, 201, 1)',
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 3
    },
    image: {
      width: 30,
      height: 30,
      borderRadius: 50,
      marginRight: 10,
    },
    cardNumber: {
      flex: 1,
      fontSize: 16,
    },
});

export default Payment;