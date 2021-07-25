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
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const brLocale = require('moment/src/locale/pt-br')

moment().locale('pt-br');

const azulClaro = "#2196f3";
const width = Dimensions.get('window').width;



const users = [
  {
    avatar: './assets/jp.jpeg',
    name: 'João Pedro Fortes',
    data: 'visto em 12-06-2021'
  },
  {
    avatar: './assets/jp.jpeg',
    name: 'ana',
    data: 'visto em 12-06-2021'
  },
  {
    avatar: './assets/jp.jpeg',
    name: 'astolfo',
    data: 'visto em 12-06-2021'
  },
  {
    avatar: './assets/jp.jpeg',
    name: 'geraldo',
    data: 'visto em 12-06-2021'
  },
  {
    avatar: './assets/jp.jpeg',
    name: 'claudia',
    data: 'visto em 12-06-2021'
  },
  {
    name: 'camila',
    data: 'visto em 12-06-2021'
  },
  {
    name: 'karina',
    data: 'visto em 12-06-2021'
  },
]

function SearchScreen({ navigation }) {

  const route = useRoute();
  const user = route.params

  console.log("usuario: " + user)
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
  /*
    let message = ()=>{
      if(now.getTimeZone)
    }
  */
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
        <ScrollView style={{ backgroundColor: Colors.black }}>

          {users.map((u, i) => {
            return (
              <View key={i} >
                <TouchableOpacity onPress={() => navigation.navigate('Home',user)}>

                  <Card>
                    <Card.Content style={{ backgroundColor: Colors.white, flexWrap: 'nowrap' }}>

                      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Image source={require('./assets/jp.jpeg')} style={{ width: 80, height: 80, borderRadius: 100 }} />
                        <View style={{ padding: 15 }}>
                          <Title>{u.name}</Title>
                          <Paragraph> {u.data}</Paragraph>
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


