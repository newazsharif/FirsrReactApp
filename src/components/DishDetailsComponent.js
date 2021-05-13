import React from "react";
import { Link } from "react-router-dom";
import { Badge, Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle,}  from "reactstrap";
import { baseURL } from "../shared/baseURL";
import CommentForm from "./CommentFormComponent";
import {Loader} from './LoaderComponent'
const RenderDish = ({dish,isLoading,errMess})=>{
        if(isLoading){
            return(
                <div className="container">
                    <div className = "row">
                        <Loader />
                    </div>
                </div>
            )
        }
        else if (errMess) {
            return(
                <div className="container">
                    <div className = "row">
                        <h3 className="text-danger">{errMess}</h3>
                    </div>
                </div>
            )
        }
        else if (dish == null){
        return(
            <div></div>
        );
    }
    else{
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={baseURL + dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }   
}

const RenderComment = ({comments,addComment,dishId}) =>{
    const comment = comments.map((comment) => {
        return(
            <div key={comment.id} className="col-12">
                <Badge className="badge bg-secondary">{comment.author}</Badge> : 
                <p>{comment.comment}</p>  
            </div>
        );
    });
    return(
        <div className="ol-12 col-md-5 m-1">
            {comment}
            <CommentForm addComment = {addComment} dishId = {dishId}/>
        </div>
    )

}

const DishDetails = (props)=>{
    console.log(props);
    if (props.dish) {
        return(
            <div className="container">
                
                <div className="row">
                    <div className ="col-12">
                        <Breadcrumb>
                        <BreadcrumbItem >
                                <Link to = "/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem >
                                <Link to = "/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className = "row">
                        <RenderDish dish={props.dish}
                        isLoading = {props.isLoading} 
                        errMess = {props.errMess} />
                        <RenderComment comments={props.comment} addComment={props.addComment}  dishId={props.dish.id} /> 
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(<div></div>)
    }
};
export default DishDetails;