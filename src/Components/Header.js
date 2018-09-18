import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/biography'>Biography</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/news'>News</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/music'>Music</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contacts'>Contacts</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button>выбор языка</Button>
                                </NavItem>
                            </Nav>
                </div>
            </Navbar>
        );
    }
}

export default Header;