import * as React from 'react';
import {StyleSheet, View, Text, TextInput, Button, FlatList} from 'react-native';

export default function Search(props) {
    return(
        <Text style={styles.label}>Title :</Text>
        <TextInput style={styles.textInput} placeholder="Title of the movie ..." onChangeText={ () => {} } />

        <View style={styles.buttonSection}>
            <Button style={styles.button} title={"Search the movie"} onPress={ () => {} } />
        </View>
    );
} 