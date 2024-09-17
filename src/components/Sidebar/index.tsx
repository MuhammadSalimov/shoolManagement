import { useState } from "react";
import { BiSolidSchool } from "react-icons/bi";
import { FaBook, FaChalkboardTeacher, FaTable } from "react-icons/fa";
import { FiLifeBuoy } from "react-icons/fi";
import { PiStudent } from "react-icons/pi";
import { TbBellSchool, TbBuilding, TbHexagonalPrism, TbReportMoney } from "react-icons/tb";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (menu: string) => {
    setOpenMenus(prevOpenMenus =>
      prevOpenMenus.includes(menu)
        ? prevOpenMenus.filter(openMenu => openMenu !== menu)
        : [...prevOpenMenus, menu]
    );
  };

  const isMenuOpen = (menu: string) => openMenus.includes(menu);


  return (

    <div className="sidebar" id="sidebar" style={{}}>
      <div className="slimScrollDiv " style={{ position: "relative", overflowY: "scroll", width: "100%", }}>
        <div className="sidebar-inner slimscroll" style={{ overflow: "hidden", width: "100%", height: "auto" }}>
          <div id="sidebar-menu" className="sidebar-menu">
            {/* Global international */}
            <ul>
              <li>
                <a href="#" className="d-flex align-items-center border bg-white rounded p-2 mb-4">
                  {/* <img src="assets/img/icons/global-img.svg" className="avatar avatar-md img-fluid rounded" alt="Profile" /> */}
                  <span className="text-dark ms-2 fw-normal">Global International</span>
                </a>
              </li>
            </ul>
            <ul>

              {/* Peoples */}
              <li>
                <h6 className="submenu-hdr"><span>Peoples</span></h6>
                <ul className=" ">
                  <li className={isMenuOpen('students') ? 'submenu h-[120px]' : 'submenu h-[40px]'}>
                    <a href="#" onClick={() => toggleMenu('students')} className={isMenuOpen('students') ? 'subdrop' : ''}> <PiStudent /> <span>Students</span><span className="menu-arrow"></span></a>
                    <ul className={isMenuOpen('students') ? 'd-block ' : ''} >
                      <li><Link to="/all-student">All Students</Link></li>
                      <li><Link to="/student-list">Student List</Link></li>
                    </ul>
                  </li>
                  <li className={isMenuOpen('teachers') ? 'submenu h-[120px]' : 'submenu h-[40px]'}>
                    <a onClick={() => toggleMenu('teachers')} className={isMenuOpen('teachers') ? 'subdrop' : ''} href="#"> <FaChalkboardTeacher /> <span>Teachers</span><span className="menu-arrow"></span></a>
                    <ul className={isMenuOpen('teachers') ? 'd-block' : ''} >
                      <li><Link to="/all-teachers">All Teachers</Link></li>
                      <li><Link to="/teacher-list">Teacher List</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Academic */}
              <li>
                <h6 className="submenu-hdr"><span>Academic</span></h6>
                <ul>
                  <li className={isMenuOpen('classes') ? 'submenu h-[80px]' : 'submenu h-[40px]'}>
                    <a onClick={() => toggleMenu("classes")} href="#" className={`${isMenuOpen("classes") && "subdrop"}`}>
                      <BiSolidSchool />
                      <span>Classes</span>
                      <span className="menu-arrow"></span></a>
                    <ul className={isMenuOpen("classes") ? "d-block" : ""}>
                      <li><Link to="/all-classes">All Classes</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/class-room"><TbBuilding />
                      <span>Class Room</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/class-rountime"><TbBellSchool />
                      <span>Class Routine</span>
                    </Link>
                  </li>

                  <li><Link to="/subject"> <FaBook /> <span>Subject</span></Link></li>
                  <li><Link to="/class-time-table"> <FaTable /> <span>Time
                    Table</span></Link></li>
                  <li className={isMenuOpen('examination') ? 'submenu h-[120px]' : 'submenu h-[40px]'}>
                    <a onClick={() => toggleMenu('examination')} className={isMenuOpen("examination") ? "subdrop" : ""} href="#"><TbHexagonalPrism /><span>Examinations</span><span className="menu-arrow"></span></a>
                    <ul className={isMenuOpen("examination") ? "d-block" : ""}>
                      <li><Link to="/exam-schudel">Exam Schedule</Link></li>
                      <li><Link to="/exam-results">Exam Results</Link></li>
                    </ul>
                  </li>

                  <li><Link to="/academic-reasons"> <FiLifeBuoy /> <span>Reasons</span></Link></li>
                </ul>
              </li>
              <li>
                <h6 className="submenu-hdr"><span>Management</span></h6>
                <ul>
                  <li className={isMenuOpen("fees") ? "submenu h-[200px]" : 'h-[40px] submenu'}>
                    <a onClick={() => { toggleMenu("fees") }} href="#" className={isMenuOpen("fees") ? "subdrop" : ''}>
                      <TbReportMoney />
                      <span>Fees Collection</span>
                      <span className="menu-arrow"></span>
                    </a>
                    <ul className={isMenuOpen("fees") ? "d-block" : ''}>
                      <li><Link to="/fees-group">Fees Group</Link></li>
                      <li><Link to="/fees-type">Fees Type</Link></li>
                      <li><Link to="/fees-master">Fees Master</Link></li>
                      <li><Link to="/collect-feest">Collect Fees</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
