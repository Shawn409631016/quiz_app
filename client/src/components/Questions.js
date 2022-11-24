import React, { useState } from 'react';

export default function () {
	const [checked, setChecked] = useState(undefined);
	function onSelect() {
		console.log('radio button change');
	}
	return (
		<div className="questions">
			<h2 className="text-light">Simple Question 1</h2>

			<ul>
				<li>
					<input
						type="radio"
						value={true}
						name="options"
						id="q1-option"
						onChange={onSelect()}
					/>
					<label className="text-primary" htmlFor="q1-option">
						option
					</label>
					<div className="check che"></div>
				</li>
			</ul>
		</div>
	);
}
