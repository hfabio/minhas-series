import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={Link} to="/" >Minhas Séries</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={open} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/generos" navbar={Navbar ? 1 : 0}>Gêneros</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/generos/novo" nanavbar={Navbar ? 1 : 0}>Adicionar gênero</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}