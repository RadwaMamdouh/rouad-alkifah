import { FloatingWhatsApp } from "react-floating-whatsapp";

// Styles
import styles from "./FloatingWahstappWidget.module.scss";

const FloatingWahstappWidget = () => {
	return (
		<FloatingWhatsApp
			phoneNumber="123456789"
			accountName="Foo"
			allowEsc
			allowClickAway
			notification
			notificationSound
			className={styles.whatsapp_widget}
		/>
	);
};

export default FloatingWahstappWidget;
