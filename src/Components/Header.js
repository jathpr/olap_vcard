import React, { Component } from 'react';
import Navbar from 'reactstrap/lib/Navbar';
import Nav from 'reactstrap/lib/Nav';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import NavItem from 'reactstrap/lib/NavItem';
import Collapse from 'reactstrap/lib/Collapse';
import Button from 'reactstrap/lib/Button';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import UncontrolledDropdown from 'reactstrap/lib/UncontrolledDropdown';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownItem from 'reactstrap/lib/DropdownItem';
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
        const data = this.props.data;
        //fixed="left" className='navbar-fixed-left' nav vertical
        return (
            <Navbar dark expand="md"> 
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'>{data.home}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/biography'>{data.bio}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/projects'>{data.projects}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/news'>{data.news}</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {data.music}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <NavLink className="nav-link" to='/concert_music'><DropdownItem>{data.musicConcert}</DropdownItem></NavLink>
                                    <NavLink className="nav-link" to='/film_music'><DropdownItem>{data.musicFilm}</DropdownItem></NavLink>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink className="nav-link" to='/contacts'>{data.contacts}</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button onClick={() => this.props.onClick('ru')}>{data.russian}</Button>
                            <Button onClick={() => this.props.onClick('en-US')} className="ml-2">{data.english}</Button>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        );
    }
}

export default Header;