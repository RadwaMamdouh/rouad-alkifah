import { Outlet } from "react-router-dom";
import Header from "layouts/Header/Header";
import ResponsiveHeader from "layouts/ResponsiveHeader/ResponsiveHeader";
import Footer from "layouts/Footer/Footer";

// Styles
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
	return (
		<div className={styles.main_layout}>
			<Header />
			<ResponsiveHeader />

			<div className={styles.outer_content}>
				<Outlet />
			</div>

			<Footer />
		</div>
	);
};

export default MainLayout;
