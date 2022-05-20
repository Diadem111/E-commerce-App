 import React from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'

 
 export default function CartPage() {
  //  console.log(items);
  //  let ListCart = [];
  //  let TotalCart = 0;
  //  object.keys(items.Carts).forEach(function(item){
  //   TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
  //   ListCart.push(items.Carts[item]);
  //  })
  //  return (
  //    <Layout>
  //        <div className="row">
  //           <div className="col-md-12">
  //           <table className="table">
  //               <thead>
  //                   <tr>
  //                       <th></th>
  //                       <th>Name</th>
  //                       <th>Image</th>
  //                       <th>Price</th>
  //                       <th>Quantity</th>
  //                       <th>Total Price</th>
  //                   </tr>
  //               </thead>
  //               <tbody>
  //               {
  //                   ListCart.map((item,key)=>{
  //                       return(
  //                           <tr key={key}>    
  //                           <td><i className="badge badge-danger" onClick={()=>DeleteCart(key)}>X</i></td>
  //                           <td>{item.name}</td>
  //                           <td><img src={item.image} style={{width:'100px',height:'80px'}}/></td>
  //                           <td>{item.price} $</td>
  //                           <td>
  //                                   <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</span>
  //                                   <span className="btn btn-info">{item.quantity}</span>
  //                                   <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</span>
  //                           </td>
  //                           <td>{ TotalPrice(item.price,item.quantity)} $</td>
  //                       </tr>
  //                       )
  //                   })
                        
  //               }
  //               <tr>
  //                   <td colSpan="5">Total Carts</td>
  //                   <td></td>
  //               </tr>
  //               </tbody>
              
  //           </table>
  //           </div>
  //       </div>     </Layout>
  //  )
 }
 