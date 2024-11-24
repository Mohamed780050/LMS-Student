import Main from "@/Layout/main";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import CoursePage from "./pages/CoursePage";
import CoursePageLayout from "@/Layout/CoursePageLayout";
// TODO: search on chatGPT to know how to add and event listener to alway watch cookies
const data = document.cookie
  .split(";")
  .find((value) => value.includes("lms-student"))
  ? document.cookie.split(";").find((value) => value.includes("lms-student"))
  : null;
const isAllowed = data !== null ? true : false;
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}>
        <Route
          index
          element={
            <ProtectedRoutes
              redirctedPath="Authentaction/login"
              isAllowed={isAllowed}
            >
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="search"
          element={
            <ProtectedRoutes
              redirctedPath="Authentaction/login"
              isAllowed={isAllowed}
            >
              <Courses />
            </ProtectedRoutes>
          }
        ></Route>
      </Route>
      <Route
        path="course/:id"
        element={
          <ProtectedRoutes
            redirctedPath="Authentaction/login"
            isAllowed={isAllowed}
          >
            <CoursePageLayout />
          </ProtectedRoutes>
        }
      />
      <Route path="Authentaction">
        <Route
          path="signup"
          element={
            <ProtectedRoutes redirctedPath="/" isAllowed={!isAllowed}>
              <SignUp />
            </ProtectedRoutes>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoutes redirctedPath="/" isAllowed={!isAllowed}>
              <Login />
            </ProtectedRoutes>
          }
        />
      </Route>
    </>
  )
);
export default routes;
