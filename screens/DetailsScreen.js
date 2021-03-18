/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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
import * as RNLocalize from "react-native-localize";

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
export default function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>

            <View style={styles.avatar}>
                <Image source={require('../assets/jp.jpeg')} style={styles.img} />

            </View>
            <ScrollView style={{ width:width, padding:20 }}>
                <Text>Nome:</Text>
                <TextInput value="João Pedro" style={styles.inputForm} ></TextInput>
                <Text>Celular: </Text>
                <TextInput textContentType="telephoneNumber" style={styles.inputForm}></TextInput>
                <Text>Email de Contato: </Text>
                <TextInput textContentType="emailAddress" style={styles.inputForm}></TextInput>
                <Text>Instagram: </Text>
                <TextInput  style={styles.inputForm}></TextInput>
                <Text>Instagram: </Text>
                <TextInput  style={styles.inputForm}></TextInput>
                <Text>Twitter: </Text>
                <TextInput  style={styles.inputForm}></TextInput>
                <Text>Link Linkedin: </Text>
                <TextInput  style={styles.inputForm}></TextInput>
                
            </ScrollView>
            <View>
                <TouchableOpacity><Text>Salvar</Text></TouchableOpacity>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({






    scrollView: {
        backgroundColor: Colors.lighter,
    },


    menu: {
        paddingHorizontal: 15,
        bottom: 0,
        position: 'absolute',
        width: '100%',
        height: 55,
        backgroundColor: Colors.white,
        borderTopWidth: 1,

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    content: {
        paddingTop: 20,
        width: width,
        flexWrap: 'wrap'
    },

    img: {
        width: 150,
        height: 150,
        borderRadius: 100
    },

    avatar: {
        padding: 10,
        width:width,
        backgroundColor:azulClaro
    },

    inputForm: {
        marginTop: 4,
        marginBottom: 4,
        borderWidth: 1,
        width: '90%',
    },







});
