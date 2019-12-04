import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button} from 'react-native';
import ToDoItem from './ToDoItem';

export default function ToDo() {

    const [items, setItems] = useState([]);
    const [value, setValue] = useState('');

    addItem = () => {
        if(value.length>0){
            setItems([...items, value]);
            setValue('');
        }
    }

    removeItem = () => {
        setItems(
            items.filter(item=>{
                if(item != value) return true
            })
        );
        setValue('');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Reminders</Text>
            <View style={styles.textInputContainer}>
                <TextInput 
                    placeholder="Type your reminder here"
                    style={styles.textInput}
                    value={value} 
                    onChangeText={value => setValue(value)}/>

                <Button 
                    title="Add"
                    onPress={addItem}/>

                <Button 
                    title="Delete"
                    onPress={removeItem}/>
            </View>
            <Text style={styles.header}>Items</Text>
            <View style={styles.itemContainer}>
                { items.length==0 && <Text>There are no reminders.</Text>}
                { items.length>0 && items.map(value => {
                        return  <ToDoItem name={value} key={value.key}/>
                   }) 
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center'
    },
    header: {
        marginTop: '15%',
        fontSize: 20,
        paddingBottom: 10,
        justifyContent: 'center'
    },
    textInputContainer: {
        flexDirection: 'row',
        borderColor: 'black',
        alignItems: 'baseline',
        paddingBottom: 20,
        borderBottomWidth: 1,
        paddingLeft: 10
    },
    textInput: {
        flex: 1,
        height: 20,
        paddingLeft: 10
    },
    itemContainer:{
        flex: 1,
        borderColor: 'black'
    }
});