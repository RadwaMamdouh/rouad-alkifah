import { Link } from "react-router-dom";
import {
	clock,
	envelop,
	facebook,
	instagram,
	location,
	phone,
	tiktok,
	twitter,
} from "icons";
import CopyRights from "./CopyRights/CopyRights";

import { Tr } from "utils/i18n";

// Styles
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<>
			<footer className={styles.app_footer}>
				<div className="container">
					<div className={styles.footer_content}>
						<img
							src="/img/footer-frame.svg"
							alt=""
							className={styles.footer_frame}
						/>
						<div className="row position-relative">
							<div
								className={`col-12 col-lg-2 mb-4 mb-lg-0 ${styles.logo_col}`}>
								<img
									src="/img/logo-white.svg"
									alt=""
									className={styles.footer_logo}
								/>
							</div>
							<div className="col-12 col-lg-3 mb-4 mb-lg-0 d-block d-lg-none">
								<div className={styles.footer_col}>
									<h5>{Tr.tr("translation:Follow_Us")}</h5>
									<div className={styles.media}>
										<Link to="#">{facebook}</Link>
										<Link to="#">{tiktok}</Link>
										<Link to="#">{twitter}</Link>
										<Link to="#">{instagram}</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-lg-2 mb-4 mb-lg-0">
								<div className={styles.footer_col}>
									<h5>{Tr.tr("translation:Home")}</h5>
									<ul>
										<li>
											<Link to="#">{Tr.tr("translation:Products")}</Link>
										</li>
										<li>
											<Link to="#">{Tr.tr("translation:Projects")}</Link>
										</li>
										<li>
											<Link to="#">{Tr.tr("translation:Maintenance")}</Link>
										</li>
										<li>
											<Link to="#">{Tr.tr("translation:News")}</Link>
										</li>
										<li>
											<Link to="#">{Tr.tr("translation:Blogs")}</Link>
										</li>
										<li>
											<Link to="#">{Tr.tr("translation:About_Us")}</Link>
										</li>
										<li>
											<Link to="#">{Tr.tr("translation:Contact_Us")}</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-6 col-lg-2 mb-4 mb-lg-0">
								<div className={styles.footer_col}>
									<h5>{Tr.tr("translation:Our_Products")}</h5>
									<ul>
										<li>
											<Link to="#">{Tr.tr("translation:Doors")}</Link>
										</li>
										<li>
											<Link to="#">{Tr.tr("translation:Windows")}</Link>
										</li>
										<li>
											<Link to="#">{Tr.tr("translation:Domes")}</Link>
										</li>
										<li>
											<Link to="#">
												{Tr.tr("translation:Building_Facades")}
											</Link>
										</li>
										<li>
											<Link to="#">{Tr.tr("translation:Accessories")}</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-12 col-lg-3 mb-4 mb-lg-0 d-block d-lg-none">
								<div className={styles.footer_col}>
									<h5>{Tr.tr("translation:Work_Hours")}</h5>
									<div className={styles.work_row}>
										{clock}
										<span>Saturday to Thursday From 8 AM to 9 PM</span>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-3 mb-4 mb-lg-0">
								<div className={styles.footer_col}>
									<h5>{Tr.tr("translation:Contact_Us")}</h5>
									<div className={styles.contact}>
										<div className={styles.contact_row}>
											{location}
											<span>Al-Ahsa, Al-Mubarraz, Dhahran Street</span>
										</div>
										<div className={styles.contact_row}>
											{phone}
											<span>0543996880</span>
										</div>
										<div className={styles.contact_row}>
											{envelop}
											<span>info@rouadal-kafah.sa</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-3 mb-4 mb-lg-0 d-none d-lg-block">
								<div className={styles.footer_col}>
									<h5>{Tr.tr("translation:Work_Hours")}</h5>
									<div className={styles.work_row}>
										{clock}
										<span>{Tr.tr("translation:Hours_From_To")}</span>
									</div>
								</div>
								<div className={styles.footer_col}>
									<h5>{Tr.tr("translation:Follow_Us")}</h5>
									<div className={styles.media}>
										<Link to="#">{facebook}</Link>
										<Link to="#">{tiktok}</Link>
										<Link to="#">{twitter}</Link>
										<Link to="#">{instagram}</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			{/* Copy Rights */}
			<CopyRights />
		</>
	);
};

export default Footer;
