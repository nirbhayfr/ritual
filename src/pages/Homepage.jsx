import BioActiveSection from "../components/homepage/BioActiveSection";
import BotanicalTrinity from "../components/homepage/BotanicalTrinity";
import Deepdive from "../components/homepage/Deepdive";
import Hero from "../components/homepage/Hero";
import RitualsOfSourcing from "../components/homepage/RitualsOfSourcing";
import SourceSection from "../components/homepage/Source";
import VesselOfBreath from "../components/homepage/VesselOfBreath";

function Homepage() {
	return (
		<main>
			<Hero />
			<BotanicalTrinity />
			<Deepdive />
			<RitualsOfSourcing />
			<SourceSection />
			<BioActiveSection />
			<VesselOfBreath />
		</main>
	);
}

export default Homepage;
