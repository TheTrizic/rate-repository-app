import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { useHistory } from "react-router-native";
import { Formik } from 'formik';
import * as yup from 'yup';


import FormikTextInput from './FormikTextInput';
import Text from './Text';
import useSignIn from '../hooks/useSignIn';

import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
	},
	InputContainer: {
		flexGrow: 1,
		backgroundColor: 'white',
		justifyContent: "center",
	},
	inputtext: {
		margin: 10,
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,

	},
    
	PressContainer: {
		backgroundColor: theme.colors.primary,
		borderRadius: 5,
		alignItems: "center",
		margin: 10,
		padding: 15,
	},

});

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.required('Username is required'),
	password: yup
		.string()
		.required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
	return (
		<View style={styles.container}>
			<View style={styles.InputContainer}>
				<FormikTextInput name="username" placeholder="Username" style={styles.inputtext} />
			    <FormikTextInput name="password" placeholder="Password" style={styles.inputtext} 
					secureTextEntry={true}/>
				<View style={styles.PressContainer}>
					<Pressable onPress={onSubmit}>
						<Text color='textWhite'>Sign in</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};


const SignIn = () => {
	const [signIn] = useSignIn();
	const history = useHistory();

	const onSubmit = async (values) => {
		const { username, password } = values;
  
		try {
			await signIn({ username, password });
			history.push("/");
		} catch (e) {
			console.log(e);
		}
	};

	const initialValues = {
		username: '',
		password: '',
	};

	return (
		<Formik 
			initialValues={initialValues} 
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignIn;