import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-max bg-gray-100 border-t border-gray-300 flex flex-col p-10 sm:flex-row">
      <div className="flex flex-col flex-1 sm:flex-row">
        <div className="flex flex-1 flex-col items-start justify-center">
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500">Search for Jobs</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500">Resume Tips</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500">Cover Letter Guide</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500">Interview Preparation</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500">Explore Companies</p>
          </Link>
        </div>
        <div className="flex flex-1 flex-col items-start justify-center">
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500">Industry News</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500">Professional Networking</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500">Online Courses</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500">Career Blog</p>
          </Link>
          <Link href="#">
            <p className="text-gray-700 hover:text-blue-500">Set Job Alerts</p>
          </Link>
        </div>
      </div>
      <hr className="w-full h-px my-5 bg-gray-300 sm:hidden" />
      <div className="flex flex-1 flex-col items-start justify-center sm:items-end">
        <Link href="#">
          <p className="text-gray-700 hover:text-blue-500">Terms of Service</p>
        </Link>
        <Link href="#">
          <p className="text-gray-700 hover:text-blue-500">Privacy Policy</p>
        </Link>
        <Link href="#">
          <p className="text-gray-700 hover:text-blue-500">Contact Us</p>
        </Link>
        <Link href="#">
          <p className="text-gray-700 hover:text-blue-500">About Us</p>
        </Link>
        <Link href="#">
          <p className="text-gray-700 hover:text-blue-500">Feedback Form</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
