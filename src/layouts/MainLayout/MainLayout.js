import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import InnerHeader from "layouts/InnerHeader/InnerHeader";
import ResponsiveHeader from "layouts/ResponsiveHeader/ResponsiveHeader";
import Footer from "layouts/Footer/Footer";

import FloatingWahstappWidget from "components/FloatingWahstappWidget/FloatingWahstappWidget";

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
		<>
			<div className={styles.main_layout}>
				<InnerHeader />
				<ResponsiveHeader scrolled={scrolled} />

				<div className={styles.router_content}>
					<Outlet />
				</div>

				<Footer />
			</div>

			{/* Floating Whatsapp Widget */}
			<FloatingWahstappWidget />
		</>
	);
};

export default MainLayout;
