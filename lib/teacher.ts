export const isTeacher = (email?: string | null) => {
  return email === process.env.NEXT_PUBLIC_TEACHER_ID;
};
