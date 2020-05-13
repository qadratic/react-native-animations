import React, { useRef } from 'react'
import { View, Image, StyleSheet, Dimensions, Button, Animated } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function LoginPage() {
    const imgY = useRef(new Animated.Value(0)).current
    return (
        <Animated.View style={styles.container} >
            <Animated.View style={{ transform: [{ translateY: imgY }] }} >
                <Image
                    style={{ ...styles.backImg }}
                    source={require('./res/loginBack.jpg')}
                />
            </Animated.View>
            <View style={styles.buttons}>
                <Button title='login' onPress={
                    () => {
                        Animated.timing(
                            imgY,
                            {
                                toValue: -200,
                                duration: 250
                            }
                        ).start()
                    }
                } />
                <Button title='sign up' onPress={
                    () => {
                        Animated.timing(
                            imgY,
                            {
                                toValue: 0,
                                duration: 250
                            }
                        ).start()
                    }
                } />
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backImg: {
        height: height - height/3,
        width: width,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    buttons: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
})