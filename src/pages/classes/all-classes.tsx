import AddClass from "@/components/modal/add-class"
import DeleteClass from "@/components/modal/delete-class.modal"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { MdDelete } from "react-icons/md"

import { TbDotsVertical, TbEdit, TbSquareRoundedPlus } from "react-icons/tb"


const AllClasses = () => {
  const [position, setPosition] = useState("")
  return (
    <>
      <div className="page-wrapper min-h-[374px]">
        <div className="content">
          {/* List header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
            <div className="my-auto mb-2">
              <h3 className="page-title mb-1">Classes List</h3>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Classes </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">All Classes</li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <div className="mb-2">
                <button onClick={() => setPosition("class")} className="btn btn-primary flex gap-2 items-center" data-bs-target="#add_class"> <TbSquareRoundedPlus />Add
                  Class</button>
              </div>
            </div>
          </div>

          {/* List Body */}
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
                            <th className="sorting">Class </th>
                            <th className="sorting">Section</th>
                            <th className="sorting">No of Students</th>
                            <th className="sorting">Action</th></tr>
                        </thead>
                        <tbody>
                          <tr className="odd">
                            <td><a href="#" className="link-primary" >C138038</a></td>
                            <td>I</td>
                            <td>A</td>
                            <td>30</td>
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
      {position == "class" && < AddClass setPosition={setPosition} />}
      {position == "delete" && < DeleteClass setPosition={setPosition} />}
    </>
  )
}

export default AllClasses