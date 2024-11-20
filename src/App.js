import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";

// import i18n (needs to be bundled ;))
import "./utils/i18n";

// Routes
import AppRouter from "./routes";

import "./App.scss";

function App() {
	const value = {
		ripple: true,
	};

	return (
		<PrimeReactProvider value={value}>
			<AppRouter />
		</PrimeReactProvider>
	);
}

export default App;
