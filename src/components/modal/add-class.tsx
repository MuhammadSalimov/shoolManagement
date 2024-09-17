import * as React from "react"
import { FaX } from "react-icons/fa6"

interface ClassProps {
  setPosition: React.Dispatch<React.SetStateAction<string>>
}

const AddClass: React.FC<ClassProps> = ({ setPosition }) => {
  return (
    <div className="modal fade show d-block" id="add_class" >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add Class</h4>
            <button onClick={() => setPosition(" ")} type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
              <FaX />
            </button>
          </div>
          <form>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Class Name</label>
                    <input type="text" className="form-control" />
                  </div>
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
                  <div className="mb-3">
                    <label className="form-label">No of Students</label>
                    <input type="number" max={40} min={10} className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="reset" className="btn btn-light me-2" data-bs-dismiss="modal">reset</button>
              <button  type="button" className="btn btn-primary">Add Class</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddClass