import React from 'react';
import { Container, Form, FormControl, Navbar } from 'react-bootstrap';

const Header = (props) => {
    return (
        <div className="mb-4">
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Foodbar</Navbar.Brand>
                <Form className="d-flex">
                    <FormControl
                    onChange={props.handleChange}
                    type="search"
                    placeholder="Search Food.."
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;