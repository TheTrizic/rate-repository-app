import React from 'react';
import Text from './Text';
import { Link } from "react-router-native";



const AppBarTab = ({text, path}) => {
	return (
		<Link to ={path}>
			<Text color ="textWhite" style={{margin:10}}>{text}</Text>
		</Link>
	);

};

export default AppBarTab;