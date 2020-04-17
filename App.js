import React from 'react'
import { View } from 'react-native'
import ModalImplement from './components/ModalImplement'
import FormWithFormik from './components/FormWithFormik'

export default function App() {
	return (
		<View style={{height:'100%'}}>
			<ModalImplement />
			{/* <FormWithFormik /> */}
		</View>
	)
}
