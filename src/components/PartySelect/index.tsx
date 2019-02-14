import React, { useState } from 'react'
import { Select } from '@smooth-ui/core-sc'

export type PartySelectProps = {
  onChanged(value: string): void
  value?: any
  name?: string
  id?: string
  placeholder?: string
}

const PartySelect: React.FC<PartySelectProps> = ({ onChanged, value = '', name = 'party', id = 'party', placeholder = 'Party' }) => {
  const [party, setParty] = useState(value)

  return (
    <Select {...{ name, id, placeholder }}
            value={party}
            boxShadow={1}
            flex={1}
            onChange={(props) => {
              console.log(props)
              // @ts-ignore
              const { value } = props
              setParty(value)
              if (!onChanged) {
                onChanged(value)
              }
            }}
    >
      <option value="">Select a Party</option>
      <option value="republican">Republican</option>
      <option value="democrat">Democrat</option>
      <option value="independent">Independent</option>
    </Select>
  )
}

export default PartySelect
