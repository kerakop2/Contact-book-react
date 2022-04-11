import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const EditModal = (props) => {
  const { isModalOpen, setIsModalOpen, bookToEdit, saveBook, setBookToEdit } =
    props;

  const [name, setName] = useState(bookToEdit.name);
  const [userName, setUserName] = useState(bookToEdit.userName);
  const [phone, setPhone] = useState(bookToEdit.phone);

  const handleSubmit = (event) => {
    event.preventDefault();
    const editedBook = {
      name: name.trim(),
      userName: userName.trim(),
      phone,
      id: bookToEdit.id,
    };
    saveBook(editedBook);
  };

  return (
    <Modal
      show={isModalOpen}
      onHide={() => {
        setBookToEdit(null);
        setIsModalOpen(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Редактировать товар</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Имя </Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Введите имя"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Введите фамилию"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Введите номер телефона"
            />
          </Form.Group>
          <Button type="submit">Добавить</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
