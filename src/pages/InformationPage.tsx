import { ROUTER_INDEX } from "../constant/routerConstant";
import { useDynamicTitle, useScrollTop } from "../hooks";

const InformationPage: React.FC = () => {
  useDynamicTitle(ROUTER_INDEX.InformationPage.title);
  useScrollTop();
  return <div>InformationPage</div>;
};

export default InformationPage;
