import { Component } from "react";
import { CardImg, CardImgOverlay,Card, CardTitle } from "reactstrap";

class Menu extends Component{
    constructor(props){
        super(props);
        
        console.log("constructor inveked");
    }

componentDidMount (){
    console.log("component did mount inveked");
}

    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1 ">
                        <Card onClick={() => this.props.onClick(dish.id)}>
                            <CardImg src={dish.image} alt={dish.name}></CardImg>
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                </div>
            )
        });
        console.log("render invoked");
        return(
            <div className = "container">
                <div className = "row">
                    {menu}
                </div>
            </div>
        )
    }
}

export default Menu;