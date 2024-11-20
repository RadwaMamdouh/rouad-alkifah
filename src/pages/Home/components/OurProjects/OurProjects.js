// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useTranslation } from "react-i18next";
import { Button } from "primereact/button";

// Styles
import styles from "./OurProjects.module.scss";
import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";

const OurProjects = () => {
	const { i18n } = useTranslation();
	const currLang = i18n.language;

	const projects = [
		{
			img: "/img/project1.svg",
			title: "Fast Execution",
		},
		{
			img: "/img/project2.svg",
			title: "Fast Execution",
		},
		{
			img: "/img/project3.svg",
			title: "Fast Execution",
		},
		{
			img: "/img/project4.svg",
			title: "Fast Execution",
		},
		{
			img: "/img/project1.svg",
			title: "Fast Execution",
		},
	];

	return (
		<div className={styles.our_projects}>
			<div className="container">
				<h2 className="fs_32 fw_700 text-black text-center mbe_4">
					Our Projects
				</h2>
				<div className="hr_red mx-auto"></div>
				<p
					className={`fs_18 fw_500 text-sub text-center mb_24 mx-auto ${styles.maxWidth}`}>
					Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer.
				</p>

				{/* Projects Slider */}
				<div className={styles.projects_slider}>
					<div className="position-relative">
						<Swiper
							key={currLang} // To re-render this component with language change
							dir={currLang === "ar" ? "rtl" : "ltr"}
							// install Swiper modules
							modules={[Pagination, Navigation]}
							slidesPerView={4}
							spaceBetween={24}
							speed={1500}
							loop={true}
							pagination={{ el: ".project-swiper-pagination", clickable: true }}
							navigation={{
								nextEl: ".project-swiper-button-next",
								prevEl: ".project-swiper-button-prev",
							}}
							breakpoints={{
								1200: {
									slidesPerView: 4,
								},
								1024: {
									slidesPerView: 3.5,
								},
								992: {
									slidesPerView: 3.7,
								},
								768: {
									slidesPerView: 2.7,
								},
								575: {
									slidesPerView: 2.1,
								},
								400: {
									slidesPerView: 1.3,
								},
								0: {
									slidesPerView: 1.1,
								},
							}}>
							{projects.map((project, index) => (
								<SwiperSlide key={index}>
									<div className={styles.project_card}>
										<div className={styles.img}>
											<img src={project.img} alt="" />
										</div>
										<h5>{project.title}</h5>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<Button
							icon="pi-angle-left"
							className="project-swiper-button-prev"
						/>
						<Button
							icon="pi-angle-right"
							className="project-swiper-button-next"
						/>
					</div>
					{/* pagination */}
					<div className="project-swiper-pagination"></div>
					{/* Navigation */}
				</div>

				<PrimaryBtn
					btn
					type="button"
					label="View More Projects"
					classes="mx-auto"
				/>
			</div>
		</div>
	);
};

export default OurProjects;
