import React from "react";
import {Header, Footer} from "../pages";
import {Form, SearchResults} from "../components";
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
					<SearchResults />
				</section>
			<Footer/>
		</div>)
	;
};

export default Home;