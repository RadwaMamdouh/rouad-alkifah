import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { useTranslation, withTranslation } from "react-i18next";
import { globe } from "icons";

// Styles
import styles from "./LanguageBtn.module.scss";

const LanguageBtn = ({ ...props }) => {
	const { i18n } = useTranslation();
	const currLang = i18n.language;
	document.body.dir = i18n.dir();

	const [smallSize, setSmallSize] = useState(false);

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		document.body.dir = i18n.dir();
	};

	useEffect(() => {
		const handleResize = () => {
			setSmallSize(window.innerWidth < 992);
		};

		// Add event listener for resize
		window.addEventListener("resize", handleResize);
		// window.addEventListener("load", handleResize);

		// Remove event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
			// window.removeEventListener("load", handleResize);
		};
	}, [setSmallSize]);

	return (
		<Button
			text
			type="button"
			className={`${styles.lang_btn} ${props.classes}`}
			onClick={() => changeLanguage(currLang === "ar" ? "en" : "ar")}>
			{globe}
			<span>{currLang === "ar" ? "EN" : smallSize ? "AR" : "Arabic"}</span>
		</Button>
	);
};

export default withTranslation()(LanguageBtn);
