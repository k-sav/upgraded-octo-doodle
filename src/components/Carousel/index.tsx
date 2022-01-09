import React from "react";
import { Box } from "@linktr.ee/ui-link-kit";

import { Carousel as Carasel } from "react-responsive-carousel";
import { GridItem } from "../GridItem";
import { CarouselWrapper } from "./styles";

export const Carousel = ({ imageSrcs }: { imageSrcs?: string[] }) => {
  const length = imageSrcs?.filter(Boolean)?.length || 0;

  return (
    <CarouselWrapper>
      <Carasel
        autoPlay
        interval={5000}
        infiniteLoop
        transitionTime={400}
        swipeable
        emulateTouch
        dynamicHeight={false}
        showStatus={false}
        showIndicators
        showArrows
      >
        {imageSrcs?.filter(Boolean)?.map((image) => {
          return (
            <Box alignItems="center">
              <GridItem imageSrc={image} />
            </Box>
          );
        })}
      </Carasel>
    </CarouselWrapper>
  );
};
