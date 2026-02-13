export const mapPasswordLoginErrorMessage = (message: string) => {
  if (message.includes("Invalid login credentials")) {
    return "Неверная почта или пароль.";
  }
  return null;
};
