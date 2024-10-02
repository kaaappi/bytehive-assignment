import React, { FC, ReactNode } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface IBreadCrumbsProps {
  items: { text: string; href?: string }[];
  separator: ReactNode;
}

const BreadCrumbs: FC<IBreadCrumbsProps> = ({ items, separator }) => {
  return (
    <BreadcrumbsContainer>
      <Breadcrumbs aria-label="breadcrumb" separator={separator}>
        {items.map((item, index) => (
          <div key={index}>
            {item.href ? (
              <Link color="#202A44" href={item.href}>
                {item.text}
              </Link>
            ) : (
              <Typography> {item.text}</Typography>
            )}
          </div>
        ))}
      </Breadcrumbs>
    </BreadcrumbsContainer>
  );
};

const BreadcrumbsContainer = styled("div")({
  margin: "20px 0",
  fontSize: "15px",
});

export default BreadCrumbs;
