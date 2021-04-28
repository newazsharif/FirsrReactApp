import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle,}  from "reactstrap";

class DishDetails extends Component{

    renderDish(dish){
        console.log(dish);
         
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
    render(){
        return(
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
            </div>
     
        )
    }
    componentDidMount (){
      
    }
}
export default DishDetails;