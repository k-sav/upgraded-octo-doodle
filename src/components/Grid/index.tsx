import React from "react";
import { Box } from "@linktr.ee/ui-link-kit";

import { GridItem } from "../GridItem";

export const Grid = ({ imageSrcs }: { imageSrcs?: string[] }) => {
  const length = imageSrcs?.filter(Boolean)?.length || 0;

  return (
    <Box
      display="grid"
      gridGap={10}
      gridTemplateColumns={["repeat(3, 1fr)"]}
      gridTemplateRows={[`repeat(${length > 3 ? 2 : 1}, 200px)`]}
      overflow="auto"
      paddingBottom={[32, 0]}
    >
      {imageSrcs.filter(Boolean).map((imageSrc) => (
        <GridItem imageSrc={imageSrc} />
      ))}
    </Box>
  );
};
