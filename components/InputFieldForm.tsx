import {  } from "react";
import { colors } from "../public/styles/colors";
import { Input, InputProps, forwardRef } from "@chakra-ui/react";

const InputFieldForm = forwardRef<InputProps, "input">((props, ref) => (
  <Input
    {...props}
    ref = {ref}
    width="692px"
    border=" 3px solid"
    borderColor={colors.fullblack}
    marginLeft="20px"
    marginRight="20px"
  />
));

InputFieldForm.displayName = "InputFieldForm";
export default InputFieldForm;
