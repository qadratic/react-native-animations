import React, { useRef } from 'react'
import { View, Text, StyleSheet, FlatList, Animated, PanResponder } from 'react-native'

const priorityList = [{ key: 'one' }, { key: 'two' }, { key: 'three' }, { key: 'four' }, { key: 'five' }, { key: 'six' }, { key: 'seven' },]

export default function PrioritizeList() {

	const itemSizeOffset = useRef(new Animated.Value(20)).current

	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onMoveShouldSetPanResponder: () => true,

			onPanResponderGrant: () => {
				console.log('granted')
				Animated.timing(itemSizeOffset, {
					toValue: 30,
					duration: 100
				}).start()
			},
			onPanResponderMove: (evt, gestureState) => {
				console.log('moving', evt.nativeEvent.pageY)
			},
			onPanResponderRelease: () => {
				console.log('released')
				Animated.timing(itemSizeOffset, {
					toValue: 20,
					duration: 100
				}).start()
				console.log(itemSizeOffset)
			},
		})
	).current

	const getListItem = ({ item }) =>
		<Animated.View style={{
			...styles.listItem,
			// padding: itemSizeOffset
		}}
		>
			<Text style={{ fontSize: 30 }} >{item.key}</Text>
			<View style={styles.moveItem} {...panResponder.panHandlers} ></View>
		</Animated.View>

	return (
		<View style={styles.container}>
			<FlatList data={priorityList} renderItem={getListItem} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	listItem: {
		padding: 20,
		marginTop: 5,
		borderColor: 'grey',
		borderWidth: 1,
		borderRadius: 10,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	moveItem: {
		borderColor: 'black',
		height: 35,
		width: 35,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: 'grey',
	},
})