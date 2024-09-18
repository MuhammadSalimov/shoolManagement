import EventModal from "@/components/modal/add-event"
import $axios from "@/http"
import { StudentStore } from "@/store/student.store"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { CiSquarePlus } from "react-icons/ci"
import { FaRegEdit } from "react-icons/fa"
import { FaRegSquarePlus } from "react-icons/fa6"
import { FiRefreshCcw } from "react-icons/fi"
import { Link } from "react-router-dom"

const Admin = () => {
  const [openModal, setOpenModal] = useState(false)
  const changeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    if (target.classList.contains("fade")) {
      setOpenModal(false)
    }
  }

  // get all student --> backend
  const { setStudent, students } = StudentStore()

  useQuery({
    queryKey: ['get-student'],
    queryFn: async () => {
      const { data } = await $axios.get("/student")
      setStudent(data)
      return data
    }
  })
  // =================
  return (
    <div className="content px-2 pt-[100px]" >

      {/* 1 */}
      <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
        <div className="my-auto mb-2">
          <h3 className="page-title mb-1">Admin Dashboard</h3>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Admin Dashboard</li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div className="mb-2">
            <Link to="/create-student" className="btn btn-primary d-flex align-items-center me-3"><FaRegSquarePlus /> &nbsp; Add New Student</Link>
          </div>
          <div className="mb-2">
            <Link to="/fees-detail" className="btn btn-light d-flex align-items-center">Fees Details</Link>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="row">
        <div className="col-md-12">

          <div className="card bg-dark">
            <div className="overlay-img">
              <img src="/assets/img/bg/shape-04.png" alt="img" className="img-fluid shape-01" />
              <img src="assets/img/bg/shape-01.png" alt="img" className="img-fluid shape-02" />
              <img src="assets/img/bg/shape-02.png" alt="img" className="img-fluid shape-03" />
              <img src="assets/img/bg/shape-03.png" alt="img" className="img-fluid shape-04" />
            </div>
            <div className="card-body">
              <div className="d-flex align-items-xl-center justify-content-xl-between flex-xl-row flex-column">
                <div className="mb-3 mb-xl-0">
                  <div className="d-flex align-items-center flex-wrap mb-2">
                    <h1 className="text-white me-2">Welcome Back, Mr. Herald</h1>
                    <Link to="profile.html" className="avatar avatar-sm img-rounded bg-gray-800 dark-hover"><FaRegEdit /></Link>
                  </div>
                  <p className="text-white">Have a Good day at work</p>
                </div>
                <p className="text-white"><FiRefreshCcw />Updated Recently on 15 Jun
                  2024</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3 */}
      <div className="row">

        {/* Students  */}
        <div className="col-xxl-3 col-sm-6 d-flex">
          <div className="card flex-fill animate-card border-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl bg-danger-transparent me-2 p-1">
                  <img src="assets/img/icons/students.png" alt="img" />
                </div>
                <div className="overflow-hidden flex-fill">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="counter">3654</h2>
                    <span className="badge bg-danger">1.2%</span>
                  </div>
                  <p>Total Students</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
                <p className="mb-0">Active : <span className="text-dark fw-semibold">3643</span></p>
                <span className="text-light">|</span>
                <p>Inactive : <span className="text-dark fw-semibold">11</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Teachers */}
        <div className="col-xxl-3 col-sm-6 d-flex">
          <div className="card flex-fill animate-card border-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-2 bg-secondary-transparent p-1">
                  <img src="assets/img/icons/teacher.png" alt="img" />
                </div>
                <div className="overflow-hidden flex-fill">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="counter">284</h2>
                    <span className="badge bg-skyblue">1.2%</span>
                  </div>
                  <p>Total Teachers</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
                <p className="mb-0">Active : <span className="text-dark fw-semibold">254</span></p>
                <span className="text-light">|</span>
                <p>Inactive : <span className="text-dark fw-semibold">30</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Staffs */}
        <div className="col-xxl-3 col-sm-6 d-flex">
          <div className="card flex-fill animate-card border-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-2 bg-warning-transparent p-1">
                  <img src="assets/img/icons/staffs.png" alt="img" />
                </div>
                <div className="overflow-hidden flex-fill">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="counter">162</h2>
                    <span className="badge bg-warning">1.2%</span>
                  </div>
                  <p>Total Staff</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
                <p className="mb-0">Active : <span className="text-dark fw-semibold">161</span></p>
                <span className="text-light">|</span>
                <p>Inactive : <span className="text-dark fw-semibold">02</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Classes */}
        <div className="col-xxl-3 col-sm-6 d-flex">
          <div className="card flex-fill animate-card border-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl me-2 bg-success-transparent p-1">
                  <img src="assets/img/icons/class.png" alt="img" />
                </div>
                <div className="overflow-hidden flex-fill">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="counter">82</h2>
                    <span className="badge bg-success">1.2%</span>
                  </div>
                  <p>Total classes</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top mt-3 pt-3">
                <p className="mb-0">Active : <span className="text-dark fw-semibold">81</span></p>
                <span className="text-light">|</span>
                <p>Inactive : <span className="text-dark fw-semibold">01</span></p>
              </div>
            </div>
          </div>
        </div>
        {/* Student Marks */}
        <div className="row min-h-[500px]">

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
                      {students.map(item => {
                        return <tr key={item.admissionNumber}>
                          <td>{item.admissionNumber}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a href="student-details.html" className="avatar avatar-md">
                                <img src="assets/img/students/student-01.jpg" className="img-fluid rounded-circle" alt="img" />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="student-details.html">{item.firstName}</a></p>
                              </div>
                            </div>
                          </td>
                          <td>{item.class}</td>
                          <td>{item.section}</td>
                          <td>89%</td>
                          <td>4.2</td>
                          <td>
                            <span className="badge bg-success">Pass</span>
                          </td>
                        </tr>
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-xl-5 d-flex">
            <div className="card flex-fill">

              <div className="card-header d-flex align-items-center justify-content-between">
                <h4 className="card-title">
                  <p className="" >
                    Schedules
                  </p></h4>
                <button onClick={() => setOpenModal(true)} className="link-primary fw-medium me-2 d-flex text-[16px] gap-1 items-center">
                  <CiSquarePlus /> Add New</button>
              </div>

              <div className="card-body h-[200px] overflow-y-scroll event-scroll">
                <h4 className="mb-3">Upcoming Events</h4>
                <div className="">

                  <div className="border-start border-0 border-danger border-3 shadow-sm p-3 mb-3">
                    <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                      <span className="avatar p-1 me-2 bg-danger-transparent flex-shrink-0">
                        <i className="ti ti-vacuum-cleaner fs-24"></i>
                      </span>
                      <div className="flex-fill">
                        <h6 className="mb-1">Vacation Meeting</h6>
                        <p className="d-flex align-items-center"><i className="ti ti-calendar me-1"></i>07 July 2024 - 07 July 2024</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0"><i className="ti ti-clock me-1"></i>09:10 AM - 10:50 PM</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar border-0">
                          <img src="/assets/img/parents/parent-11.jpg" className="rounded-circle" alt="img" />
                        </span>
                        <span className="avatar border-0">
                          <img src="/assets/img/parents/parent-13.jpg" className="rounded-circle" alt="img" />
                        </span>
                      </div>
                    </div>
                  </div>


                  <div className="border-start border-0 border-skyblue border-3 shadow-sm p-3 mb-3">
                    <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                      <span className="avatar p-1 me-2 bg-teal-transparent flex-shrink-0">
                        <i className="ti ti-user-edit text-info fs-20"></i>
                      </span>
                      <div className="flex-fill">
                        <h6 className="mb-1">Parents, Teacher Meet</h6>
                        <p className="d-flex align-items-center"><i className="ti ti-calendar me-1"></i>15 July 2024</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0"><i className="ti ti-clock me-1"></i>09:10AM - 10:50PM</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar border-0">
                          <img src="/assets/img/parents/parent-01.jpg" className="rounded-circle" alt="img" />
                        </span>
                        <span className="avatar border-0">
                          <img src="/assets/img/parents/parent-07.jpg" className="rounded-circle" alt="img" />
                        </span>
                        <span className="avatar border-0">
                          <img src="/assets/img/parents/parent-02.jpg" className="rounded-circle" alt="img" />
                        </span>
                      </div>
                    </div>
                  </div>


                  <div className="border-start border-0 border-info border-3 shadow-sm p-3 mb-3">
                    <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                      <span className="avatar p-1 me-2 bg-info-transparent flex-shrink-0">
                        <i className="ti ti-users-group fs-20"></i>
                      </span>
                      <div className="flex-fill">
                        <h6 className="mb-1">Staff Meeting</h6>
                        <p className="d-flex align-items-center"><i className="ti ti-calendar me-1"></i>10 July 2024</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0"><i className="ti ti-clock me-1"></i>09:10AM - 10:50PM</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar border-0">
                          <img src="/assets/img/parents/parent-05.jpg" className="rounded-circle" alt="img" />
                        </span>
                        <span className="avatar border-0">
                          <img src="/assets/img/parents/parent-06.jpg" className="rounded-circle" alt="img" />
                        </span>
                        <span className="avatar border-0">
                          <img src="/assets/img/parents/parent-07.jpg" className="rounded-circle" alt="img" />
                        </span>
                      </div>
                    </div>
                  </div>


                  {/* <div className="border-start border-0 border-secondary border-3 shadow-sm p-3 mb-0">
                    <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                      <span className="avatar p-1 me-2 bg-secondary-transparent flex-shrink-0">
                        <i className="ti ti-campfire fs-24"></i>
                      </span>
                      <div className="flex-fill">
                        <h6 className="mb-1">Admission Camp</h6>
                        <p className="d-flex align-items-center"><i className="ti ti-calendar me-1"></i>12 July 2024</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0"><i className="ti ti-clock me-1"></i>09:10 AM - 10:50 PM</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar border-0">
                          <img src="/assets/img/parents/parent-11.jpg" className="rounded-circle" alt="img" />
                        </span>
                        <span className="avatar border-0">
                          <img src="/assets/img/parents/parent-13.jpg" className="rounded-circle" alt="img" />
                        </span>
                      </div>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>

        <div onClick={changeModal} className={`${openModal ? "show d-block" : ""} modal fade`} id="add_event" aria-modal="true" role="dialog">
          <EventModal setOpenModal={setOpenModal} />
        </div>
      </div>
    </div>
  )
}

export default Admin