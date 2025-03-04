import { ROUTER_INDEX } from "../constant/routerConstant";
import { useDynamicTitle, useScrollTop } from "../hooks";

const CriteriaPage: React.FC = () => {
  useDynamicTitle(ROUTER_INDEX.CriteriaPage.title);
  useScrollTop();
  return <div>CriteriaPage</div>;
};

export default CriteriaPage;
