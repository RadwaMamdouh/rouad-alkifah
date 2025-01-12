import { useRef, useState } from "react";
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
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";

import { Tr } from "utils/i18n";

// Styles
import styles from "./Header.module.scss";

const Header = ({ scrolled }) => {
	const op = useRef(null);
	const op2 = useRef(null);

	const [isShowMenu, setIsShowMwnu] = useState(false);

	const items = [
		{
			label: "Doors",
			items: [
				{
					id: 1,
					label: "Bathroom doors",
				},
				{ id: 2, label: "Entrance doors" },
			],
		},
		{
			label: "Windows",
			items: [
				{ id: 3, label: "Fixed Windows" },
				{ id: 4, label: "Sliding Windows" },
				{ id: 5, label: "Tilt Windows" },
				{ id: 6, label: "Tilt and turn windows" },
			],
		},
		{
			label: "Building facades",
			items: [
				{ id: 7, label: "Structure system" },
				{ id: 8, label: "Curtain wall system" },
				{ id: 9, label: "Cladding system" },
			],
		},
		{
			label: "Domes",
			items: [{ id: 10, label: "Domes" }],
		},
	];

	const closeMenuOnNavigate = () => {
		setIsShowMwnu(false);
	};

	return (
		<header
			className={`${styles.app_header} ${
				scrolled ? styles.scrolled : ""
			} d-none d-xl-block`}>
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
								<NavLink to="/" className={styles.menu_item}>
									{Tr.tr("translation:Home")}
								</NavLink>
							</li>
							<li className="position-relative">
								<Button
									type="button"
									label="Products"
									icon="pi pi-angle-down"
									className={`${styles.menu_item} ${styles.menu_btn} ${
										isShowMenu ? styles.show : ""
									}`}
									onClick={(e) => op.current.toggle(e)}
								/>
								<OverlayPanel
									ref={op}
									appendTo={"self"}
									onShow={() => setIsShowMwnu(true)}
									onHide={() => setIsShowMwnu(false)}>
									<div className="row">
										{items.map((item, index) => (
											<div className="col-md-3" key={index}>
												<h5>{item.label}</h5>
												{item.items.map((el, subIndex) => (
													<NavLink
														to={`/products/${el.id}`}
														key={subIndex}
														className="sub_menu_item"
														onClick={closeMenuOnNavigate}>
														{el.label}
													</NavLink>
												))}
											</div>
										))}
									</div>
								</OverlayPanel>
							</li>
							<li>
								<NavLink to="/projects" className={styles.menu_item}>
									{Tr.tr("translation:Projects")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/accessories" className={styles.menu_item}>
									{Tr.tr("translation:Accessories")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/catalog" className={styles.menu_item}>
									{Tr.tr("translation:Catalog")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/maintenance" className={styles.menu_item}>
									{Tr.tr("translation:Maintenance")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/news" className={styles.menu_item}>
									{Tr.tr("translation:News")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/blogs" className={styles.menu_item}>
									{Tr.tr("translation:Blogs")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/about-us" className={styles.menu_item}>
									{Tr.tr("translation:About_Us")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/contact-us" className={styles.menu_item}>
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
								<NavLink to="/" className={styles.menu_item}>
									{Tr.tr("translation:Home")}
								</NavLink>
							</li>
							<li className="position-relative">
								<Button
									type="button"
									label="Products"
									icon="pi pi-angle-down"
									className={`${styles.menu_item} ${styles.menu_btn} ${
										isShowMenu ? styles.show : ""
									}`}
									onClick={(e) => op2.current.toggle(e)}
								/>
								<OverlayPanel
									ref={op2}
									appendTo={"self"}
									onShow={() => setIsShowMwnu(true)}
									onHide={() => setIsShowMwnu(false)}>
									<div className="row">
										{items.map((item, index) => (
											<div className="col-md-3" key={index}>
												<h5>{item.label}</h5>
												{item.items.map((el, subIndex) => (
													<NavLink
														to={`/products/${el.id}`}
														key={subIndex}
														className="sub_menu_item"
														onClick={closeMenuOnNavigate}>
														{el.label}
													</NavLink>
												))}
											</div>
										))}
									</div>
								</OverlayPanel>
							</li>
							<li>
								<NavLink to="/projects" className={styles.menu_item}>
									{Tr.tr("translation:Projects")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/accessories" className={styles.menu_item}>
									{Tr.tr("translation:Accessories")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/catalog" className={styles.menu_item}>
									{Tr.tr("translation:Catalog")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/maintenance" className={styles.menu_item}>
									{Tr.tr("translation:Maintenance")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/news" className={styles.menu_item}>
									{Tr.tr("translation:News")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/blogs" className={styles.menu_item}>
									{Tr.tr("translation:Blogs")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/about-us" className={styles.menu_item}>
									{Tr.tr("translation:About_Us")}
								</NavLink>
							</li>
							<li>
								<NavLink to="/contact-us" className={styles.menu_item}>
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
