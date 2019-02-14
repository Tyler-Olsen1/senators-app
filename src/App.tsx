import React, { Component, useState, useEffect, createContext } from 'react'
import { Normalize, Grid, Row, Col } from '@smooth-ui/core-sc'
import './App.css'
import { SenatorsConsumer } from './providers/SenatorsProvider'
import SearchForm from './components/SearchForm'
import Senators from './components/Senators'

import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
`

const SenatorsContainer = styled.section`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

export default () => {
	return (
      <>
        <Normalize />
        <SenatorsConsumer>
        {({ senators }) => (
          <Container>
            <SearchForm onChanged={(e: string) => console.log(e)} />
            <SenatorsContainer>
              <Senators senators={senators} />
            </SenatorsContainer>
          </Container>
          )}
        </SenatorsConsumer>
      </>
	)
}
