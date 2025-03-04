import { IoIosArrowDropdown } from "react-icons/io";
import {
  FormBlockInstance,
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../../interface/form-blocks";
import SelectOptionFormComponent from "./SelectOptionFormComponent";

const blockCategory: FormCategoryType = "Field";
const blockType: FormBlockType = "SelectOption";

export type SelectOptionAttributes = {
  label: string;
  helperText: string;
  options: string[];
  required: boolean;
  placeHolder: string;
  size: "small" | "middle" | "large";
  placeMent: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  showSearch: boolean;
};

export type NewInstanceSelectOption = FormBlockInstance & {
  attributes: SelectOptionAttributes;
};

export const SelectOptionBlock: ObjectBlockType = {
  blockCategory,
  blockType,
  blockBtnElement: {
    icon: IoIosArrowDropdown,
    label: "Select Option",
  },
  createInstance: (id: string) => {
    return {
      id: `${id}`,
      blockType,
      isLocked: false,
      attributes: {
        label: "Select an option",
        options: ["Option 1", "Option 2", "Option 3"],
        helperText: "Helper Text",
        required: true,
        placeHolder: "Select an option",
        size: "middle",
        placeMent: "bottomLeft",
        showSearch: false,
      },
    };
  },

  formComponent: SelectOptionFormComponent,
};
