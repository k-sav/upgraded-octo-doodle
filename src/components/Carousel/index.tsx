import React from "react";
import { Box } from "@linktr.ee/ui-link-kit";

import { GridItem } from "../GridItem";

export const Carousel = ({ imageSrcs }: { imageSrcs?: string[] }) => {
  const length = imageSrcs?.filter(Boolean)?.length || 0;

  return (
    <Box
      display="grid"
      gridGap={10}
      gridTemplateColumns={[
        `repeat(${length}, calc(100% ${length > 1 ? "- 40px" : ""}))`,
      ]}
      gridTemplateRows={["minmax(150px, 1fr)"]}
      overflow="auto"
      paddingBottom={[32, 0]}
    >
      {imageSrcs.filter(Boolean).map((imageSrc) => (
        <GridItem imageSrc={imageSrc} />
      ))}
    </Box>
  );
};
