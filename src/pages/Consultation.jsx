import BookingSection from "../components/consultation/BookingSection";
import ConsultationHero from "../components/consultation/ConsultationHero";
import Form from "../components/consultation/Form";
import Transform from "../components/consultation/Transform";

function Consultation() {
	return (
		<main>
			<ConsultationHero />
			<Form />
			<BookingSection />
			<Transform />
		</main>
	);
}

export default Consultation;
