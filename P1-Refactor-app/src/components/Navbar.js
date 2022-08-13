import React from "react";
import logo from "../images/logo.svg"
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <div className = "navigation">
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
						<div className = "logo">
							<a href = "index.html"><img src ={logo} /></a>
						</div>
					</div>

					<div className = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
						<div className = "primary-nav">
							<ul>
								<li><Link to = "/">Home</Link></li>
								<li><Link to = "/portfolio">portfolio</Link></li>
								<li><Link to = "/contact">contact</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    )
}