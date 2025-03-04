import { Dayjs } from "dayjs";
import { MdOutlineDateRange } from "react-icons/md";
import {
  FormBlockInstance,
  FormBlockType,
  FormCategoryType,
  ObjectBlockType,
} from "../../../../interface/form-blocks";
import DatePickerFormComponent from "./DatePickerFormComponent";

const blockCategory: FormCategoryType = "Field";
const blockType: FormBlockType = "DatePicker";

export type DatePickerAttributesType = {
  label: string;
  helperText: string;
  required: boolean;
  placeHolder: string;
  dateFormat:
    | "DD/MM/YYYY"
    | "MM/DD/YYYY"
    | "YYYY/MM/DD"
    | "DD-MM-YYYY"
    | "MM-DD-YYYY"
    | "YYYY-MM-DD";
  minDate: Dayjs | undefined;
  maxDate: Dayjs | undefined;
  size: "large" | "middle" | "small";
};

export type NewInstanceDatePicker = FormBlockInstance & {
  attributes: DatePickerAttributesType;
};

export const DatePickerBlock: ObjectBlockType = {
  blockType,
  blockCategory,
  createInstance: (id: string) => ({
    id,
    blockType,
    attributes: {
      label: "DatePicker",
      helperText: "Helper Text",
      required: true,
      placeHolder: "Choose date here.",
      dateFormat: "DD/MM/YYYY",
      minDate: undefined,
      maxDate: undefined,
      size: "middle",
    },
  }),
  blockBtnElement: {
    icon: MdOutlineDateRange,
    label: "DatePicker",
  },
  formComponent: DatePickerFormComponent,
};
