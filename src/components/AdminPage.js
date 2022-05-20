import React, { useRef } from 'react';
import { faXmark, faGripHorizontal, faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { colRef } from '../fireConfig';
import { addDoc, collection,deleteDoc,doc} from 'firebase/firestore';
import { getStorage, ref, uploadString, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../fireConfig';
import db from '../fireConfig';
import DeleteProduct from './DeleteProduct';

export default function AdminPage() {
	// const [users, setusers] = useState([])
	const [ category, setcategory ] = useState('');
	const [ title, settitle ] = useState('');
	const [ price, setprice ] = useState('');
	const [ quantity, setquantity ] = useState('');
	const [ description, setdescription ] = useState('');
	const [ imageToPost, setimageToPost ] = useState('');
	const [ allProduct, setallProduct ] = useState([]);
	const [productId, setproductId] = useState('')
	const filepickerRef = useRef(null);
	const [ photo, setphoto ] = useState(null);
	const [ imgUrl, setimgUrl ] = useState('');
	const [ progress, setprogress ] = useState(0);
	let imgString = '';

	const [ details, setDetails ] = useState({
		category: '',
		name: '',
		productPrice: '',
		productQuantity: ''
	});
	useEffect(() => {
		//  console.log(category);
		//  console.log(imageToPost);
	}, []);
	// collection Ref
	const colRef = collection(db, 'products');

	// storage start here

	const handleUpload = (e) => {
		const photoDate = e.target.files[0];
		setphoto(photoDate);
		console.log('images', photo);

		//  const storageFor = getStorage()
		const refMount = ref(storage, `images/${photoDate.name}`);
		console.log(refMount);

		const uploadTask = uploadBytesResumable(refMount, photoDate);
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
				setprogress(progress);
			},
			(error) => {
				alert(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setimgUrl(downloadURL);
					console.log(imgUrl);
				});
			}
		);
		console.log('image', photo);
	};

	const uploadDocument = (newStudent) => {
		// e.preventDefault()
		setallProduct(() => {
			let newAllStudents = [ ...allProduct, newStudent ];
			//   localStorage.allStudents = JSON.stringify(newAllStudents)
			return newAllStudents;
		});
		console.log(allProduct);
		//  console.log(imageToPost);

		addDoc(colRef, {
			category: category,
			title: title,
			price: price,
			quantity: quantity,
			description: description,
			image: imgUrl
		}).then(() => {
			category('')
		});
	};

	// delete document
	const deleteProductForm =  () =>{
		console.log('i got here')
        const docRef = doc(db,"products",productId)
        deleteDoc(docRef)
        .then(() => {
			console.log(allProduct);
			// deleteProductForm.reset()
			
		        })
    }

	// another fuct

	// useEffect start here

	// const sideBar = document.querySelector('aside')
	// const menuBtn = document.querySelector('#menuBtn')
	// const closeBtn = document.querySelector('#closeBtn')
	// const refClose = useRef(null);
	// window.addEventListener('click', () => {
	//     sideBar.style.display = 'block';
	// })
	// window.addEventListener('click', ()=>{
	//     sideBar.style.display = 'none'
	// })
	let fixed = window.location.origin + '/images/logo-removebg-preview.png';
	let fixedImg = window.location.origin + '/images/dolapo1.png';

	return (
		<header>
			<div className="containerType">
				<div className="containerFor">
					<aside className="sideBarTo">
						<div className="topNotch">
							<div className="logo">
								<img src={fixed} alt="" />
								<h2>
									Dia <span className="text-danger">dem</span>
								</h2>
								<div className="close" id="closeBtn">
									<FontAwesomeIcon icon={faXmark} />
								</div>
							</div>
						</div>
						<div className="sidebar">
							<Link to={'/'} className="linkType">
								<span>
									<FontAwesomeIcon icon={faGripHorizontal} />
								</span>
								<h3>Dashboard</h3>
							</Link>
							<Link to={'/'} className="linkType" id="active">
								<span>
									<FontAwesomeIcon icon={faGripHorizontal} />
								</span>
								<h3>Add products</h3>
							</Link>
							<Link to={'/delete-product '} className="linkType">
								<span>
									<FontAwesomeIcon icon={faGripHorizontal} />
								</span>
								<h3>Delete Products</h3>
							</Link>
							<Link to={'/'} className="linkType">
								<span>
									<FontAwesomeIcon icon={faGripHorizontal} />
								</span>
								<h3>Staffs</h3>
							</Link>
							<Link to={'/'} className="linkType">
								<span>
									<FontAwesomeIcon icon={faGripHorizontal} />
								</span>
								<h3>Analyticals</h3>
							</Link>
							<Link to={'/'} className="linkType">
								<span>
									<FontAwesomeIcon icon={faGripHorizontal} />
								</span>
								<h3>products</h3>
							</Link>
							<Link to={'/'} className="linkType">
								<span>
									<FontAwesomeIcon icon={faGripHorizontal} />
								</span>
								<h1>Logout</h1>
							</Link>
						</div>
					</aside>
					{/* END OF ASIDE */}
					<main>
						<div className=" container-fluid row">
							<div className="col-8 border">
								<h1 className="text-center">Add a Product</h1>
								{/* <form action="" class="add"> */}
								<input
									type="text"
									placeholder="Product Category"
									className="my-2 form-control"
									name="category"
									value={category}
									onChange={(e) => setcategory(e.target.value)}
									required
								/>
								<input
									type="text"
									placeholder="Product title"
									className="my-2 form-control"
									name="title"
									value={title}
									onChange={(e) => settitle(e.target.value)}
									required
								/>
								<input
									type="text"
									placeholder="Product Price"
									className="my-2 form-control"
									name="price"
									value={price}
									onChange={(e) => setprice(e.target.value)}
									required
								/>
								<input
									type="text"
									placeholder="Product quantity"
									className="my-2 form-control"
									name="quantity"
									value={quantity}
									onChange={(e) => setquantity(e.target.value)}
									required
								/>
								<input
									type="text"
									placeholder="Product description"
									className="my-2 form-control"
									name="description"
									value={description}
									onChange={(e) => setdescription(e.target.value)}
									required
								/>
								<input
									type="file"
									placeholder="Product image"
									className="my-2 form-control"
									name="description"
									onChange={handleUpload}
									required
								/>
								<button
									className="btn btn-info w-100"
									onClick={() =>
										uploadDocument({ category, title, price, quantity, description, imageToPost })}
								>
									Upload
								</button>
                                
                                {/* the percentage side */}
                                <progress value={progress} max="100"/>

								{/* delete */}
								<div className='delete'>
        <label for="id">Document Id</label>
        <hr />
        <input type="text" name="" id="" value={productId}
									onChange={(e) => setproductId(e.target.value)}
									required />
                                    <hr />
        <button className='btn btn-primary' onClick={deleteProductForm}>Delete a product</button>
    </div>
			

                                {/* End of img */}
							</div>
							<div className="col-4 " id="right">
								<div className="top">
									<button id="menuBtn">
										<span>
											<FontAwesomeIcon icon={faBars} />
										</span>
									</button>
									<div className="" id="theme-toggler">
										<span id="activeId">
											{' '}
											<FontAwesomeIcon icon={faSun} />{' '}
										</span>
										<span>
											{' '}
											<FontAwesomeIcon icon={faMoon} />
										</span>
									</div>
									<div className="profile">
										<div className="info">
											<p>
												Hey, <b>Daniel</b>
											</p>
											<small className="ttext-muted">Admin</small>
										</div>
										<div className="profile-photo">
											<img src={fixedImg} alt="" style={{ width: '20px' }} />
										</div>
									</div>
								</div>
								{/* END OF THE TOP */}
								<div className="recent-updates">
									<h2>Recent Updates</h2>
									<div className="updates">
										<div className="update">
											<div className="profile-photo">
												<img src={fixedImg} alt="" style={{ width: '20px' }} />
											</div>
											<div className="message">
												<p>
													<b>Wahab omodolapo</b>received his order of lapm
												</p>
												<small className="text-muted">2 mins ago</small>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
					{/* END OF MAIN */}
				</div>
			</div>
		</header>
	);
}
