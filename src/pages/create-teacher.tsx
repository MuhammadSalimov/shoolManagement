import { TbInfoSquareRounded, TbPassword, TbPhotoPlus } from "react-icons/tb"
import { Link } from "react-router-dom"

const CreateTeacher = () => {
  return (
    <div className="page-wrapper">
      <div className="content content-two">
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
          <div className="my-auto mb-2">
            <h3 className="mb-1">Add Teacher</h3>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/">Dashboard</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/teacher-list">Teacher</Link>
                </li>
                <li className="breadcrumb-item active">Add Teacher</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row" >
          <div className="col-md-12" >
            <form>
              <div className="card">
                <div className="card-header bg-light">
                  <div className="d-flex align-items-center">
                    <span className="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                      <TbInfoSquareRounded />
                    </span>
                    <h4 className="text-dark">Personal Information</h4>
                  </div>
                </div>
                <div className="card-body pb-1">
                  {/* upload */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames">
                          <TbPhotoPlus />
                        </div>
                        <div className="profile-upload">
                          <div className="profile-uploader d-flex align-items-center">
                            <div className="drag-upload-btn mb-3">
                              Upload
                              <input type="file" className="form-control image-sign" />
                            </div>
                            <Link to="#" className="btn btn-primary mb-3">Remove</Link>
                          </div>
                          <p className="fs-12">Upload image size 4MB, Format JPG, PNG, SVG</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row row-cols-xxl-5 row-cols-md-6">
                    {/* Teacher ID */}
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Teacher ID</label>
                        <input type="text" name="teacherId" className="form-control" />
                      </div>
                    </div>
                    {/* firsname */}
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" name="firsName" className="form-control" />
                      </div>
                    </div>
                    {/* lastnaem */}
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" name="lastName" className="form-control" />
                      </div>
                    </div>
                    {/* Class */}
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <div className="col-md-4" >
                          <div className="mb-3" >
                            <label className="form-label">Class</label>
                            <select defaultValue={""} required className=" w-[150px] flex flex-col gap-2 bg-transparent border rounded-md p-2"  >
                              <option disabled value={''}>Select</option>
                              <option value="I">I</option>
                              <option value="II">II</option>
                              <option value="III">III</option>
                              <option value="V">V</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Section */}
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Section</label>
                        <select defaultValue={""} required className=" w-[150px] flex flex-col gap-2 bg-transparent border rounded-md p-2"  >
                          <option disabled value={''}>Select</option>
                          <option value="a">A</option>
                          <option value="b">B</option>
                          <option value="c">C</option>
                          <option value="d">D</option>
                        </select>
                      </div>
                    </div>
                    {/* Subject */}
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <select defaultValue={""} required className=" w-[150px] flex flex-col gap-2 bg-transparent border rounded-md p-2"  >
                          <option disabled value={''}>Select</option>
                          <option value="Physics">Physics</option>
                          <option value="Computer">Computer</option>
                          <option value="English">English</option>
                          <option value="Spanish">Spanish</option>
                        </select>
                      </div>
                    </div>
                    {/* Gender */}
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select defaultValue={""} required className=" w-[150px] flex flex-col gap-2 bg-transparent border rounded-md p-2"  >
                          <option disabled value={''}>Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    {/* Date of Birtday */}
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Date of Birth</label>
                        <div className="date-pic">
                          <input required type="date" max={`${new Date().toISOString().split('T')[0]}`} className="form-control date-input datetimepicker" />

                        </div>
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Primary Contact Number</label>
                        <input type="tel" className="form-control" />
                      </div>
                    </div>
                    {/* Email */}
                    <div className="col-xxl col-xl-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    {/* Other information */}
                    <div className="col-xxl-12 col-xl-12">
                      <div className="mb-3">
                        <label className="form-label">Notes</label>
                        <textarea className="form-control" placeholder="Other Information" rows={4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="card">
                <div className="card-header bg-light">
                  <div className="d-flex align-items-center">
                    <span className="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                      <TbPassword />
                    </span>
                    <h4 className="text-dark">Password</h4>
                  </div>
                </div>
                <div className="card-body pb-1">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">New Password</label>
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-end">
                <button type="reset" className="btn btn-light me-3">Reset</button>
                <button type="button" className="btn btn-primary">Add Teacher</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTeacher