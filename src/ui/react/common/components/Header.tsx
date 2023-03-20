import { QuestionIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "./breadcrumbs/Breadcrumbs";
import { ColorMode } from "./colorMode/ColorMode";

export const Header = () => {
  return (
    <Box as="header" mb="1rem">
      <Box
        as="nav"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Breadcrumbs />
        <UnorderedList
          display="flex"
          justifyContent="center"
          alignContent="center"
          flexWrap="wrap"
          gap="1rem"
        >
          <ListItem>
            <Text>Hola</Text>
          </ListItem>
          <ListItem>
            <QuestionIcon/>
          </ListItem>
          <ListItem>
            <ColorMode/>
          </ListItem>
          <ListItem>
            Logut
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};
