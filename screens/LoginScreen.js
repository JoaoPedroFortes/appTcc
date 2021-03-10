
import React, { Component, useState } from 'react';
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

    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(1);
    return (
        <View style={{ flex: 1, backgroundColor: "#212121", paddingTop: 100, alignItems: 'center', justifyContent: 'center', }}>

            <View style={styles.inputView}>
                <TextInput onChangeText={email => setEmail(email)} style={styles.inputs} placeholder="Digite seu Email..." placeholderTextColor="black"></TextInput>
                <TextInput onChangeText={password => setPassword(password)} style={styles.inputs} placeholder="Digite sua Senha..." placeholderTextColor="black" secureTextEntry></TextInput>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cadBtn}>
                <Text style={styles.loginCad}>Cadastre-se</Text>
            </TouchableOpacity>


        </View>

    );
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
        fontSize:20
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

});
