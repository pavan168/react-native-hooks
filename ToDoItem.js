import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ToDoItem(props){
    return(
        <View style={styles.textContainer} key={props.key}>
            <Text style={styles.item}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        marginTop: '5%',
		flexDirection: 'row',
		borderColor: '#aaaaaa',
		borderBottomWidth: 1.5,
		width: '100%',
		alignItems: 'stretch',
		minHeight: 10
    },
    textContainer: {
        flexDirection: 'row',
        paddingBottom: 5,
		paddingLeft: 10,
		marginTop: 5,
		borderColor: 'green',
		borderBottomWidth: 1,
		fontSize: 17,
		fontWeight: 'bold',
        color: 'white',
        width: '100%',
        width: '100%'
    }
});