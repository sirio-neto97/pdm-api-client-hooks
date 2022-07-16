import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Users from './components/Users';

export default function App() {

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Consulta API JSONPlaceholder</Text>
			<Users />
		</View>
 	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 32
	},
	header: {
		backgroundColor: "#89BBDD",
		textAlign: "center",
		width: '%',
		padding: 20
	}
});
