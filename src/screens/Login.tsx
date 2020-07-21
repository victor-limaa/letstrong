import { StatusBar } from 'expo-status-bar'
import { AppLoading } from 'expo'
import React from 'react'
import {
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold
} from '@expo-google-fonts/dancing-script'
import {
    useFonts,
    Roboto_500Medium
} from '@expo-google-fonts/roboto'
import {
    ImageBackground,
    Text,
    StyleSheet,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native'

export default function Login () {

    let [fonstLoaded] = useFonts({
        DancingScript_400Regular,
        DancingScript_500Medium,
        DancingScript_600SemiBold,
        DancingScript_700Bold,
        Roboto_500Medium
    })

    if(!fonstLoaded)
        return <AppLoading />
    else
        return(
            <>
            <StatusBar style="inverted"/>
            <ImageBackground source={require('../assets/login.jpg')}
                style={styles.imgbg}>
                <Text style={styles.title}>
                    Let's Strong
                </Text>
                <View>
                    <TextInput placeholder='Username' style={styles.input} ></TextInput>
                    <TextInput placeholder='Password' style={styles.input}></TextInput>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text style={styles.button}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            </>
        )
}

const styles = StyleSheet.create({
    imgbg: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: '#ffb800',
        fontSize: 96,
        fontFamily: 'DancingScript_700Bold',
        top: -50,
        transform: [{rotate: "-28deg"}]
    },
    input: {
        width: 350,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        margin: 10,
        paddingLeft: 20,
        color: '#ffffff'
    },
    button: {
        width: 220,
        height: 50,
        backgroundColor: '#ffb800',
        borderRadius: 50,
        color: '#414141',
        fontSize: 30,
        fontFamily: 'Roboto_500Medium',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 50,
        marginTop: 30
    }
})