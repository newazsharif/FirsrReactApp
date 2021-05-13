import React from "react";
import { Link } from "react-router-dom";
import { CardImg, CardImgOverlay,Card, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { baseURL } from "../shared/baseURL";
import { Loader } from "./LoaderComponent";
  
const RenderMenu = ({dish})=>
{
    return(
        <Card>
            <Link to = {`/menu/${dish.id}`} >
                <CardImg src={baseURL + dish.image} alt={dish.name}></CardImg>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}



const Menu = (props)=>
{ 
    let menu = '';
    debugger;
    if(props.isLoading){
        menu = 
        <div className="col-12">
           <div className="d-flex justify-content-center"><Loader /></div>
        </div>
    }
    else if (props.errMess != null) {
        menu = 
        <div className="col-12"> 
            <center>
                <h3 className="text-danger">{props.errMess}</h3>
            </center>
        </div>
    }
    else 
    {
        menu =
        props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1 ">
                    <RenderMenu dish = {dish}></RenderMenu>
                </div>
            );
        });
    }
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