import React, { Component } from 'react';
import { Breadcrumb,BreadcrumbItem, Col, Form, FormGroup, Input, Label,Button, FormFeedback } from 'reactstrap';
import {Link} from 'react-router-dom';

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
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
    }

    handleSubmit(event){
        alert("The value you submitted are : "+ JSON.stringify(this.state))
        event.preventDefault();
    }

    handleInput(event){
        const target = event.target;
        const inputName = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [inputName] : value
        });
    }

    handleBlur = (field)=>(evt)=>{
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    // handleBlur(field){
    //     this.setState({
    //         touched : { ...this.state.touched , [field] : true} 
    //     })
    // }

    validate(firstname,lastname,telnum,email){
        const errors={
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3 ) {
            errors.firstname = 'FirstName should be atleast three character';
        }
        else if (this.state.touched.firstname && firstname.length > 10 ) {
            errors.firstname = 'FirstName cannot be more than ten character';
        }
        if (this.state.touched.lastname && lastname.length < 3 ) {
            errors.lastname = 'LastName should be atleast three character';
        }
        else if (this.state.touched.lastname && lastname.length > 10 ) {
            errors.lastname = 'LastName cannot be more than ten character';
        }
        if(telnum.length === 0){
            errors.telnum = 'Telnum is needed to be provided';
        }
        return errors
    }
    render(){
        const errors = this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email)
        console.log(errors);
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
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup className="row">
                            <Label md={2} htmlFor="firstname">First Name</Label> 
                            <Col md={10}>
                                <Input type="text" name="firstname" id="firstname" 
                                value={this.state.firstname} onChange={this.handleInput} 
                                valid={errors.firstname === ''}
                                invalid={errors.firstname !==''}
                                onBlur={this.handleBlur('firstname')} />
                                <FormFeedback>{errors.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label md={2} htmlFor="lastname">Last Name</Label> 
                            <Col md={10}>
                                <Input type="text" name="lastname" id="lastname" 
                                value={this.state.lastname} onChange={this.handleInput} 
                                valid={errors.lastname === ''}
                                invalid={errors.lastname !==''}
                                onBlur={this.handleBlur('lastname')}/>
                                <FormFeedback>{errors.lastname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label md={2} htmlFor="telnum">Tel Num.</Label> 
                            <Col md={10}>
                                <Input type="tel" name="telnum" id="telnum" 
                                value={this.state.telnum} onChange={this.handleInput} 
                                valid={errors.telnum === ''}
                                invalid={errors.telnum !== ''}
                                onBlur={this.handleBlur('telnum')}/>
                                <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label md={2} htmlFor="email">Email</Label> 
                            <Col md={10}>
                                <Input type="email" name="email" id="email" 
                                value={this.state.email} onChange={this.handleInput} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:6 , offset : 2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" 
                                            name="agree" checked={this.state.agree} onChange={this.handleInput} />{' '}
                                            <strong>May I Contact You</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size:3 , offset :1}}>
                                <Input type="select" name="contactType"
                                    value={this.state.contactType} onChange={this.handleInput} >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} htmlFor="message">Message</Label>
                            <Col md={10}>
                                <Input type="textarea" value={this.state.message} name="message" id="message" 
                                rows="12" onChange={this.handleInput} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10,offset:2}}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
        )
    }
}
export default Contact;