import { Image } from "primereact/image";

import { Tr } from "utils/i18n";

// Styles
import styles from "./OurCertificates.module.scss";

const OurCertificates = () => {
	return (
		<section className={styles.our_certificates}>
			<div className="container">
				<div className="mbe_32">
					<h2 className="fs_32 fw_700 black text-center mbe_4">
						{Tr.tr("translation:Our_Certificates")}
					</h2>
					<div className="hr_red mx-auto"></div>
				</div>

				<div className="row">
					<div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
						<div className={styles.certificate_card}>
							<Image
								src="/img/certificate1.svg"
								alt=""
								preview
								zoomSrc="/img/certificate1-full.svg"
							/>
						</div>
					</div>
					<div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
						<div className={styles.certificate_card}>
							<Image
								src="/img/certificate2.svg"
								alt=""
								preview
								zoomSrc="/img/certificate2-full.svg"
							/>
						</div>
					</div>
					<div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
						<div className={styles.certificate_card}>
							<Image
								src="/img/certificate3.svg"
								alt=""
								preview
								zoomSrc="/img/certificate3-full.svg"
							/>
						</div>
					</div>
					<div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
						<div className={styles.certificate_card}>
							<Image
								src="/img/certificate4.svg"
								alt=""
								preview
								zoomSrc="/img/certificate4-full.svg"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurCertificates;
