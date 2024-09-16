import { useState } from "react";
import { TbHexagonalPrismPlus } from "react-icons/tb";
import { Link } from "react-router-dom"

const Student = () => {
  const nowDate = new Date();
  const formattedDate = nowDate.toISOString().split('T')[0];
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const [picker, setPicker] = useState(formattedDate)

  return (
    <div className="content">
      <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
        <div className="my-auto mb-2">
          <h3 className="page-title mb-1">Student Dashboard</h3>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Student Dashboard</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Section 1 */}
      <div className="row">

        {/* section sidebar */}
        <div className="col-xxl-8 d-flex">

          <div className="row flex-fill">

            {/* Student card and Todays Class */}
            <div className="col-xl-6 d-flex">
              <div className="flex-fill">

                {/* Student Profile card*/}
                <div className="card bg-dark position-relative">
                  <div className="card-body">
                    <div className="d-flex align-items-center row-gap-3 mb-3">
                      <div className="avatar avatar-xxl rounded flex-shrink-0 me-3">
                        <img src="assets/img/students/student-13.jpg" alt="Img" />
                      </div>
                      <div className="d-block">
                        <span className="badge bg-transparent-primary text-primary mb-1">#ST1234546</span>
                        <h3 className="text-truncate text-white mb-1">Angelo Riana</h3>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 text-gray-2">
                          <span className="border-end me-2 pe-2">Class : III, C</span>
                          <span>Roll No : 36545</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between profile-footer flex-wrap row-gap-3 pt-4">
                      <div className="d-flex align-items-center">
                        <h6 className="text-white">1st Quarterly</h6>
                        <span className="badge bg-success d-inline-flex align-items-center ms-2"><i className="ti ti-circle-filled fs-5 me-1"></i>Pass</span>
                      </div>
                      <a href="edit-student.html" className="btn btn-primary">Edit Profile</a>
                    </div>
                    <div className="student-card-bg">
                      <img src="assets/img/bg/circle-shape.png" alt="Bg" />
                      <img src="assets/img/bg/shape-02.png" alt="Bg" />
                      <img src="assets/img/bg/shape-04.png" alt="Bg" />
                      <img src="assets/img/bg/blue-polygon.png" alt="Bg" />
                    </div>
                  </div>
                </div>

                {/* Todays Class */}
                <div className="card flex-fill">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h4 className="card-title">{formattedDate == picker ? "Today’s Class" : `${new Date(picker).toLocaleDateString('en-US', options)}`}</h4>
                    <div className="d-inline-flex align-items-center class-datepick">
                      <span className="icon"><i className="ti ti-chevron-left me-2"></i></span>
                      <input defaultValue={picker} type="date" className="form-control datetimepicker border-0" onChange={(e) => setPicker(e.target.value)} />
                      <span className="icon"><i className="ti ti-chevron-right"></i></span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card mb-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap p-3 pb-1">
                        <div className="d-flex align-items-center flex-wrap mb-2">
                          <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
                            <img src="assets/img/parents/parent-07.jpg" alt="Profile" />
                          </span>
                          <div>
                            <h6 className="mb-1 text-decoration-line-through">English</h6>
                            <span><i className="ti ti-clock me-2"></i>09:00 - 09:45 AM</span>
                          </div>
                        </div>
                        <span className="badge badge-soft-success shadow-none mb-2"><i className="ti ti-circle-filled fs-8 me-1"></i>Completed</span>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap p-3 pb-1">
                        <div className="d-flex align-items-center flex-wrap mb-2">
                          <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
                            <img src="assets/img/parents/parent-02.jpg" alt="Profile" />
                          </span>
                          <div>
                            <h6 className="mb-1 text-decoration-line-through">Chemistry</h6>
                            <span><i className="ti ti-clock me-2"></i>10:45 - 11:30 AM</span>
                          </div>
                        </div>
                        <span className="badge badge-soft-success shadow-none mb-2"><i className="ti ti-circle-filled fs-8 me-1"></i>Completed</span>
                      </div>
                    </div>
                    <div className="card mb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap p-3 pb-1">
                        <div className="d-flex align-items-center flex-wrap mb-2">
                          <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
                            <img src="assets/img/profiles/avatar-17.jpg" alt="Profile" />
                          </span>
                          <div>
                            <h6 className="mb-1">Physics</h6>
                            <span><i className="ti ti-clock me-2"></i>11:30 - 12:15 AM</span>
                          </div>
                        </div>
                        <span className="badge badge-soft-warning shadow-none mb-2"><i className="ti ti-circle-filled fs-8 me-1"></i>Inprogress</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Attandense */}
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-titile">Home Works</h4>
                </div>
                <div className="card-body py-1">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item py-3 px-0 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="d-flex align-items-center overflow-hidden mb-3">
                          <a href="#" className="avatar avatar-xl flex-shrink-0 me-2">
                            <img src="assets/img/home-work/home-work-01.jpg" alt="img" />
                          </a>
                          <div className="overflow-hidden">
                            <p className="d-flex align-items-center text-info mb-1"><i className="ti ti-tag me-2"></i>Physics</p>
                            <h6 className="text-truncate mb-1"><a href="class-home-work.html">Write about Theory of Pendulum</a></h6>
                            <div className="d-flex align-items-center flex-wrap">
                              <div className="d-flex align-items-center border-end me-1 pe-1">
                                <a href="teacher-details.html" className="avatar avatar-xs flex-shrink-0 me-2">
                                  <img src="assets/img/teachers/teacher-01.jpg" className="rounded-circle" alt="teacher" />
                                </a>
                                <p className="text-dark">Aaron</p>
                              </div>
                              <p>Due by : 16 Jun 2024</p>
                            </div>
                          </div>
                        </div>
                        <div className="circle-progress mb-3" data-value="80">
                          <span className="progress-left">
                            <span className="progress-bar border-success rotate-180"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar border-success rotate-180"></span>
                          </span>
                          <div className="progress-value">90%</div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item py-3 px-0 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="d-flex align-items-center overflow-hidden mb-3">
                          <a href="#" className="avatar avatar-xl flex-shrink-0 me-2">
                            <img src="assets/img/home-work/home-work-02.jpg" alt="img" />
                          </a>
                          <div className="overflow-hidden">
                            <p className="d-flex align-items-center text-success mb-1"><i className="ti ti-tag me-2"></i>Chemistry</p>
                            <h6 className="text-truncate mb-1"><a href="class-home-work.html">Chemistry - Change of Elements</a></h6>
                            <div className="d-flex align-items-center flex-wrap">
                              <div className="d-flex align-items-center border-end me-1 pe-1">
                                <a href="teacher-details.html" className="avatar avatar-xs flex-shrink-0 me-2">
                                  <img src="assets/img/teachers/teacher-01.jpg" className="rounded-circle" alt="teacher" />
                                </a>
                                <p className="text-dark">Hellana</p>
                              </div>
                              <p>Due by : 16 Jun 2024</p>
                            </div>
                          </div>
                        </div>
                        <div className="circle-progress mb-3" data-value="65">
                          <span className="progress-left">
                            <span className="progress-bar border-info rotate-[54]"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar border-info rotate-180"></span>
                          </span>
                          <div className="progress-value">65%</div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item py-3 px-0 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="d-flex align-items-center overflow-hidden mb-3">
                          <a href="#" className="avatar avatar-xl flex-shrink-0 me-2">
                            <img src="assets/img/home-work/home-work-03.jpg" alt="img" />
                          </a>
                          <div className="overflow-hidden">
                            <p className="d-flex align-items-center text-danger mb-1"><i className="ti ti-tag me-2"></i>Maths</p>
                            <h6 className="text-truncate mb-1"><a href="class-home-work.html">Maths - Problems to Solve Page 21</a></h6>
                            <div className="d-flex align-items-center flex-wrap">
                              <div className="d-flex align-items-center border-end me-1 pe-1">
                                <a href="teacher-details.html" className="avatar avatar-xs flex-shrink-0 me-2">
                                  <img src="assets/img/teachers/teacher-01.jpg" className="rounded-circle" alt="teacher" />
                                </a>
                                <p className="text-dark">Morgan</p>
                              </div>
                              <p>Due by : 21 Jun 2024</p>
                            </div>
                          </div>
                        </div>
                        <div className="circle-progress mb-3" data-value="30">
                          <span className="progress-left">
                            <span className="progress-bar border-warning"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar border-warning rotate-180"></span>
                          </span>
                          <div className="progress-value">30%</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Btns "Pay fees" "Exam result" */}
            <div className="col-xl-12 d-flex">
              <div className="col-xl-12 d-flex">
                <div className="row flex-fill">
                  <div className="col-sm-6 col-xl-3 d-flex">
                    <a href="student-fees.html" className="card  border-bottom border-primary border-2 flex-fill animate-card">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-md rounded bg-primary me-2"><i className="ti ti-report-money fs-16"></i></span>
                          <h6>Pay Fees</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-xl-3 d-flex">
                    <a href="student-result.html" className="card border-2 border-bottom border-success flex-fill animate-card">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-md rounded bg-success me-2">
                            <TbHexagonalPrismPlus />
                          </span>
                          <h6>Exam Result</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-xl-3 d-flex">
                    <a href="student-time-table.html" className="card border-2 border-bottom border-warning flex-fill animate-card">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-md rounded bg-warning me-2"><i className="ti ti-calendar fs-16"></i></span>
                          <h6>Calendar</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-xl-3 d-flex">
                    <a href="student-leaves.html" className="card border-bottom border-dark border-2 flex-fill animate-card">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-md rounded bg-dark me-2"><i className="ti ti-calendar-share fs-16"></i></span>
                          <h6>Attendance</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Rightbar Exams */}
        <div className="col-xxl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <h5 className="mb-3">Exams</h5>
              <div className="p-3 pb-0 mb-3 border rounded">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="mb-3">1st Quarterly</h5>
                  <span className="badge badge-soft-danger d-inline-flex align-items-center mb-3"><i className="ti ti-clock me-1"></i>19 Days More</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-3">
                    <h6 className="mb-1">Mathematics</h6>
                    <p><i className="ti ti-clock me-1"></i>01:30 - 02:15 PM</p>
                  </div>
                  <div className="mb-3 text-end">
                    <p className="mb-1"><i className="ti ti-calendar-bolt me-1"></i>06 May 2024</p>
                    <p className="text-primary">Room No : 15</p>
                  </div>
                </div>
              </div>
              <div className="p-3 pb-0 mb-3 border rounded">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="mb-3">2nd Quarterly</h5>
                  <span className="badge badge-soft-danger d-inline-flex align-items-center mb-3"><i className="ti ti-clock me-1"></i>20 Days More</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-3">
                    <h6 className="mb-1">Physics</h6>
                    <p><i className="ti ti-clock me-1"></i>01:30 - 02:15 PM</p>
                  </div>
                  <div className="mb-3 text-end">
                    <p className="mb-1"><i className="ti ti-calendar-bolt me-1"></i>07 May 2024</p>
                    <p className="text-primary">Room No : 15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Student