import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import data from './Data';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';


export default function App() {

  const [isLoaded] = useFonts({ 
    'TitleFont': require('./assets/fonts/Roboto-Medium.ttf'),
  })

  if(!isLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
      <View style={styles.container}>
        <FlatList 
          data={data}
          renderItem={ ({ item }) => (
            // Card
            <View style={styles.card}>
  
              {/* Title */}
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
                <View>
                  <Text style={styles.onlienText}>Online</Text>
                  <Text style={styles.onlineNumText}>{item.online}</Text>
                </View>
              </View>
  
              {/* Image  */}
              <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.image}/>
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={styles.icon}>
                    <MaterialIcons name="chat-bubble" size={32} color="#ebebeb" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.icon}>
                    <Ionicons name="ios-call" size={32} color="#ebebeb" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.icon}>
                    <Ionicons name="ios-videocam" size={32} color="#ebebeb" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      </>
    );
  }
}


const backgroundColor = '#282828'
const IconColor = '#ebebeb'
const textYellow = '#ffcc00'

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    paddingHorizontal: 3,
  },
  card: {
    width: '100%',
    marginBottom: 3,
    borderRadius: 10,
    backgroundColor: backgroundColor,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'TitleFont',
    letterSpacing: 3,
  },
  onlienText: {
    color: '#00cb3d',
    fontFamily: 'TitleFont',
  },
  onlineNumText: {
    fontFamily: 'TitleFont',
  },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    height: 150,
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
  },
  eyeIcon: {
    textAlign: 'center',
  },
  onlineNumText: {
    flex: 2/3,
    textAlignVertical: 'center',
    color: '#ebebeb',
  },
  icon: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center'
  }
});
