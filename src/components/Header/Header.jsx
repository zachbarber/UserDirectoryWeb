import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
                <LinkContainer to='/Departments'>
                    <Nav.Link>
                        Departments
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/EmployeesList'>
                    <Nav.Link>
                        Employees
                    </Nav.Link>
                </LinkContainer>
                {/* <NavDropdown title="Administrator Tools" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Create Employee</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Edit Employee</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
        )
    };

    export default Header;