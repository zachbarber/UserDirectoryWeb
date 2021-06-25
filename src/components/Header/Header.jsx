import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../Header/header.css'

const Header = props => {
    return (
            <Nav variant="pills">
                <LinkContainer to='/home'>
                    <Nav.Link>
                        Home
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/test1'>
                    <Nav.Link>
                        Test1
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/test2'>
                    <Nav.Link>
                        Test2
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/DepartmentsList'>
                    <Nav.Link>
                        Departments
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/EmployeesList'>
                    <Nav.Link>
                        Employees
                    </Nav.Link>
                </LinkContainer>
            </Nav>
    )
};

export default Header;