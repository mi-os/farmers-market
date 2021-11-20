import React from "react";
import styled from "@emotion/styled";
import { Link } from "@chakra-ui/layout";

const ButtonStyle = styled.button`
  background: ${props => props.color};
  padding: 16px 24px;
  border: 2px solid black;
  border-radius: 40px;

  &:hover {
    background: black;
    color: white;
  }
`

export const LeadButton = (props) => {
  return (
    <ButtonStyle>
      <Link href={props.href} target="_blank" >
        <button onClick={props.click}>{props.name}</button>
      </Link>
    </ButtonStyle>
  );
}


// export const LeadButton = (props) => {
//   return (
//     <Button>{props.name}</Button>
//   );
// };
