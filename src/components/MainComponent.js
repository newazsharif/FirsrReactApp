import { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/Dish';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Redirect, Route, Switch } from 'react-router';
import Home from './HomeComponent';


class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
    };
  }
  render(){
    const HomePage = (props)=>{
      return(
        <Home />
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
