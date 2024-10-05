import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'; // Import Provider


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
