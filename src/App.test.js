import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// function App() {
  // const [num, setnum] = useState(0)
  // const [message, setmessage] = useState('')
  // const randomise = ()=>{
  //   let randomiseNumbers = Math.round(math.random()*10);
  //   setnum(randomiseNumbers)
  //   console.log(num);
  //   if(num<5){
  //     setmessage('small number')
  //   }else{
  //     setmessage('big number')
  //   }
  // }
  // const gender = 'male';
  // const name = 'kunle';
  // const url = 'https://www.google.com';
  // let num = 2;
  // const myStyle = {
  //   backgroundColor :'blue',
  //   color:'yellow',
  // }
  // const doSomething = ()=>{
  //   alert(`hello `)
  // }
  //  const changeNumber = ()=>{
    //  alert(num);
      //  num = Math.floor(Math.random()*10);
      // };
      // if (num<=5) {
        // <p>small</p>
      // } else {
        // <p>BIG</p>
      // }
  // return (
    // <div>
      
      // <p>{num}</p>
      // {firstName}

// {/* <button onClick={changeNumber}>click me</button>  */}
// {/* <div className='container-fluid'> */}

  // </div>

    // </div>
  // )

//  }
//  <h1 style={myStyle}>Hello {name}</h1>
//       <a href={url}>Google link</a>
//       <h2 className={gender=='male'?'text-success':'text-danger'}>Hello </h2>
//       <button onClick={doSomething}>Click Me</button>

