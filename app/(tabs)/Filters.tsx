import React, { useCallback, useState } from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Pressable, Image, TextInput, SafeAreaView, Dimensions, FlatList, ScrollView, Animated, Button} from 'react-native';
import styles from '../styles/style';
import Checkbox from 'expo-checkbox';
import RangeSlider from 'rn-range-slider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
   
const Thumb = () => <View style={stylesLocal.thumb} />;
const Rail = () => <View style={stylesLocal.rail} />;
const RailSelected = () => <View style={stylesLocal.railSelected} />;
const Label = ({ text }) => <Text style={stylesLocal.label}>{text}</Text>;
const Notch = () => <View style={stylesLocal.notch} />;

const Filter = () => {
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
        <ScrollView>
            <View style={{width: '100%',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'rgba(236, 236, 236, 1)', paddingBottom: 20, paddingTop: 20}}>
                <Text></Text>
                <Text style={[styles.headingText, {fontSize: 18}]}>Filters</Text>
                <Pressable>
                    <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/e72a/8d03/825cfc72c7ac46f8807fa9e433f687cb?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cT-xPumpTjxkHyu5raF1LUC4Um70oXqB0~jVu86W54yEL6h3m8lP3Oc2p9f~ejihWXFwbNZ1RsAFK3uLCYXfkZUXfuQxZfgvRwMFbtmMxDiHYtTVkpLaQdLs~DmW8dvJQmCkPwLC2J6dEGyKfYDYR0DZx1l0AsH414vGmtVxfIMfWXoMZ-bg5ie-gdOuwKay72nbRk0VaUgWrm8dBT5wE9EIx2reW30pxEJDzh2IntYfLhzjdvOFxyxqmL8x68HnsqG8x9FYE4wh1aBEkEMBFJCFtcI8~EEZKVctCw8QtbtQn4dQPVC9wJBomFNLxNuyv8YvI4N-N88Xa21wI5Il8g__'}}
                    style={{width: 16, height: 16, marginRight: 20}}/>
                </Pressable>
            </View>
            <View style={{marginTop: 20, borderBottomWidth: 1, borderBottomColor: 'rgba(236, 236, 236, 1)', paddingBottom: 30}}>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={[styles.headingText]}>Shipping opotions</Text>
                    <Pressable>
                        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/79cc/9bf2/a660a466e291bda29237869e510a59c5?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fWuvshBcr7FSqMD~BD9FItTk8j4gIIYL7iTRCFfmkENmsfyrwT40Xf85Y7x-xZD7CFcu~teuYSYP6yE92j-haMeeOakjMYxAFbgpUg-HPWnkMoto2THA2xuBc-I-QWV2QRXFIonfHXtFdcXlNNjJncinAMiRoNwNjj70s4s9Aooki1dLrgYAtFVtr1Hgmxy~rh~hsJkMe1RZrxLrSnkJQMTFSB1kbrEm8FuoTbItL3Jm6o7Ant2ZBQnPNHLT6kl0Z3ikWlzffmd6jzm8vFPWFUgnn9MV5MT0iCWwtagxvG9eLdI2-dwPF-FGVGl1j3kFV4YnX9cK~hAQqCXlH3FsPw__'}}
                        style={{width: 24, height: 24, transform: [{ rotate: '90deg' }], marginRight: 20}}/>
                    </Pressable>
                </View>
                <View style={{marginLeft: 20, paddingTop: 10, flexDirection: 'row'}}>
                    <Checkbox
                    value = {false}
                    color={true?'rgba(190, 190, 190, 1)':'#fff'} />
                    <Text style={{fontSize: 14, color: 'rgba(190, 190, 190, 1)', marginLeft: 10}}>Instant  (2 hours delivery)</Text>
                </View>
                <View style={{marginLeft: 20, paddingTop: 10, flexDirection: 'row'}}>
                    <Checkbox
                    value = {false}
                    color={true?'rgba(190, 190, 190, 1)':'#fff'} />
                    <Text style={{fontSize: 14, color: 'rgba(190, 190, 190, 1)', marginLeft: 10}}>Express (2 days delivery)</Text>
                </View>
                <View style={{marginLeft: 20, paddingTop: 10, flexDirection: 'row'}}>
                    <Checkbox
                    value = {false}
                    color={true?'rgba(190, 190, 190, 1)':'#fff'} />
                    <Text style={{fontSize: 14, color: 'rgba(190, 190, 190, 1)', marginLeft: 10}}>Standard (7-10 days delivery)</Text>
                </View>
            </View>
            <View style={{marginTop: 20, borderBottomWidth: 1, borderBottomColor: 'rgba(236, 236, 236, 1)', paddingBottom: 30}}>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={[styles.headingText]}>Price range</Text>
                    <Pressable>
                        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/79cc/9bf2/a660a466e291bda29237869e510a59c5?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fWuvshBcr7FSqMD~BD9FItTk8j4gIIYL7iTRCFfmkENmsfyrwT40Xf85Y7x-xZD7CFcu~teuYSYP6yE92j-haMeeOakjMYxAFbgpUg-HPWnkMoto2THA2xuBc-I-QWV2QRXFIonfHXtFdcXlNNjJncinAMiRoNwNjj70s4s9Aooki1dLrgYAtFVtr1Hgmxy~rh~hsJkMe1RZrxLrSnkJQMTFSB1kbrEm8FuoTbItL3Jm6o7Ant2ZBQnPNHLT6kl0Z3ikWlzffmd6jzm8vFPWFUgnn9MV5MT0iCWwtagxvG9eLdI2-dwPF-FGVGl1j3kFV4YnX9cK~hAQqCXlH3FsPw__'}}
                        style={{width: 24, height: 24, transform: [{ rotate: '90deg' }], marginRight: 20}}/>
                    </Pressable>
                </View>
                <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center',width: 89, height: 25, borderWidth: 0.5, borderColor: 'gray', borderRadius: 5, marginLeft: 20, paddingLeft: 5, paddingRight: 5}}>
                        <Text style={{fontSize: 16, color: 'gray', marginRight: 5}}>$</Text>
                        <TextInput style={{width: '80%', height: 25, fontSize: 16}} value='0' />
                    </View>
                    <Text style={{color: 'gray'}}>---to---</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center',width: 89, height: 25, borderWidth: 0.5, borderColor: 'gray', borderRadius: 5, marginLeft: 20, paddingLeft: 5, paddingRight: 5}}>
                        <Text style={{fontSize: 16, color: 'gray', marginRight: 5}}>$</Text>
                        <TextInput style={{width: '80%', height: 25, fontSize: 16}} value='1000' />
                    </View>
                </View>
                <View>
                    <RangeSlider
                        style={stylesLocal.slider}
                        min={0}
                        max={1000000000}
                        step={1000000}
                        floatingLabel
                        renderThumb={renderThumb}
                        renderRail={renderRail}
                        renderRailSelected={renderRailSelected}
                        renderLabel={renderLabel}
                        renderNotch={renderNotch}
                        onValueChanged={handleValueChange}
                    />
                </View>
            </View>
            <View style={{marginTop: 20, borderBottomWidth: 1, borderBottomColor: 'rgba(236, 236, 236, 1)', paddingBottom: 30, alignItems: 'center'}}>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={[styles.headingText]}>Average review</Text>
                    <Pressable>
                        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/79cc/9bf2/a660a466e291bda29237869e510a59c5?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fWuvshBcr7FSqMD~BD9FItTk8j4gIIYL7iTRCFfmkENmsfyrwT40Xf85Y7x-xZD7CFcu~teuYSYP6yE92j-haMeeOakjMYxAFbgpUg-HPWnkMoto2THA2xuBc-I-QWV2QRXFIonfHXtFdcXlNNjJncinAMiRoNwNjj70s4s9Aooki1dLrgYAtFVtr1Hgmxy~rh~hsJkMe1RZrxLrSnkJQMTFSB1kbrEm8FuoTbItL3Jm6o7Ant2ZBQnPNHLT6kl0Z3ikWlzffmd6jzm8vFPWFUgnn9MV5MT0iCWwtagxvG9eLdI2-dwPF-FGVGl1j3kFV4YnX9cK~hAQqCXlH3FsPw__'}}
                        style={{width: 24, height: 24, transform: [{ rotate: '90deg' }], marginRight: 20}}/>
                    </Pressable>
                </View>
                <View style={stylesLocal.stars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity key={star} onPress={() => setRating(star)}>
                        <MaterialIcons
                        name={star <= rating ? 'star' : 'star-border'}
                        size={36}
                        style={star <= rating ? stylesLocal.starSelected : stylesLocal.starUnselected}
                        />
                    </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={{marginTop: 20, width: '100%'}}>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={[styles.headingText]}>Orthers</Text>
                    <Pressable>
                        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/79cc/9bf2/a660a466e291bda29237869e510a59c5?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fWuvshBcr7FSqMD~BD9FItTk8j4gIIYL7iTRCFfmkENmsfyrwT40Xf85Y7x-xZD7CFcu~teuYSYP6yE92j-haMeeOakjMYxAFbgpUg-HPWnkMoto2THA2xuBc-I-QWV2QRXFIonfHXtFdcXlNNjJncinAMiRoNwNjj70s4s9Aooki1dLrgYAtFVtr1Hgmxy~rh~hsJkMe1RZrxLrSnkJQMTFSB1kbrEm8FuoTbItL3Jm6o7Ant2ZBQnPNHLT6kl0Z3ikWlzffmd6jzm8vFPWFUgnn9MV5MT0iCWwtagxvG9eLdI2-dwPF-FGVGl1j3kFV4YnX9cK~hAQqCXlH3FsPw__'}}
                        style={{width: 24, height: 24, transform: [{ rotate: '90deg' }], marginRight: 20}}/>
                    </Pressable>
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 20}}>
                    <View style={{width: '40%', height: 65, borderColor: 'rgba(104, 222, 255, 1)', borderWidth: 0.75, borderRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/ce83/7bfd/7ce15761740c2f4d94387917c0234924?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gK0MhjJZtk-a9bPJHqqRRCOa9vUq~8JpABQRWp0uor0Rd589fNdF3m3yViDlPYprE1E3yP53cD2Zk5GpnQypOnPyihyZHyXyWJlwwQBaHeuEff9JiBLpUYzqllQ1PiWClSpvWmauzXlQw7YJk4RyJPt9j0o-Jbd6HJTs0OVspHNQyi1KmhnmOgm8ksy8ST3WOc-36gP8zFiYvRyKLeLfl6oc1ha3XdwCwuPcT9XiZI-5DNNDXgDFv7Ui5Nqwe0ywsUGKK2eGYD2LTgaNQofKz14866PXVLPJKOt9nCMkcQZz7YmpKn6oW468xZ5NEfLaY0oqcxwLkafMXku~9kjv1A__'}} 
                        style={{width: 24, height: 24}} />
                        <Text style={{fontSize: 10, color: 'rgba(104, 222, 255, 1)', marginTop: 5}}>30-day Free Return</Text>
                    </View>
                    <View style={{width: '40%', height: 65, borderColor: 'rgba(156, 156, 156, 1)', borderWidth: 0.75, borderRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/c327/4b7b/b4500cd78c16cd664e9022bffcdbbb12?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffXBKj1ihuS8o6c0rsapqVC7pxz1InOZBi4JaEkqaCgVJTLci7Luxr9A1rWnUrS0YAyBNf3y2iP~dqfoFuDkUEY~OQ7jzs8csRwwKWkZRPlS0lj2wdO6Da5OXZ3RDE2eV6KWIrU1se4Me0AvOIftuZSjlj9OJzHPi~YSfvqHOpqrRC9ju5Nh02YRZIfhZQphxnESY-SfpP0y60D0zWgjU48Pwpta~FzuekdqPt7fkV3Lj2-hh-G1Ubntz58AAkVRJRBakPk9U-dEufNKuqoEGtgB77pX6xNrjhuQfZNAyni2Gfg9uUnAbG-D5Zg5Sl-Gk3YXN8FAycVF59MnFEY0uA__'}} 
                        style={{width: 24, height: 24}} />
                        <Text style={{fontSize: 10, color: 'rgba(156, 156, 156, 1)', marginTop: 5}}>30-day Free Return</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 20, marginBottom: 50}}>
                    <View style={{width: '40%', height: 65, borderColor: 'rgba(156, 156, 156, 1)', borderWidth: 0.75, borderRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/b355/af5b/011168a10c6138a6f109a1d30d60de43?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R9G27NGpjTEuEU7mco8O7lzBGsYbIrZOt~QSdE1RTUz24Ae6~vjzfjie0uhj4Gu~8uT1sIX7ggteI~MXbNJ1HixbloYASe4YPz33rhe2tRxnz8CbbocpToN09JWmf2a6KbhL7RDaqBx7-9q---9xuu4bAGTwwsWKfhg62ULh9lwyegcamM90MBVvXUy~Q-b5wQ036R9uCXyqsrth1NyO4Rl-JPkV3R-1mpWaxj9-zfdafkdX1jj3illE11KKcRQX0AFpKVpRF1KMPGv5a6DETFXhDmWHz7GvkTIw7bdU-gwrnF-7uMVeqZ7cEdU5sSDvFZbm8gZDzNIyTQwaGSdlXw__'}} 
                        style={{width: 24, height: 24}} />
                        <Text style={{fontSize: 10, color: 'rgba(156, 156, 156, 1)', marginTop: 5}}>30-day Free Return</Text>
                    </View>
                    <View style={{width: '40%', height: 65, borderColor: 'rgba(156, 156, 156, 1)', borderWidth: 0.75, borderRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/9f37/a63f/57ae1bdeda62c0f405f1c0e96983b20e?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q6HuUn9Xf5WYtdYl08AXlHN8DHP9xBrMYYkB50FJOkI27sRjlDNp-s3K0Kb1B0Fyrc2duJvQGNafPxxccuR29B8ugg73tt0yhUKLlQVDm3YUTp1tGbYAyuGnBMraJRKOz5Vv4wJtvWj-9NYni72RCvc0Mf4JX39mGPUcaFVT1srTBTT6ITMyhvAmqFPMLmzTdXS~SgHMoSv~Lh7gaCeJCVO5yHQcJdO-Kf7g5xjIv5mt3wixLYX7IoTxvZwDAhIwoHgqXXCKExgMc0YnbTocCU1VR2RmQTudKXqFplQJur0vl8ISmf3GajoHCM5vN2wb8NnJScBxxKG3S4bBfRM0pw__'}} 
                        style={{width: 24, height: 24}} />
                        <Text style={{fontSize: 10, color: 'rgba(156, 156, 156, 1)', marginTop: 5}}>30-day Free Return</Text>
                    </View>
                </View>
            </View>      
        </ScrollView>
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

export default Filter;