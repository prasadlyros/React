import React from 'react'
import ReactDOM from 'react-dom/client'
import UserApp from './UserApp.jsx'
import ProductApp from "./ProductApp"
import EmployeeApp from './EmployeeApp.jsx'
import StudentApp from "./StudentApp.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserApp/>
    {/* <ProductApp /> */}
    {/* <EmployeeApp/> */}
    {/* <StudentApp/> */}
  </React.StrictMode>,
)
