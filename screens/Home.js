import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'
export default function Home() {
    const navigation = useNavigation()
    return (
        <ScrollView 
        centerContent
        style={styles.viewBody}>
            <Image
            source={require("../assets/google-maps.png")}
            resizeMode="contain"
            style={styles.image}
            />
            <Text style={styles.title}>
                Maps Application
            </Text>
            <Text style={styles.description}>Bienvenidos a "Maps Application", projecto de clase. Es una aplicacion movil creada integrando Firebase y React Native con Expo. </Text>
            <Button
            buttonStyle={styles.button}
            title="Perfil"
            onPress={() => navigation.navigate("login")}
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 20

    },
    title: {
        fontWeight: "bold",
        fontSize : 20,
        marginVertical: 10,
        textAlign: "center"
    },
    description: {
        textAlign: 'justify',
        marginBottom: 20,
        color: "#bcbbc9"

    },
    button: {
        backgroundColor: "#C3004e",
        
    }
})
