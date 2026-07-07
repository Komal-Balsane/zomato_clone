import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MyBookings from "./components/MyBookings";
import Navbar from "./components/Navbar";
import RestaurantList from "./components/RestaurantList";
import MenuCarousel from "./components/MenuCarousel";
import Cart from "./components/Cart";
import Reviews from "./components/Reviews";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";

import "./styles.css";


const initialRestaurants = [
  {
    id: 1,
    name: "The Italian Bistro",
    cuisine: "Italian",
    image: "R1.jpg",
    rating: 4.5,
    availableTables: 8,
    totalTables: 8,
    pricePerHour: 500
  },
  {
    id: 2,
    name: "Spice of India",
    cuisine: "Indian",
    image: "R2.jpg",
    rating: 4.2,
    availableTables: 12,
    totalTables: 12,
    pricePerHour: 400
  },
  {
    id: 3,
    name: "Sushi Delight",
    cuisine: "Japanese",
    image: "R3.jpg",
    rating: 4.8,
    availableTables: 5,
    totalTables: 5,
    pricePerHour: 700
  },
  {
    id: 4,
    name: "Taste of India",
    cuisine: "Indian",
    image: "R4.jpg",
    rating: 4.1,
    availableTables: 10,
    totalTables: 10,
    pricePerHour: 450
  },
  {
    id: 5,
    name: "Flavour Cafe",
    cuisine: "Indian",
    image: "R5.jpg",
    rating: 4.3,
    availableTables: 6,
    totalTables: 6,
    pricePerHour: 350
  },
  {
    id: 6,
    name: "Sasarwadi",
    cuisine: "Indian",
    image: "R6.jpeg",
    rating: 4.6,
    availableTables: 15,
    totalTables: 15,
    pricePerHour: 600
  }
];


export default function App() {

  const [cart, setCart] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [restaurants, setRestaurants] = useState(initialRestaurants);

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {

    const user = JSON.parse(
      localStorage.getItem("loggedInUser")
    );

    if(user){
      setIsLoggedIn(true);
    }


    const storedCart =
      JSON.parse(localStorage.getItem("cart")) || [];


    setCart(storedCart);


  }, []);



  // Add item to cart
  const addToCart = (item)=>{

    const newCart=[
      ...cart,
      item
    ];

    setCart(newCart);


    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );


    alert(
      `✅ ${item.name} added to cart successfully!`
    );

  };



  // Remove item from cart
  const removeFromCart=(id)=>{


    const index=cart.findIndex(
      item=>item.id===id
    );


    if(index!==-1){

      const newCart=[...cart];

      newCart.splice(index,1);


      setCart(newCart);


      localStorage.setItem(
        "cart",
        JSON.stringify(newCart)
      );

    }

  };




  // Cancel Booking
  const cancelBooking=(bookingIndex)=>{


    const booking =
      bookings[bookingIndex];


    const updatedRestaurants =
      restaurants.map((restaurant)=>{


        if(
          restaurant.id === booking.restaurantId
        ){

          return{

            ...restaurant,

            availableTables:
              restaurant.availableTables + 1

          };

        }


        return restaurant;

      });



    setRestaurants(updatedRestaurants);



    const updatedBookings =
      bookings.filter(
        (_,index)=>index!==bookingIndex
      );


    setBookings(updatedBookings);



    alert(
      "✅ Booking cancelled successfully!"
    );


  };




  // Logout
  const handleLogout=()=>{

    localStorage.removeItem(
      "loggedInUser"
    );

    setIsLoggedIn(false);

  };




return(

<Router>


<Navbar
cartCount={cart.length}
bookingCount={bookings.length}
/>



<Routes>


<Route

path="/bookings"

element={

<MyBookings

bookings={bookings}

cancelBooking={cancelBooking}

/>

}

/>




<Route

path="/"

element={

isLoggedIn ?

<>


<header className="hero text-center mt-4">

<h1>
Discover the best food & drinks
</h1>

</header>



<RestaurantList

restaurants={restaurants}

setRestaurants={setRestaurants}

bookings={bookings}

setBookings={setBookings}

/>



<MenuCarousel
addToCart={addToCart}
/>



<Reviews />



<Cart

cart={cart}

removeFromCart={removeFromCart}

/>


</>


:

<Navigate to="/login"/>


}

/>




<Route

path="/login"

element={

<Login

setIsLoggedIn={setIsLoggedIn}

/>

}

/>




<Route

path="/signup"

element={<Signup/>}

/>




<Route

path="/dashboard"

element={

isLoggedIn ?

<Dashboard

handleLogout={handleLogout}

/>

:

<Navigate to="/login"/>

}

/>




<Route

path="/contact"

element={<Contact/>}

/>



</Routes>



{
isLoggedIn &&

<footer className="bg-dark text-light text-center p-3 mt-5">

<p>
&copy; 2025 Foodie Adda. All Rights Reserved.
</p>

</footer>

}



</Router>

);

}