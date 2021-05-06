import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand,Jumbotron, NavItem, NavbarToggler,Nav,Collapse, ModalHeader,Button,Modal, ModalBody, Label, Input, Form, FormGroup } from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
import { Control, LocalForm } from "react-redux-form";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false,
            isModalOpen : false
        }
        //this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    toggleNav = ()=>{
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    toggleModal = ()=>{
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        this.toggleModal();
        alert(JSON.stringify(values));
        alert("username : "+values.username+ " password : "+values.password+ " Remember : "+values.remember);
        // event.preventDefault();
    }
    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">My App Navbar</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About Us </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus"> 
                                    <span className="fa fa-address fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-home fa-lg"> Menu </span></NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto">
                                    <NavItem > 
                                        <Button outline onClick={this.toggleModal}>
                                            <span className="fa fa-sign-in"> Login</span>
                                        </Button>
                                    </NavItem>
                                </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="conatainer">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={ (values) => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor=".username">UserName</Label>
                                <Control.text model=".username" name="username" className="form-control" />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="password">Password</Label>
                                <Control.password model=".password" name="password" className="form-control" />
                            </div>
                            <div className="form-check">
                                <Label check>
                                    <Control.checkbox name="remember"model=".remember" />{' '}
                                    Remember Me?
                                </Label>
                            </div>
                            <Button type="submit" color="primary">Login</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
export default Header;