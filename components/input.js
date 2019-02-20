// import "../static/input.css";

export default ({ label, touch, valid, propsConfig }) => {
	return (
		<div className="custom-input-box">
			<link rel="stylesheet" href="/static/input.css" />
			<label className={touch && valid ? "custom-input-lable error-lable" : "custom-input-lable"}>
				{label}
			</label>
			<input className={touch && valid ? "custom-input error" : "custom-input"} {...propsConfig} />
		</div>
	);
};
