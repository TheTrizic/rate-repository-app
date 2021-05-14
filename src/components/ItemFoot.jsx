import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';



const FooterStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexGrow: 1,
		margin: 10
	},
	infoContainer: {
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center"
	},
});

const ItemFoot = ({stars, forks, reviews, rating}) => {
	const rstars = Math.round(stars/100) / 10;
	const rforks = Math.round(forks/100) / 10;
	return (
		<View style={FooterStyles.container}>
			<View style={FooterStyles.infoContainer}>
				<Text fontWeight="bold" fontSize="subheading">{rstars}{'k'}</Text>
				<Text color='textSecondary'>{'Stars'}</Text>
			</View>
			<View style={FooterStyles.infoContainer}>
				<Text fontWeight="bold" fontSize="subheading">{rforks}{'k'}</Text>
				<Text color='textSecondary'>{'Forks'}</Text>
			</View>
			<View style={FooterStyles.infoContainer}>
				<Text fontWeight="bold" fontSize="subheading">{reviews}</Text>
				<Text color='textSecondary'>{'Reviews'}</Text>
			</View>
			<View style={FooterStyles.infoContainer}>
				<Text fontWeight="bold" fontSize="subheading">{rating}</Text>
				<Text color='textSecondary'>{'Rating'}</Text>
			</View>
		</View>
	);
};

export default ItemFoot;