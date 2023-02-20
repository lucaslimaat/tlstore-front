import { Button, forwardRef, ButtonProps } from "@chakra-ui/react";
import { colors } from "../public/styles/colors";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

const ButtonSite = forwardRef<ButtonProps, "button">((props, ref) => (
  <Button
    {...props}
    ref = {ref}
    className={montserrat.className}
    backgroundColor={colors.fullblack}
    height="53px"
    color={colors.white}
    fontSize="24px"
    borderRadius="0px"
  />
));

export default ButtonSite;
