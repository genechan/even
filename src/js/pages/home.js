import React from "react";
import {Header, Footer} from "../pages";
import {Form} from "../components";
const Home = (props) =>{
	return(
		<div>
			<Header/>
				<section className="wrapper">
					<h1>
						Even Financial GetHub Reposityory Search
					</h1>
					<Form/>
					<hr/>
					<p>
						Please entry query and click SEARCH button abover, results appear here.
					</p>
				</section>
			<Footer/>
		</div>)
	;
};

export default Home;