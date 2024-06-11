import { useRouter } from "next/router";
import React, { useState } from "react";
import { Alert, Button, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import axios from "axios";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const onFinish = async (values) => {
    const { email, password, name, phone } = values;
    setError(null);
    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend.alnafaz.com/api/auth/register/",
        { email, password, name, phone }
      );
      if (response?.data.Error) {
        return;
      }

      const results = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: "/",
      });
      if (results?.error === null) {
        setLoading(false);
        router.push("/");
      }
    } catch (error) {
      setLoading(false);
      setError("This email is associated with an account");
    }
  };
  return (
    <Form
      layout="vertical"
      name="signIn"
      action="https://api.alnafaz.com/api/login"
      method="post"
      className="w-full"
      initialValues={{
        remember: true,
      }}
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
        name="name"
        label="Name"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please enter your name",
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
        name="email"
        label="Email"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please enter your email!",
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
      <Form.Item
        label="Phone"
        hasFeedback
        name="phone"
        rules={[
          {
            required: true,
            message: "Please Enter your number!",
          },
          {
            type: "regexp",
            message: "Please enter a valid number",
          },
        ]}
      >
        <Input
          className="h-[50px] hover:!border-primaryColor"
          size="large"
          type=""
          placeholder="Phone"
        />
      </Form.Item>
      <Form.Item className="mt-1">
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          className="w-full cursor-pointer h-[50px] text-base custom-shadow text-white mt-2 !rounded-full  bg-primaryColor hover:!bg-primaryHoverColor duration-500 "
        >
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
