import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';



const HeaderStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexGrow: 1,
		margin: 10
	},
	avatar: {
		width: 45,
		height: 45,
		borderRadius: 45 / 2,
	},
	avatarContainer: {
		flexGrow: 0,
		paddingRight: 15,
	},
	infoContainer: {
		flexGrow: 1,
		width: 0,
	},
});

const ItemHeader = ({url, name, description}) => {
	return (
		<View style={HeaderStyles.container}>
			<View style={HeaderStyles.avatarContainer}>
				<Image style={HeaderStyles.avatar} source={{ uri: url }} />
			</View>
			<View style={HeaderStyles.infoContainer}>
				<Text fontWeight="bold" fontSize="subheading">{name}</Text>
				<Text >{description}</Text>
			</View>
		</View>
	);
};

export default ItemHeader;