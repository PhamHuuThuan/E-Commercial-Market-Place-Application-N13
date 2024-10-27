import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput, SafeAreaView, Dimensions, FlatList, ScrollView } from 'react-native';
import styles from '../styles/style';

const ProductDetail = () => {
    const [noti, setNoti] = useState(false);

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
        <ScrollView>
            <View>
                <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/bc98/ce2a/91aabe8f25895b029c3835581aef2336?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q5A~iWL5LcHb3KZblzr3ZKsgsDgT9vAxhMQMNmfT28tnm1VoS14yNbKBeW32BgJHXDjHpztgAThYl-IZdTlkCRf1rD4g~iCr-qEeJwFmTu81wAFz5nhPSxtS0AbChL71Z9eej~xrVGuQ-HwdTZBlZS6xteeCeDNh6fHJJLGxr51chvlbPxcRWxxvp6aVO1c-wNUY8Nfo7Djad6VKQMaueoU5qAYMlv26d7Rt5PuFkeADZRKzf319oAd8KJEgNVzeHoZnB~eMNrdscKmbPmUjEpmi53lEbA2uEhvk6xG9G7Jef033QJkALgj7X7FxViA7DH41ECDCmKzs8Z~S1qsdaA__'}} 
                style={{width: 375, height: 200, borderRadius: 5}}/>
            </View>
            <View style={{ width: 380 ,flexDirection: 'row', marginTop: 20, justifyContent: 'space-between'}}>
                <Text style={styles.headingText}>$59</Text>
                <View style={[stylesLocal.ratingContainer, {marginRight: 10}]}>
                    <Text style={stylesLocal.ratingText}>⭐ 4.5</Text>
                    <Text style={stylesLocal.reviewText}>(99 reviews)</Text>
                </View>
            </View>
            <View style={{width: 375, marginTop: 20, paddingTop: 20, borderTopWidth: 1, borderTopColor: 'rgba(236, 236, 236, 1)'}}>
                <Text style={styles.headingText}>Description</Text>
                <Text style={{width: '90%', fontSize: 14, color: 'rgba(190, 190, 190, 1)', marginLeft: 10, marginTop: 10}}>Quis occaecat magna elit magna do nisi ipsum amet excepteur tempor nisi exercitation qui...</Text>
                <View style={{marginTop: 20, marginLeft: 10, flexDirection: 'row'}}>
                    <View style={{justifyContent: 'space-between', marginRight: 75}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}> 
                            <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/41cc/4e71/4fec5dd2801cf8f5147694f1aa0d86cb?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=anya39Vy289FdxmHJXyNsXaTDT-2QhNuNb-DwH6GRxazseEckkpupwOiCmSURn6Tam4WX8f-NvARa4ZTPNh9weqmaNbT9otKOAeO40793z3a9xJu9W4jCYk4j78GKRNP53XRzOH2xgYdJKN~UHMo5NUcz8KJEdPl78K6HSry-cvvR2voNefQAteynnxNoZkmgc~AIANaGGafr-1Pwy7goPPAEmCCja8Mu8ldAFc59qjYLqCa-SSmLy3ySq1692ET8v4diBs2Ja5Y5dl17-A7iDQ8wiCxgI5yVgvxxFhDuwap88wXFHjoER9W1Vx0oLE3~4NX-9XEHqMDoSlyXIDcPg__'}} 
                            style={{width: 24, height: 24, marginRight: 10}} />
                            <Text style={{fontSize: 14, color: 'rgba(190, 190, 190, 1)'}}>Express</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}> 
                            <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/bb18/5b4b/6ec731761a31363476e3e4993b8de78b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JdVqe4OlvITT9ABJPjWFiqIY5Q9mXEpKYS1yefwzclldW7C2NDHRlh91Bqt5tTBYYY-kyTJs0H58wDMYJPnrgZjh5kY336fu9NyUswecdAG7trmlfZd1BzCQfxGDIs2QqfewHZS8pw1dv~H4J7mdM9qIF2Dqj4rRjHVXRG5Rc-p7GzQCApC02u77B7XNPxv177mGs5XpKZyzk6-Ns7YYMdcnE5D9tjmGsY~8poeC97E-R0upE9bn2YsQR1ve2-kn2BIp6R9ISpwDhZ1oN3S6M05ySdUUBDUIHZcXkLy4QtQ563fp8qmfgchdsB6Pek2XGYs7CgdCN4~CixazGnDVIA__'}} 
                            style={{width: 24, height: 24, marginRight: 10}} />
                            <Text style={{fontSize: 14, color: 'rgba(190, 190, 190, 1)'}}>Good review</Text>
                        </View>
                    </View>
                    <View style={{justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}> 
                            <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/cf43/f0ba/645df861ccecdffc652b79b510680e3b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iQMXSmgvgxB6~8Mnuf6g3OLn1SYpEFQNPto049FW9rEL3SQhgV77xF6frazEcVDawQolBzTJDxIrqQPpZ9-NhF87n3KuYNawah~LRJBg8pMZTZ-rrtzLekcixAsaVlfBEfm8m8EHF0V9tfmO1PfJ~1SVMeBA-Qf5sc3k17dUMWvhZCSsMMk3PuRl8PIXNH4F8kOlbHa2OT1xJ8qQ6Boyu9MzLCjvbDKcIS2bwbhpTeVXzENYpnYBMKAyoyVlUfaGpUlEJWCxw2OqBjKDXz9h6~4RmIfipSHW59AxPXXaWMSYQX1Q8JYPFxrUmbaKn~NJSNzFa2z-OzTIiLP7BMz0sg__'}} 
                            style={{width: 24, height: 24, marginRight: 10}} />
                            <Text style={{fontSize: 14, color: 'rgba(190, 190, 190, 1)'}}>30-day free return</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}> 
                            <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/0179/bb67/aa2e68583a0abe9e61f01bb7d1021bdd?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sxk~ly7XNYWj7l6-eTh~-7yMMuxsjlXSAEITQpOHm-bWI9BP4qou5RkN2E9k6z78OqheFKKH03crOX0sunkWZrAM7VkAB-tr8cAQqdWo62Ly7hbTzeySQgVh39wdQWWsNmcjhnJQUjwuodxgna71KO68Pr10AJ8ndWtHBPh~uBz6bMa0~1y9h5TnM1ic3s2S3c9i5G5vG8N5WHMClUJJ9xYRdOzIFa12S00OD87BNXuTUMvN2u8l6kXHqKcSsxVUPUR2woGOiLiekfU4T0e~BUkDPSW1idZuRxFO8mS~tOnrLWWtwvYS~nA4nUy5vTlQklfggBjvRPXV6tNwFz-jJw__'}} 
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
                        <Text style={styles.headingText}>4.5/5</Text>
                        <Text style={[stylesLocal.reviewText, {marginLeft: 10, marginTop: 10}]}>(99 reviews)</Text>
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
                        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/1e36/7048/a09819519fec2ae49c883f687c76c9e4?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PlJDt2p4Vm6zGBT1bd0JccJhfmN4OmKZ81XC-hPv-vRv2CfCIdBEusLu797PQd~aL84NsorLJkdBqivGkhLQO3d7safDVa0k8rvogATm-XQW4T4pesCNuuGPuqH7d5DHzk5wsozc2llQCo~AslbxO44tQ3zC1r02f0kltsXRXw5OhxUbR-XAoxZyISGtNXTL-JA4cjHHyPaT5KKIiTYYe1paAbxrx204rLoav~fdM~FfHg1LDML-koemSiGvGqgkPFj0D86CiXgNWDMEAI0eR6w3Fp9Zoq~0iZ4RHxHKeFVBoe~dqEL9XmBWiHmu4jGPh7fvUZYP-5hqKkVbk14UFA__'}}
                        style={{width: 36, height: 36}} />
                        <View style={{width: '45%'}}>
                            <Text style={styles.headingText}>Jevon Raynor</Text>
                            <Text style={[stylesLocal.reviewText, {marginLeft: 10}]}>Deserunt minim incididunt cillum</Text>
                        </View>
                        <Text style={[stylesLocal.reviewText, {marginLeft: 10}]}>A day ago</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/0ecb/0264/ed6bae405d7a1f06d2b702842000ca23?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JGNyGkplOrRkCZt25dT2PbzPf8YM7MCd4eJrd0bTAEk~vbp35FcJV5elezWIu2EFTAAUzeiD7IaJq5knuylVMYHWTrnfkBZpg4AOSemB77Hx5pmLQYKx36GUHBdm4mjw0r3d7budJGW0Tg2J1bUdrJjWBeSsv3pyQTrIaEnX7PFHMgqc4e~ihTyKnIXnnDuXhiiT~ibVURMMnvU~c5-QYx9WF3ket7LQ9tPWbNVcF882tH0M5uEf6m8KplawBYEv0gZzQRcpTBb7~mqsBGkisWcsuUYW5sDLpyM1fdlcrIOGWfk9nWvYDWlHZF3ypisYc0md77xkVcqEQIM0j2W-Ew__'}}
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
                <View style={{flexDirection:'row', alignItems: 'center', marginLeft: 10}}>
                    <View style={{width: 40, height: 40, backgroundColor: 'rgba(0, 224, 255, 1)', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/3c09/72f3/ebe516772992a6d99c8158808ee84571?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mt-WNYxW0kgVxhiscq0v9vYP9-GyTHUYE7GYEDCNs4Oy-~DlGenjm8vCtJ9uDqOHg7HpB1ixc1ox0zmdA9yi8PYaoy599PHeEG7KexNIvBWpXiGGu7Ah-Tc5LEjj-hHDbp3zhdGjFnqniIGmZmY5xYBoUMkPzS0l3TchMf56DInK2dp08C7vFCIMym7hl3AxAbDcN93avsyoS3uuCRzq99d99HmrBe3Ed~ghiHL2GOsv7Id6EPR6l16u--N1r1aqCUVeK6Mk-OkUqRSU2DQIa03r3oIrko00t6ZKB6lrXVt2nnRRaYsWB~dXjV-rsn0AldBQDG0nQrn2Vpq~14PGUw__'}} 
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
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20,marginTop: 20, paddingTop: 20, borderTopWidth: 1, borderTopColor: 'rgba(236, 236, 236, 1)'}}>
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