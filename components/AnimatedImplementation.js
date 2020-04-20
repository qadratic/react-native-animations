import React, { useRef } from 'react'
import { View, Text, StyleSheet, Animated, Button, Easing } from 'react-native'

export default function AnimatedImplementation() {
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const fadeIn = () => {
		Animated.timing(
			fadeAnim,
			{
				toValue: 1,
				duration: 500,
				easing: Easing.back()
			}
		).start();
	}
	const fadeOut = () => {
		Animated.timing(
			fadeAnim,
			{
				toValue: 0,
				duration: 500,
			}
		).start();
	}
	return (
		<View style={styles.conatiner} >
			<Text>Animated component example:</Text>

			<Animated.View style={{ ...styles.animatedView, opacity: fadeAnim }} >
				<Text>This text fades</Text>
			</Animated.View>

			<Button title='fade in' onPress={fadeIn} />
			<Button title='fade out' onPress={fadeOut} />

		</View>
	)
}

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		justifyContent: 'space-evenly'
	},
	animatedView: {
	}
})