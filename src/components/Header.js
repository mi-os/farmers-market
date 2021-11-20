import { Center, useMediaQuery, Flex, Link } from '@chakra-ui/react';
import { Logo } from './Logo';
import { HeaderMenu } from './HeaderMenu';
import { FiShoppingCart } from 'react-icons/fi';

const CartIcon = () => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 767px)")

  if (isSmallerThan768) {
    return (
      <Flex>
        <Center>
          <Link href="https://bootcamp-test-app.myshopify.com/" target="_blank">
            <FiShoppingCart />
          </Link>
        </Center>
      </Flex>
    );
  }
  else {
    return (
      null
    );
  }
}

export const Header = () => {
  return (
    <Flex justifyContent="space-around" verticalAlign="center">
      <CartIcon />
      <Flex>
        <Center>
          <Logo h="10vmin" />
        </Center>
      </Flex>
      <Flex>
        <Center>
          <HeaderMenu />
        </Center>
      </Flex>
    </Flex>
  );
}
