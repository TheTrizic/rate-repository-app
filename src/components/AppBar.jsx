import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER} from '../graphql/queries';



const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.backAppBar,
	},
});

const AppBar = () => {
	const { data, error, loading } = useQuery(AUTHORIZED_USER);
	if (loading) return null;
	if (error) return null;
	const authorized = data.authorizedUser;
	return(
		<View style={styles.container}>
			<ScrollView horizontal>
				<AppBarTab text = 'Repositories' path="/"/>
				{!authorized
					? <AppBarTab text = 'Sign In' path="/signin"/>
					: <AppBarTab text = 'Sign out' path="/signout"/>
				}
			</ScrollView>
		</View>
	);
};

export default AppBar;