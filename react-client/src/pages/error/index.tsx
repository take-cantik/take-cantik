import { Link } from "react-router-dom";

type ErrorProps = {
  code: number;
  message: string;
};

const Error = ({ code, message }: ErrorProps) => (
  <main className="w-full min-h-screen flex items-center justify-center px-4 bg-gray-lighten-2">
    <div className="w-full max-w-[540px] flex flex-col items-center justify-center py-10 px-4 rounded-lg bg-white">
      <h2 className="text-5xl lg:text-6xl font-extrabold mb-2 lg:mb-4">
        {code}
      </h2>
      <p className="text-lg lg:text-xl mb-6 lg:mb-8">{message}</p>
      <Link to="/" className=" border-b-2 border-solid">
        ホームへ戻る
      </Link>
    </div>
  </main>
);

export default Error;
