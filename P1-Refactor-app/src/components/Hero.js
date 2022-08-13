import React from "react";
import bg1 from "../images/apple-1838564_1920-main.jpg"

export default function Hero(){
    return(
        <>
        <main className = "main" style={{backgroundImage:`url(${bg1})`}}>
			<div className = "container-fluid">
				<div className = "row">
					<div className = "entry-banner text-center">
						<h1 id = "hello">Hello, I'm</h1>
						<h1 id = "name">XXXX</h1>
						<h1 id = "person-description">UI Developer. UX Desinger. Problem Solver.</h1>
					</div>
				</div>

				<div className = "row text-center">
					<div className = "banner-buttons">
						<div className = "col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
							<a className = "btn btn-default btn-border" href = "#about">Info</a>
						</div>

						<div className = "col-sm-1 col-md-1">
							<a className = "btn btn-default btn-border" href = "#projects">Portfolio</a>
						</div>
					</div>
				</div>
			</div>
		</main>
        </>
    )
}