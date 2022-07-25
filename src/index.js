import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"

// Redux - malumotni yubirish va qabul qilish uchun ixtiyoriy componentga
import reducer from "./context/reducer"
import { createStore } from "redux"
import { Provider } from "react-redux"

// redux-persist = reduxdan o'tayotgan malumotlarni "localStorage"ga joylash uchun
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
  blocklist: [],
  whitelist: ["darkMode", "auth"]
}

const persistedReducer = persistReducer(persistConfig, reducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
