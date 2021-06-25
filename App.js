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

import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import CalendarStrip from 'react-native-calendar-strip';
import moment, { isMoment, locale } from 'moment';
import { } from 'moment-timezone';
import { State } from 'react-native-gesture-handler';
import 'moment/locale/pt-br';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const brLocale = require('moment/src/locale/pt-br')

moment().locale('pt-br');

const azulClaro = "#2196f3";
const width = Dimensions.get('window').width;




function SearchScreen({ navigation }) {

const route = useRoute();
const user = route.params

 console.log("usuario: "+ user)
  const locale = {
    name: 'pt-br',
    config: brLocale
  }
  const now = moment().tz(RNLocalize.getTimeZone()).format();
  console.log('hoje e ' + now)
  const [dia, setDia] = useState('');
  const selected = date => {
    setDia(date)
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f1f1' }}>
      <View style={styles.header}>

        <Text style={styles.titulo}>Te-vi</Text>
        <View style={styles.profileIcon}>
          <TouchableOpacity onPress={() => navigation.navigate('Details',user)}><View><Image source={require('./assets/jp.jpeg')} style={{ width: 50, height: 50, borderRadius:100 }} /></View></TouchableOpacity>
        </View>
      </View>
      <View style={{ minHeight: 1, minWidth: 1, flex: 1 }}>
        <CalendarStrip
          scrollable
          style={{ height: 110, paddingTop: 20, paddingLeft: 20, paddingBottom: 8, width: width }}
          calendarColor={azulClaro}
          calendarHeaderStyle={{ color: 'black' }}
          dateNumberStyle={{ color: 'black' }}
          dateNameStyle={{ color: 'black' }}
          iconContainer={{ flex: 0.1 }}
          maxDate={now}
          onDateSelected={selected}

        />
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white', paddingTop: 20 }}>
          <Text>{dia.toString()}</Text>
        </View>
      </View>
      <View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text>home</Text></TouchableOpacity>
      </View>
    </View>
  )
}
/*
 saveFireBase(){
      this.database
          .filter(card => card.selected===true)
          .forEach(selectedCard => {
            nando
                .child('collection')
                .child(selectedCard.id)
                .set(selectedCard)
            console.log(selectedCard.name)
          })
        alert('saved ')
    },
       .child('collection')
        .once('value', a =>
            this.myFirebaseDB = Object.values( a.val() )
        )
    
    
    */
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Search" options={{ headerShown: false }} component={SearchScreen} />
        <Stack.Screen name="Details" options={{ headerShown: false }} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({

  header: {
    width: width,
    flexWrap: 'nowrap',
    paddingBottom: 20,
    backgroundColor:"#2196f3",
    borderBottomWidth:1,
  },

  titulo: {
    fontSize: 35,
    color: Colors.white,
    paddingTop:10,
    paddingLeft:10
  },

  profileIcon: {
    alignSelf: 'flex-end',
    height: 40,
    width: 50,
    marginTop: -40,
    right:10
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


