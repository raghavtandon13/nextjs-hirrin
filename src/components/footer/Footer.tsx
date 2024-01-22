import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
    <div className="w-full h-max bg-gray-100 border-t border-gray-300 flex flex-col p-10 sm:flex-row dark:bg-background dark:border-gray-700">
        <div className="flex flex-col flex-1 sm:flex-row">
          <div className="flex flex-1 flex-col items-start justify-center">
            <Link href="#">
              <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Search for Jobs</p>
            </Link>
            <Link href="#">
              <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Resume Tips</p>
            </Link>
            <Link href="#">
              <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Cover Letter Guide</p>
            </Link>
            <Link href="#">
              <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Interview Preparation</p>
            </Link>
            <Link href="#">
              <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Explore Companies</p>
            </Link>
          </div>
          <div className="flex flex-1 flex-col items-start justify-center">
            <Link href="#">
              <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Industry News</p>
            </Link>
            <Link href="#">
              <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Professional Networking</p>
            </Link>
            <Link href="#">
              <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Online Courses</p>
            </Link>
            <Link href="#">
              <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Career Blog</p>
            </Link>
            <Link href="#">
              <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Set Job Alerts</p>
            </Link>
          </div>
        </div>
        <hr className="w-full h-px my-5 bg-gray-300 sm:hidden" />
        <div className="flex flex-1 flex-col items-start justify-center sm:items-end">
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Terms of Service</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Privacy Policy</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Contact Us</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">About Us</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500 dark:text-slate-300">Feedback Form</p>
          </Link>
          <div className="flex gap-[2px] my-4 border-2 p-1 rounded-md border-gray-300 sm:my-0">
          <Github strokeWidth={1} absoluteStrokeWidth/>
          <Instagram strokeWidth={1} absoluteStrokeWidth/>
          <Linkedin strokeWidth={1} absoluteStrokeWidth/>
          <Facebook strokeWidth={1} absoluteStrokeWidth/>
          <Youtube strokeWidth={1} absoluteStrokeWidth/>
          <Twitter strokeWidth={1} absoluteStrokeWidth/>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
