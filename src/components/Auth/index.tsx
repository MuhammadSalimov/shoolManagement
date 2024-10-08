import { authSchema } from "@/lib/validation";
import { authStore } from "@/store/auth.store";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiLogin } from "react-icons/ci";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import $axios from "@/http";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const Auth = () => {

  const { setIsAuth, setUser } = authStore()
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (localStorage.getItem('accessToken')) {
  //     navigate('/')
  //   }
  // }, [])


  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: { login: '', password: '' },
  })

  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: async (values: z.infer<typeof authSchema>) => {
      const { data } = await $axios.post(`/auth/login`, values)
      return data
    },
    onSuccess: data => {
      setUser(data.user)
      setIsAuth(true)
      localStorage.setItem('accessToken', data.accessToken)
      navigate('/')
    },
    onError: error => {
      // @ts-ignore
      toast(error.response?.data?.message)
    },
  })

  function onSubmit(values: z.infer<typeof authSchema>) {
    mutate(values)
  }


  const [showPass, setShowPass] = useState(false)
  return <div className="main-wrapper">
    <div className="container-fuild">
      <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row">
          <div className="col-lg-6">
            <div className="login-background position-relative d-lg-flex align-items-center justify-content-center d-lg-block d-none flex-wrap vh-100 overflowy-auto">
              <div>
                <img src="assets/img/authentication/authentication-02.jpg" alt="Img" />
              </div>
              <div className="authen-overlay-item  w-100 p-4">
                <h4 className="text-white mb-3">What's New on Preskool !!!</h4>
                <div className="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>Summer Vacation Holiday Homework</h6>
                    <p className="mb-0 text-truncate">The school will remain closed from April 20th to June...</p>
                  </div>
                  <a href="#"><i className="ti ti-chevrons-right"></i></a>
                </div>
                <div className="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>New Academic Session Admission Start(2024-25)</h6>
                    <p className="mb-0 text-truncate">An academic term is a portion of an academic year, the time ....
                    </p>
                  </div>
                  <a href="#"><i className="ti ti-chevrons-right"></i></a>
                </div>
                <div className="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>Date sheet Final Exam Nursery to Sr.Kg</h6>
                    <p className="mb-0 text-truncate">Dear Parents, As the final examination for the session 2024-25
                      is ...</p>
                  </div>
                  <a href="#"><i className="ti ti-chevrons-right"></i></a>
                </div>
                <div className="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>Annual Day Function</h6>
                    <p className="mb-0 text-truncate">Annual functions provide a platform for students to showcase
                      their...</p>
                  </div>
                  <a href="#"><i className="ti ti-chevrons-right"></i></a>
                </div>
                <div className="d-flex align-items-center flex-row mb-0 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>Summer Vacation Holiday Homework</h6>
                    <p className="mb-0 text-truncate">The school will remain closed from April 20th to June 15th for
                      summer...</p>
                  </div>
                  <a href="#"><i className="ti ti-chevrons-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
              <div className="col-md-8 mx-auto p-4">
                {/* Login */}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div>
                      <div className=" mx-auto mb-5 text-center">
                        <img src="assets/img/authentication/authentication-logo.svg" className="img-fluid" alt="Logo" />
                      </div>
                      <div className="card">
                        <div className="card-body p-4">
                          <div className=" mb-4">
                            <h2 className="mb-2">Welcome</h2>
                            <p className="mb-0">Please enter your details to sign in</p>
                          </div>
                          <div className="mb-3 ">
                            <label className="form-label">Login</label>
                            <div className="input-icon mb-3 position-relative">
                              <span className="input-icon-addon">
                                <CiLogin />
                              </span>
                              <FormField
                                control={form.control}
                                name='login'
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      {/* <Input placeholder='example@gmail.com' {...field} /> */}
                                      <input type="text" className="form-control" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <label className="form-label">Password</label>
                            <div className="pass-group">
                              <FormField
                                control={form.control}
                                name='password'
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input {...field} type={`${showPass ? "text" : "password"}`} className="pass-input form-control" />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <span onClick={() => setShowPass(!showPass)} className="ti mt-2 toggle-password ti-eye-off">
                                {showPass ? <IoEyeSharp />
                                  : <IoEyeOff />}
                              </span>
                            </div>
                          </div>
                          <div className="form-wrap form-wrap-checkbox mb-3">
                            <div className="d-flex align-items-center">
                              <div className="form-check form-check-md mb-0">
                                <input className="form-check-input mt-0" type="checkbox" />
                              </div>
                              <p className="ms-1 mb-0 ">Remember Me</p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <button type="submit" className="btn btn-primary w-100">Sign In</button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Auth;
