import { ROUTER_INDEX } from "../constant/routerConstant";
import { useDynamicTitle, useScrollTop } from "../hooks";

const ContactPage: React.FC = () => {
  useDynamicTitle(ROUTER_INDEX.ContactPage.title);
  useScrollTop();
  return <div>ContactPage</div>;
};

export default ContactPage;
