import React from 'react';
import { Image, Box, Link } from '@chakra-ui/react';
import logo from '../images/farmers-logo.png';

export const Logo = props => {
  return (
    <Box my={5}>
      <Image boxSize={{ sm: "80px", md: "100px" }} src={logo} alt="logo" />
    </Box>
  );
};
