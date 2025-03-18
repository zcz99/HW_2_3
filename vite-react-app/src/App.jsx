import { useState } from 'react';
import { data } from './data.js';
import styles from './App.module.css';

function App() {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');

	function Cancel() {
		setOperand1('');
		setOperand2('');
		setOperator('');
	}

	function Plus() {
		setOperator('+');
	}
	function Minus() {
		setOperator('-');
	}

	let NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '=', 'C'];
	return (
		<>
			<div className={styles.display}></div>

			<div>
				<ul className={styles.digital_panel}>
					{NUMS.map((item, index) => (
						<li className="" key={index}>
							<button className={styles.button} onClick={''}>
								{item}
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
