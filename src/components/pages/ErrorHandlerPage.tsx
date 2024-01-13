import {
  Navigate,
  Outlet,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";

const ErrorHandlerPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return <p>Unexpected error!</p>;
  }

  return <Outlet></Outlet>;
};

export default ErrorHandlerPage;
