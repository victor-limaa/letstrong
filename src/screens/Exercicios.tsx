import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import Item from '../components/Item'

export default function Exercicios () {

    const items = [
        {
            image: require('../assets/jumping_jack.png'),
            nome: 'Salto à Corda',
            desc: 'é um exercício físico, usado principalmente para alongar e aquecer os músculos dos membros, braços e pernas.'
        }
    ]

    return(
        <View style={styles.container}>
            <Image source={require('../assets/main.jpg')} style={styles.imgbg} />
            <View style={styles.infos}>
                <Item image={items[0].image} nome={items[0].nome} desc={items[0].desc} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgbg: {
        height: 650,
        width: '100%',
        top: -310
    },
    infos: {
        backgroundColor: '#ffb800',
        height: '70%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 35,
        alignItems: 'center'
    }
})