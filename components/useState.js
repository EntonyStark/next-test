import { useState } from "react";

export default initialState => {
	const [newObj, setNewObj] = useState(initialState);

	const checkObject = obj => Object.prototype.toString.call(obj) === "[object Object]";

	const validate = (rules, value, otherField) => {
		let isValid = true;
		if (rules.required) {
			isValid = value.trim() !== "" && isValid;
		}

		if (rules.sameWithPassword) {
			isValid = value.trim() !== "" && otherField.password.value.trim() === value.trim() && isValid;
		}

		return isValid;
	};

	const setNew = ({ name, value }) => {
		setNewObj(newFormElem => {
			const valid = validate(newFormElem[name].validation, value, newFormElem);

			const otherValid = Object.keys(newFormElem)
				.reduce(
					(prev, el) =>
						checkObject(newFormElem[el]) && newFormElem[el] !== newFormElem[name]
							? [...prev, newFormElem[el].valid]
							: prev,
					[]
				)
				.indexOf(false);

			return {
				...newFormElem,
				[name]: {
					...newFormElem[name],
					value,
					valid,
					touch: true
				},
				isValid: otherValid === -1 && valid
			};
		});
	};

	return [newObj, { setNew, setNewObj }];
};
