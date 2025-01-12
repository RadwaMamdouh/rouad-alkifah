import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";

import { Tr } from "utils/i18n";

// Styles
import styles from "./Catalog.module.scss";

const Catalog = () => {
	return (
		<div className={styles.catalog}>
			<div className="row flex-grow-1">
				<div className="col-lg-5 px-0">
					<div className={styles.catalog_text}>
						<h1 className="fs_36 fw_800 text mbe_8">
							{Tr.tr("translation:Our_Catalog")}
						</h1>
						<div className="hr_red mbe_8"></div>
						<p className="fs_20 fw_500 text mbe_32">
							{Tr.tr("translation:Our_Catalog_Desc")}
						</p>
						<PrimaryBtn
							btn
							type="button"
							label="View Our Catalog"
							classes={styles.view_catalog}
						/>
					</div>
				</div>
				<div className={`col-lg-7 px-0 ${styles.img_side}`}>
					<div className={styles.catalog_img}>
						<img src="/img/catalog.jpg" alt="" className={styles.img} />
						<div className={styles.img_content}>
							<img src="/img/logo-white2.svg" alt="" />
							<h2>{Tr.tr("translation:Aluminum_Systems")}</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catalog;
