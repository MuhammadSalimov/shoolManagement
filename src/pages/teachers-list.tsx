const TeacherList = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: "352px" }}>
      <div className="content">
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
          <div className="my-auto mb-2">
            <h3 className="page-title mb-1">Teacher List</h3>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Peoples</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Teacher List
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
            <div className="mb-2">
              <a
                href="add-teacher.html"
                className="btn btn-primary d-flex align-items-center"
              >
                <i className="ti ti-square-rounded-plus me-2"></i>Add Teacher
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
            <h4 className="mb-3">Teachers List</h4>
            <div className="d-flex align-items-center flex-wrap">
              <div className="dropdown mb-3 me-2">
                <a
                  href="#"
                  className="btn btn-outline-light bg-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i className="ti ti-filter me-2"></i>Filter
                </a>
                <div className="dropdown-menu drop-width">
                  <form action="teachers.html">
                    <div className="d-flex align-items-center border-bottom p-3">
                      <h4>Filter</h4>
                    </div>
                    <div className="p-3 border-bottom pb-0">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <select
                              className="select select2-hidden-accessible"
                              data-select2-id="select2-data-1-cqts"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option data-select2-id="select2-data-3-iumg">
                                Select
                              </option>
                              <option>Teresa</option>
                              <option>Daniel</option>
                              <option>Hellana</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id="select2-data-2-i15t"
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
                                  aria-labelledby="select2-xdxq-container"
                                  aria-controls="select2-xdxq-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-xdxq-container"
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
                            <label className="form-label">className</label>
                            <select
                              className="select select2-hidden-accessible"
                              data-select2-id="select2-data-4-zekz"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option data-select2-id="select2-data-6-tbu3">
                                Select
                              </option>
                              <option>I</option>
                              <option>II</option>
                              <option>III</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id="select2-data-5-1yer"
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
                                  aria-labelledby="select2-zdqz-container"
                                  aria-controls="select2-zdqz-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-zdqz-container"
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
                            <label className="form-label">Status</label>
                            <select
                              className="select select2-hidden-accessible"
                              data-select2-id="select2-data-7-vhi4"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option data-select2-id="select2-data-9-itzs">
                                Select
                              </option>
                              <option>Active</option>
                              <option>Inactive</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id="select2-data-8-w6sk"
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
                                  aria-labelledby="select2-seqb-container"
                                  aria-controls="select2-seqb-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-seqb-container"
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
                            aria-label="
