import { Result } from "antd";

const NotFoundScholarship: React.FC = () => {
  return (
    <Result
      status="404"
      title="Không tìm thấy học bổng"
      subTitle="Đơn đăng ký học bổng đã hết hạn hoặc không tồn tại. Hẹn trở lại lần sau!"
    />
  );
};

export default NotFoundScholarship;
