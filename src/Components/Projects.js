import React from 'react'
import Naver from './Nav'
import {
  imageShapeInstance,circle,Col,Image,imageResponsiveInstance,responsive
} from 'react-bootstrap';
const Style = {
	/*height:'100%',
	width:'100%',*/
	border:'black solid',
	padding:'10'
}
function Projects(){
	return(
		<div>
			
			<h1>Projects</h1>
			<div style={Style}><a href='https://kfrable.github.io/Kfrable.picturePuzzle.github.io/'><Image src="./Images/puzzle.png" responsive /></a></div>
			<div style={Style}><a href='https://lit-dawn-82757.herokuapp.com/'><Image src="./Images/Beverage.png" responsive /></a></div>
			<div style={Style}><a href='https://beverage-pairing-shcdrqekeg.now.sh/'><Image src="./Images/Read.png" responsive /></a></div>
			https://lit-dawn-82757.herokuapp.com/
		</div>
	)
}
export default Projects