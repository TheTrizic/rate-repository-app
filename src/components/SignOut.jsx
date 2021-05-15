import React, { useEffect } from 'react';
import {useHistory} from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const  SignOut = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const history = useHistory();

	const logout = async () => {
		await authStorage.removeAccessToken(); 
		await apolloClient.resetStore();
		history.push('/');
	};

	useEffect(() => {
		logout();
	},[]);



	// eslint-disable-next-line react/react-in-jsx-scope
	return (<></>);
};

export default SignOut;