import React from "react";
import { StyleSheet, Text, View, BackHandler } from 'react-native';

export default function Loading(){
    return <View style={styles.container}>
    <Text style={styles.text}>Getting the weather!</Text>
    </View>
}

const styles = StyleSheet.create({
        container: {
            flex : 1, 
            justifyContent: "flex-end",
            paddingHorizontal: 30,
            paddingVertical: 100,
            backgroundColor: "#fa8491"
        },
        text: { 
        
            color: "#2c2c2c",
            fontSize :  30 

        }

         
});