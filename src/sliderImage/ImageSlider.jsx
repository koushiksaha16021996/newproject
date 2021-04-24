import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import image1 from './images/image2.jpg';
import image2 from './images/image3.jpg';
import image3 from './images/Classroom.jpg';



const ImageSlider = () => {

 const styl1 = {
	fontFamily: "'Poppins', sanSerif",
	fontSize: "400%",
	textTransform: "uppercase",
	textShadow: "1px 1px 10px #0080ff ",
	color: '#000',
	fontWeight: "900",
	borderStyle: "solid",
	border: "0.2px solid black",
	backgroundColor: "white",
	
	
 }
 const styl2 = {
	fontFamily: "'Poppins', sanSerif",
	fontSize: "400%",
	textTransform: "uppercase",
	textShadow: "1px 1px 10px white",
	color: '#000',
	fontWeight: "900",
	textDecoration: "underline"
}
 const styl3 = {
	fontFamily: "'Poppins', sanSerif",
	fontSize: "170%",
	fontWeight: "500",
	textShadow: "1px 1px 1px white",
	color: '#000',
	paddingBottom: "1rem",
 }
 const btnPrimary = {
 	backgroundColor: "white",
	border: "1px solid #563d7c",
	marginLeft: "70px"
  }
  const linkcolour={
	  textDecoration:"none"
  }

const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) =>
{
	setIndex(selectedIndex);
}
	
	return (
		<>

			<Carousel fade="true" activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item>
					<img className="d-block w-100" src={image1} alt="First image"  style={{height: "100vh"}}/>
					<Carousel.Caption className="carousel-caption">

						<h1 style={styl1}>Remote Learning With Yodafy</h1>
						<h5 style={styl3}>Meaningful learning can happen. we're here to help with resources to support effective remote learning experiences for students, teachers and families.</h5>
						<button type="button" className="btn btn-outline-light btn-lg">Faculty</button>
						<button type="button" className="btn btn-primary btn-lg" style={btnPrimary}><Link to="/student">Students</Link></button>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={image2} alt="First image"  style={{height: "100vh"}}/>
					<Carousel.Caption>
						<h1 style={styl2}>Meet Us</h1>
						<h5 style={styl3}>Your classroom app for fun, effective enagement and on-the-fly assessments.</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={image3} alt="First image"  style={{height: "100vh"}}/>
					<Carousel.Caption>
						<h1 style={styl2}>Yodafy</h1>
						<h3 style={styl3}>Create UI, games, and animations. Share with other around the world.</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
}

export default ImageSlider;
