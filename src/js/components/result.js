import React from "react";

const Result = (props) => {
	return (
		<section className="result">
			<div className="info">
				<h3>{props.name}</h3>
				<p className="description">{props.description}</p>
				{
					props.fork &&
					<div className="forked">
						<button>forked</button>
					</div>
				}
			</div>
			<div className="stars">
				<span className="description">Stars:</span>
				<span className="value">{props.stargazers_count}</span>
			</div>
			<div className="license">
				<span className="description">License:</span>
				<span className="value">{props.license ? props.license.name: ''}</span>
			</div>
		</section>
	)
};

export default Result;