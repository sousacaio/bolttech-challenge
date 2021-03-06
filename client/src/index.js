import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import InitialPage from './pages/InitialPage';
import Dashboard from './pages/Dashboard';
import store from './store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<InitialPage />} />
          <Route path="/dashboard/:_id" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
