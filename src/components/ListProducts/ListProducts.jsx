import React from "react";
import { Button, Table } from "react-bootstrap";

const ListProducts = (props) => {
  const { contactBook, delBook, getBookToEdit } = props;

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Номер телефона</th>
          </tr>
        </thead>
        <tbody>
          {contactBook.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.userName}</td>
                <td>{item.phone}</td>
                <td>
                  <Button variant="danger" onClick={() => delBook(item.id)}>
                    DEL
                  </Button>
                  <Button onClick={() => getBookToEdit(item.id)}>EDIT</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListProducts;
