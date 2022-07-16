import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// import useFindUsers from "../hooks/useFindUsers";
import useFindUsersReducer from "../hooks/useFindUsersReducer";

export default function Users() {
	// const { state } = useFindUsers();
	const { state } = useFindUsersReducer();
	const { data, loading, error } = state;

	const Item = ({data}) => (
		<View style={styles.item}>
			<Text style={styles.title}>{data}</Text>
		</View>
	);

	const renderItem = ({item}) => (
		<Item data={`${item.username} : ${item.name}`} />
	);

	const Content = () => {
		if (loading) return <Text style={styles.title}>Carregando...</Text>;

		if (error) return <Text style={styles.error}>{error}</Text>;

		return (
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<Content />
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
	item: {
		backgroundColor: "#77AAFF",
		padding: 10,
		marginVertical: 8,
		marginHorizontal: 16
	},
	title: {
		fontSize: 14
	},
	error: {
		color: "#FF0000",
		fontSize: 14,
		textAlign: "center"
	}
});