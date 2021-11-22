import { Flex } from "@chakra-ui/layout";
import { MenuList } from "./MenuList";

export const VerticalMenu = () => {
  return (
    <Flex>
      <MenuList writingMode="Vertical" textAlign="left" />
    </Flex>
  )
}
