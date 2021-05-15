import React from 'react';
import { TextInput as NativeTextInput,StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
	errorBorder: {
		borderColor: theme.colors.errorColour,
	},
});

const TextInput = ({ style, error, ...props }) => {
	const textInputStyle = [style];

	return <NativeTextInput style={[textInputStyle, error ? styles.errorBorder : null]} {...props} />;
};

export default TextInput;