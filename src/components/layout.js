import React from "react"
import MainMenu from "./MainMenu"

import Header from './header';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0!important;
    padding: 0!important;
  }
`


const LayoutWrapper = styled.div`
max-width: 960px;
margin: 0 auto;
`
const Layout = ({ children }) => (
  <div>
    <GlobalStyles/>
    < MainMenu />
    <LayoutWrapper>
    { children }
    </LayoutWrapper>
  </div>
)

export default Layout
