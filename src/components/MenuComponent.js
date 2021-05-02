import React from "react";
import { Link } from "react-router-dom";
import { CardImg, CardImgOverlay,Card, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
  
const RenderMenu = ({dish})=>
{
    return(
        <Card>
            <Link to = {`/menu/${dish.id}`} >
                <CardImg src={dish.image} alt={dish.name}></CardImg>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}



const Menu = (props)=>
{   
    const menu = props.dishes.map((dish) => {
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1 ">
                <RenderMenu dish = {dish}></RenderMenu>
            </div>
        );
    });
    return(
    <div className = "container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className = "col-12">
                Menu
                <hr />
            </div>
        </div>
        <div className="row">
            {menu}
        </div>
    </div>
    );
}

export default Menu;