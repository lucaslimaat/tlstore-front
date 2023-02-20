import {  } from "react";
import { colors } from "../public/styles/colors";
import { Text, TextProps, forwardRef } from "@chakra-ui/react";

const MessageAlert = forwardRef<TextProps, "text">((props, ref) => (
  <Text
    {...props}
    ref = {ref}
    marginLeft="20px" color={colors.red}
  />
));

MessageAlert.displayName = "MessageAlert";
export default MessageAlert;