// import { useState } from 'react'
import './App.css'

function DropDown() {
	return (
		<button>Drop Down</button>
	)
}

function Main() {
	const weekDays = [
		"Monday",
		"Tuesday",
		"...",
		"Sunday"
	]

	return (
		<>
		<DropDown/>
		{
			weekDays.map(day => {
			return (
				<p>{day}</p>
			)}
		)
		}
		</>
	)
}

module.exports = Main
// export default Main
