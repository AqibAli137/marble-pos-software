import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import axios from "axios";
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDInput from "../../../components/MDInput";
import MDButton from "../../../components/MDButton";
import BasicLayout from "../components/BasicLayout";
import illustration14 from "../../../assets/images/illustration/14.png";
import Grid from "@mui/material/Grid";
import logo from "../../../assets/images/Sundar Logo/logo.jpg";
import { updateLoginUser } from "../../../@features/User/userSlice";
import { useDispatch } from "react-redux";
import MDSnackbar from "../../../components/MDSnackbar";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const closeErrorSB = () => setErrorSB(false);
  const [errorSB, setErrorSB] = useState(false);
  const dispatch = useDispatch("");
  // let userState = useSelector(function (store) {
  //     return store.user;
  // });
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const values = {
    Email: email,
    password: password,
  };

  const handleSignIn = () => {
    if (
      (values.Email === "dev@webeasy.com" && values.password === "0") ||
      (values.Email === "naveed@admin.com" && values.password === "1234") ||
      (values.Email === "test@admin.com" && values.password === "test123")||
      (values.Email === "aqib@gmail.com" && values.password === "Aqib123")

    ) {
      window.localStorage.setItem("userLogin", "User Login");
      rememberMe && window.localStorage.setItem("userRemamber", "User Remamber");
      navigate("/dashboard");
    } else {
      setErrorSB(true);
    }
  };

  return (
    <BasicLayout image={illustration14}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <Grid container justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <a href="../../../assets/images/apple-icon.png">
              <img width={100} src={logo} alt="" />
            </a>
          </Grid>
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1} mb={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSignIn}>
                sign in
              </MDButton>
            </MDBox>
            {/* <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox> */}
          </MDBox>
        </MDBox>
      </Card>
      <MDSnackbar
        color="error"
        icon="warning"
        title="User Not found"
        content="Authentication was not verified"
        dateTime="1sec ago"
        open={errorSB}
        onClose={closeErrorSB}
        close={closeErrorSB}
        bgWhite
      />
    </BasicLayout>
  );
}

export default Basic;
