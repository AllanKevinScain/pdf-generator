import { useRouteError } from "react-router-dom";

type RouterError = {
  statusText: string;
  message: string;
};

export default function ErrorPage() {
  const error = useRouteError() as RouterError;

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1>Desculpe!</h1>
      <p>Algo inesperado aconteceu.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
