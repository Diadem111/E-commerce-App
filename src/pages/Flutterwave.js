import React from 'react';
import { useFlutterwave, FlutterWaveButton } from 'react-flutterwave';
import styled from "styled-components";
import Layout from '../components/Layout';
import { mobile } from "../components/responsive";
import {getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 60px;
  background-color: #058eff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23058EFF'/%3E%3Cstop offset='1' stop-color='%233E87FF'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: 300;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div1 = styled.div`
  flex: 1;
  min-width: 200px;
  outline: none;
  margin: 10px 0;
  padding: 10px;
  border: none;
  background-color:white;
  border-radius: 7px
  ;
`;

const Button = styled.button`
  width: 150px;
  margin: 0 auto;
  border: none;
  padding: 15px 20px;
  background-color: #222;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  color: white;
  text-align: center;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;
 
export default function App() {
  const [useremail, setuseremail] = useState("");
  const [password, setPassword] = useState("");
  const [details, setdetails] = useState("");
  const [lastname, setlastname] = useState("");
  const [itemsList, setitemsList] = useState();
  const [delivery, setdelivery] = useState();
  const [Total, setTotal] = useState("");
  const userInfo = useSelector((state) => {
    return state.users.usersArray;
  });

  useEffect(() => {

  const items =  JSON.parse(localStorage.getItem('allPrice'));
   console.log(items);
   setitemsList(items);
   setdelivery(items / 3);
   let aa = items / 3 ;
   setTotal(items + aa);
    const auth = getAuth();
   onAuthStateChanged(auth, (user) => {
    //  console.log(user.email);
    //  console.log(useremail);    
     const usersArr = userInfo.findIndex((item) => item.email);
     setdetails(userInfo[usersArr].firstname);
     setlastname(userInfo[usersArr].lastname);
     console.log(userInfo[usersArr].email);
     setuseremail(userInfo[usersArr].email);
     console.log(usersArr);
   })
}, [])




  let image = "../../public/images/logo-removebg-preview.png";
  const config = {
    public_key: 'FLWPUBK_TEST-13237bdf449d4c52c8e09233ad96f863-X',
    tx_ref: Date.now(),
    amount: `${Total}`,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email:`${useremail}`,
      phonenumber:"09069458371",
      name:"yusuff",
    },
    customizations: {
      title: 'Dolwithneybright store',
      description: 'Payment for items in cart',
      logo: {image},
    },
  };
 
  const handleFlutterPayment = useFlutterwave(config);
 
  const fwConfig = {
    ...config,
    text: 'PROCEED TO NEXT STEP',
    callback: (response) => {
      console.log(response);
    },
    onClose: () => {},
  };
 
  return (
    <Container>
    <Wrapper>
      <Title>Make your payment</Title>
      <Div>
        <Div1>Subtotal : #{itemsList} </Div1>
        <Div1>Delivery fee : #{delivery} </Div1>
        <Button onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
            },
            onClose: () => {},
          });
        }}>
          TOTAL : # {Total}
        </Button>
        <FlutterWaveButton {...fwConfig} className="btn btn-primary" />

      </Div>
    </Wrapper>
  </Container>


    
  );
}