import { auth } from "@/auth";
import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";

const TeacherLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  const session = await auth();
  if (!session) redirect("/login")
  const email = session.user!.email!;

  if (!isTeacher(email)) {
    return redirect("/dashboard");
  }

  return <>{children}</>
}
 
export default TeacherLayout;