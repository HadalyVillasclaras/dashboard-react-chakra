import { QuestionIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "./breadcrumbs/Breadcrumbs";

export const Header = () => {
  return (
    <Box
      as="header"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Link to="/">
        <Heading as="h1">Logo</Heading>
      </Link>
      <Breadcrumbs />
      <UnorderedList
        display="flex"
        justifyContent="center"
        alignContent="center"
        flexWrap="wrap"
        gap="1rem"
      >
        <ListItem display="flex" alignContent="center">
          <Button variant="link">
            <a href="#">
              <QuestionIcon mr="0.3rem" />
              Help
            </a>
          </Button>
        </ListItem>
        <ListItem>
          <p>Logout</p>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};
