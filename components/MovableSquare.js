import React, { useRef } from 'react'
import { View, Animated, StyleSheet, Dimensions } from 'react-native'

export default function MovableSquare() {
	// const squareXY = useRef(new Animated.ValueXY({x:0, y:0})).current
	const squareX = useRef(new Animated.Value(0)).current

	console.log(squareX)
	return (
		<View>
			<Animated.View
				style={{
					...styles.square,
					transform: [
						{ translateX: squareX },
						{
							rotate: squareX.interpolate({
								inputRange: [0, 100],
								outputRange: ['0deg', '180deg']
							})
						}
					],
				}}
				// style={{ ...styles.square, top:squareXY.y, left:squareXY.x }}
				onStartShouldSetResponder={() => true}
				onMoveShouldSetResponder={() => true}

				onResponderGrant={() => { console.log('responder granted') }}
				onResponderMove={evt => {
					// console.log(evt.nativeEvent.locationX,evt.nativeEvent.locationY)
					// console.log(evt.nativeEvent.pageX,evt.nativeEvent.pageY)
					squareX.setValue(evt.nativeEvent.pageX - 25)
				}}
				onResponderRelease={() => {
					console.log('leave')
					Animated.spring(
						squareX,
						{
							toValue: 0,
							// duration:500
						}
					).start()
				}}


			>

			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	square: {
		top: Dimensions.get('window').height / 2 - 50,
		height: 50,
		width: 50,
		backgroundColor: 'red',
	}
})