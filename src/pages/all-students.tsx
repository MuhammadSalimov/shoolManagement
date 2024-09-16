import { FaFilter } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
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
                  <a href="/#">Dashboard</a>
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
              href="javascript:void(0);"
              className="btn btn-outline-light bg-white dropdown-toggle d-flex align-items-center"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <FaFilter /> &nbsp; Filter
            </a>
            <div className="dropdown-menu drop-width">
              <form action="student-grid.html">
                <div className="d-flex align-items-center border-bottom p-3">
                  <h4>Filter</h4>
                </div>
                <div className="p-3 pb-0 border-bottom">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Class</label>
                        <select
                          className="select select2-hidden-accessible"
                          data-select2-id="select2-data-1-5f26"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-3-10ym">
                            Select
                          </option>
                          <option>I</option>
                          <option>II</option>
                          <option>III</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-2-s4he"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-dyoc-container"
                              aria-controls="select2-dyoc-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-dyoc-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Select"
                              >
                                Select
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Section</label>
                        <select
                          className="select select2-hidden-accessible"
                          data-select2-id="select2-data-4-y3zz"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-6-veat">
                            Select
                          </option>
                          <option>A</option>
                          <option>B</option>
                          <option>C</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-5-pecj"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-4izk-container"
                              aria-controls="select2-4izk-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-4izk-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Select"
                              >
                                Select
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <select
                          className="select select2-hidden-accessible"
                          data-select2-id="select2-data-7-eo7o"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-9-my7j">
                            Select
                          </option>
                          <option>Janet</option>
                          <option>Joann</option>
                          <option>Kathleen</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-8-a4ao"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-p11f-container"
                              aria-controls="select2-p11f-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-p11f-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Select"
                              >
                                Select
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select
                          className="select select2-hidden-accessible"
                          data-select2-id="select2-data-10-auow"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-12-jnac">
                            Select
                          </option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-11-t2c5"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-9vde-container"
                              aria-controls="select2-9vde-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-9vde-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Select"
                              >
                                Select
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select
                          className="select select2-hidden-accessible"
                          data-select2-id="select2-data-13-743h"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-15-5r3q">
                            Select
                          </option>
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-14-9suz"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-0b1v-container"
                              aria-controls="select2-0b1v-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-0b1v-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Select"
                              >
                                Select
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
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

        <div className="row">
          <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between">
                <a href="student-details.html" className="link-primary">
                  AD9892434
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
                          href="student-details.html"
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
                      href="student-details.html"
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
                        <a href="student-details.html">Janet Daniel</a>
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
                </div>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add_fees_collect"
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
                <a href="student-details.html" className="link-primary">
                  AD9892433
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
                          href="student-details.html"
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
                      href="student-details.html"
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
                        <a href="student-details.html">Joann Michael</a>
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
                </div>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add_fees_collect"
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
                <a href="student-details.html" className="link-primary">
                  AD9892432
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
                          href="student-details.html"
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
                      href="student-details.html"
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
                        <a href="student-details.html">Kathleen Dison</a>
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
                </div>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add_fees_collect"
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
                <a href="student-details.html" className="link-primary">
                  AD9892431
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
                          href="student-details.html"
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
                      href="student-details.html"
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
                        <a href="student-details.html">Lisa Gourley </a>
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
                </div>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add_fees_collect"
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
                <a href="student-details.html" className="link-primary">
                  AD9892430
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
                          href="student-details.html"
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
                      href="student-details.html"
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
                        <a href="student-details.html">Ralph Claudia</a>
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
                </div>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add_fees_collect"
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
                <a href="student-details.html" className="link-primary">
                  AD9892429
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
                          href="student-details.html"
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
                      href="student-details.html"
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
                        <a href="student-details.html">Ralph Claudia</a>
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
                </div>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add_fees_collect"
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
                <a href="student-details.html" className="link-primary">
                  AD9892428
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
                          href="student-details.html"
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
                      href="student-details.html"
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
                        <a href="student-details.html">Julie Scott</a>
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
                </div>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add_fees_collect"
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
                <a href="student-details.html" className="link-primary">
                  AD9892427
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
                          href="student-details.html"
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
                      href="student-details.html"
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
                        <a href="student-details.html">Susan Boswell</a>
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
                </div>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add_fees_collect"
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
                <a href="student-details.html" className="link-primary">
                  AD9892426
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
                          href="student-details.html"
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
                      href="student-details.html"
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
                        <a href="student-details.html">Richard Mayes</a>
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
                </div>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add_fees_collect"
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
                <a href="student-details.html" className="link-primary">
                  AD9892425
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
                          href="student-details.html"
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
                      href="student-details.html"
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
                        <a href="student-details.html">Richard Mayes</a>
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
                </div>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add_fees_collect"
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
                <a href="student-details.html" className="link-primary">
                  AD9892424
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
                          href="student-details.html"
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
                      href="student-details.html"
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
                        <a href="student-details.html">Veronica Randle</a>
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
                </div>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add_fees_collect"
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
                <a href="student-details.html" className="link-primary">
                  AD9892423
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
                          href="student-details.html"
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
                      href="student-details.html"
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
                        <a href="student-details.html">Thomas Hunt</a>
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
                </div>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add_fees_collect"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Add Fees
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-12 text-center">
            <a href="#" className="btn btn-primary">
              <i className="ti ti-loader-3 me-2"></i>Load More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
