import { BreadCrumb } from "primereact/breadcrumb";

// Styles
import styles from "./BreadCrumbWrapper.module.scss";

const BreadCrumbWrapper = ({ items }) => {
	return (
		<div className={styles.bread_crumb}>
			<div className="container">
				<BreadCrumb model={items} />
			</div>
		</div>
	);
};

export default BreadCrumbWrapper;
