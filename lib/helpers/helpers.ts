export const getCurrentDate = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const currentDate = new Date();
  const weekDay = currentDate.getDay();
  const currentMonth = currentDate.getMonth();

  return `${days[weekDay]}, ${months[currentMonth]} ${currentDate.getDate()}`;
};