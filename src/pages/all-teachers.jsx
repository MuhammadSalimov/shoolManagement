import { FaFilter } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllTeachers = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: "352px" }}>
      <div className="content content-two">
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
          <div className="my-auto mb-2">
            <h3 className="page-title mb-1">Teachers</h3>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/#">Dashboard</Link>
                </li>
                <li className="breadcrumb-item">Peoples</li>
                <li className="breadcrumb-item active" aria-current="page">
                  Teachers Grid
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
                <FaRegSquarePlus /> &nbsp; Add Teacher
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white p-3 border rounded-1 d-flex align-items-center justify-content-between flex-wrap mb-4 pb-0">
          <h4 className="mb-3">Teacher Grid</h4>
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
                <a href="teacher-details.html" className="link-primary">
                  T849127
                </a>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <i className="ti ti-circle-filled fs-5 me-1"></i>Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="edit-teacher.html"
                        >
                          <i className="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                        >
                          <i className="ti ti-trash-x me-2"></i>Delete
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
                      href="teacher-details.html"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/teachers/teacher-01.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-dark text-truncate mb-0">
                        <a href="teacher-details.html">Teresa</a>
                      </h6>
                      <p>III A</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <p className="mb-0">Email</p>
                    <p className="text-dark">teresa@example.com</p>
                  </div>
                  <div>
                    <p className="mb-0">Phone</p>
                    <p className="text-dark">+1 82392 37359</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger">Physics</span>
                <a href="teacher-details.html" className="btn btn-light btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <a href="teacher-details.html" className="link-primary">
                  T849126
                </a>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <i className="ti ti-circle-filled fs-5 me-1"></i>Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="edit-teacher.html"
                        >
                          <i className="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                        >
                          <i className="ti ti-trash-x me-2"></i>Delete
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
                      href="teacher-details.html"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/teachers/teacher-02.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-dark text-truncate mb-0">
                        <a href="teacher-details.html">Daniel</a>
                      </h6>
                      <p>II (A)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <p className="mb-0">Email</p>
                    <p className="text-dark">Daniel@example.com</p>
                  </div>
                  <div>
                    <p className="mb-0">Phone</p>
                    <p className="text-dark">+1 56752 86742</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger">Computer</span>
                <a href="teacher-details.html" className="btn btn-light btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <a href="teacher-details.html" className="link-primary">
                  T849125
                </a>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <i className="ti ti-circle-filled fs-5 me-1"></i>Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="edit-teacher.html"
                        >
                          <i className="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                        >
                          <i className="ti ti-trash-x me-2"></i>Delete
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
                      href="teacher-details.html"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/teachers/teacher-03.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-dark text-truncate mb-0">
                        <a href="teacher-details.html">Hellana</a>
                      </h6>
                      <p>VI (A)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <p className="mb-0">Email</p>
                    <p className="text-dark">Hellana@example.com</p>
                  </div>
                  <div>
                    <p className="mb-0">Phone</p>
                    <p className="text-dark">+1 23566 52683</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger">English</span>
                <a href="teacher-details.html" className="btn btn-light btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <a href="teacher-details.html" className="link-primary">
                  T849124
                </a>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <i className="ti ti-circle-filled fs-5 me-1"></i>Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="edit-teacher.html"
                        >
                          <i className="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                        >
                          <i className="ti ti-trash-x me-2"></i>Delete
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
                      href="teacher-details.html"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/teachers/teacher-04.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-dark text-truncate mb-0">
                        <a href="teacher-details.html">Erickson</a>
                      </h6>
                      <p>VI (B) , V (A)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <p className="mb-0">Email</p>
                    <p className="text-dark">Erickson@example.com</p>
                  </div>
                  <div>
                    <p className="mb-0">Phone</p>
                    <p className="text-dark">+1 14259 85573</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger">Spanish</span>
                <a href="teacher-details.html" className="btn btn-light btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <a href="teacher-details.html" className="link-primary">
                  T849123
                </a>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <i className="ti ti-circle-filled fs-5 me-1"></i>Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="edit-teacher.html"
                        >
                          <i className="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                        >
                          <i className="ti ti-trash-x me-2"></i>Delete
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
                      href="teacher-details.html"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/teachers/teacher-05.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-dark text-truncate mb-0">
                        <a href="teacher-details.html">Morgan</a>
                      </h6>
                      <p>VIII</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <p className="mb-0">Email</p>
                    <p className="text-dark">Morgan@example.com</p>
                  </div>
                  <div>
                    <p className="mb-0">Phone</p>
                    <p className="text-dark">+1 63204 35730</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger">Env Science</span>
                <a href="teacher-details.html" className="btn btn-light btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <a href="teacher-details.html" className="link-primary">
                  T849122
                </a>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-danger d-inline-flex align-items-center me-1">
                    <i className="ti ti-circle-filled fs-5 me-1"></i>Inactive
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="edit-teacher.html"
                        >
                          <i className="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                        >
                          <i className="ti ti-trash-x me-2"></i>Delete
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
                      href="teacher-details.html"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/teachers/teacher-06.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-dark text-truncate mb-0">
                        <a href="teacher-details.html">Aaron</a>
                      </h6>
                      <p>I (A)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <p className="mb-0">Email</p>
                    <p className="text-dark">Aaron@example.com</p>
                  </div>
                  <div>
                    <p className="mb-0">Phone</p>
                    <p className="text-dark">+1 26267 80542</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger">Chemistry</span>
                <a href="teacher-details.html" className="btn btn-light btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <a href="teacher-details.html" className="link-primary">
                  T849121
                </a>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <i className="ti ti-circle-filled fs-5 me-1"></i>Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="edit-teacher.html"
                        >
                          <i className="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                        >
                          <i className="ti ti-trash-x me-2"></i>Delete
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
                      href="teacher-details.html"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/teachers/teacher-07.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-dark text-truncate mb-0">
                        <a href="teacher-details.html">Jacquelin</a>
                      </h6>
                      <p>IV</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <p className="mb-0">Email</p>
                    <p className="text-dark">Jacquelin@example.com</p>
                  </div>
                  <div>
                    <p className="mb-0">Phone</p>
                    <p className="text-dark">+1 77502 54845</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger">Maths</span>
                <a href="teacher-details.html" className="btn btn-light btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <a href="teacher-details.html" className="link-primary">
                  T849120
                </a>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <i className="ti ti-circle-filled fs-5 me-1"></i>Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="edit-teacher.html"
                        >
                          <i className="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                        >
                          <i className="ti ti-trash-x me-2"></i>Delete
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
                      href="teacher-details.html"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/teachers/teacher-08.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-dark text-truncate mb-0">
                        <a href="teacher-details.html">Raul</a>
                      </h6>
                      <p>IV</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <p className="mb-0">Email</p>
                    <p className="text-dark">Raul@example.com</p>
                  </div>
                  <div>
                    <p className="mb-0">Phone</p>
                    <p className="text-dark">+1 67845 78784</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger">Biology</span>
                <a href="teacher-details.html" className="btn btn-light btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <a href="teacher-details.html" className="link-primary">
                  T849119
                </a>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <i className="ti ti-circle-filled fs-5 me-1"></i>Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="edit-teacher.html"
                        >
                          <i className="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                        >
                          <i className="ti ti-trash-x me-2"></i>Delete
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
                      href="teacher-details.html"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/teachers/teacher-09.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-dark text-truncate mb-0">
                        <a href="teacher-details.html">Elizabeth</a>
                      </h6>
                      <p>VII</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <p className="mb-0">Email</p>
                    <p className="text-dark">Elizabeth@example.com</p>
                  </div>
                  <div>
                    <p className="mb-0">Phone</p>
                    <p className="text-dark">+1 23566 52683</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger">Finance</span>
                <a href="teacher-details.html" className="btn btn-light btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <a href="teacher-details.html" className="link-primary">
                  T849118
                </a>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <i className="ti ti-circle-filled fs-5 me-1"></i>Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="edit-teacher.html"
                        >
                          <i className="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                        >
                          <i className="ti ti-trash-x me-2"></i>Delete
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
                      href="teacher-details.html"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/teachers/teacher-10.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-dark text-truncate mb-0">
                        <a href="teacher-details.html">Edward</a>
                      </h6>
                      <p>IX (C) , X (C)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <p className="mb-0">Email</p>
                    <p className="text-dark">Edward@example.com</p>
                  </div>
                  <div>
                    <p className="mb-0">Phone</p>
                    <p className="text-dark">+1 14259 85573 </p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger">Economics</span>
                <a href="teacher-details.html" className="btn btn-light btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <a href="teacher-details.html" className="link-primary">
                  T849117
                </a>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <i className="ti ti-circle-filled fs-5 me-1"></i>Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="edit-teacher.html"
                        >
                          <i className="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                        >
                          <i className="ti ti-trash-x me-2"></i>Delete
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
                      href="teacher-details.html"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/teachers/teacher-07.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-dark text-truncate mb-0">
                        <a href="teacher-details.html">Maria</a>
                      </h6>
                      <p>IX (C) , X (C)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <p className="mb-0">Email</p>
                    <p className="text-dark">Maria@example.com</p>
                  </div>
                  <div>
                    <p className="mb-0">Phone</p>
                    <p className="text-dark">+1 97846 84518</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger">Spanish</span>
                <a href="teacher-details.html" className="btn btn-light btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <a href="teacher-details.html" className="link-primary">
                  T849116
                </a>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success d-inline-flex align-items-center me-1">
                    <i className="ti ti-circle-filled fs-5 me-1"></i>Active
                  </span>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="edit-teacher.html"
                        >
                          <i className="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item rounded-1"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                        >
                          <i className="ti ti-trash-x me-2"></i>Delete
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
                      href="teacher-details.html"
                      className="avatar avatar-lg flex-shrink-0"
                    >
                      <img
                        src="assets/img/teachers/teacher-07.jpg"
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-dark text-truncate mb-0">
                        <a href="teacher-details.html">Jacky</a>
                      </h6>
                      <p>VI (A)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <p className="mb-0">Email</p>
                    <p className="text-dark">Jacky@example.com</p>
                  </div>
                  <div>
                    <p className="mb-0">Phone</p>
                    <p className="text-dark">+1 98392 37378</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <span className="badge badge-soft-danger">English</span>
                <a href="teacher-details.html" className="btn btn-light btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="btn btn-primary d-inline-flex align-items-center"
            >
              <i className="ti ti-loader-3 me-2"></i>Load More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeachers;
