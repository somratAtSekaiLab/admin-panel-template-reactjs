import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Result
      icon={<QuestionCircleOutlined />}
      title="Not found"
      subTitle="Not found"
      extra={
        <Link to="/">
          <Button type="primary">Back to home</Button>
        </Link>
      }
    />
  );
};

export default NotFound;
