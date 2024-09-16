import Admin from "./admin/Admin"
import Student from "./student/Student"
import Teacher from "./teacher/Teacher"

interface Iprops {
  role: string
}
const Dashboard = (props: Iprops) => {
  return (
    <div className="page-wrapper">
      {props.role == "admin" && <Admin />}
      {props.role == "teacher" && <Teacher />}
      {props.role == "student" && <Student />}
    </div>
  )
}

export default Dashboard