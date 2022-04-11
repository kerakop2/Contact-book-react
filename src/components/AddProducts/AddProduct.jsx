import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddProduct = (props) => {
  const { postBook } = props;

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      name: name.trim(),
      userName: userName.trim(),
      phone,
    };
    for (let key in newBook) {
      if (!newBook[key]) {
        alert("Заполните поля!");
        return;
      }
    }
    postBook(newBook);
    setName("");
    setUserName("");
    setPhone("");
  };

  return (
    <div className="add-contact-book">
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
    </div>
  );
};

export default AddProduct;
