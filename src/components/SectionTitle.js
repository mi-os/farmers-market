import { Box, Heading, Text } from "@chakra-ui/react";

export const SectionTitle = ({ mainTitle, subTitle }) => {
  return (
    <Box textAlign="left">
      <Heading as="h1">{mainTitle}</Heading>
      <Text>{subTitle}</Text>
    </Box>
  )
}
