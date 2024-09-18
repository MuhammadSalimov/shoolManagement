import { Route, Routes, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./components/Auth";
import Layout from "./components/layout";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import CreateStudent from "./pages/create-student";
import CreateTeacher from "./pages/create-teacher";
import CreateStaffs from "./pages/create-staffs";
import CreateInvoice from "./pages/create-invoice";
import AllStudents from "./pages/all-students";
import StudentList from "./pages/student-list";
import TeacherList from "./pages/teachers-list";
import AllTeachers from "./pages/all.teacher";
import AllClasses from "./pages/classes/all-classes";
import ClassRoom from "./pages/classes/class-room";
import { authStore } from "./store/auth.store";
import $axios from "./http";
import { toast } from "sonner";
const App = () => {
  const [role, setRole] = useState("admin");


  const { user, setIsAuth, setLoading, setUser } = authStore()
  console.log(user);
  useEffect(() => {
    setRole(user.role || "admin");
  }, [user]);
  const checkAuth = async () => {
    setLoading(true)
    try {
      const { data } = await $axios.get('/auth/refresh')
      localStorage.setItem('accessToken', data.accessToken)
      setIsAuth(true)
      setUser(data.user)
    } catch (error) {
      // @ts-ignore
      toast(error.response?.data?.message)
      // localStorage.removeItem('accessToken')
    } finally {
      setLoading(false)
    }
  }
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      checkAuth()
    } else {
      navigate("/auth")
    }
  }, [])
  // checkAuth()
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Dashboard role={role} />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/create-teacher" element={<CreateTeacher />} />
          <Route path="/create-staffs" element={<CreateStaffs />} />
          <Route path="/create-invoice" element={<CreateInvoice />} />
          <Route path="/all-student" element={<AllStudents />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/teacher-list" element={<TeacherList />} />
          <Route path="/all-teachers" element={<AllTeachers />} />
          <Route path="/all-classes" element={<AllClasses />} />
          <Route path="/class-room" element={<ClassRoom />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
