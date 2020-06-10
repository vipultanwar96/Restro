import React,{ Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Redirect, Route} from 'react-router-dom';

const DishWithId = (props) => {
    const  {match, dishes, comments} = props
    return(
        <DishDetail dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
  };

class Main extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            dishes : DISHES,
            comments : COMMENTS,
            promotions : PROMOTIONS,
            leaders : LEADERS,
            selectedDish : null
        }
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
      }

    render()
    {

        const HomePage = () =>
        {
            return(
                <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
            );
        }
        return(
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href='/'>
                            Khana-e-Khazana
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route exact path='/contactus' component={Contact} />} />
                    <Route exact path="/menu/:dishId" component={() => <DishWithId dishes={this.state.dishes} comments={this.state.comments} />} />
                    <Redirect to="/home" />
                </Switch>
                <Menu dishes={this.state.dishes} onclick={(dishesId) => this.onDishSelect(dishesId)}/>
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        );
    }
}

export default Main;