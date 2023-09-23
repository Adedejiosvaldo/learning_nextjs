import React from "react";
 
interface Props {
  params: { id: number };
}

const UserDetails = ({ params: { id } }: Props) => {
  return <div>UserDeta{id}</div>;
};

export default UserDetails;
