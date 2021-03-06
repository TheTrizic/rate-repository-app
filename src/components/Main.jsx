import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';


import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SignOut from './SignOut';
import AppBar from './AppBar';
import theme from '../theme';



const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: theme.colors.mainBackground,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar/>
			<Switch>
				<Route path="/" exact>
					<RepositoryList />
				</Route>
				<Route path="/signin" exact>
					<SignIn />
				</Route>
				<Route path="/signout" exact>
					<SignOut />
				</Route>
				<Redirect to="/" />
			</Switch>
		</View>
	);
};

export default Main;