"use client";
import React, { useState, useEffect} from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

export default function AuthLogin({ title, subtitle, subtext }: loginType) {

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const authorization = async () => {

    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false 
      });

      if (!res) {
        console.log("No response from signIn");
        return;
      }
      
      if (res.error) {
        console.log("Invalid credentials");
        return;
      }
      console.log(res)
      // router.push("/");
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Stack>
        <Box>
          <Typography 
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="username"
            mb="5px"
          >
            Username
          </Typography>
          <CustomTextField variant="outlined" value={username} onChange={onChangeUsername} fullWidth />
        </Box>
        <Box mt="25px">
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="password"
            mb="5px"
          >
            Password
          </Typography>
          <CustomTextField type="password" variant="outlined" value={password} onChange={onChangePassword} fullWidth />
        </Box>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          my={2}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remeber this Device"
            />
          </FormGroup>
          <Typography
            component={Link}
            href="/"
            fontWeight="500"
            sx={{
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            Forgot Password ?
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          onClick={authorization}
          type="submit"
        >
          Sign In
        </Button>
      </Stack>
      {subtitle}
    </>
  );
}
