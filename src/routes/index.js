import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { withTranslation } from "react-i18next";
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import MainLayout from "layouts/MainLayout/MainLayout";
import { AboutUs, Accessories, ContactUs, Home } from "pages";

const AppRouter = () => {
	const router = createBrowserRouter(
		[
			{
				element: <HomeLayout />,
				children: [
					{
						path: "/",
						element: <Home />,
					},
				],
			},
			{
				element: <MainLayout />,
				children: [
					{
						path: "/contact-us",
						element: <ContactUs />,
					},
					{
						path: "/about-us",
						element: <AboutUs />,
					},
					{
						path: "/accessories",
						element: <Accessories />,
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
