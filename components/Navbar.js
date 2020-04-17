import React from "react"
import {Text, View, Image, StyleSheet} from "react-native"

function Navbar() {
    return (
        <View style={styles.navbar}>
            <Image source={require('../assets/nav-brand.png')} style={styles.img}/>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        paddingTop: '5%',
        alignItems: 'center',
    },
    img: {
        width: '30%',
        resizeMode: 'contain',
    }
})