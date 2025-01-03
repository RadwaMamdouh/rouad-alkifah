// Styles
import styles from "./Samples.module.scss";

const Samples = () => {
	const samples = [
		{
			id: 1,
			image: "/img/sample1.svg",
			title: "We make things simple",
			desc: "Simplicity is often the key to creating great designs and projects. It helps in making ideas more accessible and solutions more user-friendly.",
		},
		{
			id: 2,
			image: "/img/sample2.svg",
			title: "Never compromise on quality",
			desc: "That's a powerful principle! Combining simplicity with uncompromised quality is a great approach. It ensures that even though things are made straightforward, they still meet the highest standards.",
		},
		{
			id: 3,
			image: "/img/sample3.svg",
			title: "Deadline is essential to us",
			desc: "Meeting deadlines while maintaining high quality and simplicity is a remarkable combination. It reflects a strong work ethic.",
		},
	];

	return (
		<div className={styles.samples}>
			<div className="container">
				<div className="row">
					{samples.map((sample) => (
						<div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={sample.id}>
							<div className={styles.sample_card}>
								<div className={styles.img}>
									<img src={sample.image} alt="" />
								</div>
								<h5 className="fs_20 fw_700 primary mb_8 text-center">
									{sample.title}
								</h5>
								<p className="fs_16 fw_500 text text-center">{sample.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Samples;
