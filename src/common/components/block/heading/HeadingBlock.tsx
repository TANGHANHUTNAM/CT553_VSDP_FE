import { FaHeading } from "react-icons/fa";
import {
  FormBlockInstance,
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../../interface/form-blocks";
import HeadingCanvasFormComponent from "./HeadingCanvasFormComponent";

const blockCategory: FormCategoryType = "Field";
const blockType: FormBlockType = "Heading";

export type fontSizeType =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl"
  | "text-7xl"
  | "text-8xl"
  | "text-9xl";

export type fontWeightType =
  | "font-thin"
  | "font-extralight"
  | "font-light"
  | "font-normal"
  | "font-medium"
  | "font-semibold"
  | "font-bold"
  | "font-extrabold"
  | "font-black";

export type HeadingAttributesType = {
  label: string;
  fontSize: fontSizeType;
  fontWeight: fontWeightType;
  uppercase: boolean;
};

export type NewInstanceHeading = FormBlockInstance & {
  attributes: HeadingAttributesType;
};

export const HeadingBlock: ObjectBlockType = {
  blockType,
  blockCategory,
  createInstance: (id: string) => ({
    id,
    blockType,
    attributes: {
      label: "Header",
      fontSize: "text-lg",
      fontWeight: "font-normal",
      uppercase: false,
    },
  }),
  blockBtnElement: {
    icon: FaHeading,
    label: "Header",
  },

  formComponent: HeadingCanvasFormComponent,
};
