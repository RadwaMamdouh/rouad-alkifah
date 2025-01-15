import { useState } from "react";
import { facebook, instagram, phone, tiktok, twitter } from "icons";
import { Link, NavLink } from "react-router-dom";
import LanguageBtn from "components/LanguageBtn/LanguageBtn";
import { Button } from "primereact/button";

import { Tr } from "utils/i18n";

// Styles
import styles from "./ResponsiveHeader.module.scss";
import { Accordion, AccordionTab } from "primereact/accordion";

const ResponsiveHeader = ({ scrolled }) => {
	const [openMenu, setOpenMenu] = useState(false);

	const openHandler = () => {
		setOpenMenu(true);
		document.body.style.overflowY = "hidden";
	};

	const closeHandler = () => {
		setOpenMenu(false);
		document.body.style.overflowY = "visible";
	};

	const closeMenuOnNavigate = () => {
		setOpenMenu(false);
	};

	// Products
	const products = [
		{
			name: Tr.tr("translation:Doors"),
			items: [
				{ id: 1, label: Tr.tr("translation:Bathroom_Doors") },
				{ id: 2, label: Tr.tr("translation:Entrance_Doors") },
			],
		},
		{
			name: Tr.tr("translation:Windows"),
			items: [
				{ id: 3, label: Tr.tr("translation:Fixed_Windows") },
				{ id: 4, label: Tr.tr("translation:Sliding_Windows") },
				{ id: 5, label: Tr.tr("translation:Tilt_Windows") },
				{ id: 6, label: Tr.tr("translation:Tilt_And_Turn_Windows") },
			],
		},
		{
			name: Tr.tr("translation:Building_Facades"),
			items: [
				{ id: 7, label: Tr.tr("translation:Structure_System") },
				{ id: 8, label: Tr.tr("translation:Curtain_Wall_System") },
				{ id: 9, label: Tr.tr("translation:Cladding_System") },
			],
		},
		{
			id: 10,
			label: Tr.tr("translation:Domes"),
		},
	];

	return (
		<>
			<div className={`${styles.top} d-block d-xl-none`}>
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
			<div className={`${styles.bottom} d-block d-xl-none`}>
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
					<NavLink
						to="/"
						className={styles.menu_item}
						onClick={closeMenuOnNavigate}>
						{Tr.tr("translation:Home")}
					</NavLink>
				</li>
				<li>
					<Accordion>
						<AccordionTab header={Tr.tr("translation:Products")}>
							<Accordion multiple>
								{products?.map((product, index) => {
									return (
										product.items && (
											<AccordionTab header={product.name} key={index}>
												{product.items?.map((item, subIndex) => (
													<NavLink
														to={`/products/${item.id}`}
														key={subIndex}
														onClick={closeMenuOnNavigate}>
														{item.label}
													</NavLink>
												))}
											</AccordionTab>
										)
									);
								})}
							</Accordion>
							{products?.map((product) => {
								return (
									!product.items && (
										<NavLink
											to={`/products/${product.id}`}
											key={product.id}
											className={styles.items_link}
											onClick={closeMenuOnNavigate}>
											{product.label}
										</NavLink>
									)
								);
							})}
						</AccordionTab>
					</Accordion>
				</li>
				<li>
					<NavLink
						to="/projects"
						className={styles.menu_item}
						onClick={closeMenuOnNavigate}>
						{Tr.tr("translation:Projects")}
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/accessories"
						className={styles.menu_item}
						onClick={closeMenuOnNavigate}>
						{Tr.tr("translation:Accessories")}
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/catalog"
						className={styles.menu_item}
						onClick={closeMenuOnNavigate}>
						{Tr.tr("translation:Catalog")}
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/aluminum-profiles"
						className={styles.menu_item}
						onClick={closeMenuOnNavigate}>
						{Tr.tr("translation:Aluminum_Profiles")}
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/news"
						className={styles.menu_item}
						onClick={closeMenuOnNavigate}>
						{Tr.tr("translation:News")}
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/blogs"
						className={styles.menu_item}
						onClick={closeMenuOnNavigate}>
						{Tr.tr("translation:Blogs")}
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about-us"
						className={styles.menu_item}
						onClick={closeMenuOnNavigate}>
						{Tr.tr("translation:About_Us")}
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/contact-us"
						className={styles.menu_item}
						onClick={closeMenuOnNavigate}>
						{Tr.tr("translation:Contact_Us")}
					</NavLink>
				</li>
			</div>
		</>
	);
};

export default ResponsiveHeader;
