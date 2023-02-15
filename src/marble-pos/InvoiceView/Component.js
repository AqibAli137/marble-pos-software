import React from 'react'
import marbleheader from "../../assets/Bills/Fauget.png"
import Headnumbers from "../../assets/Bills/Add a heading.png"

function Component() {
  return (
    <>
 
    <div class="container">
  <div class="card">
  <div className='row'>
    <img src={marbleheader} alt="" style={{width:"100%"}} />
    </div>
<div class="card-body">

<div class="row mb-4">
<div class="col-sm-6">
<h6 class="mb-3">From:</h6>
<div>
<strong>Webz Poland</strong>
</div>
<div>Madalinskiego 8</div>
<div>71-101 Szczecin, Poland</div>
<div>Phone: +48 444 666 3333</div>
</div>

<div class="col-sm-6">
<h6 class="mb-3">To:</h6>
<div>
<strong>Bob Mart</strong>
</div>
<div>Attn: Daniel Marek</div>
<div>43-190 Mikolow, Poland</div>
<div>Phone: +48 123 456 789</div>
</div>



</div>

<div class="table-responsive-sm">
<table class="table table-striped">
<thead>
<tr>
<th>Item</th>
<th>Description</th>

<th class="right">Unit Cost</th>
  <th class="center">Qty</th>
<th class="right">Total</th>
</tr>
</thead>
<tbody>
  {
    ['','','','',''].map(e=>(
      <tr>
<td class="left strong">Origin </td>
<td class="left">Extended License</td>

<td class="right">$999,00</td>
  <td class="center">1</td>
<td class="right">$999,00</td>
</tr>
    ))
  }
</tbody>
</table>
</div>
<div class="row">
<div class="col-lg-4 col-sm-5">

</div>

<div class="col-lg-4 col-sm-5 ml-auto">
<table class="table table-clear">
<tbody>
{/* <tr>
<td class="left">
<strong>Subtotal</strong>
</td>
<td class="right">$8.497,00</td>
</tr>
<tr>
<td class="left">
<strong>Discount (20%)</strong>
</td>
<td class="right">$1,699,40</td>
</tr>
<tr>
<td class="left">
 <strong>VAT (10%)</strong>
</td>
<td class="right">$679,76</td>
</tr> */}
<tr>
<td class="left">
<strong>Total</strong>
</td>
<td class="right">
<strong>$7.477,36</strong>
</td>
</tr>
</tbody>
</table>

</div>

</div>

</div>
<div className='row'>
    <img src={Headnumbers} alt="" style={{width:"100%"}} />
    </div>
</div>
</div>

   
    
    </>
  )
}

export default Component