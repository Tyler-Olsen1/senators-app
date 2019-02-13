import React, { Component, useState, useEffect, createContext } from 'react'
import logo from './logo.svg'
import './App.css'
import SenatorsContext from './contexts/SenatorsContext'



export default () => {


  return (
    <>
      <h1>App</h1>
      <SenatorsContext />
    </>
  )
}
