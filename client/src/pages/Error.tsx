import { Link } from "react-router-dom";

type ErrorProps = {
  code: number;
  message: string;
};

const Error = ({ code, message }: ErrorProps) => (
  <main>
    <h2>{code}</h2>
    <p>{message}</p>
    <Link to="/">ホームへ戻る</Link>
  </main>
);

export default Error;
