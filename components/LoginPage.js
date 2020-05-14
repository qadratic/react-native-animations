import React, { useRef } from 'react'
import { View, Image, StyleSheet, Dimensions, Button, Animated } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const yChange = height / 5;

export default function LoginPage() {
	const imgY = useRef(new Animated.Value(0)).current
	return (
		<View style={styles.container} >
			<Animated.View style={{
				transform: [
					{ translateY: Animated.subtract(0, imgY) },
					{
						scaleX: imgY.interpolate({
							inputRange: [0, 200],
							outputRange: [1, 2]
						})
					}
				],
				borderRadius: imgY.interpolate({
					inputRange: [0, yChange],
					outputRange: [0, 200]
				}),
				overflow: 'hidden',
			}} >
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
								toValue: yChange,
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
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backImg: {
		height: height - height / 3,
		width: width,
	},
	buttons: {
		flex: 1,
		justifyContent: 'space-evenly'
	},
})