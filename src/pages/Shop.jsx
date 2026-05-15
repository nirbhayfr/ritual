import BestSellers from "../components/shop/BestSellers";
import BundleSection from "../components/shop/BundleSection";
import CollectionSection from "../components/shop/CollectionSection";
import SacredSpacesSection from "../components/shop/SacredSpace";

function Shop() {
	return (
		<main>
			<SacredSpacesSection />
			<BestSellers />
			<BundleSection />
			<CollectionSection />
		</main>
	);
}

export default Shop;
