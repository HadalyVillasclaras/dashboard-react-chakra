import { Box } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  let location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = currentLink + `/${crumb}`;
      return (
        <Link to={currentLink} key={crumb}>
          {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
        </Link>
      );
    });

  return (
    <Box id="breadcrumbs" as="span">
      {crumbs}
    </Box>
  );
};
