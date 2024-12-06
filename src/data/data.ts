import {
  loginInputs,
  NavBarLinksType,
  SignUpInputsType,
} from "@/interfaces/interfaces";
import {
  FcEngineering,
  FcMultipleDevices,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from "react-icons/fc";
import { Clock, Compass, Video } from "lucide-react";
import React from "react";

const NavBarLinks: NavBarLinksType[] = [
  {
    icon: React.createElement(Video, { size: 30 }),
    label: "My Courses",
    link: "/",
  },
  {
    icon: React.createElement(Compass, { size: 30 }),
    label: "Search",
    link: "/search",
  },
];

const LoginInputs: loginInputs[] = [
  { name: "identifier", placeholder: "Username or Email", type: "text" },
  { name: "password", placeholder: "Password", type: "password" },
];
const SignUpInputs: SignUpInputsType[] = [
  { name: "email", placeholder: "Email", type: "text" },
  { name: "username", placeholder: "Username", type: "text" },
  { name: "password", placeholder: "Password", type: "password" },
  { name: "confirmPassword", placeholder: "confirmPassword", type: "password" },
];
const CategoryItems = [
  {
    Icon: React.createElement(FcSalesPerformance, {
      size: 20,
      className: "mr-1",
    }),
    value: "Accounting",
    label: "Accounting",
  },
  {
    Icon: React.createElement(FcMultipleDevices, {
      size: 20,
      className: "mr-1",
    }),
    value: "Computer Science",
    label: "Computer Science",
  },
  {
    Icon: React.createElement(FcSportsMode, { size: 20, className: "mr-1" }),
    value: "Fitness",
    label: "Fitness",
  },
  {
    Icon: React.createElement(FcOldTimeCamera, { size: 20, className: "mr-1" }),
    value: "Photography",
    label: "Photography",
  },
  {
    Icon: React.createElement(FcEngineering, { size: 20, className: "mr-1" }),
    value: "Engineering",
    label: "Engineering",
  },
];
const CourseData = [{ Icon: React.createElement(Clock, { size: 20 }) }];
export default {
  NavBarLinks,
  LoginInputs,
  SignUpInputs,
  CategoryItems,
  CourseData,
};
