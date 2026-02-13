export const mapLinkLoginErrorMessage = (message: string) => {
  if (message.includes("email rate limit exceeded")) {
    return "Слишком много запросов. Пожалуйста, попробуйте снова через несколько минут.";
  }
  return null;
};
