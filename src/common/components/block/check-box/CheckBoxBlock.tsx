import { FaRegSquareCheck } from "react-icons/fa6";
import {
  FormBlockInstance,
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../../interface/form-blocks";
import CheckBoxFormComponent from "./CheckBoxFormComponent";

const blockCategory: FormCategoryType = "Field";
const blockType: FormBlockType = "CheckBox";

export type CheckBoxAttributesType = {
  label: string;
  helperText: string;
  required: boolean;
  options: string[];
  inline: boolean;
};

export type NewInstanceCheckBox = FormBlockInstance & {
  attributes: CheckBoxAttributesType;
};

export const styleCheckBoxInline: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

export const CheckBoxBlock: ObjectBlockType = {
  blockType,
  blockCategory,
  createInstance: (id: string) => ({
    id,
    blockType,
    attributes: {
      label: "CheckBox",
      helperText: "Helper Text",
      required: true,
      options: ["Option 1", "Option 2", "Option 3"],
      inline: false,
    },
  }),
  blockBtnElement: {
    icon: FaRegSquareCheck,
    label: "CheckBox",
  },

  formComponent: CheckBoxFormComponent,
};
