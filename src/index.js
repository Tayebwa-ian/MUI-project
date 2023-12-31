import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Authentication from './Pages/Authentication/Authentication';
import Database from './Pages/Database/Database';
import Functions from './Pages/Functions/Functions';
import Storage from './Pages/Storage/Storage';
import MachineLearning from './Pages/Machine Learning/MachineLearning'
import Hosting from './Pages/Hosting/Hosting'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from '@emotion/react';
import { dashboardTheme } from './dashboardTheme';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "Authentication",
          element: <Authentication />,
        },
        {
          path: "Database",
          element: <Database />
        },
        {
          path: "Storage",
          element: <Storage />
        },
        {
          path: "Functions",
          element: <Functions />
        },
        {
          path: "MachineLearning",
          element: <MachineLearning />
        },
        {
          path: "Hosting",
          element: <Hosting />
        }
      ]
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
