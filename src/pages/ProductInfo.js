import React from 'react';
import Layout from '../components/Layout';
import { getDoc, doc } from 'firebase/firestore';
import db from '../fireConfig';
import { fileProduct } from '../fileProduct';
import Products from '../components/Products';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skeleton from 'react-loading-skeleton';
// import { addToCart } from '../reducers/counter';
// import styled from "styled-components";
// import {Add,Remove} from "@material-ui/icons"
import {addProduct,deleteProduct,increaseProduct} from "../reducers/cartRedux"
import {Add,AddShoppingCartSharp,Remove, RemoveShoppingCartRounded} from "@material-ui/icons"


// const Container = styled.div``;

// const AmountContainer = styled.div`
//   display:flex;
//   align-items:center;
//   font-weight:700;
// `
export default function ProductInfo() {
	// const dispatchF = useDispatch();
	 const count = useSelector((state) => {
	 	return{
 		_products: state._todoProduct
		 	}
	   });
	const dispatch = useDispatch();

	// const AddDispatch = (dispatch) => {
	// 	return{
    //      AddCart:product=>dispatch(AddCart(product))
		
	// 	}
	// 	console.log(AddCart);
	// }
		// const addProduct = (product) => {
	// 	dispatch(increment(product))
	// }
	// console.log(count);
	const [ product, setproduct ] = useState([]);
	const [loading, setloading] = useState(false);
    const [show, setshow] = useState('ADD TO CART');
	const [productFilter,setproductFilter] = useState();
	const [quantity,setQuantity] = useState();
	const productId = product;
	const [buttonAdd, setbuttonAdd] = useState(true)
	const [buttonSub , setbuttonSub] = useState(true)
	
	// console.log(indexof(productId));
	const params = useParams();
	useEffect(() => {
		getData();
	}, []);
	async function getData() {
		setloading(true);
		try {
			const productItems = await getDoc(doc(db, 'products', params.productid));
			// setproduct(productItem.data());
			console.log(productItems.data())
			let id = productItems.id
			let productItem = {...productItems.data(), id:id}
			setproduct(productItem)
			console.log(productItem)
			// this.handleCart(productItem)
			// setproductFilter(product[0])
			// console.log(indexOf(product));
			setloading(false);
		} catch (error) {
			console.log(error.message);
		} 
	}
	const cartQuant = useSelector((state) => {
		return state.cart.userProduct;
	  });
	  const incrementIcon = (product)=>{
		dispatch(increaseProduct(product))
		const itemIndex =cartQuant.findIndex((item) => item.id === product.id)
	   //   console.log(itemIndex);;
		 if(itemIndex >= 0){
		   //  cartQuant[itemIndex].cartQuantity +=1;
		   // itemNo1 +=1
		 setQuantity(cartQuant[itemIndex].cartQuantity)
		 console.log(cartQuant[itemIndex].cartQuantity);
		 console.log(cartQuant[itemIndex]);
		 
	  }
	}

	 const decrementIcon = (product)=>{
		dispatch(deleteProduct(product))
			const itemIndexFor =cartQuant.findIndex((item) => item.id === product.id);
			if(itemIndexFor >=0){
			setQuantity(cartQuant[itemIndexFor].cartQuantity)
		      console.log(cartQuant[itemIndexFor].cartQuantity );
		    console.log(cartQuant);
			if(cartQuant[itemIndexFor].cartQuantity === 0){
				setbuttonAdd(true);
			}
	  }
	}
			// quantity > 1 && setQuantity(quantity -1)
		
		// const itemIndexFor =cartQuant.findIndex((item) => item.id === product.id)
				
			// setQuantity(quantity - 1)
		
	
 const handleCart = (product)=>{
	//  console.log(product)
    dispatch(addProduct(product))
	console.log("i got here");
	console.log(cartQuant);
	const itemIndexJ=cartQuant.findIndex((item) => item.id === product.id);
	if(itemIndexJ >=0){
		console.log(itemIndexJ);
		setQuantity(cartQuant[itemIndexJ].cartQuantity)
	}
	setbuttonAdd(false);
	}
	

	const Loading = () => {
		return (
			<>
			<div className="col-md-6">
             <Skeleton height={400}/>
			</div>
			<div className="col-md-6" style={{lineHeight:2}}>
             <Skeleton height={50} width={300}/>
			 <Skeleton height={75} /><Skeleton height={25} width={150}/>
			 <Skeleton height={50} />
			 <Skeleton height={150} />
			 <Skeleton height={50} width="100" style={{marginLeft:6}} />
			</div>
			</>
		)
	}
     

	
const ShowProduct = () => {
		return (
			<>
			<div className="col-md-6">
				<img src={product.image} alt={product.title} width="200px" height="200px"/>
			</div>
			<div className="col-md-6">
				<h4 className="text-uppercase text-black-50">
					{product.category}
					</h4>
					<h1 className='display-5'>{product.title}</h1>
					{/* <p className='lead fw-bolder'>
						Rating {product.rating && product.rating.rate}
						<i className='fw fa-star'></i>
					</p> */}
					<h3 className='display-6 fw-bold my-4'>
						${product.price}
					</h3>
					  <p className='lead'>{product.description}</p>
					  <p className='lead'>{product.id}</p>
					{buttonAdd ? 
					<button className='btn btn-outline-dark px-4 py-2'  onClick={()=>handleCart(product)}>ADD TO CART</button> :
					<section className='container d-flex mb-4'>
							<AddShoppingCartSharp onClick={() => incrementIcon(product)} />
						      <div className="mx-2">{quantity} item(s) added</div>
						<RemoveShoppingCartRounded onClick={() => decrementIcon(product)}/>

					</section>
				}
					<Link to="/cart" className='btn btn-dark ms-2 px-3 py-2 '>Go to Cart</Link>
					
					{/* <div className='flex'>
						<button className='btn btn-primary' onClick={() => dispatch(decrement())}>-</button>
						{count.count}
						<button className='btn btn-primary mx-2' onClick={() => dispatch(increment())}>+</button>
					</div> */}
				</div>
			        
			 {/* <div style={{height:"20px"}}></div>
			<div className=" rounded bg-success bigDiv">
				<div className="row justify-content-center">
					<div className="col-md-8">
						{product && (
							<div className='d-flex'>
								<div>
								<img src={product.image} alt="" className="product-infoImg" />
								</div>

								<main>
									<div className='productH'>
									<h4>{product.title}</h4>
									<section className='d-flex'>
									<FontAwesomeIcon icon={faStar} className="star"/>
									<FontAwesomeIcon icon={faStar} className="star"/>
									<FontAwesomeIcon icon={faStar} className="star"/>
									<FontAwesomeIcon icon={faStar} className="star"/>
									<FontAwesomeIcon icon={faStar} className="star1"/>
       <Link to={'/cart'} className='mx-2  productLink'><small>(75 verified ratings)</small></Link>
            						</section>

				<div className="delivery ">
				<small className='small'>Free delivery*</small>	
				</div>
				<hr />			
				<section>
					<h1>{product.price}</h1>
					<small>+ shipping fee from your location</small>
				</section>

									</div>
								</main> */}
								
								{/* <hr />
								<p>{product.description}</p>
								<div className="d-flex justify-content-end my-3">
									<button className="btn btn-primary" onClick={() => dispatch(increment())}>
										Add to cart
									</button>
								</div> */}
							{/* </div>
						)}
					</div>
				</div>
			</div> */}
		

			</>
		)
	
	}
	


	return (
		<Layout>
			<div className='container py-5'>
				<div className="row py-4">
				{loading ? <Loading/> :
			<ShowProduct/>
			}
				</div>
			</div>
			
					</Layout>
	);
}

