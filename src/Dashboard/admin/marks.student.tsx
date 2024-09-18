import $axios from "@/http"
import { StudentStore } from "@/store/student.store"
import { useQuery } from "@tanstack/react-query"
const StudentMarks = () => {
  const { setStudent, students } = StudentStore()

  useQuery({
    queryKey: ['get-student'],
    queryFn: async () => {
      const { data } = await $axios.get("/student")
      setStudent(data)
      return data
    }
  })
  console.log(students);

  return (
    <div className="col-xxl-8 col-xl-7 d-flex">
      <div className="card flex-fill">
        <div className="card-header d-flex align-items-center justify-content-between flex-wrap">
          <h4 className="card-title">Student Marks</h4>
          <div className="d-flex align-items-center">
            <div className="dropdown me-2 ">
              <a href="#" className="bg-white dropdown-toggle" data-bs-toggle="dropdown"><i className="ti ti-calendar me-2"></i>All Classes
              </a>
              <ul className="dropdown-menu mt-2 p-3">
                <li>
                  <a href="#" className="dropdown-item rounded-1">
                    I
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item rounded-1">
                    II
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item rounded-1">
                    III
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown ">
              <a href="#" className="bg-white dropdown-toggle" data-bs-toggle="dropdown"><i className="ti ti-calendar me-2"></i>All Sections
              </a>
              <ul className="dropdown-menu mt-2 p-3">
                <li>
                  <a href="#" className="dropdown-item rounded-1">
                    A
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item rounded-1">
                    B
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item rounded-1">
                    C
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body px-0">
          <div className="custom-datatable-filter table-responsive">
            <table className="table ">
              <thead className="thead-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Class </th>
                  <th>Section</th>
                  <th>Marks %</th>
                  <th>CGPA</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dfgdrtfh</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="student-details.html" className="avatar avatar-md">
                        <img src="assets/img/students/student-01.jpg" className="img-fluid rounded-circle" alt="img" />
                      </a>
                      <div className="ms-2">
                        <p className="text-dark mb-0">
                          <a href="student-details.html">Janet</a></p>
                      </div>
                    </div>
                  </td>
                  <td>III</td>
                  <td>A</td>
                  <td>89%</td>
                  <td>4.2</td>
                  <td>
                    <span className="badge bg-success">Pass</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentMarks