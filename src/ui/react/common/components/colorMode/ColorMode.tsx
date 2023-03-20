import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";

export const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      variant="link"
      leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    >
    </Button>
  );
};
