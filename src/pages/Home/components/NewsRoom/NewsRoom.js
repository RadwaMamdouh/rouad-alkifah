import WhiteBtn from "components/WhiteBtn/WhiteBtn";

// Styles
import styles from "./NewsRoom.module.scss";

const NewsRoom = () => {
	return (
		<div className={styles.news_room}>
			<div className="container">
				<div className="mb_32">
					<h2 className="fs_32 fw_700 white text-center mb_4">Newsroom</h2>
					<div className="hr_red mx-auto"></div>
				</div>
				<div className={styles.rooms}>
					<div className={styles.room_card}>
						<div className={styles.img}>
							<img src="/img/room1.svg" alt="" />
						</div>
						<div className={styles.text}>
							<p>25 Feb 2026</p>
							<h5>
								South32's aluminium production and asset sale highlight a strong
								start to FY25
							</h5>
						</div>
					</div>
					<div className={styles.small_boxes}>
						<div className={`${styles.room_card} ${styles.small_card}`}>
							<div className={styles.img}>
								<img src="/img/room2.svg" alt="" />
							</div>
							<div className={styles.text}>
								<p>25 Feb 2026</p>
								<h5>
									South32's aluminium production and asset sale highlight a
									strong start to FY25
								</h5>
							</div>
						</div>
						<div className={`${styles.room_card} ${styles.small_card}`}>
							<div className={styles.img}>
								<img src="/img/room5.svg" alt="" />
							</div>
							<div className={styles.text}>
								<p>25 Feb 2026</p>
								<h5>
									South32's aluminium production and asset sale highlight a
									strong start to FY25
								</h5>
							</div>
						</div>
						<div className={`${styles.room_card} ${styles.small_card}`}>
							<div className={styles.img}>
								<img src="/img/room3.svg" alt="" />
							</div>
							<div className={styles.text}>
								<p>25 Feb 2026</p>
								<h5>
									South32's aluminium production and asset sale highlight a
									strong start to FY25
								</h5>
							</div>
						</div>
						<div className={`${styles.room_card} ${styles.small_card}`}>
							<div className={styles.img}>
								<img src="/img/room4.svg" alt="" />
							</div>
							<div className={styles.text}>
								<p>25 Feb 2026</p>
								<h5>
									South32's aluminium production and asset sale highlight a
									strong start to FY25
								</h5>
							</div>
						</div>
					</div>
				</div>

				<WhiteBtn
					btn
					type="button"
					label="View More Newsroom"
					classes="mx-auto"
				/>
			</div>
		</div>
	);
};

export default NewsRoom;
