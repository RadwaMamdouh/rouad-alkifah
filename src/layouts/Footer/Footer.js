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
									<h5>Follow us</h5>
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
									<h5>Home</h5>
									<ul>
										<li>
											<Link to="#">Products</Link>
										</li>
										<li>
											<Link to="#">Projects</Link>
										</li>
										<li>
											<Link to="#">Maintenance</Link>
										</li>
										<li>
											<Link to="#">News</Link>
										</li>
										<li>
											<Link to="#">Blogs</Link>
										</li>
										<li>
											<Link to="#">About Us</Link>
										</li>
										<li>
											<Link to="#">Contact Us</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-6 col-lg-2 mb-4 mb-lg-0">
								<div className={styles.footer_col}>
									<h5>Our Products</h5>
									<ul>
										<li>
											<Link to="#">Doors</Link>
										</li>
										<li>
											<Link to="#">Windows</Link>
										</li>
										<li>
											<Link to="#">Domes</Link>
										</li>
										<li>
											<Link to="#">Building facades</Link>
										</li>
										<li>
											<Link to="#">Accessories</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-12 col-lg-3 mb-4 mb-lg-0 d-block d-lg-none">
								<div className={styles.footer_col}>
									<h5>Work Hours</h5>
									<div className={styles.work_row}>
										{clock}
										<span>Saturday to Thursday From 8 AM to 9 PM</span>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-3 mb-4 mb-lg-0">
								<div className={styles.footer_col}>
									<h5>Contacts Us</h5>
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
											<span>info@rouad-alkafah.sa</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-3 mb-4 mb-lg-0 d-none d-lg-block">
								<div className={styles.footer_col}>
									<h5>Work Hours</h5>
									<div className={styles.work_row}>
										{clock}
										<span>Saturday to Thursday From 8 AM to 9 PM</span>
									</div>
								</div>
								<div className={styles.footer_col}>
									<h5>Follow us</h5>
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
