import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { MenuList } from "./MenuList"

// export default function Hamburger() {
export const Hamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HamburgerIcon onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody px="20%" py="10%">
            <MenuList writingMode="Horizon" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
