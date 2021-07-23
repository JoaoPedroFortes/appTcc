import React, { useState } from 'react';

const axios = require('react-native-axios');

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StatusBar,
    Touchable,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';


const azulClaro = "#2196f3";
const width = Dimensions.get('window').width;
export default function HomeScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: azulClaro }}>
            <View style={styles.fotoNoMeio}>
                <View style={styles.moldura}>
                    <Image source={require('../assets/jp.jpeg')} style={styles.image} />
                </View>
            </View>
            <View style={styles.container}>

                <Text style={styles.nome}> João Pedro Fortes</Text>

                <View style={{ paddingTop: 20 }}>
                    <ScrollView>

                        <View style={styles.icons}>
                            <Icon style={styles.icon} name="facebook" size={50} color="white" />
                            <Icon style={styles.icon} name="instagram" size={50} color="white" />
                            <Icon style={styles.icon} name="linkedin" size={50} color="white" />
                            <Icon style={styles.icon} name="whatsapp" size={50} color="white" />
                            <Icon style={styles.icon} name="twitter" size={50} color="white" />
                            <Icon style={styles.icon} name="github" size={50} color="white" />
                            <Icon style={styles.icon} name="home" size={50} color="white" />
                            <Icon style={styles.icon} name="snapchat" size={50} color="white" />
                        </View>


                    </ScrollView>
                </View>

                <StatusBar style="auto" />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#212121',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: azulClaro,
    },
    moldura: {
        backgroundColor: '#212121',
        width: (width / 3) + 20,
        borderRadius: 100,
        height: (width / 3) + 15,
        marginTop: 100,

    },
    icons: {
        alignSelf:'center',
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },

    icon:{
        padding:20
    },

    container: {
        flex: 1,
        backgroundColor: '#212121',
        width: width,
        position: 'relative',
        marginTop: -75

    },

    fotoNoMeio: {
        position: 'relative',
        zIndex: 1000,
        paddingTop: 120
    },

    image: {
        width: width / 3,
        alignSelf: 'center',
        height: width / 3,
        borderRadius: 100,
        marginTop: 10
    },

    nome: {
        color: 'white',
        alignSelf: 'center',
        marginTop: 90,
        fontSize:20,
        marginBottom:20
    }
});
