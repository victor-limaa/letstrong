import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'
import {
    useFonts,
    Roboto_300Light,
    Roboto_400Regular
} from '@expo-google-fonts/roboto'

export default function Item ( props ) {

    const [desc, setDesc] = useState(false)

    let [fonstLoaded] = useFonts({
        Roboto_300Light,
        Roboto_400Regular
    })

    if(!fonstLoaded)
        return <AppLoading />
    else
        return(
            <TouchableOpacity activeOpacity={0.8} 
            onPress={() => setDesc(!desc)}>
                <View style={desc ? styles.itemWithDesc : styles.item}>
                    <Image source={props.image} style={styles.image} />
                    <Text style={styles.nome}>{props.nome}</Text>
                    <Text style={desc ? styles.desc : styles.hidden}>
                        {props.desc}
                    </Text>
                </View>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    item: {
        width: 330,
        height: 100,
        backgroundColor: '#2d2d2d',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center",
        borderRadius: 15
    },
    itemWithDesc: {
        width: 330,
        height: 280,
        backgroundColor: '#2d2d2d',
        flexDirection: 'column',
        alignItems: "center",
        borderRadius: 15,
        justifyContent: 'space-evenly',
        padding: 10
    },
    image: {
        height: 80,
        width: 100,
        borderRadius: 10
    },
    nome: {
        fontSize: 24,
        color: '#fff',
        fontFamily: 'Roboto_400Regular'
    },
    desc: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Roboto_300Light'
    },
    hidden: {
        display: 'none'
    }
})