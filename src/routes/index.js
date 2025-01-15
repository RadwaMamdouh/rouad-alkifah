import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { withTranslation } from "react-i18next";
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import MainLayout from "layouts/MainLayout/MainLayout";
import {
	AboutUs,
	Accessories,
	AluminumProfiles,
	Catalog,
	ContactUs,
	Home,
	OurProducts,
	OurProjects,
} from "pages";

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
					{
						path: "/products/:id",
						element: <OurProducts />,
					},
					{
						path: "/catalog",
						element: <Catalog />,
					},
					{
						path: "/projects",
						element: <OurProjects />,
					},
					{
						path: "/aluminum-profiles",
						element: <AluminumProfiles />,
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
