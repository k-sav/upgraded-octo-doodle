import React from "react";
import { Flex } from "@linktr.ee/ui-link-kit";

export const LaunchIcon = ({
  url,
  imageSrc,
}: {
  url?: string;
  imageSrc?: string;
}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width={24}
      height={24}
      mx="auto"
      backgroundColor="#FFF"
      borderRadius="100%"
      boxShadow="2px 2px 4px rgba(0,0,0,0.1)"
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.33333 8.88889H1.66667C1.36111 8.88889 1.11111 8.63889 1.11111 8.33333V1.66667C1.11111 1.36111 1.36111 1.11111 1.66667 1.11111H4.44444C4.75 1.11111 5 0.861111 5 0.555556C5 0.25 4.75 0 4.44444 0H1.11111C0.494444 0 0 0.5 0 1.11111V8.88889C0 9.5 0.5 10 1.11111 10H8.88889C9.5 10 10 9.5 10 8.88889V5.55556C10 5.25 9.75 5 9.44444 5C9.13889 5 8.88889 5.25 8.88889 5.55556V8.33333C8.88889 8.63889 8.63889 8.88889 8.33333 8.88889ZM6.11111 0.555556C6.11111 0.861111 6.36111 1.11111 6.66667 1.11111H8.10556L3.03333 6.18333C2.81667 6.4 2.81667 6.75 3.03333 6.96667C3.25 7.18333 3.6 7.18333 3.81667 6.96667L8.88889 1.89444V3.33333C8.88889 3.63889 9.13889 3.88889 9.44444 3.88889C9.75 3.88889 10 3.63889 10 3.33333V0H6.66667C6.36111 0 6.11111 0.25 6.11111 0.555556Z"
          fill="#505E6D"
        />
      </svg>
    </Flex>
  );
};
