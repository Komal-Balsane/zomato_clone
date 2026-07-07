import React from "react";
import "./RestaurantList.css";


export default function RestaurantList({

  restaurants,
  setRestaurants,
  bookings,
  setBookings

}) {



const bookTable = (id)=>{


  const bookingTime = prompt(
    "Enter booking time (Example: 7:00 PM)"
  );


  if(!bookingTime) return;



  const restaurant =
    restaurants.find(
      (r)=>r.id===id
    );



  if(
    !restaurant ||
    restaurant.availableTables===0
  ){

    alert(
      "❌ No tables available"
    );

    return;

  }




  const updatedRestaurants =
    restaurants.map((res)=>{


      if(res.id===id){

        return{

          ...res,

          availableTables:
            res.availableTables - 1

        };

      }


      return res;

    });



  setRestaurants(updatedRestaurants);




  setBookings([

    ...bookings,

    {

      restaurantId: restaurant.id,

      restaurant: restaurant.name,

      time: bookingTime

    }

  ]);




  alert(
    `✅ Table booked successfully for ${bookingTime}`
  );


};





return (

<div className="row mt-4">


{
restaurants.map((res)=>(


<div

key={res.id}

className="col-md-4 mb-4"

>


<div className="card restaurant-card">


<img

src={res.image}

className="card-img-top"

alt={res.name}

height="220"

/>



<div className="hover-info">


<h5>
{res.name}
</h5>



<p>
⭐ Rating: {res.rating}
</p>



<p>
🪑 Available Tables:
{" "}
{res.availableTables}
</p>



<p>
📋 Booked Tables:
{" "}
{res.totalTables - res.availableTables}
</p>



<p>
💰 ₹{res.pricePerHour}/Hour
</p>



<p>
🍽 {res.cuisine}
</p>



</div>





<div className="card-body">


<h5 className="card-title">

{res.name}

</h5>




<p>

<strong>
Available:
</strong>

{" "}

{res.availableTables}

</p>





<p>

<strong>
Booked:
</strong>

{" "}

{res.totalTables - res.availableTables}

</p>





<button

className="btn btn-danger w-100"

onClick={()=>
bookTable(res.id)
}

disabled={
res.availableTables===0
}


>


{

res.availableTables>0

?

"Book Table Now"

:

"No Tables Available"

}


</button>



</div>



</div>



</div>



))

}



</div>


);


}