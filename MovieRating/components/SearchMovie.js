import * as React from 'react';
import {StyleSheet, View, Text, TextInput, Button, FlatList} from 'react-native';
import moviesData from '../helpers/moviesData';

import MovieItem from '../components/MovieItem';

export default class SearchMovie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    search(title) {
        if(title === "") {
            this.setState({movies: []})
            console.log(this.state.movies)
        } else {
            var results = [];
            moviesData.forEach(movie => {
                if(movie.title.toLowerCase().includes(title.toLowerCase(), 0)) {
                    results.push(movie)
                }
            })

            this.setState({
                movies: results
            })
        }
    }

    render() {
        if( this.state.movies.length > 0 ) {
            return(
                <View style={styles.container}>
                    <Text style={styles.label}>Title :</Text>
                    <TextInput style={styles.textInput} placeholder="Title of the movie ..." onChangeText={ (title) => {this.search(title)} } />

                    

                    <FlatList
                        data={this.state.movies}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <MovieItem movie={item}/>}
                    />
                </View>
            )
        } else {
            return(
                <View style={styles.container}>
                    <Text style={styles.label}>Title :</Text>
                    <TextInput style={styles.textInput} placeholder="Title of the movie ..." onChangeText={ (title) => {this.search(title)} } />

                    <View style={styles.buttonSection}>
                        <Button style={styles.button} title={"Search the movie"} onPress={ () => {} } />
                    </View>

                    <Text style={styles.noResults}>No film matches your search</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 25
    },
    label: {
        marginLeft: 15,
        marginVertical: 15,
        fontSize: 18
    },  
    textInput: {
        marginLeft: 15,
        marginRight: 15,
        height: 40,
        borderColor: '#000',
        borderRadius: 5,
        borderWidth: 1,
        paddingLeft: 10
    },
    buttonSection: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
})