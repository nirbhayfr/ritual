import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const StillnessSection = () => {
	const sectionRef = useRef(null);
	const leftColRef = useRef(null);
	const rightColRef = useRef(null);

	useGSAP(
		() => {
			gsap.from(leftColRef.current, {
				opacity: 0,
				x: -30,
				duration: 1,
				scrollTrigger: {
					trigger: leftColRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			});

			gsap.from(rightColRef.current, {
				opacity: 0,
				x: 30,
				duration: 1,
				scrollTrigger: {
					trigger: rightColRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			});
		},
		{ scope: sectionRef },
	);

	return (
		<section
			ref={sectionRef}
			className="py-[60px] md:py-[120px] px-4 md:px-[64px] overflow-hidden"
		>
			<div className="max-w-[1280px] mx-auto">
				<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
					<div
						ref={leftColRef}
						className="w-full md:w-1/2 relative"
					>
						<div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm relative z-10">
							<img
								src="/stillness.png"
								alt="Meditation Archway"
								className="w-full h-full object-cover"
								referrerPolicy="no-referrer"
							/>
						</div>
						<div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 w-32 md:w-64 h-32 md:h-64 bg-brand-seafoam rounded-xl z-0" />
					</div>
					<div
						ref={rightColRef}
						className="w-full md:w-1/2 text-center md:text-left"
					>
						<span className="text-label-sm md:text-label-md text-secondary tracking-[0.3em] mb-4 md:mb-6 block uppercase">
							Editorial 01
						</span>
						<h2 className="text-headline-md md:text-headline-lg text-on-surface mb-6 md:mb-8 leading-tight">
							The Art of Stillness: A Modern Ritual
						</h2>
						<p className="text-body-md md:text-body-lg text-on-surface-variant mb-6 leading-relaxed">
							In a world defined by velocity, silence is
							the ultimate luxury. VEDA RITUAL was born
							from the belief that beauty isn't a result,
							but a process—a sequence of intentional
							moments that ground the spirit.
						</p>
						<p className="text-body-sm md:text-body-md text-secondary mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
							Our philosophy blends the 5,000-year-old
							healing system of Ayurveda with a
							contemporary aesthetic sensibility. Every
							product is a tool for presence, designed to
							transform mundane routines into sacred
							ceremonies.
						</p>
						<button className="border border-on-surface text-on-surface px-8 md:px-10 py-3 md:py-4 text-label-md rounded-lg hover:bg-on-surface hover:text-surface transition-all w-full sm:w-auto">
							Read Philosophy
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
