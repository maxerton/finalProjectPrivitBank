import React, { useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store, { contextStore } from './store';
import { BrowserRouter } from 'react-router-dom';
import { globalContext } from './context';
import { reducerBoolean } from './store/context/contextRedusers';


const container = document.getElementById('root');
const root = createRoot(container);

const StateProvider = ({ children }) => {
  const { state, dispatch } = useReducer(reducerBoolean, contextStore);

  return (
    <globalContext.Provider value={state}>
      {children}
    </globalContext.Provider>
  )
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StateProvider>
          <App />
        </StateProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

