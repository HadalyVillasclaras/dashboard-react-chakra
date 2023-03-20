import { ReactElement } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: ReactElement | ReactElement[];
}

export const Section = ({ children }: Props) => {
  const bgColor = useColorModeValue("white", "gray.700");


  return (
    <Box
      as="section"
      backgroundColor={bgColor}
      p="2rem"
      borderRadius="1rem"
      mb="2rem"
    >
      {children}
    </Box>
  );
};
