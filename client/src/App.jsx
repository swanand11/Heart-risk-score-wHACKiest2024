import React from "react"
import LandingPage from "./components/landingpage"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import SignUp from "./components/login/signup/auth"
import ForumForm from "./components/Form/Form"
import Login from "./components/login/login/login"
import Dashboard from "./components/Dashboard/dashboard";
import PrivateRoute from "./components/PrivateRoute"

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' >
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='/' element={<LandingPage />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='forum' element={<ForumForm />} />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
      />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
