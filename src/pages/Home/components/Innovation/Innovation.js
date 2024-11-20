// Styles
import styles from "./Innovation.module.scss";

const Innovation = () => {
	return (
		<div className={styles.innovation}>
			<div className={styles.img}>
				<img src="/img/innovation.svg" alt="" />
			</div>
			<div className={styles.text_side}>
				<img
					src="/img/innovation-float1.svg"
					alt=""
					className={styles.float1}
				/>
				<img
					src="/img/innovation-float2.svg"
					alt=""
					className={styles.float2}
				/>
				<div className="position-relative d-flex flex-column gap_10">
					<h3>
						Commitment to Excellence and Innovation in Aluminum Manufacturing
					</h3>
					<div className="hr_red"></div>
					<p>
						Expertise in dedication, excellence, and development, allowing us to
						offer our clients what sets us apart in the field of aluminum
						manufacturing.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Innovation;
