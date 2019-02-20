import Layout from "../components/Layout";
import Input from "../components/input";
import userHook from "../components/useState";

const clone = () => {
	const initForm = {
		name: {
			label: "Name",
			value: "",
			config: {
				placeholder: "Enter Your Name",
				type: "text",
				name: "name"
			},
			validation: {
				required: true
			},
			touch: false,
			valid: false
		},
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
		confirmPassword: {
			label: "Coufirm your password",
			value: "",
			config: {
				placeholder: "Confirm Your Password",
				type: "password",
				name: "confirmPassword"
			},
			validation: {
				required: true,
				sameWithPassword: true
			},
			touch: false,
			valid: false
		},
		isValid: false
	};

	const checkObject = obj => Object.prototype.toString.call(obj) === "[object Object]";

	const [newFormElem, { setNew }] = userHook(initForm);

	const submit = () => console.log("setNew");

	const onChange = e => {
		const { name, value } = e.target;

		setNew({ name, value });
	};

	return (
		<Layout>
			<div>ololo</div>
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

export default clone;

///// -----------
// export default class clone extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			count: 0
// 		};
// 	}

// 	componentDidMount() {
// 		document.title = `You clicked ${this.state.count} times`;
// 	}

// 	componentDidUpdate() {
// 		document.title = `You clicked ${this.state.count} times`;
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<p>You clicked {this.state.count} times</p>
// 				<button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
// 			</div>
// 		);
// 	}
// }

///// -----------
// import { useState, useEffect } from "react";

// export default function Example() {
// 	const [count, setCount] = useState(0);

// 	// Similar to componentDidMount and componentDidUpdate:
// 	useEffect(() => {
// 		// Update the document title using the browser API
// 		document.title = `You clicked ${count} times`;
// 	});

// 	return (
// 		<div>
// 			<p>You clicked {count} times</p>
// 			<button onClick={() => setCount(count + 1)}>Click me</button>
// 		</div>
// 	);
// }

///// -----------

// import { useState, useEffect } from "react";

// const example = () => {
// 	const [posts, setPosts] = useState([]);

// 	useEffect(() => {
// 		fetch("https://jsonplaceholder.typicode.com/posts")
// 			.then(response => response.json())
// 			.then(json => setPosts(json));
// 	});

// 	return (
// 		<div>
// 			{posts.map(el => (
// 				<div key={el.id}>
// 					<h3>{el.title}</h3>
// 					<p>{el.body}</p>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default example;
