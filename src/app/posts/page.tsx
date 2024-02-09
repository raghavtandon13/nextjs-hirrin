"use client";
import React, { useEffect } from "react";

const Posts = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/post");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
      } catch (error) {}
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">Posts</div>
    </>
  );
};

export default Posts;
