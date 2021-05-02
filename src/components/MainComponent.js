import { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/Dish';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Redirect, Route, Switch } from 'react-router';
import Home from './HomeComponent';
import LEADERS from '../shared/Leaders';
import PROMOTIONS from '../shared/Promotions';
import DishDetails from './DishDetailsComponent';
import COMMENTS from '../shared/Comments';


class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      leaders : LEADERS,
      promotions : PROMOTIONS,
      comments : COMMENTS
    };
  }
  render(){
    const HomePage = (props)=>{
      return(
        <Home dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion = {this.state.promotions.filter((promotion) => promotion.featured)[0]}
        leader = {this.state.leaders.filter((leader) => leader.featured)[0]} />
      )
    }

    const DishDetailPage = ({match}) => {
      return(
        <DishDetails dish = {this.state.dishes.filter((dish) => dish.id === parseInt(match.params.id))[0]} 
        comment = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.id))} />
      );
    }
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path = "/menu" component = {()=> <Menu dishes={this.state.dishes} />} />
          <Route exact path = "/menu/:id" component = {DishDetailPage} />
          <Route path = "/contactus" component = {Contact} />
          <Redirect to = "/home" />
        </Switch>
          <Footer></Footer>
      </div>
    );
  }
}

export default Main;
