import { useState, useMemo, useEffect } from 'react';

const calculateFibonacci = (n) => {
	if (n < 2) {
		return n;
	}

	return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

export const App = () => {
	const [number, setNumber] = useState(0);
	const [name, setName] = useState('');
	const [darkTheme, setDarkTheme] = useState(true);

	const themeStyles = useMemo(() => {
		return {
			backgroundColor: darkTheme ? '#333' : '#FFF',
			color: darkTheme ? '#FFF' : '#333',
		};
	}, [darkTheme]);

	useEffect(() => {
		console.log('Theme changed');
	}, [themeStyles]);

	const fibonacciResult = useMemo(() => {
		return calculateFibonacci(number);
	}, [number]);

	// console.log('rendering');

	return (
		<div className="container" style={themeStyles}>
			<h1>Fibonacci Calculator</h1>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>

			<p className="bold">
				This Fibonacci result for <span>{number}</span> is{' '}
				<span>{fibonacciResult}</span>
			</p>

			<div className="container2">
				<label>Please Enter your name to see that it is slow:</label>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<p className="bold">{name || 'The name will appear here...'}</p>
			</div>
			<div className="toggle">
				<button onClick={() => setDarkTheme((prevDark) => !prevDark)}>
					Toggle Theme
				</button>
			</div>
		</div>
	);
};
