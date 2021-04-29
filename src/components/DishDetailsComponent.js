import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle,}  from "reactstrap";
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

const DishDetails = (props)=>{
    return(
        <div className="row">
            <RenderDish dish={props.selectedDish}></RenderDish>
        </div>
    
    )
};
export default DishDetails;