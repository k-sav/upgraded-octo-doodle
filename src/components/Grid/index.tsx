import React from "react";
import { Box } from "@linktr.ee/ui-link-kit";

import { GridItem } from "../GridItem";
import { LayoutType } from "../../types";

export const Grid = ({
  imageSrcs,
  layout = LayoutType.GRID,
}: {
  imageSrcs?: string[];
  layout?: LayoutType;
}) => {
  const length = imageSrcs?.filter(Boolean)?.length || 0;

  if (layout === LayoutType.GRID) {
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
  } else {
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
  }
};
