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

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <View style={styles.container}>
                    <Image source={require('../assets/jp.jpeg')} style={styles.image} />
                    <View style={styles.header}>
                        <Text style={styles.nome}> João Pedro Fortes</Text>
                    </View>
                    <View>
                        <Text style={[styles.textos]}> Você viu João Pedro no dia 20/09/2020 às 19:50</Text>
                    </View>
                    <Text style={styles.contato}>INFORMAÇÕES DE CONTATO</Text>
                    <ScrollView >
                        <View style={styles.informacoes}>

                            <View style={styles.content}>
                                <Text style={styles.contentLinks}>
                                    Links:
                  </Text>
                            </View>
                            <View style={styles.linksView}>
                                <View style={styles.linksPontos}>

                                </View>
                                <Text style={styles.LinksText}>
                                    https://joaopedrofortes.github.io/
                    {"\n"}{"\n"}
                    https://outrolink.com.br/
                    {"\n"}{"\n"}
                    https://outrolink.com.br/
                    {"\n"}{"\n"}
                    https://outrolink.com.br/
                    {"\n"}{"\n"}
                    https://outrolink.com.br/
                  </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <StatusBar style="auto" />
                </View>
            </View>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} ><Text>search</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text>home</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Details')}><Text>edit</Text></TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    container: { flex: 1 },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {

        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    menu: {
        paddingHorizontal: 15,
        bottom: 0,
        position: 'absolute',
        width: '100%',
        height: 55,
        backgroundColor: "yellow",

        borderTopWidth: 1,

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    content: {
        paddingTop: 20,
        width: '100%',
        flexWrap: 'wrap'
    },

    contentLinks: {
        color: '#2C3540',
        fontSize: 25,
        flexWrap: 'wrap'
    },

    linksView: {
        paddingTop: 20,
        justifyContent: 'center',
        flexWrap: "wrap",
        width: '100%',
        flexDirection: 'row'
    },

    linksPontos: {
        width: '10%',
        flexWrap: 'wrap',

    },
    LinksText: {
        padding: 5,
        fontSize: 20,
        width: '80%',
        flexWrap: 'wrap'
    },
    textos: {
        paddingTop: 1,
        fontSize: 15,
        color: "black",
        bottom: 2,
        backgroundColor: "white",

    },
    input: {
        height: 45,
        alignSelf: 'stretch'
    },

    image: {
        width: '100%',
        alignSelf: 'center',
        height: 350,
        marginTop: 20
    }
});
