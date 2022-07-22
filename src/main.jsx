import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { store } from './Redux/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <App/>
      </Provider>
    </ChakraProvider>
      </BrowserRouter>
  </React.StrictMode>
)
