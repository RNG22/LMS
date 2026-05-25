import React, { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../features/api/authApi";
import { toast } from "sonner";

export function LoginPage() {
  const [activeTab, setActiveTab] = useState("signup");
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const changeInputhandler = (e) => {
    const { name, value } = e.target;
    if (activeTab === "signup") {
      setSignupInput((prev) => ({ ...prev, [name]: value }));
    } else {
      setLoginInput((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handlleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "signup") {
        registerUser(signupInput);
      // Handle signup logic here
      console.log("Signup Data:", signupInput);
    } else {
      loginUser(loginInput);
      // Handle login logic here
      console.log("Login Data:", loginInput);
    }
  };
useEffect(() => {

    if (registerError) {

        toast.error(
            registerError?.data?.message || "Signup failed"
        );

    }

    if (registerData && registerIsSuccess) {

        toast.success(registerData.message);
    }

}, [
    registerData,
    registerError,
    registerIsSuccess
]);
useEffect(() => {

    if (loginError) {

        toast.error(
            loginError?.data?.message || "Login failed"
        );

    }

    if (loginData && loginIsSuccess) {

        toast.success(loginData.message);
    }

}, [
    loginData,
    loginError,
    loginIsSuccess
]);

  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <div className="flex items-start justify-center min-h-screen bg-gray-100 p-4 pt-50">
      <div className="w-[400px]">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Signup</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="mt-4">
          {/* Signup Form */}

          {activeTab === "signup" && (
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>
                  Enter your details to create a new account.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form className="space-y-4" onSubmit={handlleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      value={signupInput.name}
                      placeholder="Enter your name"
                      required
                      onChange={changeInputhandler}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={signupInput.email}
                      required
                      autoComplete="email"
                      onChange={changeInputhandler}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      value={signupInput.password}
                      placeholder="Create password"
                      required
                      autoComplete="new-password"
                      onChange={changeInputhandler}
                    />
                  </div>

                  <Button disabled={registerUser.isLoading} className="w-full">
                    {registerUser.isLoading ? "Signing up..." : "Signup"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Login Form */}

          {activeTab === "login" && (
            <Card>
              <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription>
                  Login to continue to your account.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form className="space-y-4" onSubmit={handlleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      name="email"
                      value={loginInput.email}
                      placeholder="Enter your email"
                      required
                      autoComplete="email"
                      onChange={changeInputhandler}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      name="password"
                      value={loginInput.password}
                      placeholder="Enter password"
                      required
                      autoComplete="current-password"
                      onChange={changeInputhandler}
                    />
                  </div>

                  <Button disabled={loginUser.isLoading} className="w-full">
                    {loginUser.isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
