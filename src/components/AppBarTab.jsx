import React from 'react';
import { Pressable } from 'react-native';
import Text from './Text';


const AppBarTab = ({text, press}) => {
	return (
		<Pressable onPress={press}>
			<Text color ="textWhite" style={{margin:10}}>{text}</Text>
		</Pressable>);

};

export default AppBarTab;