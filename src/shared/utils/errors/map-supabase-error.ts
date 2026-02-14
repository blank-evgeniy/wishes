export const mapSupabaseErrorMessage = (message: string) => {
  if (message.includes("Invalid login credentials")) {
    return "Неверная почта или пароль.";
  }
  if (message.includes("email rate limit exceeded")) {
    return "Слишком много запросов. Пожалуйста, попробуйте снова через несколько минут.";
  }
  return null;
};
