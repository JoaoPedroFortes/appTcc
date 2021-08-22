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
    PermissionsAndroid,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


const axios = require('react-native-axios');

import * as RNLocalize from "react-native-localize";

import { Avatar, Card, Divider, Paragraph, Title } from "react-native-paper";

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import CalendarStrip from 'react-native-calendar-strip';
import moment, { isMoment, locale } from 'moment';
import { } from 'moment-timezone';
import { State } from 'react-native-gesture-handler';
import 'moment/locale/pt-br';

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Geolocation from 'react-native-geolocation-service';

const brLocale = require('moment/src/locale/pt-br')

moment().locale('pt-br');

const azulClaro = "#2196f3";
const width = Dimensions.get('window').width;




export default function SearchScreen({ navigation }) {

    const route = useRoute();
    const user = route.params

    //   console.log("usuario: " + user)
    const locale = {
        name: 'pt-br',
        config: brLocale
    }
    const now = moment().tz(RNLocalize.getTimeZone()).format();
    //  console.log('hoje e ' + now)
    const [matches, setMatches] = useState([]);

    const selected = async (date) => {
        let dataEscolhida = new Date(date).setUTCHours(0, 0, 0, 0);
        dataEscolhida = moment(dataEscolhida).tz(RNLocalize.getTimeZone())
        dataEscolhida  = JSON.stringify(dataEscolhida).replace("Z","-04:00")
        
        console.log(dataEscolhida)
        try {
            const response = await axios.post('https://tevi-api-joaopedrofortes.vercel.app/api/location/get-prox', {
                userId: user,
                dataHora: JSON.parse(dataEscolhida)
            }).then((response) => {
                setMatches(response.data)

            }, (error) => {
                console.log(error)
            })


        } catch (e) {
            alert(e)
        }


    }







    const hasPermition = async () => {

        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Te-vi localização Permission",
                    message:
                        "Cool Photo App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("permitido");
            } else {
                console.log("denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }

    /*
    (() => {
        try {
            if (hasPermition()) {
                Geolocation.getCurrentPosition(
                    (position) => {
                        //console.log(position);

                        let dataEscolhida = new Date(position.timestamp).setUTCHours(0,0,0,0);
                        dataEscolhida =  moment(dataEscolhida).tz(RNLocalize.getTimeZone())

                        let obj = {
                            userId: route.params,
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            dataHora: dataEscolhida
                        }

                        sendLocation(obj);
                    },
                    (error) => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                );
            } else {
                console.log("nao permitido")
            }
        } catch (e) {
            console.log(e + "ops")
        }
    })()
*/

    const sendLocation = async (obj) => {
        console.log("enviando...")
        try {
            const response = await axios.post('https://tevi-api-joaopedrofortes.vercel.app/api/location', obj).then((response) => {
                console.log("resposta", + response.status)

            }, (error) => {
                console.log(error)
            })


        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e4d5d8' }}>
            <View style={styles.header}>
                <View style={styles.profileIcon}>
                    <TouchableOpacity onPress={() => navigation.navigate('Details', user)}><View><Icon name="cog" size={30} color="white" /></View></TouchableOpacity>
                </View>
            </View>
            <View style={{ minHeight: 1, minWidth: 1, flex: 1 }}>
                <CalendarStrip
                    scrollable
                    style={{ height: 110, paddingTop: 20, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, width: width }}
                    calendarColor={'#212121'}
                    calendarHeaderStyle={{ color: 'white' }}
                    dateNumberStyle={{ color: 'white' }}
                    dateNameStyle={{ color: 'white' }}
                    iconContainer={{ flex: 0.1 }}
                    maxDate={now}
                    highlightDateNumberStyle={{ color: azulClaro }}
                    highlightDateNameStyle={{ color: azulClaro }}
                    daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: azulClaro }}
                    onDateSelected={selected}

                />
                <ScrollView style={{ backgroundColor: '#f1f1f1' }}>

                    {matches.map((u, i) => {
                        return (
                            <View key={i} >
                                <TouchableOpacity onPress={async () => navigation.navigate('Home',  u.id)}>

                                    <Card>
                                        <Card.Content style={{ backgroundColor: Colors.white, flexWrap: 'nowrap' }}>

                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                                <Image source={require('../assets/nem.jpeg')} style={{ width: 80, height: 80, borderRadius: 100 }} />
                                                <View style={{ padding: 15 }}>
                                                    <Title>{u.name}</Title>
                                                    <Paragraph> {u.id}</Paragraph>
                                                </View>

                                            </View>
                                        </Card.Content>
                                    </Card>
                                </TouchableOpacity>

                            </View>
                        )
                    })}

                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        width: width,
        flexWrap: 'nowrap',
        paddingBottom: 20,
        backgroundColor: "#212121",
        borderBottomWidth: 1,
    },



    profileIcon: {
        alignSelf: 'flex-end',
        width: 50,
        marginTop: 10,

    },

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