activate to sort column descending"
                            style={{ width: "24.7375px" }}
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
                            aria-label="ID: activate to sort column ascending"
                            style={{ width: "61.3875px" }}
                          >
                            ID
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Name: activate to sort column ascending"
                            style={{ width: "105.262px" }}
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
                            style={{ width: "82.35px" }}
                          >
                            className{" "}
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Subject: activate to sort column ascending"
                            style={{ width: "75.7625px" }}
                          >
                            Subject
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Email: activate to sort column ascending"
                            style={{ width: "164.925px" }}
                          >
                            Email
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Phone: activate to sort column ascending"
                            style={{ width: "110.025px" }}
                          >
                            Phone
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Date of Join: activate to sort column ascending"
                            style={{ width: "87.85px" }}
                          >
                            Date of Join
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Status: activate to sort column ascending"
                            style={{ width: "71.6375px" }}
                          >
                            Status
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Action: activate to sort column ascending"
                            style={{ width: "45.6625px" }}
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
                              href="teacher-details.html"
                              className="link-primary"
                            >
                              T849127
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="teacher-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/teachers/teacher-01.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="teacher-details.html">Teresa</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>III A</td>
                          <td>Physics</td>
                          <td>teresa@example.com</td>
                          <td>+1 82392 37359</td>
                          <td>25 Mar 2024</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
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
                                      href="teacher-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Teacher
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-teacher.html"
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
                              href="teacher-details.html"
                              className="link-primary"
                            >
                              T849126
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="teacher-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/teachers/teacher-02.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="teacher-details.html">Daniel</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>II (A)</td>
                          <td>Computer</td>
                          <td>daniel@example.com</td>
                          <td>+1 56752 86742</td>
                          <td>28 Mar 2024</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
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
                                      href="teacher-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Teacher
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-teacher.html"
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
                              href="teacher-details.html"
                              className="link-primary"
                            >
                              T849125
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="teacher-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/teachers/teacher-03.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="teacher-details.html">Hellana</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>VI (A)</td>
                          <td>English</td>
                          <td>hellana@example.com</td>
                          <td>+1 23566 52683</td>
                          <td>11 Apr 2024</td>
                          <td>
                            <span className="badge badge-soft-danger d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Inactive
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
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
                                      href="teacher-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Teacher
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-teacher.html"
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
                              href="teacher-details.html"
                              className="link-primary"
                            >
                              T849124
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="teacher-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/teachers/teacher-06.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="teacher-details.html">Erickson</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>I (A)</td>
                          <td>Chemistry</td>
                          <td>aaron@example.com</td>
                          <td>+1 26267 80542</td>
                          <td>12 May 2024</td>
                          <td>
                            <span className="badge badge-soft-danger d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Inactive
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
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
                                      href="teacher-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Teacher
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-teacher.html"
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
                              href="teacher-details.html"
                              className="link-primary"
                            >
                              T849121
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="teacher-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/teachers/teacher-07.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="teacher-details.html">Morgan</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>IV</td>
                          <td>Maths</td>
                          <td>jacquelin@example.com</td>
                          <td>+1 77502 54845</td>
                          <td>20 May 2024</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
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
                                      href="teacher-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Teacher
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-teacher.html"
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
                              href="teacher-details.html"
                              className="link-primary"
                            >
                              T849122
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="teacher-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/teachers/teacher-06.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="teacher-details.html">Aaron</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>I (A)</td>
                          <td>Chemistry</td>
                          <td>aaron@example.com</td>
                          <td>+1 26267 80542</td>
                          <td>12 May 2024</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
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
                                      href="teacher-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Teacher
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-teacher.html"
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
                              href="teacher-details.html"
                              className="link-primary"
                            >
                              T849127
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="teacher-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/teachers/teacher-09.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="teacher-details.html">Daniel</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>IV</td>
                          <td>Maths</td>
                          <td>jacquelin@example.com</td>
                          <td>+1 77502 54845</td>
                          <td>20 May 2024</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
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
                                      href="teacher-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Teacher
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-teacher.html"
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
                              href="teacher-details.html"
                              className="link-primary"
                            >
                              T849120
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="teacher-details.html"
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
                                  <a href="teacher-details.html">Raul</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>IX</td>
                          <td>Biology</td>
                          <td>raul@example.com</td>
                          <td>+1 67845 78784</td>
                          <td>27 May 2024</td>
                          <td>
                            <span className="badge badge-soft-danger d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Inactive
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
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
                                      href="teacher-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Teacher
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-teacher.html"
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
                              href="teacher-details.html"
                              className="link-primary"
                            >
                              T849119
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="teacher-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/students/student-11.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="teacher-details.html">Elizabeth</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>VII</td>
                          <td>Economics</td>
                          <td>elizabeth@example.com</td>
                          <td>+1 97846 84518</td>
                          <td>10 Jun 2024</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
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
                                      href="teacher-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Teacher
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-teacher.html"
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
                              href="teacher-details.html"
                              className="link-primary"
                            >
                              T849118
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="teacher-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src="assets/img/teachers/teacher-03.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="teacher-details.html">Edward</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>IX (C) , X (C)</td>
                          <td>Finance</td>
                          <td>edward@example.com</td>
                          <td>+1 56187 87489</td>
                          <td>18 Jun 2024</td>
                          <td>
                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1"></i>
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
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
                                      href="teacher-details.html"
                                    >
                                      <i className="ti ti-menu me-2"></i>View
                                      Teacher
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-teacher.html"
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

export default TeacherList;