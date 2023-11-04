import { ErrorPageTemplate } from "./error/ErrorPageTemplate";

export default function NotFoundPage() {
  return <ErrorPageTemplate code={404} message="Page Not Found." />;
}
