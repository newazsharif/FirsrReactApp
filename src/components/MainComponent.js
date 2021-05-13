import { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import Home from './HomeComponent';
import DishDetails from './DishDetailsComponent';
import About from './AboutUsComponent';
import { connect } from 'react-redux';
import {addComment, fetchComments, fetchDishes,fetchPromos} from '../redux/ActionCreators'
import { actions } from 'react-redux-form';

//map redux state values with props.
const mapStateToProps = state => {
  return {
    dishes : state.dishes,
    leaders : state.leaders,
    promotions : state.promotions,
    comments : state.comments
  };
}

//Dispath action to redux store.
const mapDispatchToProps = dispatch => ({
  addComment : (dishId,rating,comment,author) => dispatch(addComment(dishId,rating,comment,author)),
  fetchDishes : ()=>{dispatch(fetchDishes())},
  resetFeedBackForm : ()=>{dispatch(actions.reset('feedback'))},
  fetchComments : ()=> dispatch(fetchComments()),
  fetchPromos : ()=> dispatch(fetchPromos())
});

//same as above code
// const mapDispatchToProps = function(dispatch){
//   return(
//     {
//         addComment : (dishId,rating,comment,author) => dispatch(addComment(dishId,rating,comment,author)),
//         fetchDishes : ()=>{dispatch(fetchDishes())},
//         resetFeedBackForm : ()=>{dispatch(actions.reset('feedback'))}
//     }
//   )
// }

class Main extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  
  render(){
    const HomePage = ()=>{
      return(
        <Home dish = {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading = {this.props.dishes.isLoading}
        dishesErrMess = {this.props.dishes.errMess}
        promotion = {this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
        promosLoading = {this.props.promotions.isLoading}
        promosErrMess = {this.props.promotions.errMess}
        leader = {this.props.leaders.filter((leader) => leader.featured)[0]} />
      )
    }

    const DishDetailPage = ({match}) => {
      return(
        <DishDetails dish = {this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.id))[0]} 
        comment = {this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.id))} 
        addComment = {this.props.addComment}
        isLoading = {this.props.dishes.isLoading}
        errMess = {this.props.dishes.errMess}/>
      );
    }
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path = "/menu" component = {()=> <Menu dishes={this.props.dishes.dishes} isLoading = {this.props.dishes.isLoading} errMess = {this.props.dishes.errMess} />} />
          <Route exact path = "/menu/:id" component = {DishDetailPage} />
          <Route path = "/aboutus" component = { ()=> <About leaders = {this.props.leaders} />} />
          <Route path = "/contactus" component = { ()=> <Contact resetFeedBackForm resetFeedBackForm = {this.props.resetFeedBackForm} /> } />
          <Redirect to = "/home" />
        </Switch>
          <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
