import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const App = () => {
  const { data: session } = useSession();
  const [fileList, setFileList] = useState([]);

  const handleFetch = () => {
    axios.get("https://backend.alnafaz.com/api/neighborhoods");
  };

  const onFinish = async (values) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fileList.forEach((file) => {
      formData.append("images", file);
    });
    console.log("Received values of form: ", values);
    const options = {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    };
    const response = await axios.post(
      "https://backend.alnafaz.com/api/property/add",
      formData,
      options
    );
    console.log(response.data);
  };
  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  return (
    <div>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          "input-number": 3,
          "checkbox-group": ["A", "B"],
          rate: 3.5,
        }}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item name="title">
          <Input placeholder="title" />
        </Form.Item>
        <Form.Item name="property_type_en">
          <Input placeholder="property_type_en" />
        </Form.Item>
        <Form.Item name="property_type_ar">
          <Input placeholder="property_type_ar" />
        </Form.Item>
        <Form.Item name="type">
          <Input placeholder="type rent or buy" />
        </Form.Item>
        <Form.Item name="rooms">
          <Input placeholder="rooms " />
        </Form.Item>
        <Form.Item name="garage">
          <Input placeholder="garage " />
        </Form.Item>
        <Form.Item name="beds">
          <Input placeholder="beds  " />
        </Form.Item>
        <Form.Item name="bath">
          <Input placeholder="bath   " />
        </Form.Item>
        <Form.Item name="desc">
          <Input placeholder="desc" />
        </Form.Item>
        <Form.Item name="price">
          <Input placeholder="price" />
        </Form.Item>
        <Form.Item name="address">
          <Input placeholder="address" />
        </Form.Item>
        <Form.Item name="furniture_en">
          <Input placeholder="furniture_en" />
        </Form.Item>
        <Form.Item name="furniture_ar">
          <Input placeholder="furniture_ar " />
        </Form.Item>

        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <button onClick={handleFetch}>Fetch</button>
    </div>
  );
};
export default App;
