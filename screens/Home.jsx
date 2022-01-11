'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView, 
  TextInput, 
  FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

import COLORS from '../constants/colors'

import CategoryList from '../components/CategoryList'

import plants from '../constants/plants'

import Plant from '../components/Plant'

const Home =  ({navigation, route}) => {
  
  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];
  
  return (


      <SafeAreaView style={styles.safearea} >
        <View style={styles.header}>
          <View>
            <Text style={styles.firstText}>Welcome to</Text>
            <Text style={styles.secondText}>Plant Shop</Text>
          </View>
          <Icon name="shopping-cart" size={28}/>
        </View>

        <View style={styles.body}>
          <View style={styles.searchBar}>
            <Icon style={{marginLeft : 20 }} name="search" size={28} />
            <TextInput placeholder="Search" style={styles.input}  />
          </View>

          <View style={styles.sortBtn}>
            <Icon name="sort" size={30} color={COLORS.white} />
          </View>
          

        </View>
        <CategoryList categories={categories} />
        <FlatList  
          columnWrapperStyle={{justifyContent : 'space-between'}}
          data = {plants}
          renderItem = { ({item}) => (<Plant route={route} navigation={navigation} plant={item} />) }
          numColumns={2}
          keyExtractor = {(item, index) => index}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop : 10, 
            paddingBottom : 50
          }}
        />
      </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  safearea : {
    flex : 1, 
    paddingHorizontal : 20, 
    paddingVertical : 40, 
    backgroundColor : COLORS.white,
  }, 
  header : {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
  firstText : {
    fontSize : 25, 
    fontWeight : 'bold',
  }, 
  secondText : {
    fontSize : 38, 
    fontWeight : 'bold', 
    color : COLORS.green
  }, 

  body : {
    marginTop : 30, 
    flexDirection : 'row'
  },

  searchBar : {
    height : 50, 
    backgroundColor : COLORS.light , 
    borderRadius : 10, 
    flex : 1, 
    flexDirection : 'row', 
    alignItems : 'center' 
  }, 

  input : {
    fontSize   : 18, 
    fontWeight  : 'bold', 
    color : COLORS.dark, 
    flex : 1,
  }
  , 
  sortBtn : {
    marginLeft : 10, 
    height : 50, 
    width : 50, 
    backgroundColor : COLORS.green,
    justifyContent : 'center', 
    alignItems : 'center', 
    borderRadius : 10
  }
});


export default Home;