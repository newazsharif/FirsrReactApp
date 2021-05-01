import { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/Dish';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Redirect, Route, Switch } from 'react-router';
import Home from './HomeComponent';
import LEADERS from '../shared/Leaders';
import PROMOTIONS from '../shared/Promotions';


class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      leaders : LEADERS,
      promotions : PROMOTIONS
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
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path = "/menu" component = {()=> <Menu dishes={this.state.dishes} />} />
          <Redirect to = "/home" />
        </Switch>
          <Footer></Footer>
      </div>
    );
  }
}

export default Main;
