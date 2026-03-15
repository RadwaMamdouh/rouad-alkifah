import { Tr } from "utils/i18n";

// Styles
import styles from "./CopyRights.module.scss";

const CopyRights = () => {
	return (
		<div className={styles.copyRights}>
			<div className="container">
				<p>{Tr.tr("translation:Copy_Rights")}</p>
			</div>
		</div>
	);
};

export default CopyRights;
