import React, { useRef } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

export default function AnimatedImplementation() {
	const fadeAnim = useRef(new Animated.Value(0)).current;
	return (
		<View style={styles.conatiner} >
			<Text>Animated component example:</Text>

			<Animated.View style={{ ...styles.animatedView, opacity: fadeAnim }} >
				<Text>This text fades</Text>
			</Animated.View>

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