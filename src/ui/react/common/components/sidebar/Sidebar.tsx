import { useState } from "react";
import {
  Icon,
  Button,
  UnorderedList,
  ListItem,
  Text,
  Stack,
  keyframes,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiChevronRight, FiChevronLeft, FiCalendar } from "react-icons/fi";
import { MdOutlineGridView } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { BiTask } from "react-icons/bi";
import "./sidebar.css";

const navItems: Array<any> = [
  { name: "Home", icon: MdOutlineGridView, link: "/" },
  { name: "Tasks", icon: BiTask, link: "/tasks" },
  { name: "Books", icon: FiHeart, link: "/books" },
];

const forwardAnimation = keyframes`
  from {
    width: 82px;
  }
  to {
    width: 255px;
  }
`;

const reverseAnimation = keyframes`
  from {
    width: 255px;
  }
  to {
    width: 82px;
  }
`;
export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [animation, setAnimation] = useState(false);

  const buttonCss: InterpolationWithTheme<any> = {
    animation: isOpen
      ? `${forwardAnimation} 0.2s linear forwards`
      : `${reverseAnimation} 0.2s linear forwards`,
  };

  const startAnimation = () => {
    setAnimation(true);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Stack
        id="sidebar"
        as="aside"
        css={animation ? buttonCss : "width: 320px"}
      >
        <Button
          className="close-button"
          variant="ghost"
          data-testid="hidden-button"
          onClick={() => startAnimation()}
        >
          {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
        </Button>

        <Box as="header">
          <UnorderedList>
            <ListItem>
              <Link to="/">LOGO</Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box as="nav">
          <UnorderedList>
            {navItems.map((navItem, index) => (
              <ListItem key={index}>
                <Link to={navItem.link} key={index}>
                  <Icon as={navItem.icon} />
                  <Text display={isOpen ? "flex" : "none"}>{navItem.name}</Text>
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
          <UnorderedList>
            <ListItem display={isOpen ? "flex" : "none"}></ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    </>
  );
};
