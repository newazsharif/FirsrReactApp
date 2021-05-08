import { Button, Col, Label, Modal, ModalHeader, Row,ModalBody } from "reactstrap";
import React,{ Component }  from "react";
import { Control, Errors, LocalForm } from "react-redux-form";


class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    toggleModal = ()=>{
        this.setState({isModalOpen : !this.state.isModalOpen});
    }
    submitForm(values){
        alert(JSON.stringify(values));
        this.props.addComment(this.props.dishId,values.rating,values.comment,values.author);
    }
   render(){
       const required = (val)=> val && val.length;
       const minLength = (len)=>(val)=> !val || val.length >= len;
       const maxLength = (len) => (val) => !val || val.length <= len;
       return(
           <React.Fragment>
           <Button color="primary" onClick={this.toggleModal}>submit</Button>
           <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                <ModalHeader toggle={this.toggleModal}>
                    Submit Comments
                </ModalHeader>
                <ModalBody>
                    
                    <div className="col-md-11 col-md-offset-1">
                    <LocalForm onSubmit={values => this.submitForm(values)}> 
                        <Row className = "form-group">
                            <Label htmlFor=".rating">
                                Rating
                            </Label>
                            <Control.select name="rating" className="form-control" model=".rating">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Row> 
                        <Row className = "form-group">
                            <Label htmlFor=".author">
                                Your Name
                            </Label>
                            <Control.text name="author" model=".author" className="form-control" 
                            validators={{required,minLength: minLength(3),maxLength : maxLength(10)}}/>
                            <Errors className="text-danger" model=".author" show="touched"
                            messages = {
                                {
                                    required : "REQUIRED",
                                    minLength : "Must be Greater than 3 digits",
                                    maxLength : "Must be less than 10 digits"
                                }
                            } />
                        </Row> 
                        <Row  className = "form-group">
                            <Label htmlFor=".comment">
                                Comment
                            </Label>
                            <Control.textarea name="comment" model=".comment" className="form-control" 
                            rows="12"/>
                        </Row> 
                        <Row className="form-group">
                            <Button type="submit" color="primary">Submit</Button>
                        </Row>
                    </LocalForm>
                    </div>
                </ModalBody>
           </Modal>
           </React.Fragment>
       )
   }
}

export default CommentForm;