import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const PhotoDetails = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      user with ID {id} - PhotoDetails {photoId}
    </div>
  );
};

export default PhotoDetails;
