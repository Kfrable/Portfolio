import React from 'react'
import Naver from './Nav'

const Style1={
	/*border:'black solid',*/
	'margin-left':'48%',
	width:'217',
	display:'inline-block'
    
}

const Style2={
	/*border:'black solid',*/
	'margin-left':'10',
	width:'217',
	display:'inline-block'
    
}

const gone = {
	'list-style-type':'none'
}

function Skills(){
	return(
		<div>
					<h1>Skills</h1>
					<div  style={Style1}>	
					<ul style={gone}>
						<li className='list'>JavaScript</li>
						<li className='list'>Ruby</li>
						<li className='list'>Rails</li>
						<li className='list'>React</li>
						<li className='list'>Express</li>
						<li className='list'>SQL</li>
						{/*<li>Postgress</li>
						<li>Heroku</li>
						<li>Bootstrap</li>
						<li>CSS</li>
						<li>HTML</li>*/}
					</ul>
					</div>
					<div  style={Style2}>
					<ul style={gone}>
						<li className='list'>Postgress</li>
						<li className='list'>Heroku</li>
						<li className='list'>Bootstrap</li>
						<li className='list'>CSS</li>
						<li className='list'>HTML</li>
					</ul>
					</div>
		</div>
	)
}
export default Skills