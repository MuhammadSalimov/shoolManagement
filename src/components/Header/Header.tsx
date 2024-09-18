import { TbBrightnessUp, TbMenuDeep, TbMoon } from "react-icons/tb";
import { CiCalendarDate, CiSearch, CiSettings } from "react-icons/ci";
import { MdKeyboardCommandKey } from "react-icons/md";
import { FiPlusSquare } from "react-icons/fi";
import { FaBell, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoSchoolOutline } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { PiInvoice } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaEllipsis } from "react-icons/fa6";
import { BiLogOut, BiUserCircle } from "react-icons/bi";
const Header = () => {
  const [acYear, setAcYear] = useState("2023/2024");
  const [position, setPosition] = useState("eng");
  const [showBtns, setShowBtns] = useState(false);

  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("isDark");
    return saved ? JSON.parse(saved) : false;
  });

  const [sidebar, setSidebar] = useState(false);

  // dark mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDark]);

  // mobile version sidebar
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      if (sidebar) {
        rootElement.classList.add("slide-nav");
      } else {
        rootElement.classList.remove("slide-nav");
      }
    }
  }, [sidebar]);

  return (
    <div className="header">
      <div className="header-left active">
        <Link to={"/"} className="logo logo-normal ">
          <img className="m-auto" src="./logo.svg" alt="Logo" />
        </Link>
        <Link to={"/"} className="logo-small">
          <img src="./logo-small.svg" alt="Logo" />
        </Link>
        <Link to="/" className="dark-logo">
          <img className="m-auto" src="./logo-dark.svg" alt="Logo" />
        </Link>
        <Link id="toggle_btn" to={"/"}>
          <TbMenuDeep />
        </Link>
      </div>

      <button
        onClick={() => setSidebar(!sidebar)}
        id="mobile_btn"
        className="mobile_btn"
      >
        <span className="bar-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div className="header-user">
        <div className="nav user-menu">
          {/* Search */}
          <div className="nav-item nav-search-inputs me-auto">
            <div className="top-nav-search">
              <button className="responsive-search">
                <CiSearch />
              </button>
              <form action="#" className="dropdown">
                <div className="searchinputs" id="dropdownMenuClickable">
                  <input type="text" placeholder="Search" />
                  <div className="search-addon">
                    <button type="submit">
                      <MdKeyboardCommandKey />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right btns */}
          <div className="d-flex align-items-center">
            {/* Academic Year */}
            <DropdownMenu>
              <DropdownMenuTrigger className="me-2 mr-1" asChild>
                <button
                  className="btn btn-outline-light fw-normal bg-white d-flex align-items-center p-2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <CiCalendarDate /> &nbsp; Academic Year : {acYear}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="dropdown-menu show right-[-100px] dropdown-menu-right border shadow-sm dropdown-md">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={acYear}
                  onValueChange={setAcYear}
                >
                  <DropdownMenuRadioItem
                    className="text-slate-400 py-3 flex justify-center"
                    value="2023/2024"
                  >
                    Academic Year : 2023 / 2024
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    className="text-slate-400 py-3 flex justify-center"
                    value="2022/2023"
                  >
                    Academic Year : 2022 / 2023
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    className="text-slate-400 py-3 flex justify-center"
                    value="2021/2022"
                  >
                    Academic Year : 2021 / 2022
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Languages */}
            <DropdownMenu>
              <DropdownMenuTrigger className="pe-1 ms-1" asChild>
                <Button
                  variant="outline"
                  className="btn btn-outline-light bg-white btn-icon d-flex align-items-center me-1 p-2"
                >
                  {position}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="dropdown-menu right-[-70px] show dropdown-menu-right">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem className="text-slate-400" value="eng">
                    English
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem className="text-slate-400 " value="ru">
                    Russian
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    className="text-slate-400 "
                    value="uzb"
                  >
                    Uzbek
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    className="text-slate-400 "
                    value="esp"
                  >
                    Spanish
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* +Add btn */}
            <Popover open={showBtns} onOpenChange={setShowBtns}>
              <PopoverTrigger
                onClick={() => setShowBtns(!showBtns)}
                className="w-[50px] h-[38px] mr-1"
                asChild
              >
                <button className="btn flex justify-center items-center btn-outline-light bg-white ">
                  <FiPlusSquare className="w-full fs-4" />
                </button>
              </PopoverTrigger>
              <PopoverContent className=" dropdown-menu show right-[-100px] dropdown-menu-right border shadow-sm dropdown-md">
                <div className="p-3 border-bottom">
                  <h5>Add New</h5>
                </div>
                <div className="p-3 pb-0">
                  <div className="row gx-2">
                    <div className="col-6">
                      <Link
                        onClick={() => setShowBtns(false)}
                        to="/create-student"
                        className="d-block bg-primary-transparent ronded p-2 text-center mb-3 className-hover"
                      >
                        <div className="avatar avatar-lg mb-2">
                          <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-primary rounded-circle">
                            {" "}
                            <IoSchoolOutline />{" "}
                          </span>
                        </div>
                        <p className=" text-black">Students</p>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        onClick={() => setShowBtns(false)}
                        to="/create-teacher"
                        className="d-block bg-success-transparent ronded p-2 text-center mb-3 className-hover"
                      >
                        <div className="avatar avatar-lg mb-2">
                          <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-success rounded-circle">
                            <GiTeacher />
                          </span>
                        </div>
                        <p className=" text-black">Teachers</p>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        onClick={() => setShowBtns(false)}
                        to="/create-staffs"
                        className="d-block bg-warning-transparent ronded p-2 text-center mb-3 className-hover"
                      >
                        <div className="avatar avatar-lg rounded-circle mb-2">
                          <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-warning rounded-circle">
                            {" "}
                            <FaUsers />{" "}
                          </span>
                        </div>
                        <p className=" text-black">Staffs</p>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        onClick={() => setShowBtns(false)}
                        to="/create-invoice"
                        className="d-block bg-info-transparent ronded p-2 text-center mb-3 className-hover"
                      >
                        <div className="avatar avatar-lg mb-2">
                          <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-info rounded-circle">
                            <PiInvoice />
                          </span>
                        </div>
                        <p className=" text-black">Invoice</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Dark mode */}
            <div
              className="pe-1"
              onClick={() =>
                setIsDark((prev) => {
                  localStorage.setItem("isDark", JSON.stringify(!prev));
                  return !prev;
                })
              }
            >
              {isDark ? (
                <button
                  type="button"
                  id="dark-mode-toggle"
                  className="dark-mode-toggle btn btn-outline-light bg-white btn-icon me-1 activate"
                >
                  <TbBrightnessUp />
                </button>
              ) : (
                <button
                  type="button"
                  id="light-mode-toggle"
                  className="dark-mode-toggle btn btn-outline-light bg-white btn-icon me-1 activate"
                >
                  <TbMoon />
                </button>
              )}
            </div>

            {/* Notification */}
            <Popover>
              <PopoverTrigger
                className="btn btn-outline-light bg-white btn-icon position-relative me-1"
                id="notification_popup"
                asChild
              >
                <button className="">
                  <FaBell />
                  <span className="notification-status-dot"></span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="dropdown-menu right-[-80px] show dropdown-menu-end notification-dropdown p-4">
                <div className="d-flex align-items-center justify-content-between border-bottom p-0 pb-3 mb-3">
                  <h4 className="notification-title">Notifications (2)</h4>
                  <div className="d-flex align-items-center">
                    <a href="#" className="text-primary fs-15 me-3 lh-1">
                      Mark all as read
                    </a>
                    <div className="dropdown">
                      <button
                        className="bg-white dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar-due me-1"></i>Today
                      </button>
                      <ul className="dropdown-menu mt-2 p-3">
                        <li>
                          <button className="dropdown-item rounded-1">
                            This Week
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item rounded-1">
                            Last Week
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item rounded-1">
                            Last Week
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="noti-content">
                  <div className="d-flex flex-column">
                    <div className="border-bottom mb-3 pb-3">
                      <a href="activities.html">
                        <div className="d-flex">
                          <span className="avatar avatar-lg me-2 flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-27.jpg"
                              alt="Profile"
                            />
                          </span>
                          <div className="flex-grow-1">
                            <p className="mb-1">
                              <span className="text-dark fw-semibold">
                                Shawn
                              </span>
                              performance in Math is below the threshold.
                            </p>
                            <span>Just Now</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="border-bottom mb-3 pb-3">
                      <a href="activities.html" className="pb-0">
                        <div className="d-flex">
                          <span className="avatar avatar-lg me-2 flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-23.jpg"
                              alt="Profile"
                            />
                          </span>
                          <div className="flex-grow-1">
                            <p className="mb-1">
                              <span className="text-dark fw-semibold">
                                Sylvia
                              </span>{" "}
                              added appointment on 02:00 PM
                            </p>
                            <span>10 mins ago</span>
                            <div className="d-flex justify-content-start align-items-center mt-1">
                              <span className="btn btn-light btn-sm me-2">
                                Deny
                              </span>
                              <span className="btn btn-primary btn-sm">
                                Approve
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="border-bottom mb-3 pb-3">
                      <a href="activities.html">
                        <div className="d-flex">
                          <span className="avatar avatar-lg me-2 flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-25.jpg"
                              alt="Profile"
                            />
                          </span>
                          <div className="flex-grow-1">
                            <p className="mb-1">
                              New student record{" "}
                              <span className="text-dark fw-semibold">
                                {" "}
                                George
                              </span>{" "}
                              is created by{" "}
                              <span className="text-dark fw-semibold">
                                Teressa
                              </span>
                            </p>
                            <span>2 hrs ago</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="border-0 mb-3 pb-0">
                      <a href="activities.html">
                        <div className="d-flex">
                          <span className="avatar avatar-lg me-2 flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-01.jpg"
                              alt="Profile"
                            />
                          </span>
                          <div className="flex-grow-1">
                            <p className="mb-1">
                              A new teacher record for{" "}
                              <span className="text-dark fw-semibold">
                                Elisa
                              </span>
                            </p>
                            <span>09:45 AM</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex p-0">
                  <a href="#" className="btn btn-light w-100 me-2">
                    Cancel
                  </a>
                  <a href="activities.html" className="btn btn-primary w-100">
                    View All
                  </a>
                </div>
              </PopoverContent>
            </Popover>

            {/* Avatar btn */}
            <Popover>
              <PopoverTrigger className="dropdown ms-1" asChild>
                <button
                  className="dropdown-toggle d-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <span className="avatar avatar-md rounded">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Img"
                      className="img-fluid"
                    />
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="shadow dropdown-menu show right-[-20px]">
                <div className="d-block">
                  <div className="d-flex align-items-center p-2">
                    <span className="avatar avatar-md me-2 online avatar-rounded">
                      <img
                        className="w-full"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="img"
                      />
                    </span>
                    <div>
                      <h6 className="">Kevin Larry</h6>
                      <p className="text-primary mb-0">Administrator</p>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <Link
                    className="dropdown-item d-inline-flex gap-1 align-items-center p-2"
                    to="/edit-profile"
                  >
                    <BiUserCircle /> My Profile
                  </Link>
                  <Link
                    className="dropdown-item d-inline-flex align-items-center p-2 gap-1"
                    to="/edit-profile"
                  >
                    <CiSettings />
                    Settings
                  </Link>
                  <hr className="m-0" />
                  <button className="dropdown-item d-inline-flex align-items-center p-2 gap-1">
                    <BiLogOut /> Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      {/* Mobile profile btn */}
      <Popover>
        <PopoverTrigger className="dropdown mobile-user-menu" asChild>
          <button className={`${isDark && "text-white"} text-black`}>
            <FaEllipsis />
          </button>
        </PopoverTrigger>
        <PopoverContent className="dropdown mobile-user-menu w-[150px] right-[15px]">
          <Link
            className="dropdown-item d-inline-flex gap-1 align-items-center p-2"
            to="/edit-profile"
          >
            <BiUserCircle /> My Profile
          </Link>
          <Link
            className="dropdown-item d-inline-flex align-items-center p-2 gap-1"
            to="/edit-profile"
          >
            <CiSettings />
            Settings
          </Link>
          <hr className="m-0" />
          <button className="dropdown-item d-inline-flex align-items-center p-2 gap-1">
            <BiLogOut /> Logout
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Header;
