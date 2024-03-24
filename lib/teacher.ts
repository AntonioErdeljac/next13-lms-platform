export const isTeacher = (userId?: string | null) => {
  const teacherIdsString = process.env.NEXT_PUBLIC_TEACHER_IDS || '';
  const teacherIdsArray = teacherIdsString.split(',');

  // Check if userId is defined and is a string before using it
  if (typeof userId === 'string') {
    return teacherIdsArray.includes(userId);
  } else {
    // Handle the case where userId is null or undefined
    return false; // Or you can choose an alternative behavior
  }
}
