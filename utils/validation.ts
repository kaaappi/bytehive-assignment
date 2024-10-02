export const validateUsernameOrEmail = (value: string) => {
  if (!value) return "Required";
  const isEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  return isEmail || value.length > 5 || "Invalid email or username";
};

export const validatePassword = (value: string) => {
  if (!value) return "Required";
  if (value.length < 6) return "Password must be more than 5 characters";
  if (value.length > 10)
    return "The password must be no more than 10 characters.";
  return true;
};
