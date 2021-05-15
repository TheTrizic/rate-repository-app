import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';


const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.backAppBar,
	},
});

const AppBar = () => {
	return(
		<View style={styles.container}>
			<ScrollView horizontal>
				<AppBarTab text = 'Repositories' path="/"/>
				<AppBarTab text = 'Sign In' path="/signin"/>
			</ScrollView>
		</View>
	);
};

export default AppBar;