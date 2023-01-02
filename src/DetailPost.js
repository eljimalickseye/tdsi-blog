import { View, Text, StyleSheet, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import React, { useState } from 'react';


const imageBackground = require('../assets/imag26.jpg')


const DetailPost = () => {
    return (

        <SafeAreaView style={styles.container}>
            <ScrollView >
                <ImageBackground source={imageBackground} resizeMode="cover" style={styles.imageBackground}>

                </ImageBackground>

                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. </Text>
            </ScrollView >
        </SafeAreaView>

    )
}

export default DetailPost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        margin:0
    },


    imageBackground: {
        marginBottom: 10,
        alignItems: 'center',
        width: '100%',
        height: 200,
    },

    text: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 15,

    },
})