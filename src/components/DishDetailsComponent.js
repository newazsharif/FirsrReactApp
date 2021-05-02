import React from "react";
import { Link } from "react-router-dom";
import { Badge, Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle,}  from "reactstrap";
const RenderDish = ({dish})=>{
        if (dish == null){
        return(
            <div></div>
        );
    }
    else{
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }   
}

const RenderComment = ({comments}) =>{
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
        </div>
    )

}

    


const DishDetails = (props)=>{
    console.log(props);
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
                    <RenderDish dish={props.dish}></RenderDish>
                    <RenderComment comments={props.comment} /> 
                </div>
            </div>
        </div>
    
    )
};
export default DishDetails;