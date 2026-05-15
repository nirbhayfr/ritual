import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Droplets, Brain } from "lucide-react";

const IMAGES = {
	ingredient1:
		"https://lh3.googleusercontent.com/aida-public/AB6AXuBI_C0La1dG2sWZhKCydjdXHLW8rIesxWnjaO8mmkKzbwMMydWnk4f_LFEHNKiGaeDutoZvZRKsgAFTnotOBjpB0LrJ88k6j9aHVDRlEJzCbD9KDbAcQ-dPOwvp123arQFMZRwu09oqAdUm74S3ELtidTHs10KrpeTRp9BohTuXFufEwrTGIuLIJo4D3-85RGTNML5zXEc_kJUhL-nCtS98B3WVt12oRnugXBnjg5j_Dh7ODt28Yzg3DwIJRiBHfUxxVai9fhRN4ekH",
	ingredient2:
		"https://lh3.googleusercontent.com/aida-public/AB6AXuBQyd4_Bux1mH48zvJB6CSYwm4V-MivmG2h9X7P2iCMzFbpTTZBCp33Px0EWvo5rEPOxfJfzye_FX_uSiapFt4W1xqZMlmDUeDEsoEZwkU6g0ax2dkyBa6qPbPEPfHO6dwTHF-X6HGaXVhIXgv-GrMqsaG55bHOSktiOW9R-0XRsFHeZzAQatwBd_pWn5FfvRsL6F_3siXpCqf1SK6ytXfDwOpaymL8jAKGJb1MdIFtTInods6b712NK-WC2hqRbFlQV6g1ns95Age4",
};

gsap.registerPlugin(ScrollTrigger);

export default function SourceSection() {
	const containerRef = useRef(null);
	const itemsRef = useRef([]);
	const img1Ref = useRef(null);
	const img2Ref = useRef(null);

	useGSAP(
		() => {
			itemsRef.current.forEach((item, i) => {
				if (!item) return;
				gsap.from(item, {
					opacity: 0,
					y: 20,
					duration: 0.8,
					delay: i * 0.1,
					scrollTrigger: {
						trigger: item,
						start: "top 90%",
						toggleActions: "play none none none",
					},
				});
			});

			if (img1Ref.current) {
				gsap.to(img1Ref.current, {
					y: -20,
					duration: 2,
					repeat: -1,
					yoyo: true,
					ease: "power1.inOut",
				});
			}

			if (img2Ref.current) {
				gsap.to(img2Ref.current, {
					y: 20,
					duration: 2,
					repeat: -1,
					yoyo: true,
					ease: "power1.inOut",
					delay: 1,
				});
			}
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className="py-[60px] md:py-[120px] px-4 md:px-[64px] bg-surface"
		>
			<div className="max-w-[1280px] mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
					<div className="lg:col-span-5 text-center md:text-left">
						<h2 className="text-headline-md md:text-headline-lg text-on-surface mb-8 md:mb-10">
							The Source:{" "}
							<br className="hidden md:block" />
							Sacred Ingredients
						</h2>
						<div className="space-y-8 md:space-y-12">
							{[
								{
									icon: Leaf,
									title: "Wild-Harvested Ashwagandha",
									text: "Ethically sourced from small cooperatives in the foothills of the Himalayas, ensuring maximum potency.",
								},
								{
									icon: Droplets,
									title: "Hand-Pressed Kumkumadi",
									text: "A luminous blend of saffron and 26 rare botanicals, prepared over 12 days according to ancient classical texts.",
								},
								{
									icon: Brain,
									title: "Conscious Chemistry",
									text: "Bridging traditional wisdom with modern bioavailability, our extracts are formulated for maximum skin absorption.",
								},
							].map((item, i) => (
								<div
									key={i}
									ref={(el) =>
										(itemsRef.current[i] = el)
									}
									className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 group"
								>
									<div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-brand-stone rounded-full flex items-center justify-center text-primary group-hover:bg-brand-seafoam transition-colors duration-300">
										<item.icon className="w-5 h-5 md:w-6 md:h-6" />
									</div>
									<div>
										<h4 className="text-label-md text-on-surface mb-2 font-semibold md:font-normal">
											{item.title}
										</h4>
										<p className="text-xs md:text-body-md text-secondary leading-relaxed max-w-md mx-auto md:mx-0">
											{item.text}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="lg:col-span-7">
						<div className="grid grid-cols-2 gap-4 md:gap-6">
							<div
								ref={img1Ref}
								className="mt-6 md:mt-12 rounded-xl overflow-hidden aspect-square shadow-xl"
							>
								<img
									src={IMAGES.ingredient1}
									alt="Ingredients"
									className="w-full h-full object-cover"
									referrerPolicy="no-referrer"
								/>
							</div>
							<div
								ref={img2Ref}
								className="rounded-xl overflow-hidden aspect-square shadow-xl"
							>
								<img
									src={IMAGES.ingredient2}
									alt="Saffron"
									className="w-full h-full object-cover"
									referrerPolicy="no-referrer"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
