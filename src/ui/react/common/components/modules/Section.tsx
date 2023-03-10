import { ReactElement } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactElement | ReactElement[];
}

export const Section = ({ children }: Props) => {
  return (
    <Box as="section" p="2rem" borderRadius="1rem" mb="2rem">
      {children}
    </Box>
  );
};
