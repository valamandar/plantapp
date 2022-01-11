'use strict';

import React, { Component , useState} from 'react';

import {
  StyleSheet,
  View,
  Text, 
  SafeAreaView, 
  Image, 
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

import COLORS from '../constants/colors'

const Details = ({navigation , route}) => {

    const [ orderNumber , setOrderNumber ] = useState(1)

    if(orderNumber < 0){
      setOrderNumber(0)
    }

    const plant = route.params
    return (
      <SafeAreaView style={{ flex : 1, paddingTop : 50 , backgroundColor : COLORS.white }} >
      	<View style={styles.header}>
          <Icon name="arrow-back" size={28} onPress={() => navigation.goBack() } />
          <Icon name="shopping-cart" size={28} onPress={() => navigation.goBack() } />
        </View>
        <View style={styles.imageContainer}>
          <Image source={plant.img} style={styles.image}  />
        </View>
        <View style={styles.detailsContainer}>
          <View style={{marginLeft : 20, flexDirection : 'row', alignItems: 'flex-end'}}>
            <View style={styles.ligne} />
            <Text style={styles.text}>Meilleur Choix</Text>
          </View>
          <View style={
            {
              marginLeft : 20,
              marginTop  : 20, 
              flexDirection : 'row', 
              justifyContent : 'space-between', 
              alignItems : 'center' 
            }
          }>
            <Text style={{fontSize : 22, fontWeight : 'bold'}} > {plant.name} </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>
                ${plant.price}
              </Text>
            </View>
          </View>
          <View style={{
            paddingHorizontal : 20, 
            marginTop : 10
          }}>
            <Text style={{fontSize : 20, fontWeight : 'bold'}}> A propos </Text>
            <Text style={{ marginTop : 15, color : 'grey', fontSize : 16, lineHeight: 22 }}> {plant.about} </Text>
            <View style={{ marginTop : 20, width : '100%', flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
              <View style={{flexDirection : 'row', alignItems : 'center'}}>
                
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress = {() => setOrderNumber(orderNumber-1)}
                >
                  <View style={styles.borderBtn}>
                    <Text style={styles.borderBtnText}>-</Text>
                  </View>
                </TouchableOpacity>
                <Text style={{fontSize : 20, fontWeight : 'bold', marginHorizontal : 10}} > {orderNumber} </Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress = {() => setOrderNumber(orderNumber+1)}
                >
                  <View style={styles.borderBtn}>
                    <Text style={styles.borderBtnText}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.buyBtn}>
                <Text style={{color : COLORS.white, fontSize : 18, fontWeight : 'bold'}}>Acheter</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  header : {
    paddingHorizontal : 20, 
    marginTop : 20, 
    flexDirection :'row', 
    justifyContent :'space-between', 
    alignItems : 'center', 
  }, 
  imageContainer : {
    flex : 0.45, 
    marginTop : 20, 
    justifyContent : 'center', 
    alignItems: 'center',
  }, 
  image : {
    resizeMode : 'contain', 
    flex : 1,
  }, 
  detailsContainer : {
    flex : 0.55, 
    backgroundColor : COLORS.light, 
    marginHorizontal : 7, 
    marginBottom : 7, 
    borderRadius : 20, 
    marginTop: 30, 
    paddingTop : 30
  }, 
  ligne : {
    width : 25, 
    height : 2, 
    backgroundColor : COLORS.dark,
    marginBottom : 5, 
    marginRight : 3,
  }, 
  text : {
    fontSize : 18, 
    fontWeight : 'bold', 
  }, 
  priceContainer : {
    backgroundColor : COLORS.green , 
    width : 80, 
    height : 40, 
    borderTopLeftRadius : 25, 
    borderBottomLeftRadius :25,
    alignItems : 'center', 
    justifyContent : 'center'
  }, 
  price : {
    color : COLORS.white, 
    fontWeight : 'bold', 
    fontSize : 18
  }, 
  aboutContainer : {
    paddingHorizontal : 20, 
    marginTop : 10
  }, 
  borderBtn :{
    borderColor : 'grey', 
    borderWidth : 1, 
    borderRadius : 5, 
    height : 40, 
    width : 60,
    justifyContent : 'center', 
    alignItems : 'center',
  }, 
  borderBtnText : {
    fontSize : 28, 
    fontWeight : 'bold'
  },
  buyBtn : {
    width : 150, 
    height : 50, 
    justifyContent : 'center', 
    alignItems : 'center', 
    backgroundColor : COLORS.green, 
    borderRadius : 30
  }
});


export default Details;