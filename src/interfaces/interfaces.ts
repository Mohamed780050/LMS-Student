import { ReactNode } from "react";

export interface NavBarLinksType {
  icon: ReactNode;
  label: string;
  link: string;
}
export interface loginInputs {
  name: "password" | "identifier";
  placeholder: string;
  type: string;
}
export interface SignUpInputsType {
  name: "password" | "username" | "email" | "confirmPassword";
  placeholder: string;
  type: string;
}
export interface CourseInfo {
  _id: string;
  courseName: string;
  Description: string;
  ImageURL: string;
  price: number;
  IsPublished: boolean;
  Date: {
    normal: string;
    full: string;
  };
  catagory: string;
  AuthorId: string;
  completed: number;
  total: 5;
  Attachments: {
    id: string;
    filename: string;
    data: string;
    completed: boolean;
  }[];
  chapters: string[];
  students: number;
  rating: number;
}
export interface CourseChaptersInterface {
  _id: string;
  CourseId: string;
  AuthorId: string;
  isFree: boolean;
  isPublished: boolean;
  videoURL: string;
  chapterName: string;
  description: string;
  position: number;
  Date: {
    normal: string;
    full: string;
  };
}