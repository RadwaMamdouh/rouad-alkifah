import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next, Trans } from "react-i18next";
import lang from "assets/lang";

const updateDocumentDirection = (lng) => {
	const isRTL = lng === "ar";
	window.document.body.dir = isRTL ? "rtl" : "ltr";
};

// Initialize i18n
i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init(
		{
			// we init with resources
			resources: lang,
			fallbackLng: "en",
			// lng: localStorage.getItem("i18nextLng") || "ar", // default
			lng: localStorage.getItem("i18nextLng") || "en", // default
			debug: true,

			// have a common namespace used around the full app
			ns: ["basic"],
			defaultNS: "basic",

			keySeparator: false, // we use content as keys

			interpolation: {
				escapeValue: false,
			},
		},
		() => {
			// Initial direction setup
			updateDocumentDirection(i18n.language);
		}
	);

// Update language direction on change
i18n.on("languageChanged", (lng) => {
	updateDocumentDirection(lng);
	localStorage.setItem("i18nextLng", lng);
});

export default i18n;

// Custom Trans wrapper
const Tr = ({ tr, children, ...rest }) => (
	<Trans i18nKey={tr} {...rest}>
		{children}
	</Trans>
);

Tr.tr = (key, options) => i18n.t(key, options);

export { Tr };
