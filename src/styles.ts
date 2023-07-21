import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  preto: '#111',
  cinza: '#333',
  verde: '#10ac84'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
  body{
    background-color: ${cores.preto};
    color: ${cores.branca};
    margin-top: 40px;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
