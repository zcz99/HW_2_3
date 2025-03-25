import { useState } from 'react';
import { data } from './data.js';
import styles from './App.module.css';

let NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '=', 'C'];

function App() {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [equally, setEqually] = useState(0);

	let exp = 0;

	console.log('operand1', operand1);
	console.log('operand2', operand2);

	function cancel() {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setEqually(0);
	}

	function plus() {
		setOperator('+');
		setEqually(0);
	}
	function minus() {
		setOperator('-');
		setEqually(0);
	}
	function numberKey(event) {
		if (operator === '') {
			setOperand1(`${operand1}${event.target.innerText}`);
		} else {
			setOperand2(`${operand2}${event.target.innerText}`);
		}
		setEqually(0);
	}
	function equallyNumber() {
		setEqually(1);
	}
	function fromStringToNumber() {
		switch (operator) {
			case '+':
				exp = parseInt(operand1) + parseInt(operand2);
				break;
			case '-':
				exp = parseInt(operand1) - parseInt(operand2);
		}
		return exp;
	}

	return (
		<>
			<div
				className={
					equally ? `${styles.display} ${styles.equally}` : styles.display
				}
			>
				{equally ? fromStringToNumber() : `${operand1} ${operator} ${operand2}`}
			</div>

			<div>
				<ul className={styles.digital_panel}>
					{NUMS.map((item, index) => (
						<li className="" key={index}>
							<button
								disabled={equally ? index <= 9 && true : false}
								value={item}
								className={styles.button}
								onClick={
									(index <= 9 && numberKey) ||
									(index === 10 && plus) ||
									(index === 11 && minus) ||
									(index === 12 && equallyNumber) ||
									(index === 13 && cancel)
								}
							>
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
