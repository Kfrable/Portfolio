import React from 'react';
import Naver from './Nav';
import {
  imageShapeInstance,circle,Col,Image,imageResponsiveInstance,responsive
} from 'react-bootstrap';
function About(){
	return(
		<div className='Container'>
		
			<h1>About</h1>
			<Image id='me' src="./Images/me.png" responsive />
			<p>Being that I come from multiple industries that required me to be  quick on my feet, being adaptable is something that set me apart. In being able to integrate myself into situations, doesn’t mean I compromise my values. I stand by what i’ve been taught, to always be kind and happy, and treat others with respect ,and show that i’m willing to work.</p>

		</div>

	)
}
export default About