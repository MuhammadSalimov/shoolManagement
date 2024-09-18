import { FaFilter } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";

const StudentList = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: "352px" }}>
      <div className="content">
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
          <div className="my-auto mb-2">
            <h3 className="page-title mb-1">Students List</h3>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item">Students</li>
                <li className="breadcrumb-item active" aria-current="page">
                  All Students
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
            <div className="mb-2 ">
              <a
                href="/create-student"
                className="btn btn-primary d-flex align-items-center "
              >
                <FaRegSquarePlus /> &nbsp; Add Student
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
            <h4 className="mb-3">Students List</h4>
            <div className="d-flex align-items-center flex-wrap">
              <div className="dropdown mb-3 me-2">
                <a
                  href="#"
                  className="btn btn-outline-light bg-white dropdown-toggle d-flex align-items-center"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <FaFilter className="me-2" />
                  Filter
                </a>
                <div className="dropdown-menu drop-width">
                  <form action="students.html">
                    <div className="d-flex align-items-center border-bottom p-3">
                      <h4>Filter</h4>
                    </div>
                    <div className="p-3 pb-0 border-bottom">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Class</label>
                            <select className="select select2-hidden-accessible">
                              <option>Select</option>
                              <option>I</option>
                              <option>II</option>
                              <option>III</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Section</label>
                            <select className="select select2-hidden-accessible">
                              <option>Select</option>
                              <option>A</option>
                              <option>B</option>
                              <option>C</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <select className="select select2-hidden-accessible">
                              <option>Select</option>
                              <option>Janet</option>
                              <option>Joann</option>
                              <option>Kathleen</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select className="select select2-hidden-accessible">
                              <option>Select</option>
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select className="select select2-hidden-accessible">
                              <option>Select</option>
                              <option>Active</option>
                              <option>Inactive</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 d-flex align-items-center justify-content-end">
                      <a href="#" className="btn btn-light me-3">
                        Reset
                      </a>
                      <button type="submit" className="btn btn-primary">
                        Apply
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body p-0 py-3">
            <div className="custom-datatable-filter table-responsive">
              <div
                id="DataTables_Table_0_wrapper"
                className="dataTables_wrapper dt-bootstrap5 no-footer"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div
                      className="dataTables_length"
                      id="DataTables_Table_0_length"
                    >
                      <label>
                        Row Per Page{" "}
                        <select
                          name="DataTables_Table_0_length"
                          aria-controls="DataTables_Table_0"
                          className="form-select form-select-sm"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>{" "}
                        Entries
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div
                      id="DataTables_Table_0_filter"
                      className="dataTables_filter"
                    >
                      <label>
                        {" "}
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder="Search"
                          aria-controls="DataTables_Table_0"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row dt-row">
                  <div className="col-sm-12 table-responsive">
                    <table
                      className="table datatable dataTable no-footer"
                      id="DataTables_Table_0"
                    >
                      <thead className="thead-light">
                        <tr>
                          <th
                            className="no-sort sorting sorting_asc"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-sort="ascending"
                            aria-label=" activate to sort column descending"
                            style={{ width: " 21px" }}
                          >
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="select-all"
                              />
                            </div>
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Admission No: activate to sort column ascending"
                            style={{ width: "88.1625px" }}
                          >
                            Admission No
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Roll No: activate to sort column ascending"
                            style={{ width: "45.2625px" }}
                          >
                            Roll No
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Name: activate to sort column ascending"
                            style={{ width: "94.675px" }}
                          >
                            Name
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="className : activate to sort column ascending"
                            style={{ width: "34.75px" }}
                          >
                            className{" "}
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Section: activate to sort column ascending"
                            style={{ width: "47.2875px" }}
                          >
                            Section
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Gender: activate to sort column ascending"
                            style={{ width: "45.7125px" }}
                          >
                            Gender
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Status: activate to sort column ascending"
                            style={{ width: "65.1875px" }}
                          >
                            Status
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Date of Join: activate to sort column ascending"
                            style={{ width: "78.675px" }}
                          >
                            Date of Join
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="DOB: activate to sort column ascending"
                            style={{ width: "80.4625px" }}
                          >
                            DOB
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Action: activate to sort column ascending"
                            style={{ width: "282.188px" }}
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd">
                          <td className="sorting_1">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                          </td>
                          <td>
                            <a
                              href="student-details.html"
                              className="link-primary"
                            >
                              AD9892434
                            </a>
                          </td>
                          <td>35013</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="student-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/students/student-01.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="student-details.html">Janet</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>III</td>
                          <td>A</td>
                          <td>Female</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>25 Mar 2024</td>
                          <td>10 Jan 2015</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-brand-hipchat"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-phone"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                              >
                                <i className="ti ti-mail"></i>
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add_fees_collect"
                                className="btn btn-light fs-12 fw-semibold me-3"
                              >
                                Collect Fees
                              </a>
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
                                      href="student-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Student
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-student.html"
                                    >
                                      <i className="ti ti-edit-circle me-2"></i>
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#login_detail"
                                    >
                                      <i className="ti ti-lock me-2"></i>Login
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                    >
                                      <i className="ti ti-toggle-right me-2"></i>
                                      Disable
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
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-modal"
                                    >
                                      <i className="ti ti-trash-x me-2"></i>
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="even">
                          <td className="sorting_1">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                          </td>
                          <td>
                            <a
                              href="student-details.html"
                              className="link-primary"
                            >
                              AD9892433
                            </a>
                          </td>
                          <td>35013</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="student-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/students/student-02.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="student-details.html">Joann</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>IV</td>
                          <td>B</td>
                          <td>Male</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>18 Mar 2024</td>
                          <td>19 Aug 2014</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-brand-hipchat"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-phone"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                              >
                                <i className="ti ti-mail"></i>
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add_fees_collect"
                                className="btn btn-light fs-12 fw-semibold me-3"
                              >
                                Collect Fees
                              </a>
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
                                      href="student-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Student
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-student.html"
                                    >
                                      <i className="ti ti-edit-circle me-2"></i>
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#login_detail"
                                    >
                                      <i className="ti ti-lock me-2"></i>Login
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                    >
                                      <i className="ti ti-toggle-right me-2"></i>
                                      Disable
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
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-modal"
                                    >
                                      <i className="ti ti-trash-x me-2"></i>
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td className="sorting_1">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                          </td>
                          <td>
                            <a
                              href="student-details.html"
                              className="link-primary"
                            >
                              AD9892432
                            </a>
                          </td>
                          <td>35011</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="student-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/students/student-03.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="student-details.html">Kathleen</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>II</td>
                          <td>A</td>
                          <td>Female</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>14 Mar 2024</td>
                          <td>05 Dec 2017</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-brand-hipchat"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-phone"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                              >
                                <i className="ti ti-mail"></i>
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add_fees_collect"
                                className="btn btn-light fs-12 fw-semibold me-3"
                              >
                                Collect Fees
                              </a>
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
                                      href="student-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Student
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-student.html"
                                    >
                                      <i className="ti ti-edit-circle me-2"></i>
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#login_detail"
                                    >
                                      <i className="ti ti-lock me-2"></i>Login
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                    >
                                      <i className="ti ti-toggle-right me-2"></i>
                                      Disable
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
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-modal"
                                    >
                                      <i className="ti ti-trash-x me-2"></i>
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="even">
                          <td className="sorting_1">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                          </td>
                          <td>
                            <a
                              href="student-details.html"
                              className="link-primary"
                            >
                              AD9892431
                            </a>
                          </td>
                          <td>35010</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="student-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/students/student-04.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="student-details.html">Gifford</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>I</td>
                          <td>B</td>
                          <td>Male</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>27 Feb 2024</td>
                          <td>22 Mar 2018</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-brand-hipchat"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-phone"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                              >
                                <i className="ti ti-mail"></i>
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add_fees_collect"
                                className="btn btn-light fs-12 fw-semibold me-3"
                              >
                                Collect Fees
                              </a>
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
                                      href="student-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Student
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-student.html"
                                    >
                                      <i className="ti ti-edit-circle me-2"></i>
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#login_detail"
                                    >
                                      <i className="ti ti-lock me-2"></i>Login
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                    >
                                      <i className="ti ti-toggle-right me-2"></i>
                                      Disable
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
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-modal"
                                    >
                                      <i className="ti ti-trash-x me-2"></i>
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td className="sorting_1">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                          </td>
                          <td>
                            <a
                              href="student-details.html"
                              className="link-primary"
                            >
                              AD9892430
                            </a>
                          </td>
                          <td>35009</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="student-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/students/student-05.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="student-details.html">Lisa</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>II</td>
                          <td>B</td>
                          <td>Female</td>
                          <td>
                            <span className="badge badge-soft-danger d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Inactive
                            </span>
                          </td>
                          <td>13 Feb 2024</td>
                          <td>13 May 2017</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-brand-hipchat"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-phone"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                              >
                                <i className="ti ti-mail"></i>
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add_fees_collect"
                                className="btn btn-light fs-12 fw-semibold me-3"
                              >
                                Collect Fees
                              </a>
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
                                      href="student-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Student
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-student.html"
                                    >
                                      <i className="ti ti-edit-circle me-2"></i>
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#login_detail"
                                    >
                                      <i className="ti ti-lock me-2"></i>Login
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                    >
                                      <i className="ti ti-toggle-right me-2"></i>
                                      Disable
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
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-modal"
                                    >
                                      <i className="ti ti-trash-x me-2"></i>
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="even">
                          <td className="sorting_1">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                          </td>
                          <td>
                            <a
                              href="student-details.html"
                              className="link-primary"
                            >
                              AD9892429
                            </a>
                          </td>
                          <td>35008</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="student-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/students/student-06.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="student-details.html">Ralph</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>III</td>
                          <td>B</td>
                          <td>Male</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>11 Feb 2024</td>
                          <td>20 Jun 2015</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-brand-hipchat"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-phone"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                              >
                                <i className="ti ti-mail"></i>
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add_fees_collect"
                                className="btn btn-light fs-12 fw-semibold me-3"
                              >
                                Collect Fees
                              </a>
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
                                      href="student-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Student
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-student.html"
                                    >
                                      <i className="ti ti-edit-circle me-2"></i>
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#login_detail"
                                    >
                                      <i className="ti ti-lock me-2"></i>Login
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                    >
                                      <i className="ti ti-toggle-right me-2"></i>
                                      Disable
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
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-modal"
                                    >
                                      <i className="ti ti-trash-x me-2"></i>
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td className="sorting_1">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                          </td>
                          <td>
                            <a
                              href="student-details.html"
                              className="link-primary"
                            >
                              AD9892428
                            </a>
                          </td>
                          <td>35007</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="student-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/students/student-07.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="student-details.html">Julie</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>V</td>
                          <td>A</td>
                          <td>Female</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>24 Jan 2024</td>
                          <td>18 Sep 2013</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-brand-hipchat"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-phone"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                              >
                                <i className="ti ti-mail"></i>
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add_fees_collect"
                                className="btn btn-light fs-12 fw-semibold me-3"
                              >
                                Collect Fees
                              </a>
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
                                      href="student-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Student
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-student.html"
                                    >
                                      <i className="ti ti-edit-circle me-2"></i>
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#login_detail"
                                    >
                                      <i className="ti ti-lock me-2"></i>Login
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                    >
                                      <i className="ti ti-toggle-right me-2"></i>
                                      Disable
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
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-modal"
                                    >
                                      <i className="ti ti-trash-x me-2"></i>
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="even">
                          <td className="sorting_1">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                          </td>
                          <td>
                            <a
                              href="student-details.html"
                              className="link-primary"
                            >
                              AD9892427
                            </a>
                          </td>
                          <td>35006</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="student-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/students/student-08.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="student-details.html">Ryan</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>VI</td>
                          <td>A</td>
                          <td>Male</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>19 Jan 2024</td>
                          <td>26 Nov 2012</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-brand-hipchat"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-phone"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                              >
                                <i className="ti ti-mail"></i>
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add_fees_collect"
                                className="btn btn-light fs-12 fw-semibold me-3"
                              >
                                Collect Fees
                              </a>
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
                                      href="student-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Student
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-student.html"
                                    >
                                      <i className="ti ti-edit-circle me-2"></i>
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#login_detail"
                                    >
                                      <i className="ti ti-lock me-2"></i>Login
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                    >
                                      <i className="ti ti-toggle-right me-2"></i>
                                      Disable
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
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-modal"
                                    >
                                      <i className="ti ti-trash-x me-2"></i>
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td className="sorting_1">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                          </td>
                          <td>
                            <a
                              href="student-details.html"
                              className="link-primary"
                            >
                              AD9892426
                            </a>
                          </td>
                          <td>35005</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="student-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/students/student-09.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="student-details.html">Susan</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>VIII</td>
                          <td>B</td>
                          <td>Female</td>
                          <td>
                            <span className="badge badge-soft-danger d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Inactive
                            </span>
                          </td>
                          <td>08 Jan 2024</td>
                          <td>26 May 2010</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-brand-hipchat"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-phone"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                              >
                                <i className="ti ti-mail"></i>
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add_fees_collect"
                                className="btn btn-light fs-12 fw-semibold me-3"
                              >
                                Collect Fees
                              </a>
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
                                      href="student-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Student
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-student.html"
                                    >
                                      <i className="ti ti-edit-circle me-2"></i>
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#login_detail"
                                    >
                                      <i className="ti ti-lock me-2"></i>Login
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                    >
                                      <i className="ti ti-toggle-right me-2"></i>
                                      Disable
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
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-modal"
                                    >
                                      <i className="ti ti-trash-x me-2"></i>
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="even">
                          <td className="sorting_1">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                          </td>
                          <td>
                            <a
                              href="student-details.html"
                              className="link-primary"
                            >
                              AD9892425
                            </a>
                          </td>
                          <td>35004</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="student-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/students/student-10.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="student-details.html">Richard</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>VII</td>
                          <td>B</td>
                          <td>Male</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>22 Dec 2024</td>
                          <td>06 Oct 2011</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-brand-hipchat"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                              >
                                <i className="ti ti-phone"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                              >
                                <i className="ti ti-mail"></i>
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add_fees_collect"
                                className="btn btn-light fs-12 fw-semibold me-3"
                              >
                                Collect Fees
                              </a>
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
                                      href="student-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Student
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-student.html"
                                    >
                                      <i className="ti ti-edit-circle me-2"></i>
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#login_detail"
                                    >
                                      <i className="ti ti-lock me-2"></i>Login
                                      Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="#"
                                    >
                                      <i className="ti ti-toggle-right me-2"></i>
                                      Disable
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
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete-modal"
                                    >
                                      <i className="ti ti-trash-x me-2"></i>
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5"></div>
                  <div className="col-sm-12 col-md-7">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="DataTables_Table_0_paginate"
                    >
                      <ul className="pagination">
                        <li
                          className="paginate_button page-item previous disabled"
                          id="DataTables_Table_0_previous"
                        >
                          <a
                            aria-controls="DataTables_Table_0"
                            aria-disabled="true"
                            role="link"
                            data-dt-idx="previous"
                            tabIndex={-1}
                            className="page-link"
                          >
                            Prev{" "}
                          </a>
                        </li>
                        <li className="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            role="link"
                            aria-current="page"
                            data-dt-idx="0"
                            tabIndex={0}
                            className="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            role="link"
                            data-dt-idx="1"
                            tabIndex={0}
                            className="page-link"
                          >
                            2
                          </a>
                        </li>
                        <li
                          className="paginate_button page-item next"
                          id="DataTables_Table_0_next"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            role="link"
                            data-dt-idx="next"
                            tabIndex={0}
                            className="page-link"
                          >
                            {" "}
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
