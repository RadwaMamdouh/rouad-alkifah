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
			name: "Doors",
			items: [
				{ id: 1, label: "Bathroom doors" },
				{ id: 2, label: "Entrance doors" },
			],
		},
		{
			name: "Windows",
			items: [
				{ id: 3, label: "Fixed Windows" },
				{ id: 4, label: "Sliding Windows" },
				{ id: 5, label: "Tilt Windows" },
				{ id: 6, label: "Tilt and turn windows" },
			],
		},
		{
			name: "Building facades",
			items: [
				{ id: 7, label: "Structure system" },
				{ id: 8, label: "Curtain wall system" },
				{ id: 9, label: "Cladding system" },
			],
		},
		{
			id: 10,
			label: "Domes",
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
						<AccordionTab header="Products">
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
						to="/maintenance"
						className={styles.menu_item}
						onClick={closeMenuOnNavigate}>
						{Tr.tr("translation:Maintenance")}
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
