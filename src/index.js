import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'pages/App';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import store from './redux/index';
import Blog from 'pages/Blog';
import NotFound from 'pages/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);