export const getMailProviderLink = (email: string) => {
  if (email.endsWith("@gmail.com")) return "https://mail.google.com";
  if (email.endsWith("@yandex.ru") || email.endsWith("@yandex.com"))
    return "https://mail.yandex.com";
  if (email.endsWith("mail.ru")) return "https://mail.ru";

  return null;
};
