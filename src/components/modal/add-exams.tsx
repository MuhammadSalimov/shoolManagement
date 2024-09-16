import React from 'react'
import { FaX } from 'react-icons/fa6'

interface IExamps {
  setOpenExams: React.Dispatch<React.SetStateAction<boolean>>
}

const ExamsModal: React.FC<IExamps> = ({ setOpenExams }) => {
  return (
    <div className="modal-dialog modal-dialog-centered  modal-xl" >
      <div className="modal-content" >
        <div className="modal-header">
          <h4 className="modal-title">Add Exam</h4>
          <button onClick={() => setOpenExams(false)} type="button" className="btn-close custom-btn-close">
            <FaX />
          </button>
        </div>
        <form action="student-dashboard.html" >
          <div className="modal-body">

            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  {/* Class */}
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Class</label>
                      <input type="text" className="form-control" placeholder="Enter Class" />
                    </div>
                  </div>
                  {/* Section  */}
                  <div className="col-md-4" >
                    <div className="mb-3" >
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
                  {/* Exam name */}
                  <div className="col-md-4" >
                    <div className="mb-3" >
                      <label className="form-label">Exam Name</label>
                      <select defaultValue={""} required className=" w-[150px] modal-select flex flex-col gap-2 bg-transparent border rounded-md p-2"  >
                        <option disabled value={''}>Select</option>
                        <option value="week-text">Week text</option>
                        <option value="mothly-test">Mothly Test</option>
                        <option value="chapter-Wise-Test">Chapter Wise Test</option>
                        <option value="unit-test">Unit Test</option>
                      </select>
                    </div>
                  </div>
                  {/* Start Time */}
                  <div className="col-md-4" >
                    <div className="mb-3" >
                      <label className="form-label">Start Time</label>
                      <div className="date-pic w-[200px]">
                        <input required type="time" className="date-input form-control timepicker" placeholder="09:10 AM" />
                      </div>
                    </div>
                  </div>
                  {/* End Time */}
                  <div className="col-md-4">
                    <div className="mb-3" >
                      <label className="form-label">End Time</label>
                      <div className="date-pic w-[200px]">
                        <input required type="time" className="date-input form-control timepicker" placeholder="09:10 AM" />
                      </div>
                    </div>
                  </div>
                  {/* Duration */}
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Duration</label>
                      <select defaultValue={""} required className=" w-[150px] flex flex-col gap-2 bg-transparent border rounded-md p-2"  >
                        <option disabled value={''}>Select</option>
                        <option value="a">3h</option>
                        <option value="b">2h</option>
                        <option value="c">1h</option>
                        <option value="d">45m</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="exam-schedule-add">
              <div className="exam-schedule-row d-flex align-items-center flex-wrap column-gap-3">
                {/* Exam Date */}
                <div className="shedule-info flex-fill">
                  <div className="mb-3">
                    <label className="form-label">Exam Date</label>
                    <div className="date-pic">
                      <input required type="date" min={`${new Date().toISOString().split('T')[0]}`} className="form-control date-input datetimepicker" />
                      <span className="cal-icon"></span>
                    </div>
                  </div>
                </div>
                {/* Subject */}
                <div className="shedule-info flex-fill">
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <select defaultValue={""} required className=" w-[150px] flex flex-col gap-2 bg-transparent border rounded-md p-2"  >
                      <option disabled value={''}>Select</option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Physics">Physics</option>
                    </select>
                  </div>
                </div>
                {/* Room No */}
                <div className="shedule-info flex-fill">
                  <div className="mb-3">
                    <label className="form-label">Room No</label>
                    <select defaultValue={""} required className=" w-[150px] flex flex-col gap-2 bg-transparent border rounded-md p-2"  >
                      <option disabled value={''}>Select</option>
                      <option value="101">101</option>
                      <option value="102">102</option>
                      <option value="103">103</option>
                    </select>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="modal-footer">
            <button type='button' onClick={() => setOpenExams(false)} className="btn btn-light me-2" >Cancel</button>
            <button type="button" className="btn btn-primary">Add Exam Schedule</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ExamsModal