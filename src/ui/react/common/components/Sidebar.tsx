import { useState } from "react";
import {
  Icon,
  Button,
  UnorderedList,
  ListItem,
  Text,
  Stack,
  keyframes,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiChevronRight, FiChevronLeft, FiCalendar } from "react-icons/fi";
import { MdOutlineGridView } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { BiTask } from "react-icons/bi";

const navItems: Array<any> = [
  { name: "Home", icon: MdOutlineGridView, link: "/" },
  { name: "Tasks", icon: BiTask, link: "/tasks" },
  { name: "Common", icon: FiHeart, link: "/" },
  { name: "Books", icon: FiHeart, link: "/books" },
];

const forwardAnimation = keyframes`
  from {
    width: 50px;
  }
  to {
    width: 200px;
  }
`;

const reverseAnimation = keyframes`
  from {
    width: 200px;
  }
  to {
    width: 50px;
  }
`;
export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [animation, setAnimation] = useState(false);

  const buttonCss: InterpolationWithTheme<any> = {
    overflowX: "hidden",
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
      <Stack as="aside" position="relative" bg="gray.500">
        <Stack p="1rem" position="sticky" top="0px">
          <Button
            display="flex"
            position="absolute"
            p="0px"
            right="-0.9rem"
            borderRadius="50%"
            minWidth="1rem"
            width="1.8rem"
            height="1.8rem"
            onClick={() => startAnimation()}
          >
            {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
          </Button>
          <UnorderedList
            marginX="0"
            css={animation ? buttonCss : "width: 200px"}
            marginTop="3rem !important"
            listStyleType="none"
            display="flex"
            flexDirection="column"
            gap="1rem"
          >
            {navItems.map((navItem, index) => (
              <Link to={navItem.link} key={index}>
                <ListItem
                  key={index}
                  alignItems="center"
                  gap="0.5rem"
                  display="flex"
                  flexWrap="nowrap"
                  fontSize="1.1rem"
                  fontWeight="600"
                  borderRadius="lg"
                  p="1rem"
                  _hover={{
                    bg: "gray.400",
                    color: "white",
                  }}
                >
                  <Icon as={navItem.icon} />
                  <Text visibility={isOpen ? "visible" : "hidden"}>
                    {navItem.name}
                  </Text>
                </ListItem>
              </Link>
            ))}
          </UnorderedList>
        </Stack>
      </Stack>
    </>
  );
};
