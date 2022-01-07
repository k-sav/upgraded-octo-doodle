import React from "react";
import styled, { css } from "styled-components";

import { Flex, Text, Box, Button } from "@linktr.ee/ui-link-kit";
import { SettingsData, LayoutType } from "./types";

import { Grid } from "./components/Grid";
import { Carousel } from "./components/Carousel";

function App({
  external_link,
  description,
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  layout = LayoutType.GRID,
}: SettingsData) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      maxWidth={680}
      mx="auto"
    >
      {!!description && (
        <Box mb={16}>
          <Text fontWeight="normal" textAlign="center">
            {description}
          </Text>
        </Box>
      )}

      {layout === LayoutType.GRID ? (
        <Grid imageSrcs={[image0, image1, image2, image3, image4, image5]} />
      ) : (
        <Carousel
          imageSrcs={[image0, image1, image2, image3, image4, image5]}
        />
      )}

      {!!external_link && (
        <ButtonContainer>
          <StyledButton as="a" href={external_link}>
            Check out my website!
          </StyledButton>
        </ButtonContainer>
      )}
    </Flex>
  );
}

export default App;

const StyledButton = styled(Button)`
  ${({ theme: { palette, space } }) => css`
    height: ${space.x10};
    width: 100%;
    background-color: ${palette.blueGrey12};
    border-radius: ${space.x3};
    color: ${palette.white};
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    transition: background-color 0.2s ease-out;

    &:hover {
      background-color: ${palette.blueGrey10};
    }
  `}
`;

const ButtonContainer = styled(Box)`
  ${({ theme: { palette, space } }) => css`
    width: 100%;
    padding: ${space.x6} 0;
  `}
`;
