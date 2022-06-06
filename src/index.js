import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';

//Routes
import Project1 from './pages/project1';
import Project2 from './pages/project2';
import Project3 from './pages/project3';
import Project4 from './pages/project4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='project1' element={<Project1 />} />
      <Route path='project2' element={<Project2 />} />
      <Route path='project3' element={<Project3 />} />
      <Route path='project4' element={<Project4 />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
