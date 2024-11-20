import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { withTranslation } from "react-i18next";
import MainLayout from "layouts/MainLayout/MainLayout";
import { Home } from "pages";

const AppRouter = () => {
	const router = createBrowserRouter(
		[
			{
				element: <MainLayout />,
				children: [
					{
						path: "/",
						Component: Home,
					},
				],
			},
		],
		{
			future: {
				v7_startTransition: true, // Enable the v7 future flag
			},
		}
	);

	return <RouterProvider router={router}></RouterProvider>;
};

export default withTranslation()(AppRouter);
