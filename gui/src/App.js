import React from "react";
import { BrowserRouter } from "react-router-dom";
import Views from "./Views";
import "./App.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PropTypes } from "prop-types";

function App( {children} ) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			{children}
			<BrowserRouter>
				<Views />
			</BrowserRouter>
		</LocalizationProvider>
	);
}

// Validate the children prop using PropTypes
App.propTypes = {
	children: PropTypes.node.isRequired,
};

export default App;
