export function calculateDaysUntilBirthday() {
  const today = new Date();
  const year = today.getFullYear();
  const birthday = new Date(year + 1, 6, 26);
  return Math.floor((birthday - today) / (1000 * 60 * 60 * 24));
}