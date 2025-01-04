import { Link, NavLink } from "react-router-dom";
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
import LanguageBtn from "components/LanguageBtn/LanguageBtn";

import { Tr } from "utils/i18n";

// Styles
import styles from "./Header.module.scss";

const Header = ({ scrolled }) => {
	return (
		<header
			className={`${styles.app_header} ${
				scrolled ? styles.scrolled : ""
			} d-none d-lg-block`}>
			<div className="container">
				{/* Main Header */}
				<div className={styles.header_content}>
					<Link to="/" className={styles.app_logo}>
						<img src="/img/polygon.svg" alt="" className={styles.polygon} />
						<img src="/img/logo.svg" alt="" className={styles.logo} />
					</Link>
					<div className={styles.top}>
						<div className={styles.left_info}>
							<div className={styles.info}>
								{location}
								<span>Al-Ahsa, Al-Mubarraz, Dhahran Street</span>
							</div>
							<div className={styles.info}>
								{phone}
								<span>0543996880</span>
							</div>
							<div className={styles.info}>
								{envelop}
								<span>info@rouadal-kafah.sa</span>
							</div>
							<div className={styles.info}>
								{clock}
								<span>8 AM to 9 PM</span>
							</div>
						</div>
						<div className={styles.media}>
							<Link to="#">{instagram}</Link>
							<Link to="#">{twitter}</Link>
							<Link to="#">{tiktok}</Link>
							<Link to="#">{facebook}</Link>
						</div>
					</div>
					<div className={styles.bottom}>
						<ul className={styles.menu_list}>
							<li>
								<NavLink to="/">{Tr.tr("translation:Home")}</NavLink>
							</li>
							<li>
								<NavLink to="/products">
									{Tr.tr("translation:Products")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/projects">
									{Tr.tr("translation:Projects")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/accessories">
									{Tr.tr("translation:Accessories")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/maintenance">
									{Tr.tr("translation:Maintenance")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/news">{Tr.tr("translation:News")}</NavLink>
							</li>
							<li>
								<NavLink to="/blogs">{Tr.tr("translation:Blogs")}</NavLink>
							</li>
							<li>
								<NavLink to="/about-us">
									{Tr.tr("translation:About_Us")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/contact-us">
									{Tr.tr("translation:Contact_Us")}
								</NavLink>
							</li>
						</ul>
						<LanguageBtn />
					</div>
				</div>

				{/* Scrolled Header */}
				<div className={styles.scrolled_content}>
					<div className={styles.left}>
						<Link to="/" className={styles.app_logo}>
							<img src="/img/logo-small.svg" alt="" />
						</Link>
						<ul className={styles.menu_list}>
							<li>
								<NavLink to="/">{Tr.tr("translation:Home")}</NavLink>
							</li>
							<li>
								<NavLink to="/products">
									{Tr.tr("translation:Products")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/projects">
									{Tr.tr("translation:Projects")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/maintenance">
									{Tr.tr("translation:Maintenance")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/news">{Tr.tr("translation:News")}</NavLink>
							</li>
							<li>
								<NavLink to="/blogs">{Tr.tr("translation:Blogs")}</NavLink>
							</li>
							<li>
								<NavLink to="/about-us">
									{Tr.tr("translation:About_Us")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/contact-us">
									{Tr.tr("translation:Contact_Us")}
								</NavLink>
							</li>
						</ul>
					</div>
					<LanguageBtn />
				</div>
			</div>
		</header>
	);
};

export default Header;
