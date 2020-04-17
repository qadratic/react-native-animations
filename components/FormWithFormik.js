import React from 'react'
import { View, TextInput, Button, StyleSheet, Text, KeyboardAvoidingView } from 'react-native'
import { Formik } from 'formik'

export default function FormWithFormik() {
	return (
		<View behavior='padding' style={styles.container} >
			<Formik
				initialValues={{
					fullName: '',
					email: '',
					phoneNumber: '',
				}}
				onSubmit={values => {
					console.log(values)
				}}
				onReset={values => {
					console.log(values)
				}}
			>
				{props =>
					<KeyboardAvoidingView style={styles.inputView} >
						<TextInput
							style={styles.input}
							placeholder='Full Name'
							onChangeText={props.handleChange('fullName')}
							value={props.values.fullName}
						/>
						<TextInput
							style={styles.input}
							placeholder='Email'
							onChangeText={props.handleChange('email')}
							keyboardType='email-address'
							value={props.values.email}
						/>
						<TextInput
							style={styles.input}
							placeholder='Phone'
							onChangeText={props.handleChange('phoneNumber')}
							keyboardType='numeric'
							value={props.values.phoneNumber}
						/>
						<Button title='submit' onPress={props.handleSubmit} />
						<Button title='reset' onPress={props.handleReset} />
					</KeyboardAvoidingView>
				}
			</Formik>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputView: {
		padding: 10,
		flex: 1,
		justifyContent: 'space-evenly'

	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		// padding: 10,
		// marginTop: 20,
		// marginBottom: 20,
		fontSize: 18,
		borderRadius: 6,
	},
	submitButton: {
		marginTop: 10,
	}
});