import { Box, Heading, Text } from "@chakra-ui/react";
import {
  Navigate,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";
import NavBar from "../NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar></NavBar>
      <Box padding={5}>
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Sorry, this page does not exist!"
            : "Unexpected error!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
