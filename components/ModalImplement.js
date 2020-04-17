import React, { useState } from 'react'
import { View, Text, Modal, Button, StyleSheet } from 'react-native'

export default function ModalImplement() {
	const [showModal, setShowModal] = useState(false);
	return (
		<View>
			<Text>Hi there!</Text>
			<Button title='show modal' onPress={() => { setShowModal(true) }} />
			<Modal
				animationType='slide'
				visible={showModal}
				transparent={true}
				onRequestClose={() => {
					setShowModal(false);
				}}
			>
				<View style={styles.modalOverlay} >
					<View style={styles.modelContent} >
						<Text>This is modal</Text>
						<Button title='hide modal' onPress={() => { setShowModal(false) }} />
					</View>
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.6)'
	},
	modelContent:{
		marginTop:'10%',
		padding:'5%',
		backgroundColor:'white',
		flex:1,
		borderTopLeftRadius:10,
		borderTopRightRadius:10,
	}
});