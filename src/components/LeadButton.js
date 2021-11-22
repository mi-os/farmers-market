import React from "react";
import { Box, Link } from "@chakra-ui/react";

export const LeadButton = (props) => {
  return (
    <Link href={props.href} target="_blank">
      <Box
        as="button"
        height={{ base: "50px", sm: "60px", "md": "70px" }}
        lineHeight="1.2"
        width={{ base: "80vw", sm: "300px", "md": "350px" }}
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="2px"
        px="8px"
        borderRadius="40px"
        fontSize={{ base: "14px", sm: "18px", "md": "20px" }}
        fontWeight="bold"
        bg="#333"
        borderColor="#333"
        color="#fff"
        _hover={{
          bg: "#fff",
          color: "#333"
        }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        {props.name}
      </Box>
    </Link>
  )
}
