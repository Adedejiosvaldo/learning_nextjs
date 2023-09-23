import React from "react";

interface slugProps {
  params: { slug: string[] };
}

const Slug = ({ params: { slug } }: slugProps) => {
  return <div>Products {slug}</div>;
};

export default Slug;
