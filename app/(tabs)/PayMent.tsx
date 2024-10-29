import React, { useState, useRef } from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Pressable, Image, TextInput, SafeAreaView, Dimensions, FlatList, ScrollView } from 'react-native';
import styles from '../styles/style';
import RadioGroup from 'react-native-radio-buttons-group';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Payment = () => {
    const [selectedId, setSelectedId] = useState(null);

    const paymentMethods = [
      {
        id: '1',
        label: 'Credit Card',
        value: 'credit_card',
        image: 'https://s3-alpha-sig.figma.com/img/cf5b/91f0/2a3db75c08602be69cc72f8f2a92e2da?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R7S8kfFFt3d8I19FVgyEZP1px4AwHnIG~T-Mu~28fvLN6qAyZvZJR80FZd1VOXqnrxs8p0aXeZz45t2RSjECB8kc5agAaIMLZfZHrCLoNyH-eaPAj2qih13~75bybL8SyTyI3pFDog6v07oqFUD0oILkkd8pmyxY-olCMDtaq-IyVMdAgK~QGu4AWA8YfHz8hZhw1jVxu9NYaUSQoWbd2~OZoTWSyNv~cio-IWtycaGl5Nafh3-2tsqRCsz352TI4B1Pi7XxmJpaF7~JB5BZEARwEzau~ZHYeeGbsxWJ4PeQU-5ucAHiSF3aJSCST7RYyiLIFOLOB8MsMtzX2WVC7A__',
        cardNumber: '**** **** **** 1234',
      },
      {
        id: '2',
        label: 'PayPal',
        value: 'paypal',
        image: 'https://s3-alpha-sig.figma.com/img/6e8c/5d9a/4e31aaa0114c9a096145f4f9ede666bb?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMViNeoj1zhkmZeRJDonhtEYzmkVg0vMQX96uwySkY6tN7N~wb6RTs7gNd5HzZ~iGZQ8K2O0j~jO1Xp3uGofZ6lKrM9-7k4RIq~Xt8zvhkDpj0P9yQnvKyk1X1~B6o8116mivbdVlAXMgUNNnuSaDsJjO1xEj0H87AICdCuAKASuSLKXZ2pWfYAADuKvaUw23SlETZaUJ3uCckWLv5VWenWvAqGL2jlEqOupiivwOouYfwWN2jXEf2KICNYHOrvSQydLeZBH0-rkXNQS1Qe1fJbXMp5D09SV9gWQsAY4OjL9BaHLFR-oQw~48DL5ekRhpxZKTF2cg10iSHoLPuGrmw__',
        cardNumber: 'user@example.com',
      },
      {
        id: '3',
        label: 'Bank Transfer',
        value: 'bank_transfer',
        image: 'https://s3-alpha-sig.figma.com/img/903a/70df/639ab1920d37c18164fe65367a052c41?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ef6sFPJr7U9zHvypnGVRLjygkSbS~Pe7G7TXGCva86iR7qnK7Qnydr5OLxnugYzAiW9QZ8lSB0PyzHXcAYByhm5X1zD-hc7aeM68VwpbjcqK5-nb304YynmMrPxQ6UTxvSIEet2FLbnXMsfwZ88wL0wlCguv7oAMZkBGkCks2fPU80EBFeBCY07rUuP8dsi8S39MOBltL3FMgFkN1KV7t5snwRogIhI9wTBrGoNr77PF5JkeHlIEiUXAboUTUT3hLWuTyEr4UvHvdNe9qkaAesZKGn-xTzPwW9WuganjuusS905TzRxB90r4UzfdnjcZdHeqr4CaPenJEpDMrqaXIQ__',
        cardNumber: '**** **** **** 5678',
      },
    ];
  return (
    <SafeAreaView style={[styles.container, {alignItems: 'center'}]}>
        <View style={{width: '100%',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 20, paddingTop: 20}}>
            <Pressable>
                <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/79cc/9bf2/a660a466e291bda29237869e510a59c5?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fWuvshBcr7FSqMD~BD9FItTk8j4gIIYL7iTRCFfmkENmsfyrwT40Xf85Y7x-xZD7CFcu~teuYSYP6yE92j-haMeeOakjMYxAFbgpUg-HPWnkMoto2THA2xuBc-I-QWV2QRXFIonfHXtFdcXlNNjJncinAMiRoNwNjj70s4s9Aooki1dLrgYAtFVtr1Hgmxy~rh~hsJkMe1RZrxLrSnkJQMTFSB1kbrEm8FuoTbItL3Jm6o7Ant2ZBQnPNHLT6kl0Z3ikWlzffmd6jzm8vFPWFUgnn9MV5MT0iCWwtagxvG9eLdI2-dwPF-FGVGl1j3kFV4YnX9cK~hAQqCXlH3FsPw__'}}
                        style={{width: 24, height: 24}}/>
            </Pressable>
            <Text style={[styles.headingText, {fontSize: 18}]}>Payment</Text>
            <Text></Text>
        </View>
        <View style={{flex: 1, marginTop: 50}}>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '500'}}>Total</Text>
                <Text style={[styles.headingText, {fontSize: 24, marginTop: 10}]}>$5,555</Text>
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
            <Pressable style={{flexDirection: 'row', width: 300, height: 45, backgroundColor: 'rgba(78, 185, 239, 1)', justifyContent: 'center', alignItems: 'center', borderRadius: 3}}>
                <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/5eaf/eb06/2f7856170dd039a5a00dc431971f8333?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hc-CejdI8lc7PaLbVWBIjbNt8alNHYm0XP3nU1AomiCzMdbOhchHyOvvJF2C2o8t9OEIaJ3EXMpIK6GVd19068pDAqTYnc0RC85PRR1CclDI7FQe9PR9C3nI9mSVwIt9kNfRmaI0PTfmZKGNvSTi7bZguw~yH~2ZF505Jg9H1T8J6iRC6EjphAqnGrQv4jEStnhPU4I13IR1P1d6JNjfuyoIl84XccofF4DgrD7UztNYxY-4TFdFSqOIP~YtMbJhygRm9FXZfaSVxyrQ0bSRmjMx0X-SI-RIoWzrwvURXOG8h8whGB6fCwDbKN7LXpLXs7VSQbmSOLZopKWdMOQ9uw__'}}
                style={{width: 24, height: 24, marginRight: 10}} />
                <Text style={{color: '#fff'}}>Pay now</Text>
            </Pressable>
            <Pressable style={{marginTop: 20, flexDirection: 'row', width: 300, height: 45, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 3}}>
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