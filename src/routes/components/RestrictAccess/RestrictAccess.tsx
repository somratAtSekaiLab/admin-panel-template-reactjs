import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const RestrictAccess = () => {
  return (
    <Result
      status="403"
      title="Access denied"
      subTitle="Access denied"
      extra={
        <Link to="/">
          <Button type="primary">Back to home</Button>
        </Link>
      }
    />
  );
};

export default RestrictAccess;
