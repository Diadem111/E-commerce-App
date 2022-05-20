import { Add, ArrowBack, Remove,DeleteForeverSharp} from "@material-ui/icons";
// import { useSelector } from "react-redux";
import styled from "styled-components";
import Layout from '../components/Layout';
import { mobile } from "../components/responsive";
import { getDoc, doc } from 'firebase/firestore';
import db from '../fireConfig';
// import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
// import { userRequest } from "../requestMethods";
import { Link, useNavigate,useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {addProduct,deleteProduct,increaseProduct,removeProduct, price} from "../reducers/cartRedux";
import {getAuth,onAuthStateChanged } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
import login from "../pages/Login";
import Register from "../pages/Register"



// const KEY =
//   "pk_test_51Kl9JGGwmJAU90b6yijylip5V6Zs4z9o10KTCh6aH8rexaNAVCgkBpGhiISZAun8cZyR3Vq39a66WVGedHLE01CC00UObYlNQS";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
   ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
 const TopTexts = styled.div`
   ${mobile({ display: "none" })}
 `;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const ProductDelete = styled.div`
    flex:2;
  display: flex;
  width:100px;
  color:blue;
  margin-top:10px;

`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:10px;
  backgorund-color:red;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 70px;
  height:70px;
  margin-top:20px;
  margin-left:20px
`;
const ButtonFilled = styled.button`
   margin-top: 10px;
   margin-bottom:0px;
   padding:1px 5px;
   border-radius:5px;
  background-color:blue;
  color: white;
  cursor: pointer;
  font-size:18px;
  font-weight: 700;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: none;`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom:0px;
`;

const ProductAmount = styled.div`
  font-size:16px;
  margin:10px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight:bold;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h6`
  font-weight:bolder;
`;

const SummaryItem = styled.div`
  margin:10px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItem1 = styled.div`
  margin:10px 0px;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "100"};
  font-size: ${(props) => props.type === "total" && "16px"};
`;

const SummaryItemText = styled.h2``;

const SummaryItemPrice = styled.h2``;

const Button = styled.button`
  padding: 5px 20px;
  border-radius:10px;
  background-color:blue;
  color: white;
  cursor: pointer;
  font-size:16px;
  font-weight: 700;
  border: none;
`;

const Cart = () => {
  const cart = useSelector((state) => {
    return state.cart;
  });

 
  const [stripeToken, setStripeToken] = useState(null);
  const [ product, setproduct ] = useState([]);
  const [quantity,setQuantity] = useState();
  const [total, settotal] = useState()
  const [minusData, setminusData] = useState(true);
  const [userHandle ,setuserHandle] = useState(false);
  const [allPrice, setallPrice] = useState([]);
  const [arrayAll , setarrayAll] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let aaa;
  const cartQuant = useSelector((state) => {
		return state.cart.userProduct;
    },
    );

  
  // useEffect start here
  const params = useParams();
	useEffect(() => {
   handleTotal();
		getData();

    // Auth start here
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if(user){
        setuserHandle(true);
      }
      
    })

	}, []);

  const handleTotal = () =>{
    let tt = cart.userProduct.filter(res => res.price)
    let tot = new Array()
    for (let index = 0; index < tt.length; index++) {
      tot = [...tot, tt[index].price * tt[index].cartQuantity];
      
    }
    let gettot
    console.log(tot)
    if(tot.length <=0){
    settotal(0)
    // console.log(gettot);
    }else{
      gettot = tot.reduce(function(x,y){

        return x+y
    })
    settotal(gettot)
    console.log(gettot);
    localStorage.allPrice = JSON.stringify(gettot)
       }
    
  }

	async function getData() {
		// setloading(true);
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
			// setloading(false);
		} catch (error) {
			console.log(error.message);
		} 
	}
	
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
      if(cartQuant[itemIndexFor].cartQuantity === 1){
          alert('one item remaining')
      }
		    console.log(cartQuant[itemIndexFor].cartQuantity );
		    console.log(cartQuant);
      }
}

const  removeProductIcon= (product)=>{
  // let tot = cart.products.filter((item)=> item.id != product.id);
  // cart.products = tot;
  // console.log(cart.products);
  // console.log(tot)

  dispatch( removeProduct(product))
  console.log("i don remove ham");
  console.log(cart.products)


}

   const checkUser = () => {
     if (userHandle) {
      navigate(`/login`)
     }else{
      navigate(`/Register`)
     }
   }

  // const onToken = (token) => {
  //   setStripeToken(token);
  // };
  // console.log(stripeToken);

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await userRequest.post("/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: 500,
  //       });

  //       navigate("/success", { state: res.data });
  //     } catch (error) {}
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, cart.total, navigate]);

  return (
    <Container>
      <Layout />
      <Wrapper>
        <Title>CART {cart.userProduct.length}</Title>
        <Top>
        <Link to="/"><TopButton><ArrowBack style={{ fontSize: 16, textAlign: "center" }}/> CONTINUE SHOPPING</TopButton></Link>
        </Top>
        <Bottom>
          <Info>
            
            {cart ? cart.userProduct.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b>{product.title}</b>                   
                         </ProductName>
                    <ProductId>
                      <small>Seller:Jumia</small>
                    </ProductId>
                    <ProductDelete>
                      <DeleteForeverSharp onClick={() =>  removeProductIcon(product)}/>
                      <p className="mx-4">Remove</p>
                    </ProductDelete>
                    {/* <ProductColor color={product.id} /> */}
                    <ProductSize>
                      {/* <b>Size:</b> {product.size} */}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                 <ProductPrice>
                    # {product.price * product.cartQuantity}
                  </ProductPrice> 
                  <ProductAmountContainer>
                    <ButtonFilled>
                    <Add  onClick={() => incrementIcon(product)}/>
                    </ButtonFilled>
                    <ProductAmount>{product.cartQuantity}</ProductAmount>
                   <ButtonFilled>
                   <Remove onClick={() => decrementIcon(product)}/>
                   </ButtonFilled>
                    </ProductAmountContainer>
                </PriceDetail>
              </Product>
            )) : <div></div>
            }
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>CART SUMMARY</SummaryTitle>
            <hr />
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice># {total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <small>Delivery fee not included</small>
              {/* <SummaryItemText>Delivery fee not included</SummaryItemText> */}
              {/* <SummaryItemPrice>$ {total}</SummaryItemPrice> */}
            </SummaryItem>
            <Button onClick={checkUser}>CHECKOUT  #{total}</Button>
            <SummaryItem1 type="total" >
                  <p>
                    <h2>Returns are easy</h2>
                       Free return within 15 days for Official Store items and 7 days for other eligible items See more</p>
            </SummaryItem1>
          </Summary>

        </Bottom> 
      </Wrapper>
      {/* <Footer /> */}
    </Container>
  );
};

export default Cart;
