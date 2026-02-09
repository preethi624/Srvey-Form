
import './App.css'
import { Routes,Route } from 'react-router-dom'
import AdminLogin from './Pages/AdminLogin'
import { AdminDashboard } from './Pages/AdminDashboard'
import SurveyForm from './Pages/SurveyForm'
import ProtectedRoute from './components/ProtectedRoute'

function App() {



  return (
    <>
    <Routes>
      <Route path='/adminLogin' element={<AdminLogin/>}/>
      <Route path='/dashboard' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/>
      <Route path='/survey' element={<SurveyForm/>}/>


    </Routes>
     
    </>
  )
}

export default App
