import EventModal from "@/components/modal/add-event"
import ExamsModal from "@/components/modal/add-exams"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import React, { useEffect, useState } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { CiSquarePlus } from "react-icons/ci"
import { TbSquarePlus } from "react-icons/tb"
import { Link } from "react-router-dom"

const data = [
  {
    time: "11:30-12:15",
    title: "Class V, B"
  },
  {
    time: '01:30-02:15',
    title: 'Class E, D'
  }, {
    time: "11:30-12:15",
    title: "Class V, B"
  },
  {
    time: '01:30-02:15',
    title: 'Class V, B'
  },
  {
    time: '02:30-03:15',
    title: 'Class V, B'
  },
]

const subjects = [
  {
    sub: "Nodejs course",
    class: "Class V, B"
  },
  {
    sub: "Nodejs course",
    class: 'Class E, D'
  }, {
    sub: "Nodejs course",
    class: "Class V, B"
  },
  {
    sub: "Nodejs course",
    class: 'Class V, B'
  },
  {
    sub: "Nodejs course",
    class: 'Class V, B'
  },
]
const Teacher = () => {
  const nowDate = new Date(),
    formattedDate = nowDate.toISOString().split('T')[0],
    options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const [picker, setPicker] = useState(formattedDate)
  const [classes, setClasses] = useState(data)
  useEffect(() => {
    setClasses(data)
  }, [])
  const [openModal, setOpenModal] = useState(false)
  const [openExams, setOpenExams] = useState(false)
  const changeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    if (target.classList.contains("fade")) {
      setOpenModal(false)
      setOpenExams(false)
    }
  }
  return (
    <div className="content pt-[100px] px-2">
      <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
        <div className="my-auto mb-2">
          <h3 className="page-title mb-1">Teacher Dashboard</h3>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Teacher Dashboard</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex">
          <div className="card flex-fill bg-info bg-03">
            <div className="card-body">
              <h1 className="text-white mb-1"> Good Morning Ms.Teena</h1>
              <p className="text-white mb-3">Have a Good day at work</p>
              <p className="text-light">Notice : There is a staff meeting at 9AM today, Dont forget to
                Attend!!!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">

        {/* Profile and bugungi Dars */}
        <div className="col-xxl-8 col-xl-12">
          {/* Profile */}
          <div className="row">
            <div className="col-xxl-12 col-xl-12 d-flex">
              <div className="card bg-dark position-relative flex-fill">
                <div className="card-body pb-1">
                  <div className="d-sm-flex align-items-center justify-content-between row-gap-3">
                    <div className="d-flex align-items-center overflow-hidden mb-3">
                      <div className="avatar avatar-xxl rounded flex-shrink-0 border border-white me-3">
                        <img src="/assets/img/teachers/teacher-05.jpg" alt="Img" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="badge bg-transparent-primary text-primary mb-1">#T594651</span>
                        <h3 className="text-white mb-1 text-truncate">Henriques Morgan </h3>
                        <div className="d-flex align-items-center flex-wrap text-light row-gap-2">
                          <span className="me-2">Classes : I-A, V-B</span>
                          <span className="d-flex align-items-center"><i className="ti ti-circle-filled text-warning fs-7 me-1"></i>Physics</span>
                        </div>
                      </div>
                    </div>
                    <Link to="/edit-teacher" className="btn btn-primary flex-shrink-0 mb-3">Edit
                      Profile</Link>
                  </div>
                  <div className="student-card-bg">
                    <img src="/assets/img/bg/circle-shape.png" alt="Bg" />
                    <img src="/assets/img/bg/shape-02.png" alt="Bg" />
                    <img src="/assets/img/bg/shape-04.png" alt="Bg" />
                    <img src="/assets/img/bg/blue-polygon.png" alt="Bg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Today Classes */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h4 className="me-2">{formattedDate == picker ? "Today’s Class" : `${new Date(picker).toLocaleDateString('en-US', options)}`}</h4>
                <div className="owl-nav slide-nav2 text-end nav-control">
                  <button type="button" role="presentation" className="owl-prev">
                    <BiChevronLeft />
                  </button>
                  <button type="button" role="presentation" className="owl-next">
                    <BiChevronRight />
                  </button>
                </div>
              </div>
              <div className="d-inline-flex align-items-center class-datepick">
                <input defaultValue={picker} type="date" className="form-control  datetimepicker border" onChange={(e) => setPicker(e.target.value)} />
              </div>
            </div>



            <div className="card-body">
              <Carousel className="owl-carousel owl-theme task-slider owl-loaded owl-drag"
                opts={{
                  align: "start",
                }}
              >
                <CarouselContent >
                  {classes.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-[25%]">
                      <div className="p-1 owl-item">
                        <Card className="item">
                          <CardContent className="bg-light-400 rounded p-3">
                            <span className={`${new Date(picker).getTime() > nowDate.getTime() || formattedDate == picker ? "" : "text-decoration-line-through badge-danger"} badge badge-primary badge-lg mb-2`}><i className="ti ti-clock me-1"></i>11:30 - 12:15</span>
                            <p className="text-dark">{item.title}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>


          </div>
          <div className="row">

            {/* Exams */}
            <div className="col-xxl-6 col-xl-6 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="d-flex items-center justify-between mb-3">
                    <h5 className="">Exams</h5>
                    <button onClick={() => setOpenExams(true)} className="link-primary items-center text-[16px] fw-medium me-2 flex gap-1">
                      <TbSquarePlus />
                      Add New
                    </button>
                  </div>
                  <div className="p-3 pb-0 mb-3 border rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="mb-3">1st Quarterly</h5>
                      <span className="badge badge-soft-danger d-inline-flex align-items-center mb-3"><i className="ti ti-clock me-1"></i>19 Days More</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mb-3">
                        <h6 className="mb-1">Mathematics</h6>
                        <p><i className="ti ti-clock me-1"></i>01:30 - 02:15 PM</p>
                      </div>
                      <div className="mb-3 text-end">
                        <p className="mb-1"><i className="ti ti-calendar-bolt me-1"></i>06 May 2024</p>
                        <p className="text-primary">Room No : 15</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 pb-0 mb-3 border rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="mb-3">2nd Quarterly</h5>
                      <span className="badge badge-soft-danger d-inline-flex align-items-center mb-3"><i className="ti ti-clock me-1"></i>20 Days More</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mb-3">
                        <h6 className="mb-1">Physics</h6>
                        <p><i className="ti ti-clock me-1"></i>01:30 - 02:15 PM</p>
                      </div>
                      <div className="mb-3 text-end">
                        <p className="mb-1"><i className="ti ti-calendar-bolt me-1"></i>07 May 2024</p>
                        <p className="text-primary">Room No : 15</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-md-6 d-flex flex-column">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Best Performers</h4>
                  <Link to="/student-list" className="link-primary fw-medium">View All</Link>
                </div>
                <div className="card-body pb-1">
                  <div className="d-sm-flex align-items-center mb-1">
                    <div className="w-50 mb-2">
                      <h6>Class IV, C</h6>
                    </div>
                    <div className="class-progress w-100 ms-sm-3 mb-3">
                      <div className="progress justify-content-between" >
                        <div className="progress-bar bg-primary w-[80%]" >
                          <div className="avatar-list-stacked avatar-group-xs d-flex">
                            <span className="avatar avatar-rounded">
                              <img className="border border-white" src="/assets/img/students/student-01.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img className="border border-white" src="/assets/img/students/student-02.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img src="/assets/img/students/student-03.jpg" alt="img" />
                            </span>
                          </div>
                        </div>
                        <span className="badge">80%</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-sm-flex align-items-center">
                    <div className="w-50 mb-2">
                      <h6>Class III, B</h6>
                    </div>
                    <div className="class-progress w-100 ms-sm-3 mb-3">
                      <div className="progress justify-content-between">
                        <div className="progress-bar bg-warning w-[54%]">
                          <div className="avatar-list-stacked avatar-group-xs d-flex">
                            <span className="avatar avatar-rounded">
                              <img className="border border-white" src="/assets/img/profiles/avatar-27.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img className="border border-white" src="/assets/img/students/student-05.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img src="/assets/img/students/student-06.jpg" alt="img" />
                            </span>
                          </div>
                        </div>
                        <span className="badge">54%</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-sm-flex align-items-center mb-1">
                    <div className="w-50 mb-2">
                      <h6>Class V, A</h6>
                    </div>
                    <div className="class-progress w-100 ms-sm-3 mb-3">
                      <div className="progress justify-content-between" >
                        <div className="progress-bar bg-skyblue w-[76%]">
                          <div className="avatar-list-stacked avatar-group-xs d-flex">
                            <span className="avatar avatar-rounded">
                              <img className="border border-white" src="/assets/img/profiles/avatar-27.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img className="border border-white" src="/assets/img/students/student-05.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img src="/assets/img/students/student-06.jpg" alt="img" />
                            </span>
                          </div>
                        </div>
                        <span className="badge">7%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Student Progress</h4>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between p-3 mb-2 border br-5">
                    <div className="d-flex align-items-center overflow-hidden me-2">
                      <a href="#" className="avatar avatar-lg flex-shrink-0 br-6 me-2">
                        <img src="/assets/img/students/student-09.jpg" alt="student" />
                      </a>
                      <div className="overflow-hidden">
                        <h6 className="mb-1 text-truncate"><a href="#">Susan
                          Boswell</a></h6>
                        <p>III, B</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="/assets/img/icons/medal.svg" alt="icon" />
                      <span className="badge badge-success ms-2">98%</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between p-3 mb-2 border br-5">
                    <div className="d-flex align-items-center overflow-hidden me-2">
                      <a href="#" className="avatar avatar-lg flex-shrink-0 br-6 me-2">
                        <img src="/assets/img/students/student-12.jpg" alt="student" />
                      </a>
                      <div className="overflow-hidden">
                        <h6 className="mb-1 text-truncate"><a href="#">Richard
                          Mayes</a></h6>
                        <p>V, A</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="/assets/img/icons/medal-2.svg" alt="icon" />
                      <span className="badge badge-success ms-2">98%</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between p-3 mb-0 border rounded">
                    <div className="d-flex align-items-center overflow-hidden me-2">
                      <a href="#" className="avatar avatar-lg flex-shrink-0 br-6 me-2">
                        <img src="/assets/img/students/student-11.jpg" alt="student" />
                      </a>
                      <div className="overflow-hidden">
                        <h6 className="mb-1 text-truncate"><a href="#">Veronica Randle</a></h6>
                        <p>V, B</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="badge bg-info">78%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedules rightbar */}
        <div className="col-xxl-4 col-xl-12 d-flex">
          <div className="card flex-fill">

            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">
                <p className="" >
                  Schedules
                </p></h4>
              <button onClick={() => setOpenModal(true)} className="link-primary fw-medium me-2 d-flex text-[16px] gap-1 items-center">
                <CiSquarePlus /> Add New</button>
            </div>

            <div className="card-body">
              <h4 className="mb-3">Upcoming Events</h4>
              <div className="event-scroll">

                <div className="border-start border-0 border-danger border-3 shadow-sm p-3 mb-3">
                  <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                    <span className="avatar p-1 me-2 bg-danger-transparent flex-shrink-0">
                      <i className="ti ti-vacuum-cleaner fs-24"></i>
                    </span>
                    <div className="flex-fill">
                      <h6 className="mb-1">Vacation Meeting</h6>
                      <p className="d-flex align-items-center"><i className="ti ti-calendar me-1"></i>07 July 2024 - 07 July 2024</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0"><i className="ti ti-clock me-1"></i>09:10 AM - 10:50 PM</p>
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar border-0">
                        <img src="/assets/img/parents/parent-11.jpg" className="rounded-circle" alt="img" />
                      </span>
                      <span className="avatar border-0">
                        <img src="/assets/img/parents/parent-13.jpg" className="rounded-circle" alt="img" />
                      </span>
                    </div>
                  </div>
                </div>


                <div className="border-start border-0 border-skyblue border-3 shadow-sm p-3 mb-3">
                  <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                    <span className="avatar p-1 me-2 bg-teal-transparent flex-shrink-0">
                      <i className="ti ti-user-edit text-info fs-20"></i>
                    </span>
                    <div className="flex-fill">
                      <h6 className="mb-1">Parents, Teacher Meet</h6>
                      <p className="d-flex align-items-center"><i className="ti ti-calendar me-1"></i>15 July 2024</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0"><i className="ti ti-clock me-1"></i>09:10AM - 10:50PM</p>
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar border-0">
                        <img src="/assets/img/parents/parent-01.jpg" className="rounded-circle" alt="img" />
                      </span>
                      <span className="avatar border-0">
                        <img src="/assets/img/parents/parent-07.jpg" className="rounded-circle" alt="img" />
                      </span>
                      <span className="avatar border-0">
                        <img src="/assets/img/parents/parent-02.jpg" className="rounded-circle" alt="img" />
                      </span>
                    </div>
                  </div>
                </div>


                <div className="border-start border-0 border-info border-3 shadow-sm p-3 mb-3">
                  <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                    <span className="avatar p-1 me-2 bg-info-transparent flex-shrink-0">
                      <i className="ti ti-users-group fs-20"></i>
                    </span>
                    <div className="flex-fill">
                      <h6 className="mb-1">Staff Meeting</h6>
                      <p className="d-flex align-items-center"><i className="ti ti-calendar me-1"></i>10 July 2024</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0"><i className="ti ti-clock me-1"></i>09:10AM - 10:50PM</p>
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar border-0">
                        <img src="/assets/img/parents/parent-05.jpg" className="rounded-circle" alt="img" />
                      </span>
                      <span className="avatar border-0">
                        <img src="/assets/img/parents/parent-06.jpg" className="rounded-circle" alt="img" />
                      </span>
                      <span className="avatar border-0">
                        <img src="/assets/img/parents/parent-07.jpg" className="rounded-circle" alt="img" />
                      </span>
                    </div>
                  </div>
                </div>


                <div className="border-start border-0 border-secondary border-3 shadow-sm p-3 mb-0">
                  <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                    <span className="avatar p-1 me-2 bg-secondary-transparent flex-shrink-0">
                      <i className="ti ti-campfire fs-24"></i>
                    </span>
                    <div className="flex-fill">
                      <h6 className="mb-1">Admission Camp</h6>
                      <p className="d-flex align-items-center"><i className="ti ti-calendar me-1"></i>12 July 2024</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0"><i className="ti ti-clock me-1"></i>09:10 AM - 10:50 PM</p>
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar border-0">
                        <img src="/assets/img/parents/parent-11.jpg" className="rounded-circle" alt="img" />
                      </span>
                      <span className="avatar border-0">
                        <img src="/assets/img/parents/parent-13.jpg" className="rounded-circle" alt="img" />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


        </div>

      </div>

      {/* Lesson Plan */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">Syllabus / Lesson Plan</h4>
              <Link to="/lesson-plan" className="link-primary fw-medium">View All</Link>
            </div>

            <div className="card-body">
              <Carousel className="owl-carousel owl-theme lesson owl-loaded owl-drag"
                opts={{
                  align: "start",
                }}
              >
                <CarouselContent className="owl-stage-outer" >
                  {subjects.map((item, index) => (
                    <CarouselItem key={index} className="owl-stage md:basis-1/3 lg:basis-[25%]">
                      <div className="p-1 owl-item">
                        <Card className="item">
                          <CardContent className="bg-light-400 rounded p-3">
                            <div className="item">
                              <div className="card mb-0">
                                <div className="card-body">
                                  <div className="bg-warning-transparent br-5 p-2 fw-semibold mb-3 text-center">
                                    {item.class}</div>
                                  <div className="border-bottom mb-3">
                                    <h5 className="mb-3">{item.sub}</h5>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <a href="schedule-classes.html" className="fw-medium"><i className="ti ti-edit me-1"></i>Reschedule</a>
                                    <a href="#" className="link-primary"><i className="ti ti-share-3 me-1"></i>Share</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div onClick={changeModal} className={`${openModal ? "show d-block" : ""} modal fade`} id="add_event" aria-modal="true" role="dialog">
        <EventModal setOpenModal={setOpenModal} />
      </div>
      <div onClick={changeModal} className={`${openExams ? "show d-block" : ""} modal fade`} id="add_exam_schedule">
        <ExamsModal setOpenExams={setOpenExams} />
      </div>
    </div>
  )
}

export default Teacher