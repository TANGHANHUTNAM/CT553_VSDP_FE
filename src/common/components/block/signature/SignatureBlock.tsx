import {
  FormBlockInstance,
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../../interface/form-blocks";

import { FaFileSignature } from "react-icons/fa";
import SignatureFormComponent from "./SignatureFormComponent";

const blockCategory: FormCategoryType = "Field";
const blockType: FormBlockType = "Signature";

export type SignatureAttributesType = {
  label: string;
  helperText: string;
  required: boolean;
};

export type NewInstanceSignature = FormBlockInstance & {
  attributes: SignatureAttributesType;
};

export const SignatureBlock: ObjectBlockType = {
  blockType,
  blockCategory,
  createInstance: (id: string) => ({
    id,
    blockType,
    attributes: {
      label: "Signature",
      helperText: "Helper Text",
      required: true,
    },
  }),
  blockBtnElement: {
    icon: FaFileSignature,
    label: "Signature",
  },

  formComponent: SignatureFormComponent,
};
