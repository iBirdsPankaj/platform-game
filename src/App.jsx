import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";


function App() {

	//	use for create reactive variables
	const [counter, setCounter] = useState(0);
	const [usersList, setUsersList] = useState([]);


	//	 to manage the component life cycle 
	useEffect(() => {

	}, []);

	return (
		<div className="App">
			<div className="d-flex flex-wrap SpecialLeftpanel w-100">
				<div className="d-flex w-100 align-items-start overflow-visible">
					<div className="LeftbarPannel p-0" id="">
						<div className="CourseCardWrapper fullHeight100">
							<div className="form-title mt-0 mb-0 Enrollcoursetitle heading">
								<h2
									data-toggle="collapse"
									className="m-0 pt-0 pb-1 w-100 flex justify-content-between "
								>
									Left Panel
									{
										/*
											Put your game code here - its left panel
										*/
									}
								</h2>
							</div>

							<div className="gridSection coursepagelist pt-0"></div>
						</div>
					</div>

					<div className="RightbarPannel p-0 rightpannelSticky">
						<div className="heading">
							<h2 className="flex">
								<span>
									Right Panel
								</span>
							</h2>
						</div>
						<div className="alltypeCourseFilter">
							{
								/*
									Put your code here what you want to display in the right panel
								*/
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
