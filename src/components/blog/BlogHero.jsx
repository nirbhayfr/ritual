import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function BlogHero() {
	const containerRef = useRef(null);
	const elementsRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline();
			tl.from("img", {
				scale: 1.2,
				duration: 2.5,
				ease: "power2.out",
			}).from(
				".hero-content > *",
				{
					y: 60,
					opacity: 0,
					stagger: 0.2,
					duration: 1.2,
					ease: "power4.out",
				},
				"-=1.8",
			);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={containerRef}
			className="relative w-full h-screen overflow-hidden flex items-end"
		>
			<img
				src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFoUvkPmjlZGS80v0TZxFfmV01OLtrNSehdwxM-vUQhwISAsq2lr7PGad4i1nigroOZYoNqrZtFcbf5_dPB6aUyGxb6YjYncuoSkeEdo0V8PXm9AAd86P_fZYC73Fyb0aGVRCOs1eH_mO0SKlzEMIpyrm3Zq3ETl6dkwXPLW-qmGR7aWwmeeH93SVy_jDibwXEdWD2-OvKQ7nROcdzuSF2VaR4gKi0Rbzo9zPBErbjtu_qkrss8LldnbSxtUiGqUw5TpCzz6Ze642S"
				alt="The Architecture of Stillness"
				className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
				referrerPolicy="no-referrer"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent"></div>

			<div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop pb-24 pt-12 px-12">
				<div className="max-w-3xl hero-content">
					<span className="text-label-md text-primary mb-6 block">
						Philosophy • 12 Min Read
					</span>
					<h1 className="text-display-lg mb-8 text-on-surface leading-[1.05]">
						The Architecture of Stillness:{" "}
						<br className="hidden md:block" />
						Finding Ritual in Modern Chaos
					</h1>
					<p className="text-body-lg text-on-surface-variant mb-12 max-w-xl leading-relaxed">
						An exploration of how ancient Ayurvedic principles
						of DINACHARYA integrate into the high-frequency
						demands of contemporary urban life.
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
						className="bg-primary text-on-primary px-12 py-5 text-label-md uppercase tracking-widest hover:bg-primary/90 transition-colors cursor-pointer"
					>
						Read Investigation
					</motion.button>
				</div>
			</div>
		</section>
	);
}
