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



import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons'

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

                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <ScrollView>
                       
                           <View><Icon name="facebook" /></View> 
                 
                        
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
        marginTop: 90
    }
});
