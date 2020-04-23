import React, { useRef } from 'react'
import { View, Animated, StyleSheet, Dimensions } from 'react-native'

export default function MovableSquare() {

	const squareTop = Dimensions.get('window').height / 2 - 50

	const squareX = useRef(new Animated.Value(0)).current
	const squareY = useRef(new Animated.Value(squareTop)).current
	let squareVarY = 0;
	return (
		<View>
			<Animated.View
				style={{
					...styles.square,
					transform: [
						{ translateX: squareX },
						{ translateY: squareY },
						{
							rotate: squareX.interpolate({
								inputRange: [0, 100],
								outputRange: ['0deg', '180deg']
							})
						}
					],
				}}
				onStartShouldSetResponder={() => true}
				onMoveShouldSetResponder={() => true}

				// onResponderGrant={() => { console.log('responder granted') }}
				onResponderMove={evt => {
					squareX.setValue(evt.nativeEvent.pageX - 25)
					squareVarY = evt.nativeEvent.pageX
				}}
				onResponderRelease={() => {
					// console.log('leave')
					// console.log(squareVarY)
					squareY.setValue(squareTop);

					Animated.parallel([
						Animated.timing(
							squareX,
							{
								toValue: 0,
								duration: 500
							}),
						Animated.sequence([
							Animated.timing(
								squareY,
								{
									toValue: squareTop - squareVarY / 2,
									duration: 250
								}),
							Animated.timing(
								squareY,
								{
									toValue: squareTop,
									duration: 250
								}),
						])
					]).start()
				}}
			>
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	square: {
		height: 50,
		width: 50,
		backgroundColor: 'red',
	}
})