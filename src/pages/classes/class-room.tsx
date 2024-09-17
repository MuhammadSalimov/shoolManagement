import RoomModal from "@/components/modal/add.room"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { MdDelete } from "react-icons/md"
import { TbDotsVertical, TbEdit } from "react-icons/tb"
import { Link } from "react-router-dom"


const ClassRoom = () => {
  const [position, setPosition] = useState("")

  return (
    <>
      <div className="page-wrapper min-h-[326px]">
        <div className="content">
          {/* Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
            <div className="my-auto mb-2">
              <h3 className="page-title mb-1">Class Room</h3>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Academic </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">Class Room</li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <div className="mb-2">
                <button onClick={() => setPosition("class")} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_class_room"><i className="ti ti-square-rounded-plus-filled me-2"></i>Add
                  Class Room</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body p-0 py-3 overflow-hidden">
              <div className="custom-datatable-filter ">
                <div className="dataTables_wrapper dt-bootstrap5 no-footer">
                  <div className="row dt-row">
                    <div className="col-sm-12 table-responsive">
                      <table className="table datatable dataTable no-footer">
                        <thead className="thead-light">
                          <tr>
                            <th className="sorting">ID</th>
                            <th className="sorting">Room No </th>
                            <th className="sorting">Capacity</th>
                            <th className="sorting">Action</th></tr>
                        </thead>
                        <tbody>
                          <tr className="odd">
                            <td><a href="#" className="link-primary" >C138038</a></td>
                            <td>101</td>
                            <td>50</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <DropdownMenu>
                                  <DropdownMenuTrigger className="bg-[#131022] text-white hover:bg-[#131022] " asChild>
                                    <Button variant="outline"> <TbDotsVertical /> </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent className=" bg-[#131022] text-white  dropdown-menu-right p-3">
                                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                      <DropdownMenuRadioItem className=" flex gap-2 cursor-pointer hover:bg-black" value="edit"><TbEdit /> edit</DropdownMenuRadioItem>
                                      <DropdownMenuRadioItem className="flex gap-2 cursor-pointer" value="delete"><MdDelete /> delete</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {position == "class" && <RoomModal setPosition={setPosition} />}
    </>
  )
}

export default ClassRoom