
import React, { Component, useState } from 'react';

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
    Alert,
    TouchableOpacity,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';




export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('joaopbfortes@gmail.com');
    const [password, setPassword] = useState('senha1234');
    return (
        <View style={{ flex: 1, backgroundColor: "#212121", paddingTop: 100, alignItems: 'center', justifyContent: 'center', }}>
            <Image source={require("../assets/logoTeVi.png")} style={styles.image}></Image>
            <View style={styles.inputView}>
                <TextInput onChangeText={email => setEmail(email.toLowerCase())} style={styles.inputs} placeholder=" Digite aqui seu e-mail" placeholderTextColor="gray"></TextInput>
                <TextInput onChangeText={password => setPassword(password)} style={styles.inputs} placeholder=" Digite aqui sua senha" placeholderTextColor="gray" secureTextEntry></TextInput>
            </View>


            <TouchableOpacity style={styles.loginBtn} onPress={() => auth(email, password, navigation)} >
                <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cadBtn}>
                <Text style={styles.loginCad}>Cadastre-se</Text>
            </TouchableOpacity>


        </View>

    );
}
//navigation.navigate('Search')
async function auth(login, password, navigation) {
    try {
        console.log("login:", login)
        console.log("pass: ", password)
        console.log('entrei')
        await axios({
            url: 'https://tevi-api-joaopedrofortes.vercel.app/api/auth',
            method: 'POST',
            data: {
                login: login,
                password: password
            }

        }).then((response) => {
            if (response.data != false) {
                
                navigation.navigate('Search', response.data.id)
            } else {
                Alert.alert('Erro de Login', 'Ops... Verifique sua senha e tente novamente!');
            }

        });


        /*
        if (user != false) {
            navigation.navigate('Search',{"user":"joao"})
        }*/

    } catch (e) {
        console.log(e)
    }
}

const styles = StyleSheet.create({
    inputView: {
        width: "90%",
        marginBottom: 30,
        justifyContent: "center",
        paddingLeft: 20,
    },
    inputs: {
        backgroundColor: 'white',
        marginBottom: 10,
        fontSize: 15,
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 20
    },
    loginText: {
        color: "white",
        fontSize: 15
    },
    loginCad: {
        color: "black",
        fontSize: 15
    },
    loginBtn: {
        width: "80%",
        color: "white",
        backgroundColor: "#0069c0",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    cadBtn: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: 'black',
        borderWidth: 1

    },

    image: {
        width: 200,
        height: 200,
        marginTop: -80,
        borderRadius: 100
    },


});
