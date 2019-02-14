import React from 'react'
import { FormGroup, Input, Grid, Row, Col, Label } from '@smooth-ui/core-sc'
import StateSelect from '../StateSelect'
import PartySelect from '../PartySelect'

export default (props: any) => {
	return (
		<form>
			<FormGroup>
				<Input type="search" id="search" placeholder="Search" size="sm" flex="1" width="100%" />
			</FormGroup>

			<FormGroup>
				<StateSelect onChanged={console.log} />
			</FormGroup>

			<FormGroup>
				<PartySelect onChanged={console.log} />
			</FormGroup>
		</form>
	)
}
