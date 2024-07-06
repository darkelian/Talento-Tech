import React from "react";
import BookInfo from "./BookInfo";
import BookReserve from "./BookReserve";
import BookTutors from "./BookTutors";
import BookTutorials from "./BookTutorials";

const BookTutoring = () => {
  return (
    <>
      <BookInfo />
      <BookTutorials />
      <BookReserve />
      <BookTutors />
    </>
  );
};

export default BookTutoring;
