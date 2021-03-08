import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

import { connect } from 'react-redux'

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={ this.props.addRestaurant } />
        <Restaurants restaurants={ this.props.restaurants } deleteRestaurant={ this.props.deleteRestaurant } />
      </div>
    )
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants })

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: data => dispatch({ type: 'ADD_RESTAURANT', restaurantName: data }),
    deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
