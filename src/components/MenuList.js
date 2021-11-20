import { Link, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Menu = styled.menu`
.Vertical {
  writing-mode: vertical-rl;
}
.Horizon {
  writing-mode: horizontal-tb;
}
`;

export const MenuList = ({ writingMode, textAlign }) => {
  return (
    <>
      <Menu>
        <Link className={writingMode}>
          私たちについて
          <Text fontSize={{ base: "12px", md: "15px" }} textAlign={textAlign}>about us</Text>
        </Link>
      </Menu>
      <Menu>
        <Link className={writingMode}>
          商品紹介
          <Text fontSize={{ base: "12px", md: "15px" }} textAlign={textAlign}>item</Text>
        </Link>
      </Menu>
      <Menu>
        <Link className={writingMode}>
          農園紹介
          <Text fontSize={{ base: "12px", md: "15px" }} textAlign={textAlign}>about farm</Text>
        </Link>
      </Menu>
      <Menu>
        <Link className={writingMode}>
          アクセス
          <Text fontSize={{ base: "12px", md: "15px" }} textAlign={textAlign}>access</Text>
        </Link>
      </Menu>
    </>
  );
}
