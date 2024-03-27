import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Project",
};

const Project = () => redirect("/case-studies");

export default Project;
