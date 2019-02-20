import { useState } from "react";

import Layout from "../components/Layout";
import Input from "../components/input";

export default () => {
	const initForm = {
		email: {
			label: "Email",
			value: "",
			config: {
				placeholder: "Enter Your Email",
				type: "email",
				name: "email"
			},
			validation: {
				required: true
			},
			touch: false,
			valid: false
		},
		password: {
			label: "Password",
			value: "",
			config: {
				placeholder: "Enter Your Password",
				type: "password",
				name: "password"
			},
			validation: {
				required: true
			},
			touch: false,
			valid: false
		},
		isValid: false
	};

	const validate = (rules, value) => {
		let isValid = true;
		if (rules.required) {
			isValid = value.trim() !== "" && isValid;
		}

		return isValid;
	};

	const [newFormElem, setForm] = useState(initForm);

	const onChange = e => {
		const { name, value } = e.target;

		setForm(newFormElem => {
			const valid = validate(newFormElem[name].validation, value);

			const otherValid = Object.keys(newFormElem).some(
				el => checkObject(newFormElem[el]) && !newFormElem[el].valid
			);

			return {
				...newFormElem,
				[name]: {
					...newFormElem[name],
					value,
					valid,
					touch: true
				},
				isValid: !otherValid && valid
			};
		});
	};

	const submit = e => {
		e.preventDefault();
		// submit here
	};

	const checkObject = obj => Object.prototype.toString.call(obj) === "[object Object]";

	return (
		<Layout>
			<div>Some info wiil be here</div>

			<form onSubmit={submit}>
				{Object.keys(newFormElem).map(
					el =>
						checkObject(newFormElem[el]) && (
							<Input
								key={el}
								label={newFormElem[el].label}
								touch={newFormElem[el].touch}
								valid={!newFormElem[el].valid}
								propsConfig={{
									...newFormElem[el].config,
									value: newFormElem[el].value,
									onChange: onChange
								}}
							/>
						)
				)}
				<button className="btn" disabled={!newFormElem.isValid} type="submit">
					Submit
				</button>
			</form>
		</Layout>
	);
};
