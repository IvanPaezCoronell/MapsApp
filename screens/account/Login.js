import React from 'react'
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import {ScrollView, Image} from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'

export default function Login() {
    
    return (
        <ScrollView
        
        style={styles.viewBody}>
        
        
            <Image
            source={require("../../assets/google-maps.png")}
            resizeMode="contain"
            style={styles.image}
            />

            <Text style={styles.title} >
                Maps Application
            </Text>

            <View style={styles.inputContainer}> 
                <TextInput
                placeholder="Email"
                //value={ }
                //onChangeText={ text => }
                style={styles.input}
                />
                <TextInput
                placeholder="Password"
                //value={ }
                //onChangeText={ text => }
                style={styles.input}
                secureTextEntry
                />
                
                    
                
                
            </View>
            
            <Divider style = {styles.divider}/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {}}
                style={styles.button}
                >
                    <Text style={styles.buttonText}> Iniciar Sesión</Text>
                </TouchableOpacity>


            </View>
            <CreateAccount/>

            

        </ScrollView>

    )
}

function CreateAccount(props){
    return (
        <Text style={styles.register}
        onPress={() => console.log("Registet")}>
            ¿Aún no tienes una cuenta?{" "}
            <Text style={styles.btnRegister}>
                Regístrate
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: "100%",
        marginBottom: 20

    },

    viewBody: {
        marginHorizontal: 30,  
    },

    container: {
        marginHorizontal: 40,
        
    },
    divider: {
        backgroundColor: "#C3004e",
        margin: 40
    },
    register: {
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center"
    },
    btnRegister: {
        color: "#C3004e",
        fontWeight: "bold"
    },

    inputContainer: {
        width: "100%",
    },

    input: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },

    buttonContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,

    },

    button: {
        backgroundColor: '#C3004e',
        width: "50%",
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontWeight: "500",
        fontSize: 15,

    },

    title: {
        fontWeight: "bold",
        fontSize : 20,
        marginVertical: 10,
        textAlign: "center"
    },
})
