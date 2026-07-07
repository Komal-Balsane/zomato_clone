import React from "react";


export default function MyBookings({

  bookings,

  cancelBooking

}) {


return (

<div className="container mt-5">


<h2>
My Bookings
</h2>



{

bookings.length===0 ?


(

<p>
No bookings found.
</p>


)


:


(


<ul className="list-group">


{

bookings.map((booking,index)=>(


<li

key={index}

className="list-group-item d-flex justify-content-between align-items-center"

>


<div>


<strong>
{booking.restaurant}
</strong>


<br />


Time:
{" "}

{booking.time}



</div>





<button

className="btn btn-danger"

onClick={()=>
cancelBooking(index)
}

>


Cancel Booking


</button>



</li>



))


}



</ul>



)



}



</div>


);


}