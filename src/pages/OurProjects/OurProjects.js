import { useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";
import { Galleria } from "primereact/galleria";

import { Tr } from "utils/i18n";

// Styles
import styles from "./OurProjects.module.scss";

const OurProjects = () => {
	const projects = [
		{
			id: 1,
			img: "/img/project-img1.svg",
		},
		{
			id: 2,
			img: "/img/project-img2.svg",
		},
		{
			id: 3,
			img: "/img/project-img3.svg",
		},
		{
			id: 4,
			img: "/img/project-img4.svg",
		},
		{
			id: 5,
			img: "/img/project-img5.svg",
		},
		{
			id: 6,
			img: "/img/project-img6.svg",
		},
		{
			id: 7,
			img: "/img/project-img7.svg",
		},
		{
			id: 8,
			img: "/img/project-img8.svg",
		},
		{
			id: 9,
			img: "/img/project-img9.svg",
		},
		{
			id: 10,
			img: "/img/project-img10.svg",
		},
		{
			id: 11,
			img: "/img/project-img11.svg",
		},
		{
			id: 12,
			img: "/img/project-img12.svg",
		},
		{
			id: 13,
			img: "/img/project-img13.svg",
		},
		{
			id: 14,
			img: "/img/project-img14.svg",
		},
		{
			id: 15,
			img: "/img/project-img15.svg",
		},
		{
			id: 16,
			img: "/img/project-img16.svg",
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const galleria = useRef(null);

	const itemTemplate = (item) => {
		return (
			<img src={item.img} alt="" style={{ width: "100%", display: "block" }} />
		);
	};

	return (
		<div className={styles.our_projects}>
			<section className={styles.our_projects_head}>
				<div className="container">
					<h1 className="fs_48 fw_800 white text-center mbe_8 lineH_72">
						{Tr.tr("translation:Our_Projects")}
					</h1>
					<div className="hr_red mbe_8 mx-auto"></div>
					<p className="fs_24 fw_500 white text-center">
						{Tr.tr("translation:Our_Projects_Desc")}
					</p>
				</div>
			</section>

			<section className={styles.our_projects_body}>
				<div className="container">
					<div className={styles.project_list}>
						<ResponsiveMasonry
							columnsCountBreakPoints={{ 350: 1, 400: 2, 768: 3, 1199: 4 }}>
							<Masonry columnsCount={4} gutter="8px">
								{projects.map((project, index) => (
									<img
										src={project.img}
										alt=""
										className={styles.project_img}
										key={project.id}
										onClick={() => {
											setActiveIndex(index);
											galleria.current.show();
										}}
									/>
								))}
							</Masonry>
						</ResponsiveMasonry>

						<Galleria
							ref={galleria}
							value={projects}
							numVisible={7}
							style={{ maxWidth: "850px" }}
							activeIndex={activeIndex}
							onItemChange={(e) => setActiveIndex(e.index)}
							circular
							fullScreen
							showItemNavigators
							showThumbnails={false}
							item={itemTemplate}
						/>
					</div>
					<PrimaryBtn
						btn
						type="button"
						label={Tr.tr("translation:Load_More")}
						classes="mx-auto md_w-100"
					/>
				</div>
			</section>
		</div>
	);
};

export default OurProjects;
