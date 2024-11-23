import { useState } from "react";
import { facebook, instagram, phone, tiktok, twitter } from "icons";
import { Link, NavLink } from "react-router-dom";
import LanguageBtn from "components/LanguageBtn/LanguageBtn";
import { Button } from "primereact/button";

import { Tr } from "utils/i18n";

// Styles
import styles from "./ResponsiveHeader.module.scss";

const ResponsiveHeader = ({ scrolled }) => {
	const [openMenu, setOpenMenu] = useState(false);

	const openHandler = () => {
		setOpenMenu(true);
		document.body.style.overflowY = "hidden";
	};

	const closeHandler = () => {
		setOpenMenu(false);
		document.body.style.overflowY = "auto";
	};

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
							{!openMenu ? (
								<Button
									type="button"
									text
									className={styles.burger_btn}
									onClick={openHandler}>
									<img src="/img/burger.svg" alt="" />
								</Button>
							) : (
								<Button
									type="button"
									text
									className={styles.close_menu}
									onClick={closeHandler}>
									<img src="/img/close-menu.svg" alt="" />
								</Button>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Menu List */}
			<div
				className={`${styles.menu_list} ${openMenu ? styles.show : ""} ${
					scrolled ? styles.scrolled : ""
				}`}>
				<li>
					<NavLink to="/">{Tr.tr("translation:Home")}</NavLink>
				</li>
				<li>
					<NavLink to="/products">{Tr.tr("translation:Products")}</NavLink>
				</li>
				<li>
					<NavLink to="/projects">{Tr.tr("translation:Projects")}</NavLink>
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
					<NavLink to="/about-us">{Tr.tr("translation:About_Us")}</NavLink>
				</li>
				<li>
					<NavLink to="/contact-us">{Tr.tr("translation:Contact_Us")}</NavLink>
				</li>
			</div>
		</>
	);
};

export default ResponsiveHeader;
