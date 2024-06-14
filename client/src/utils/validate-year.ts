export const validateYear = (year: string): string | null => {
  const currentYear = new Date().getFullYear();
  const birthYear = parseInt(year);

  if (!/^\d{4}$/.test(year)) {
    return 'Введите правильный год';
  }

  if (birthYear > currentYear) {
    return 'Год не может быть из будущего';
  }

  if (birthYear < currentYear - 100) {
    return 'Пользователь не может быть старше 100 лет';
  }

  return null;
};
