import React from "react"
import LandingPage from "./components/landingpage"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' >
 

      <Route path='/' element={<LandingPage />} />

    </Route>
  ))
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
