import React from 'react'
import { View } from 'react-native'
import ModalImplement from './components/ModalImplement'
import FormWithFormik from './components/FormWithFormik'
import AnimatedImplementation from './components/AnimatedImplementation'
import MovableSquare from './components/MovableSquare'

export default function App() {
	return (
		<View style={{height:'100%'}}>
			{/* <ModalImplement /> */}
			{/* <FormWithFormik /> */}
			{/* <AnimatedImplementation /> */}
			<MovableSquare />
		</View>
	)
}
