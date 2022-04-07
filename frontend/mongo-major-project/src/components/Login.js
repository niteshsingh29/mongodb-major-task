import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  //   Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
} from "@chakra-ui/core";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const VARIANT_COLOR = "teal";

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <LoginArea />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

const LoginArea = () => {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Box p={4}>
          <LoginHeader />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
};


const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>LogIn to School Management Server</Heading>
    </Box>
  );
};
const simulateNetworkRequest = () => {
  return new Promise((resolve) => setTimeout(resolve, 3000));
};
const LoginForm = () => {
  const [valueEmail, setemailValue] = useState("");
  const [valuePassword, setpasswordValue] = useState("");
  //   const [state, setState] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isAuth, setAuth] = useState(false);

  //   const url = "http://localhost:8000/login";

  //   const handleLogin = () => {
  //     axios
  //       .post(url, {
  //         valueEmail,
  //         valuePassword,
  //       })
  //       .then(() => {
  //         console.log("Login id password sent to database succesfully");
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        alert("Unauthorized user");
      });
    }
  }, [isLoading]);
  const handleClick = () => setLoading(true);
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl>
          <FormLabel>
            Email address <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={valueEmail}
            onChange={(e) => setemailValue(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>
            Password <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={valuePassword}
            onChange={(e) => setpasswordValue(e.target.value)}
          />
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
          {/* <Box>
            <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
          </Box> */}
        </Stack>

        {isAuth ? (
          <Link to="/Schools">
            <Button
              variantColor={VARIANT_COLOR}
              width="full"
              mt={4}
              onClick={!isLoading ? handleClick : null}
            >
              {isLoading ? "Please Wait.." : "Login"}
            </Button>
          </Link>
        ) : (
          <Button
            variantColor={VARIANT_COLOR}
            width="full"
            mt={4}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? "Please Wait.." : "Login"}
          </Button>
        )}
      </form>
    </Box>
  );
};

export default Login;
