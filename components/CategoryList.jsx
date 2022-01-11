'use strict';

import React, {useState} from 'react';

import {
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';

import COLORS from '../constants/colors'

const CategoryList = ({ categories, index}) => {

  const [categorySelected, setCategorySelected ] = useState(0);

    return (
      <View style={styles.categoryList}>
        { categories.map((item, index ) => (
          <TouchableOpacity 
            onPress={() => setCategorySelected(index)}
            activeOpacity={0.8}
             key={index} 
          >
            <Text 
              key={index} 
              style= {
                [
                  styles.text, 
                  categorySelected === index && styles.textSelected
                ]
                }>
              {item}
            </Text>
          </TouchableOpacity>
        )) }
      </View>
    );
}



const styles = StyleSheet.create({
  categoryList : {
    flexDirection : 'row', 
    marginTop : 30, 
    marginBottom : 20, 
    justifyContent : 'space-between'
  }, 
  text : {
    color : 'grey', 
    fontWeight : 'bold', 
    fontSize : 16
  }, 
  textSelected : {
    color : COLORS.green, 
    paddingBottom : 5, 
    borderBottomWidth : 2, 
    borderColor : COLORS.green,
  }
});

export default CategoryList;