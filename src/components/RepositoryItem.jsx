import React from 'react';
import { View, StyleSheet } from 'react-native';
import ItemHeader from './ItemHeader';
import ItemFoot from './ItemFoot';
import Text from './Text';


import theme from '../theme';


const styles = StyleSheet.create({
	flexContainer: {
		flexDirection: 'column',
	},
	flexItem: {
		flexGrow: 1,
		backgroundColor: 'white',
	},
	languageContainer: {
		paddingLeft: 60,
		alignSelf: 'flex-start',
	},
});

const RepositoryItem = ({item}) => {
	return (
		<View style={styles.flexContainer}>
			<View style={styles.flexItem}>
				<ItemHeader url={item.ownerAvatarUrl} name = {item.fullName} description = {item.description}/>
				<View style={styles.languageContainer}>
					<Text color = 'textWhite' style={{
						backgroundColor: theme.colors.primary, borderRadius: 5, borderWidth: 2,
						textAlign: 'center', borderColor: theme.colors.primary}}>{item.language}</Text>
				</View>
				<ItemFoot stars = {item.stargazersCount} forks = {item.forksCount}
					reviews = {item.reviewCount} rating = {item.ratingAverage}/>
			</View>
		</View>
	);
};

export default RepositoryItem;