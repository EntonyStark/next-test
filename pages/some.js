import Layout from "../components/Layout";
import Input from "../components/input";
import userHook from "../components/useState";

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

	const [newFormElem, { setNew }] = userHook(initForm);

	const onChange = e => {
		const { name, value } = e.target;

		setNew({ name, value });
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
