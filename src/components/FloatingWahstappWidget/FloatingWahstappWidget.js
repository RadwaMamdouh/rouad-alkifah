// Styles
import styles from "./FloatingWahstappWidget.module.scss";

const FloatingWahstappWidget = () => {
	const phoneNumber = "01112345678";
	const link = `https://wa.me/${phoneNumber}}`;

	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={styles.whatsapp_widget}>
			<img src="/img/whatsapp.svg" alt="" />
		</a>
	);
};

export default FloatingWahstappWidget;
