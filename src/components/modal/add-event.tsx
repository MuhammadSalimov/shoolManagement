import * as React from "react";
import { FaX } from "react-icons/fa6"

interface EventModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventModal: React.FC<EventModalProps> = ({ setOpenModal }) => {
  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">New Event</h4>
          <button onClick={() => setOpenModal(false)} type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <FaX />
          </button>
        </div>
        <form>
          <div className="modal-body">
            <div className="row">
              {/* Title */}
              <div className="mb-3">
                <label className="form-label">Event Title</label>
                <input type="text" className="form-control" placeholder="Enter Title" />
              </div>
              {/* Category */}
              <div className="mb-3">
                <label className="form-label">Event Category</label>
                <select defaultValue={""} required className=" w-[150px] flex flex-col gap-2 bg-transparent border rounded-md p-2"  >
                  <option disabled value={''}>Select</option>
                  <option value="Celebration">Celebration</option>
                  <option value="Training">Training</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Holidays">Holidays</option>
                </select>

              </div>
              {/* start date */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Start Date</label>
                  <div className="date-pic">
                    <input required type="date" min={`${new Date().toISOString().split('T')[0]}`} className="form-control date-input datetimepicker" />
                    <span className="cal-icon"></span>
                  </div>
                </div>
              </div>
              {/* end date */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">End Date</label>
                  <div className="date-pic">
                    <input required type="date" min={`${new Date().toISOString().split('T')[0]}`} className="form-control date-input datetimepicker" />
                    <span className="cal-icon"></span>
                  </div>
                </div>
              </div>
              {/* start time */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Start Time</label>
                  <div className="date-pic">
                    <input required type="time" className="date-input form-control timepicker" placeholder="09:10 AM" />
                  </div>
                </div>
              </div>
              {/* end time */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">End Time</label>
                  <div className="date-pic">
                    <input required type="time" className="date-input form-control timepicker" placeholder="09:10 AM" />
                  </div>
                </div>
              </div>
              {/* file and message */}
              <div className="col-md-12">
                <div className="mb-3">
                  <div className="bg-light p-3 pb-2 rounded">
                    <div className="mb-3">
                      <label className="form-label">Attachment</label>
                      <p>Upload size of 4MB, Accepted Format PDF</p>
                    </div>
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="btn btn-primary drag-upload-btn mb-2 me-2">
                        <i className="ti ti-file-upload me-1"></i>Upload
                        <input type="file" className="form-control image_sign" />
                      </div>
                      <p className="mb-2">Fees_Structure.pdf</p>
                    </div>
                  </div>
                </div>
                <div className="mb-0">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" placeholder="Write the purpose of the event" />
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button onClick={() => setOpenModal(false)} type="button" className="btn btn-light me-2">Cancel</button>
            <button type="button" className="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EventModal