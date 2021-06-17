import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
import db from '../config'

export default class WriteStoryScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            title: '',
            author: '',
            storyText: '',

        }

    }

    submitStory = () => {

        db.collection("stories").add(

            {

                title: this.state.title,
                author: this.state.author,
                storyText: this.state.storyText,

            }

        )

        this.setState(

            {

                title: '',
                author: '',
                storyText: ''

            }

        )

        ToastAndroid.show('Your story has been sumitted', ToastAndroid.SHORT)
    }

    render() {

        return (

            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

                <Header

                    backgroundColor={'pink'}

                    centerComponent={

                        {

                            text: 'Story Hub',
                            style: { color: 'black', fontSize: 20, fontWeight: 600 }

                        }

                    }

                />

                <TextInput

                    placeholder="Story Title"

                    onChangeText={(text) => {

                        this.setState(

                            {

                                title: text

                            }

                        )

                    }

                    }

                    value={this.state.title}
                    style={styles.title}

                />

                <TextInput

                    placeholder="Author"

                    onChangeText={(text) => {

                        this.setState(

                            {

                                author: text

                            }

                        )

                    }

                    }

                    value={this.state.author}
                    style={styles.author}

                />

                <TextInput

                    placeholder="Write your story"

                    onChangeText={(text) => {

                        this.setState(

                            {

                                storyText: text

                            }

                        )

                    }

                    }
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}

                />

                <TouchableOpacity style={styles.submitButton} onPress={this.submitStory}>

                    <Text style={styles.buttonText}>

                        Submit

                    </Text>

                </TouchableOpacity>

            </KeyboardAvoidingView>

        );

    }

}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: '#fff',

    },

    title: {

        height: 40,
        borderWidth: 2,
        marginTop: 40,
        marginRight: 100,
        marginLeft: 100

    },

    author: {

        height: 40,
        borderWidth: 2,
        marginRight: 100,
        marginLeft: 100,
        marginTop: 40

    },

    storyText: {

        height: 250,
        borderWidth: 2,
        marginTop: 50,
        marginRight: 100,
        marginLeft: 100,

    },

    submitButton: {

        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'pink',
        width: 80,
        height: 40,
        marginTop: 30

    },

    buttonText: {

        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',

    }

});