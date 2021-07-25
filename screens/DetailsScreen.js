/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState, useEffect } from 'react';

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
import * as RNLocalize from "react-native-localize";

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';


/**
 * 
 *  <Text>Celular: </Text>
                <TextInput textContentType="telephoneNumber"  value={data[0].celular} style={styles.inputForm}></TextInput>
                <Text>Email de Contato: </Text>
                <TextInput textContentType="emailAddress" value={data[0].email}style={styles.inputForm} ></TextInput>
                <Text>Instagram: </Text>
                <TextInput style={styles.inputForm}  value={data[0].instagram}></TextInput>
                <Text>Facebook: </Text>
                <TextInput style={styles.inputForm}  value={data[0].facebook}></TextInput>
                <Text>Twitter: </Text>
                <TextInput style={styles.inputForm}  value={data[0].twitter} ></TextInput>
                <Text>Link Linkedin: </Text>
                <TextInput style={styles.inputForm}  value={data[0].linkedin}></TextInput>
 */

const azulClaro = "#2196f3";
const width = Dimensions.get('window').width;

const dados = [];

export default function DetailsScreen({ navigation }) {
    const route = useRoute();

    const [data, setData] = useState([]);


    const fetchData = async () => {
        try {
            const response = await axios.post('https://tevi-api-joaopedrofortes.vercel.app/api/user/dadosContato', {
                userId: route.params
            }).then((response) => {
                return response
            }, (error) => {
                console.log(error)
            })

            setData(response.data[0])
        } catch (e) {
            alert(e)
        }
    }


    useEffect(() => {
        console.log("oi")
        fetchData(data)
    }, [data === []])



    const handleChangeCelular = e => {
        setData(old => (
            {
                ...old,
                celular: e
            }));
    };

    const handleChangeEmail = e => {
        setData(old => (
            {
                ...old,
                email: e
            }));
    };
    const handleChangeInsta = e => {
        setData(old => (
            {
                ...old,
                instagram: e
            }))};



    return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>

            <Text> </Text>
            <View style={styles.avatar}>
                <Image source={require('../assets/jp.jpeg')} style={styles.img} />

            </View>

            <View>
                <ScrollView style={{ width: width, padding: 20 }}>

                    <Text>Nome:</Text>
                    <TextInput value="jose" style={styles.inputForm} ></TextInput>
                    <Text>Celular: </Text>
                    <TextInput textContentType="telephoneNumber" id="celular" value={data.celular} name="celular" onChangeText={handleChangeCelular} style={styles.inputForm}></TextInput>
                    <Text>Email de Contato: </Text>
                    <TextInput textContentType="emailAddress" value={data.email} style={styles.inputForm} onChangeText={handleChangeEmail} ></TextInput>
                    <Text>Instagram: </Text>
                    <TextInput style={styles.inputForm} value={data.instagram} onChangeText={handleChangeInsta}></TextInput>
                    <Text>Facebook: </Text>
                    <TextInput style={styles.inputForm} value={data.facebook}></TextInput>
                    <Text>Twitter: </Text>
                    <TextInput style={styles.inputForm} value={data.twitter} ></TextInput>
                    <Text>Link Linkedin: </Text>
                    <TextInput style={styles.inputForm} value={data.linkedin}></TextInput>

                </ScrollView>

            </View>
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
        borderRadius: 100,
        alignSelf: 'center'
    },

    avatar: {
        padding: 10,
        width: width,
        backgroundColor: azulClaro
    },

    inputForm: {
        marginTop: 4,
        marginBottom: 4,
        borderWidth: 1,
        width: '90%',
    },







});
