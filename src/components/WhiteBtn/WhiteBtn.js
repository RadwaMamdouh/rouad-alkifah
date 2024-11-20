import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { Ripple } from "primereact/ripple";

// Styles
import styles from "./WhiteBtn.module.scss";

const WhiteBtn = ({ ...props }) => {
	return props.btn ? (
		<Button
			type={props.type}
			label={props.label}
			className={`${styles.white_btn} ${props.classes ? props.classes : ""}`}
			onClick={props.onAction}
			disabled={props.disabled}
			loading={props.isLoading}></Button>
	) : (
		<Link
			to={props.redirectTo}
			className={`${styles.white_btn} ${props.classes ? props.classes : ""}`}>
			<Ripple />
			{props.label && <span>{props.label}</span>}
		</Link>
	);
};

export default WhiteBtn;
