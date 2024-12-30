import ContactInfo from "./components/ContactInfo/ContactInfo";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";
import GoogleMapBox from "./components/GoogleMapBox/GoogleMapBox";

// Styles
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
		validate: (data) => {
			let errors = {};

			if (!data.name) {
				errors.name = "Name is required.";
			}

			return errors;
		},
		onSubmit: (data, { setSubmitting }) => {
			console.log("submitted");
			setTimeout(() => {
				setSubmitting(false);
				formik.resetForm();
			}, 2000);
		},
	});

	return (
		<div className={styles.contact_us}>
			<div className={styles.contact_us_head}>
				<div className="container">
					<h1 className="fs_48 fw_800 white text-center mbe_8 lineH_72">
						Contacts Us
					</h1>
					<div className="hr_red mbe_8 mx-auto"></div>
					<p className="fs_24 fw_500 white text-center">
						Get in touch with us however you prefer, we're here to help you
					</p>
				</div>
			</div>

			<div className={styles.contact_us_body}>
				<div className="container">
					<div className={styles.contact_box}>
						<div className="row">
							<div className="col-md-6 d-none d-md-block">
								<ContactInfo />
							</div>
							<div className={`col-md-6 ${styles.contact_form}`}>
								<h2 className="fs_18 fw_700 primary pb_8 mb-4 bb_1_secondary">
									Any Questions ? Just write us a message!
								</h2>
								<form onSubmit={formik.handleSubmit}>
									<div className="row">
										<div className="col-md-12 mb-3">
											<InputText
												name="name"
												placeholder="Enter Your Name"
												value={formik.values.name}
												onChange={formik.handleChange}
												className="input"
											/>
										</div>
										<div className="col-md-6 mb-3">
											<InputText
												placeholder="Enter Your Email"
												value={formik.values.email}
												onChange={formik.handleChange}
												className="input"
											/>
										</div>
										<div className="col-md-6 mb-3">
											<InputText
												placeholder="Enter Your Phone Number"
												value={formik.values.phone}
												onChange={formik.handleChange}
												className="input"
											/>
										</div>
										<div className="col-md-12 mb-3">
											<InputTextarea
												placeholder="Enter Your Message"
												value={formik.values.message}
												onChange={formik.handleChange}
												className="textArea"
											/>
										</div>
										<div className="col-md-12">
											<PrimaryBtn
												btn
												type="submit"
												label="Send Message"
												classes="w-100"
											/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="d-block d-md-none mt-3">
					<ContactInfo />
				</div>
			</div>

			{/* Our Location */}
			<div className="mbs_48">
				<div className="container">
					<h2 className="fs_32 fw_700 black text-center lineH_48">
						Our Location
					</h2>
					<div className="hr_red mbe_32 mx-auto"></div>
				</div>

				{/* Map */}
				<GoogleMapBox />
			</div>
		</div>
	);
};

export default ContactUs;
