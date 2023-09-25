import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
//import { Provider } from 'react-redux';
import { Provider } from 'react-redux/es/exports'
import { store } from './app/store.ts'
//import "bootstrap/dist/css/bootstrap.min.css";
import { StepsProvider } from "react-step-builder";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>

    <StepsProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </StepsProvider>,

  </React.StrictMode>,

)
