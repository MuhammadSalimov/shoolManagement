import { FaFilter } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import { TbBrandHipchat, TbCircleFilled, TbDotsVertical, TbMail, TbPhone, TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";

const AllStudents = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: "352px" }}>
      <div className="content content-two">
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
          <div className="my-auto mb-2">
            <h3 className="page-title mb-1">Students</h3>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/#">Dashboard</Link>
                </li>
                <li className="breadcrumb-item">Peoples</li>
                <li className="breadcrumb-item active" aria-current="page">
                  Students Grid
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
            <div className="mb-2">
              <Link
                to="/create-student"
                className="btn btn-primary d-flex align-items-center"
              >
                <FaRegSquarePlus /> &nbsp; Add Student
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white p-3 border rounded-1 d-flex align-items-center justify-content-between flex-wrap mb-4 pb-0">
          <h4 className="mb-3">Students Grid</h4>
          <div className="dropdown mb-3 me-2">
            <a
              href="#"
              className="btn btn-outline-light bg-white dropdown-toggle d-flex align-items-center"
            >
              <FaFilter /> &nbsp; Filter
            </a>
          </div>
        </div>

        <div className="row">

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <Link to="/student-detail" className="link-primary">
                  AD9892434
                </Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <TbCircleFilled />Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"

                    >
                      <TbDotsVertical />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="/student-detail"
                        >
                          <i className="ti ti-menu me-2"></i>View Student
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="edit-student.html"
                        >
                          <i className="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="student-promotion.html"
                        >
                          <i className="ti ti-arrow-ramp-right-2 me-2"></i>
                          Promote Student
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="#"
                        >
                          <TbTrash />Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="bg-light-300 rounded-2 p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="/student-detail"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/students/student-01.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h5 className="mb-0">
                        <Link to="/student-detail" student-detail>Janet Daniel</Link>
                      </h5>
                      <p>III, A</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gx-2">
                  <div>
                    <p className="mb-0">Roll No</p>
                    <p className="text-dark">35013</p>
                  </div>
                  <div>
                    <p className="mb-0">Gender</p>
                    <p className="text-dark">Female</p>
                  </div>
                  <div>
                    <p className="mb-0">Joined On</p>
                    <p className="text-dark">10 Jan 2015</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbBrandHipchat />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbPhone />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  >
                    <TbMail />
                  </a>
                </div>
                <a
                  href="#"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Add Fees
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <Link to="/student-detail" className="link-primary">
                  AD9892433
                </Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <TbCircleFilled />Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"

                    >
                      <TbDotsVertical />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="bg-light-300 rounded-2 p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="/student-detail"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/students/student-02.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="mb-0">
                        <Link to="/student-detail" student-detail>Joann Michael</Link>
                      </h6>
                      <p>IV, B</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gx-2">
                  <div>
                    <p className="mb-0">Roll No</p>
                    <p className="text-dark">35012</p>
                  </div>
                  <div>
                    <p className="mb-0">Gender</p>
                    <p className="text-dark">Male</p>
                  </div>
                  <div>
                    <p className="mb-0">Joined On</p>
                    <p className="text-dark">19 Aug 2014</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbBrandHipchat />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbPhone />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  >
                    <TbMail />
                  </a>
                </div>
                <a
                  href="#"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Add Fees
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <Link to="/student-detail" className="link-primary">
                  AD9892432
                </Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <TbCircleFilled />Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"

                    >
                      <TbDotsVertical />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="bg-light-300 rounded-2 p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="/student-detail"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/students/student-03.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="mb-0">
                        <Link to="/student-detail" student-detail>Kathleen Dison</Link>
                      </h6>
                      <p>III, A</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gx-2">
                  <div>
                    <p className="mb-0">Roll No</p>
                    <p className="text-dark">35011</p>
                  </div>
                  <div>
                    <p className="mb-0">Gender</p>
                    <p className="text-dark">Female</p>
                  </div>
                  <div>
                    <p className="mb-0">Joined On</p>
                    <p className="text-dark">5 Dec 2017</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbBrandHipchat />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbPhone />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  >
                    <TbMail />
                  </a>
                </div>
                <a
                  href="#"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Add Fees
                </a>
              </div>
            </div>
          </div>

          <div className=" col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <Link to="/student-detail" className="link-primary">
                  AD9892431
                </Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-danger d-inline-flex align-items-center me-1">
                    <TbCircleFilled />Inactive
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"

                    >
                      <TbDotsVertical />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="bg-light-300 rounded-2 p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="/student-detail"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/students/student-04.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="mb-0">
                        <Link to="/student-detail" student-detail>Lisa Gourley </Link>
                      </h6>
                      <p>II, B</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gx-2">
                  <div>
                    <p className="mb-0">Roll No</p>
                    <p className="text-dark">35010</p>
                  </div>
                  <div>
                    <p className="mb-0">Gender</p>
                    <p className="text-dark">Female</p>
                  </div>
                  <div>
                    <p className="mb-0">Joined On</p>
                    <p className="text-dark">13 May 2017</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbBrandHipchat />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbPhone />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  >
                    <TbMail />
                  </a>
                </div>
                <a
                  href="#"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Add Fees
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <Link to="/student-detail" className="link-primary">
                  AD9892430
                </Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <TbCircleFilled />Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"

                    >
                      <TbDotsVertical />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="bg-light-300 rounded-2 p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="/student-detail"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/students/student-05.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="mb-0">
                        <Link to="/student-detail" student-detail>Ralph Claudia</Link>
                      </h6>
                      <p>II, B</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gx-2">
                  <div>
                    <p className="mb-0">Roll No</p>
                    <p className="text-dark">35009</p>
                  </div>
                  <div>
                    <p className="mb-0">Gender</p>
                    <p className="text-dark">Male</p>
                  </div>
                  <div>
                    <p className="mb-0">Joined On</p>
                    <p className="text-dark">20 Jun 20215</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbBrandHipchat />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbPhone />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  >
                    <TbMail />
                  </a>
                </div>
                <a
                  href="#"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Add Fees
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <Link to="/student-detail" className="link-primary">
                  AD9892429
                </Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <TbCircleFilled />Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"

                    >
                      <TbDotsVertical />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="bg-light-300 rounded-2 p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="/student-detail"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/students/student-06.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="mb-0">
                        <Link to="/student-detail" student-detail>Ralph Claudia</Link>
                      </h6>
                      <p>II, B</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gx-2">
                  <div>
                    <p className="mb-0">Roll No</p>
                    <p className="text-dark">35008</p>
                  </div>
                  <div>
                    <p className="mb-0">Gender</p>
                    <p className="text-dark">Male</p>
                  </div>
                  <div>
                    <p className="mb-0">Joined On</p>
                    <p className="text-dark">20 Jun 20215</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbBrandHipchat />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbPhone />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  >
                    <TbMail />
                  </a>
                </div>
                <a
                  href="#"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Add Fees
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <Link to="/student-detail" className="link-primary">
                  AD9892428
                </Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <TbCircleFilled />Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"

                    >
                      <TbDotsVertical />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="bg-light-300 rounded-2 p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="/student-detail"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/students/student-06.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="mb-0">
                        <Link to="/student-detail" student-detail>Julie Scott</Link>
                      </h6>
                      <p>V, A</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gx-2">
                  <div>
                    <p className="mb-0">Roll No</p>
                    <p className="text-dark">35007</p>
                  </div>
                  <div>
                    <p className="mb-0">Gender</p>
                    <p className="text-dark">Female</p>
                  </div>
                  <div>
                    <p className="mb-0">Joined On</p>
                    <p className="text-dark">18 Jan 2023</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbBrandHipchat />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbPhone />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  >
                    <TbMail />
                  </a>
                </div>
                <a
                  href="#"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Add Fees
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <Link to="/student-detail" className="link-primary">
                  AD9892427
                </Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <TbCircleFilled />Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"

                    >
                      <TbDotsVertical />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="bg-light-300 rounded-2 p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="/student-detail"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/students/student-09.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="mb-0">
                        <Link to="/student-detail" student-detail>Susan Boswell</Link>
                      </h6>
                      <p>VIII, B</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gx-2">
                  <div>
                    <p className="mb-0">Roll No</p>
                    <p className="text-dark">35006</p>
                  </div>
                  <div>
                    <p className="mb-0">Gender</p>
                    <p className="text-dark">Female</p>
                  </div>
                  <div>
                    <p className="mb-0">Joined On</p>
                    <p className="text-dark">26 May 2020</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbBrandHipchat />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbPhone />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  >
                    <TbMail />
                  </a>
                </div>
                <a
                  href="#"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Add Fees
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <Link to="/student-detail" className="link-primary">
                  AD9892426
                </Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <TbCircleFilled />Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"

                    >
                      <TbDotsVertical />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="bg-light-300 rounded-2 p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="/student-detail"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/students/student-08.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="mb-0">
                        <Link to="/student-detail" student-detail>Richard Mayes</Link>
                      </h6>
                      <p>V, A</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gx-2">
                  <div>
                    <p className="mb-0">Roll No</p>
                    <p className="text-dark">35005</p>
                  </div>
                  <div>
                    <p className="mb-0">Gender</p>
                    <p className="text-dark">Male</p>
                  </div>
                  <div>
                    <p className="mb-0">Joined On</p>
                    <p className="text-dark">6 Oct 2022</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbBrandHipchat />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbPhone />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  >
                    <TbMail />
                  </a>
                </div>
                <a
                  href="#"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Add Fees
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <Link to="/student-detail" className="link-primary">
                  AD9892425
                </Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <TbCircleFilled />Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"

                    >
                      <TbDotsVertical />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="bg-light-300 rounded-2 p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="/student-detail"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/students/student-12.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="mb-0">
                        <Link to="/student-detail" student-detail>Richard Mayes</Link>
                      </h6>
                      <p>VII, B</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gx-2">
                  <div>
                    <p className="mb-0">Roll No</p>
                    <p className="text-dark">35004</p>
                  </div>
                  <div>
                    <p className="mb-0">Gender</p>
                    <p className="text-dark">Male</p>
                  </div>
                  <div>
                    <p className="mb-0">Joined On</p>
                    <p className="text-dark">6 Oct 2022</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbBrandHipchat />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbPhone />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  >
                    <TbMail />
                  </a>
                </div>
                <a
                  href="#"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Add Fees
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <Link to="/student-detail" className="link-primary">
                  AD9892424
                </Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <TbCircleFilled />Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"

                    >
                      <TbDotsVertical />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="bg-light-300 rounded-2 p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="/student-detail"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/students/student-11.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="mb-0">
                        <Link to="/student-detail" student-detail>Veronica Randle</Link>
                      </h6>
                      <p>IX, A</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gx-2">
                  <div>
                    <p className="mb-0">Roll No</p>
                    <p className="text-dark">35003</p>
                  </div>
                  <div>
                    <p className="mb-0">Gender</p>
                    <p className="text-dark">Female</p>
                  </div>
                  <div>
                    <p className="mb-0">Joined On</p>
                    <p className="text-dark">27 Dec 2009</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbBrandHipchat />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbPhone />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  >
                    <TbMail />
                  </a>
                </div>
                <a
                  href="#"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Add Fees
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <Link to="/student-detail" className="link-primary">
                  AD9892423
                </Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <TbCircleFilled />Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"

                    >
                      <TbDotsVertical />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="bg-light-300 rounded-2 p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="/student-detail"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/students/student-10.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="mb-0">
                        <Link to="/student-detail" student-detail>Thomas Hunt</Link>
                      </h6>
                      <p>X, A</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gx-2">
                  <div>
                    <p className="mb-0">Roll No</p>
                    <p className="text-dark">35002</p>
                  </div>
                  <div>
                    <p className="mb-0">Gender</p>
                    <p className="text-dark">Male</p>
                  </div>
                  <div>
                    <p className="mb-0">Joined On</p>
                    <p className="text-dark">11 Aug 2008</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbBrandHipchat />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                  >
                    <TbPhone />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  >
                    <TbMail />
                  </a>
                </div>
                <a
                  href="#"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Add Fees
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-12 text-center">
            <Link to="#" className="btn btn-primary">
              <i className="ti ti-loader-3 me-2"></i>Load More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
