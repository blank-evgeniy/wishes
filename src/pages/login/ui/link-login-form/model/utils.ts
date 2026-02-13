export const getMailProviderLink = (email: string) => {
  if (email.endsWith("@gmail.com")) return "https://mail.google.com";
  if (email.endsWith("@yandex.ru") || email.endsWith("@yandex.com"))
    return "https://mail.yandex.com";
  return "https://mail.google.com";
};

export const mapLinkLoginErrorMessage = (message: string) => {
  if (message.includes("email rate limit exceeded")) {
    return "Слишком много запросов. Пожалуйста, попробуйте снова через несколько минут.";
  }
  return null;
};
