import * as React from "react"
import { TbTrashX } from "react-icons/tb"

interface IDeleteProps {
  setPosition: React.Dispatch<React.SetStateAction<string>>
}

const DeleteClass: React.FC<IDeleteProps> = ({ setPosition }) => {

  return (
    <div className="modal fade show d-block" id="delete-modal">

      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <form>
            <div className="modal-body text-center">
              <span className="delete-icon">
                <TbTrashX />
              </span>
              <h4>Confirm Deletion</h4>
              <p>You want to delete all the marked items, this cant be undone once you delete.</p>
              <div className="d-flex justify-content-center">
                <button onClick={() => setPosition(" ")} className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-danger">Yes, Delete</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default DeleteClass