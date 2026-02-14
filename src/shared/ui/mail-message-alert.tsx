import { CheckCircle2Icon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/alert";
import { getMailProviderLink } from "@/shared/utils/mail/get-mail-provider-link";

interface MailMessageAlertProps {
  submittedEmail?: string | null;
  note: string | null;
}

export const MailMessageAlert = ({
  submittedEmail,
  note,
}: MailMessageAlertProps) => {
  const mailProviderLink =
    submittedEmail && getMailProviderLink(submittedEmail);

  return (
    <Alert>
      <CheckCircle2Icon />
      <AlertTitle>Проверьте почту</AlertTitle>
      <AlertDescription>
        <span>
          {note}{" "}
          {mailProviderLink ? (
            <a
              href={mailProviderLink}
              rel="noreferrer"
              className="underline font-medium inline"
            >
              {submittedEmail}
            </a>
          ) : (
            submittedEmail
          )}
        </span>
      </AlertDescription>
    </Alert>
  );
};
