import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Auth from "./components/Auth"
import Layout from "./components/layout"
import Dashboard from "./Dashboard"
import { useEffect, useState } from "react"
import CreateStudent from "./pages/create-student"
import CreateTeacher from "./pages/create-teacher"
import CreateStaffs from "./pages/create-staffs"
import CreateInvoice from "./pages/create-invoice"

const App = () => {
  const [role, setRole] = useState("admin")
  useEffect(() => {
    setRole("admin")
  }, [])
  return (
    <div >

      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Layout />} >
            <Route path="" element={<Dashboard role={role} />} />
            <Route path="/create-student" element={<CreateStudent />} />
            <Route path="/create-teacher" element={<CreateTeacher />} />
            <Route path="/create-staffs" element={<CreateStaffs />} />
            <Route path="/create-invoice" element={<CreateInvoice />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App