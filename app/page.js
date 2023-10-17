import React from "react"
import Image from "next/image"
export default function Home(){

  return(

    <>

    

<div className="main"


>


  <div className="dashbord">
<h1>Dashbord</h1>
<li className="md">Dashboard</li>
 <ul>
 <li>Product  <span>&gt;</span></li>
 <li>Customer<span>&gt;</span></li>
<li>Income  <span>&gt;</span></li>
<li>Pramote  <span>&gt;</span></li>

<li>  Help           <span>&gt;</span> </li>
 </ul>
 <div className="ld">
<Image className="mt-35 rounded-full" src="/nina.png" width={50} height={50}/>
<h2 className="my-59">Evano</h2>
<p>Project manager</p>
<span></span>


 </div>
 
  </div>

  <div className="rdiv">

  <div className="up">
  <h2>Hello Shahruk &#128075; </h2>

</div>
<div className="inp">
<input className="yin"  type="text" placeholder="Search"></input>
</div>

<div className="main2">
 <div className="Earn">
  <img src=""></img>

    <p>Earning</p>
    <h1>$198k</h1>
    <p><span>37.8% this month</span>
  </p>
</div>
<div className="Earn">
  <img src=""></img>

    <p>orders</p>
    <h1>$2.4k</h1>
    <p><span>2% this month</span>
  </p>
</div><div className="Earn">
  <img src=""></img>


    <p>balance</p>
    <h1>$2.4k</h1>
    <p><span>2% this month</span>
  </p>
</div><div className="Earn">
  <img src=""></img>

 
    <p>Total </p>
    <h1>$198k</h1>
    <p><span>37.8% this month</span>
  </p>
</div></div>




  </div>
  <div className="m3">


<div className="left">
<div className="eee">
<h1>Overview </h1>
<p>MOnthly Earning</p>

<p>Quaterterly ^</p>

</div>
<span> jan</span>
<span>Feb</span><span>march</span><span>april</span><span>may</span><span>jun</span><span>july</span><span>aug</span><span>sept</span><span>Oct</span>
<span>Nov</span><span>Des</span>
<div className="sp">

</div>
<div className="ri">
<div className="sp">

</div>
<div className="sp">

</div><div className="sp">

</div><div className="sp">

</div><div className="sp">

</div><div className="op bg-purple-700">

</div><div className="sp">

</div><div className="sp">

</div><div className="sp">

</div><div className="sp">

</div>
</div>
</div>

<div className="right">

<h1>Customers</h1>
<p>Customers that buy products</p>
<div className="gola">
<div className="pgola">
<div className="cgola">
  <h1>65%</h1>
  <p>Total New Customer</p>
</div>
</div>
</div>

</div>

</div>
<div className="last">

<div className="ll">

<h1 className="font-bold">Product sell</h1>
<p>Product Name</p>
<div className="uuuu">
<Image className="yyy mt-35 rounded-full" src="/Project1.png" width={50} height={50}/>
<h1 className="font-bold">Abstract 3d</h1>

<p>lorem hjg vj hh  h  h k hkhk</p>



<Image className="iii mt-35 rounded-full" src="/project2.png" width={50} height={50}/>
<h1 className="font-bold">Abstract 3d</h1>
<p>lorem hjg vj hh  h  h k hkhk</p>
</div>
</div>
<div className="lr">


  <div className="1">
    <input placeholder="search"></input>
<p>stocks</p>
<h5>32 in stock</h5>
<h5>32 in stock</h5>

  </div>
  <div className="m22">
  
<p>price</p>
<h5 className="font-bold"> $ 45.00 </h5>
<h5 className="font-bold"> $  45.99 </h5>

  </div>
  <div className="1">
  <span>Last 30 days</span>
<p>Total sales</p>
<h5>20</h5>
<h5>20</h5>

  </div>
  

  
</div>

</div>
</div>
    </>
  )
}