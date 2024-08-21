import React from "react";
import Title from "../atoms/title";
import Button from "../atoms/button";

type Props = {
  title: string;
  size: string;
};

export default function TextAndButton({ title, size }: Props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <Title title={title} size={size} />

        <Button />
      </div>
    </>
  );
}
