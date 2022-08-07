import { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { name: "The Gods must be crazy", id: 1 },
    { name: "Harry Potter", id: 2 },
    { name: "God of war", id: 3 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
