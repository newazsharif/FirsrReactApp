import React from "react";
import { CardImg, CardImgOverlay,Card, CardTitle } from "reactstrap";
  
const RenderMenu = ({dish,onClick})=>
{
    return(
        <Card onClick={() => onClick(dish.id)}>
            <CardImg src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

const Menu = (props)=>
{   
    const menu = props.dishes.map((dish) => {
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1 ">
                <RenderMenu dish = {dish} onClick = {props.onClick}></RenderMenu>
            </div>
        );
    });
    return(
    <div className = "container">
        <div className="row">
            {menu}
        </div>
    </div>
    );
}

export default Menu;