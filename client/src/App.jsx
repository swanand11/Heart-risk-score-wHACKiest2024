import React from "react"
import LandingPage from "./components/landingpage"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import SignUp from "./components/login/signup/auth"
import ForumForm from "./components/Form/Form"
import Login from "./components/login/login/login"

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' >
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp/>} />
      <Route path='/' element={<LandingPage />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='forum' element={<ForumForm />} />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
