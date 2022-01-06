import React from "react";
import styled from "styled-components";

import { Flex, Image } from "@linktr.ee/ui-link-kit";

export const GridItem = ({ imageSrc }: { imageSrc?: string }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      maxWidth={680}
      mx="auto"
      backgroundColor="#F6F6F8"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="#EBEEF1"
      borderRadius="8px"
      overflow="hidden"
      position="relative"
    >
      <StyledImage src={imageSrc} alt="" draggable="false" />
      {/* <Box position="absolute" top={8} right={8}>
        <LaunchIcon />
      </Box> */}
    </Flex>
  );
};

const StyledImage = styled(Image)`
  object-fit: contain;
  aspect-ratio: 1;
  width: 100%;
  display: block;
  transition: transform 0.5s ease-out;

  &:hover {
    transform: scale(1.03);
  }
`;
