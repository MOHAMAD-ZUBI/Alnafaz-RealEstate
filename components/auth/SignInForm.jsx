import { useRouter } from "next/router";
import React, { useState } from "react";
import { Alert, Button, Form, Input } from "antd";
import Link from "next/link";
import { signIn } from "next-auth/react";
const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const onFinish = async (values) => {
    setError(null);
    setLoading(true);
    const results = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
    });
    setLoading(false);
    if (results?.error === null) {
      router.push("/");
    } else {
      setError("Invalid Login Creditnals");
    }
  };

  return (
    <Form
      layout="vertical"
      name="signIn"
      className="w-full"
      onFinish={onFinish}
    >
      {error && (
        <Alert
          message={error}
          className="mb-4 !text-center text-red-700"
          type="error"
        />
      )}
      <Form.Item
        name="email"
        label="Email"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please enter your email!",
          },
          {
            type: "email",
            message: "Please Enter a valid email",
          },
        ]}
      >
        <Input
          size="large"
          className="h-[50px] hover:!border-primaryColor"
          placeholder="Enter Email"
        />
      </Form.Item>
      <Form.Item
        label="Password"
        hasFeedback
        name="password"
        rules={[
          {
            required: true,
            message: "Please Enter your Password!",
          },
        ]}
      >
        <Input.Password
          className="h-[50px] hover:!border-primaryColor"
          size="large"
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Link href="/" className="text-primaryColor text-base">
        Forgot Password?
      </Link>
      <Form.Item className="mt-1">
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          className="w-full cursor-pointer h-[50px] text-base custom-shadow text-white mt-2 !rounded-full  bg-primaryColor hover:!bg-primaryHoverColor duration-500 "
        >
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
