export const isTeacher = (userId?: string | null) => {
  const teacherIdsString = process.env.NEXT_PUBLIC_TEACHER_IDS || '';
  const teacherIdsArray = teacherIdsString.split(',');
  if (userId !== undefined && userId !== null) {
    return teacherIdsArray.includes(userId);
  } else {
    return false;
  }
}
