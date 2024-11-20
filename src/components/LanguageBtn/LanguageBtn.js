import { Button } from "primereact/button";
import { useTranslation, withTranslation } from "react-i18next";
import { globe } from "icons";

// Styles
import styles from "./LanguageBtn.module.scss";

const LanguageBtn = ({ ...props }) => {
	const { i18n } = useTranslation();
	const currLang = i18n.language;
	document.body.dir = i18n.dir();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		document.body.dir = i18n.dir();
	};

	return (
		<Button
			text
			type="button"
			className={`${styles.lang_btn} ${props.classes}`}
			onClick={() => changeLanguage(currLang === "ar" ? "en" : "ar")}>
			{globe}
			<span>{currLang === "ar" ? "EN" : "Arabic"}</span>
		</Button>
	);
};

export default withTranslation()(LanguageBtn);
