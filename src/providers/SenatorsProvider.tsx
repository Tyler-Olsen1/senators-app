import React, { createContext, useState, useEffect, useReducer } from 'react'
import { getSenators } from '../clients'
import styled from 'styled-components'

const Senators = styled.section``

const SenatorDetails = styled.div``

const SenatorsContext = createContext({
	senators: [],
})

const Provider = SenatorsContext.Provider
export const SenatorsConsumer = SenatorsContext.Consumer

export default class extends React.Component {
	state = {
		senators: [],
	}

	async componentDidMount() {
		const senators = await getSenators()
		this.setState({ senators })
	}

	render() {
		const { senators } = this.state
		console.log(senators)

		return (
			<Provider
				value={{
					senators,
				}}
			>
				{this.props.children}
			</Provider>
		)
	}
}
