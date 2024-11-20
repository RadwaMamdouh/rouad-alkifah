import { useEffect, useState } from "react";
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

// Styles
import styles from "./Header.module.scss";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setScrolled(scrollTop > 20); // Add class when scrolled 50px down
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

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
								<span>info@rouad-alkafah.sa</span>
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
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/products">Products</NavLink>
							</li>
							<li>
								<NavLink to="/projects">Projects</NavLink>
							</li>
							<li>
								<NavLink to="/maintenance">Maintenance</NavLink>
							</li>
							<li>
								<NavLink to="/news">News</NavLink>
							</li>
							<li>
								<NavLink to="/blogs">Blogs</NavLink>
							</li>
							<li>
								<NavLink to="/about-us">About Us</NavLink>
							</li>
							<li>
								<NavLink to="/contact-us">Contact Us</NavLink>
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
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/products">Products</NavLink>
							</li>
							<li>
								<NavLink to="/projects">Projects</NavLink>
							</li>
							<li>
								<NavLink to="/maintenance">Maintenance</NavLink>
							</li>
							<li>
								<NavLink to="/news">News</NavLink>
							</li>
							<li>
								<NavLink to="/blogs">Blogs</NavLink>
							</li>
							<li>
								<NavLink to="/about-us">About Us</NavLink>
							</li>
							<li>
								<NavLink to="/contact-us">Contact Us</NavLink>
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
