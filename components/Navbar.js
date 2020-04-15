import React from "react"
import {Text, View, Image, StyleSheet} from "react-native"

function Navbar(props) {
    return (
        <View style={props.styles}>
            <Image source={require('../assets/nav-brand.png')} style={styles.img}/>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    img: {
        width: '30%',
        resizeMode: 'contain',
    }
})