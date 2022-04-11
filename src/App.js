import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProduct from "./components/AddProducts/AddProduct";
import EditModal from "./components/EditModal/EditModal";
import ListProducts from "./components/ListProducts/ListProducts";

const App = () => {
  const API = "http://localhost:8000/contact-book";
  const [contactBook, setContactBook] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);

  const postBook = async (newBook) => {
    await axios.post(API, newBook);
    getBook();
  };

  const getBook = async () => {
    const response = await axios(API);
    setContactBook(response.data);
  };

  const delBook = async (id) => {
    await axios.delete(`${API}/${id}`);
    getBook();
  };

  const getBookToEdit = async (id) => {
    const response = await axios(`${API}/${id}`);
    setBookToEdit(response.data);
    setIsModalOpen(true);
  };

  const saveBook = async (editedBook) => {
    await axios.put(`${API}/${editedBook.id}`, editedBook);
    setIsModalOpen(false);
    setBookToEdit(null);
    getBook();
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div>
      <AddProduct postBook={postBook} />
      <ListProducts
        contactBook={contactBook}
        delBook={delBook}
        getBookToEdit={getBookToEdit}
      />
      {bookToEdit ? (
        <EditModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          bookToEdit={bookToEdit}
          saveBook={saveBook}
          setBookToEdit={setBookToEdit}
        />
      ) : null}
    </div>
  );
};

export default App;
