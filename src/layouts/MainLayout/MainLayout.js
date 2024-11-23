import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "layouts/Header/Header";
import ResponsiveHeader from "layouts/ResponsiveHeader/ResponsiveHeader";
import Footer from "layouts/Footer/Footer";

// Styles
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
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
		<div className={styles.main_layout}>
			<Header scrolled={scrolled} />
			<ResponsiveHeader scrolled={scrolled} />

			<div className={styles.outer_content}>
				<Outlet />
			</div>

			<Footer />
		</div>
	);
};

export default MainLayout;
