import { ROUTER_INDEX } from "../constant/routerConstant";
import { useDynamicTitle, useScrollTop } from "../hooks";

const ScholarshipSearchPage: React.FC = () => {
  useDynamicTitle(ROUTER_INDEX.ScholarshipSearchPage.title);
  useScrollTop();
  return <div>ScholarshipSearchPage</div>;
};

export default ScholarshipSearchPage;
