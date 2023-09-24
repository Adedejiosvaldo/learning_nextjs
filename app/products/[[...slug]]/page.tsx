import React from "react";

interface slugProps {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const Slug = ({ params: { slug }, searchParams: { sortOrder } }: slugProps) => {
  return (
    <div>
      Products {slug} {sortOrder}
    </div>
  );
};

export default Slug;
