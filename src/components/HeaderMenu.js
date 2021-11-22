import { useMediaQuery } from "@chakra-ui/react";
import { Hamburger } from './Hamburger';
import { VerticalMenu } from "./VerticalMenu";

export const HeaderMenu = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

  return (
    <>
      {isLargerThan768 ? <VerticalMenu /> : <Hamburger />}
    </>
  )
}
