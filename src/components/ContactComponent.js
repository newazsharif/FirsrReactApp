import React, { Component } from 'react';
import { Breadcrumb,BreadcrumbItem, Col, Input, Label,Button, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,Errors, Form} from "react-redux-form"

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched : {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
            }
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
    }

    handleSubmit(values){
        alert("The value you submitted are : "+ JSON.stringify(values));
        this.props.resetFeedBackForm();
    }
    render(){
        const required = (val) => (val) && (val.length);
        const maxLength = (len) => (val) => !val || val.length <= len;
        const minLength = (len) => (val) => !val || val.length >= len;
        const isNumber = (val) => !isNaN((Number(val)));

        // const required = (val) => val && val.length;
        // const maxLength = (len) => (val) => !(val) || (val.length <= len);
        // const minLength = (len) => (val) => !val || (val.length >=len);

        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem >
                                <Link to = "/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                Contact Us
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Send Feedback to Us</h2>
                </div>
                <div className = "col-12 col-md-9">
                    <Form model='feedback' onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group" >
                            <Label md={2} htmlFor=".firstname">First Name</Label> 
                            <Col md={10}>
                                <Control.text model=".firstname" name="firstname" id="firstname" className="form-control" 
                                validators ={{required,minLength :minLength(3),maxLength : maxLength(15)}}/>
                                <Errors className="text-danger" model=".firstname" show="touched" messages={
                                    {
                                        required : "Required",
                                        minLength : " Should be greater than 2 digits",
                                        maxLength : " Cannot be greated than 15 digits"
                                    }
                                } />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={2} htmlFor=".lastname">Last Name</Label> 
                            <Col md={10}>
                                <Control.text model=".lastname" name="lastname" id="lastname" className="form-control" 
                                validators ={{required,minLength :minLength(3),maxLength : maxLength(15)}}/>
                            </Col>
                            <Errors className="text-danger" model=".lastname" show="touched" messages={
                                    {
                                        required : "Required",
                                        minLength : " Should be greater than 2 digits",
                                        maxLength : " Cannot be greated than 15 digits"
                                    }
                                } />
                        </Row>
                        <Row className="form-group">
                            <Label md={2} htmlFor=".telnum">Tel Num.</Label> 
                            <Col md={10}>
                                <Control.text model=".telnum" name="telnum" id="telnum" className="form-control" 
                                validators ={{isNumber,minLength :minLength(10),maxLength : maxLength(15)}} />
                                <Errors className="text-danger" model=".telnum" show="touched" messages={
                                    {
                                        isNumber : "Provide Number",
                                        minLength : " Should be greater than 9 digits",
                                        maxLength : " Cannot be greated than 15 digits"
                                    }
                                } />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={2} htmlFor=".email">Email</Label> 
                            <Col md={10}>
                                <Control.text model=".email" name="email" id="email" className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:6 , offset : 2}}>
                            <div className="form-check">
                                    <Label check>
                                        <Control.checkbox model=".agree"  className="form-check-input" name="agree" />{' '}
                                            <strong>May I Contact You</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{size:3 , offset :1}}>
                                <Control.select name="contactType"
                                    model=".contactType" className="form-control">
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={2} htmlFor=".message">Message</Label>
                            <Col md={10}>
                                <Control.textarea model=".message" name="message" id="message" className="form-control" rows="12"  />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10,offset:2}}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
        )
    }
}
export default Contact;