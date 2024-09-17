import React, {useState} from 'react';
import {Table} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {data} from './data.js';

function App() {
  const [search, setSearch] = useState('');
  console.log(search);

  return (
    <div className='App'>
      <Container>
        <h1 className='text-center mt-4'>Contact Keeper</h1>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Search contacts' />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
  {data
    .filter((item) => {
      const searchTerm = search.toLowerCase();
      return (
        searchTerm === '' ||
        item.first_name.toLowerCase().includes(searchTerm) ||
        item.last_name.toLowerCase().includes(searchTerm) ||
        item.email.toLowerCase().includes(searchTerm) ||
        item.phone.toLowerCase().includes(searchTerm)
      );
    })
    .map((item) => (
      <tr key={item.id}>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
      </tr>
    ))}
</tbody>
        </Table>
    </Container>
    </div>
    
  );
}

export default App;
