import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const TeacherLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { userId } = auth();

  if (!isTeacher(userId)) {
    return redirect("/dashboard");
  }

  return <>{children}</>
}
 
export default TeacherLayout;