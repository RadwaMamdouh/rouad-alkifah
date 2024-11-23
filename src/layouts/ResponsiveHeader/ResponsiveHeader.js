import { facebook, instagram, phone, tiktok, twitter } from "icons";
import { Link } from "react-router-dom";

// Styles
import styles from "./ResponsiveHeader.module.scss";
import LanguageBtn from "components/LanguageBtn/LanguageBtn";
import { Button } from "primereact/button";

const ResponsiveHeader = () => {
	return (
		<>
			<div className={`${styles.top} d-block d-lg-none`}>
				<div className="container">
					<div className={styles.top_content}>
						<div className={styles.info}>
							{phone}
							<span>0543996880</span>
						</div>
						<div className={styles.media}>
							<Link to="#">{instagram}</Link>
							<Link to="#">{twitter}</Link>
							<Link to="#">{tiktok}</Link>
							<Link to="#">{facebook}</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.bottom} d-block d-lg-none`}>
				<div className="container">
					<div className={styles.bottom_content}>
						<img src="/img/logo-small.svg" alt="" className={styles.logo} />

						<div className={styles.actions}>
							<LanguageBtn />
							<Button type="button" text className={styles.burger_btn}>
								<img src="/img/burger.svg" alt="" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ResponsiveHeader;
