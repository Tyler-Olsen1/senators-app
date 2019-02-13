import React, { createContext, useState, useEffect, useReducer } from 'react'
import { getSenators } from '../clients'
import styled from 'styled-components'

const Senators = styled.section`
  
`

const SenatorDetails = styled.div`
  
`

const SenatorsContext = createContext({
  senators: []
})

export const Provider = SenatorsContext.Provider
export const Consumer = SenatorsContext.Consumer

//
// const initialState = {
//   senators: []
// }
//
// const reducer = (state, action) => {
//   switch(action.type) {
//     default:
//       return state
//   }
// }

const renderSenator = ({ name }, index) => (
  <SenatorDetails key={index}>
    <h3>{name}</h3>
  </SenatorDetails>
)

export default () => {

  const [senators, setSenators] = useState([])
  console.log(senators)

  // @ts-ignore
  useEffect(() => {
    // @ts-ignore
    getSenators().then(setSenators)

    // return () =>
  }, [])

  return (
    <>
      <Senators>
        {senators.map((senator, i) => renderSenator(senator, i))}
      </Senators>
    </>
  )
}

