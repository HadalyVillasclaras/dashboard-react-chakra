import { Box } from "@chakra-ui/react";
import { Link, useMatches } from "react-router-dom";
import "./breadcrumbs.css";

export const Breadcrumbs = () => {
  let matches = useMatches();

  let crumbs = matches
    .filter((match: any) => Boolean(match.handle?.crumb)) //elimina los que no tienen handle/crumb
    .map((match: any) => {

      return (
        match.handle.crumb()
      )
    });


  return (
    <Box as="span" id="breadcrumbs">
      {crumbs.map((crumb, index, crumbs) => {
        if (index + 1 === crumbs.length) {
          return (
            <span key={index}>{crumb}</span>)
        } else {
          return (
            <span key={index}><Link to="#">{crumb}</Link></span>
          )
        }
      })}
    </Box>
  );
};
