'use strict';

import React from 'react';

import {
  View,
  Text, 
  StyleSheet,
  Dimensions, 
  Image, 
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'


import COLORS from '../constants/colors'

const width = Dimensions.get("screen").width / 2 - 30

const Plant = ({plant, navigation }) => {
    return (
    	<TouchableOpacity
    		onPress={() => navigation.navigate("Details", plant)}
    	>
	      <View style={styles.plant}>
	      	<View style={styles.header}>
	      		<View style={[styles.favoriteContainer, {backgroundColor : plant.like ? 'rgba(245,42,42,0.2)' : 'rgba(0,0,0,0.2)'}]}>
	      			<Icon name="favorite" size={18} color={ plant.like ? COLORS.red : COLORS.dark } />
	      		</View>
	      		
	      	</View>
	      	<View style={styles.imageContainer}>
	      		<Image
	      			style={styles.image}
	      			source={plant.img}
	      		/>
	      	</View>
	      	<Text style={styles.text}>{plant.name} </Text>
	      	<View style={styles.priceContainer}>
	      		<Text style={styles.price}>${plant.price} </Text>
	      		<View style={styles.plusContainer}>
	      			<Text style={styles.plus}>+</Text>
	      		</View>
	      	</View>
	      </View>
	    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
	plant : {
		height : 225, 
		backgroundColor : COLORS.light, 
		marginHorizontal : 2, 
		borderRadius : 10, 
		marginBottom : 20, 
		padding: 15,
		width,
	},
	header : {
		alignItems : 'flex-end', 
		width : '100%'
	},
	favoriteContainer : {
		width : 30, 
		height : 30, 
		borderRadius : 15, 
		alignItems : 'center', 
		justifyContent : 'center', 

	}, 
	image : {
		flex : 1, 
		resizeMode : 'contain'
	}, 
	imageContainer : {
		height : 100, 
		alignItems : 'center'
	}, 
	text : {
		fontWeight : 'bold', 
		fontSize : 17, 
		marginTop : 10,
	}, 
	priceContainer : {
		flexDirection : 'row', 
		justifyContent : 'space-between', 
		marginTop : 10,
		width : '100%'
	}, 
	price : {
		fontSize : 19, 
		fontWeight : 'bold'
	}, 
	plusContainer : {
		width : 25, 
		height : 25, 
		backgroundColor : COLORS.green, 
		borderRadius : 5, 
		justifyContent : 'center', 
		alignItems : 'center'
	}, 
	plus : {
		color : COLORS.white, 
		fontSize : 22, 
		fontWeight : 'bold',
	}
});

export default Plant;