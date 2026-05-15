import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Recycle, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Newsletter = () => {
	const containerRef = useRef(null);
	const leftContentRef = useRef(null);
	const rightContentRef = useRef(null);

	useGSAP(
		() => {
			gsap.from(leftContentRef.current, {
				opacity: 0,
				duration: 1,
				scrollTrigger: {
					trigger: leftContentRef.current,
					start: "top 90%",
					toggleActions: "play none none none",
				},
			});

			gsap.from(rightContentRef.current, {
				opacity: 0,
				scale: 0.9,
				duration: 1,
				scrollTrigger: {
					trigger: rightContentRef.current,
					start: "top 90%",
					toggleActions: "play none none none",
				},
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className="bg-brand-seafoam/40 py-24 px-4 md:px-16"
		>
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
					<div
						ref={leftContentRef}
						className="text-center lg:text-left"
					>
						<h2 className="text-headline-md md:text-headline-lg text-brand-charcoal mb-8 md:mb-10">
							Conscious Luxury, <br />
							Zero Compromise.
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
							<div className="flex flex-col items-center lg:items-start gap-4">
								<Leaf className="w-10 h-10 text-primary" />
								<h4 className="text-label-md text-brand-charcoal font-semibold">
									100% Organic
								</h4>
								<p className="text-xs text-secondary leading-relaxed max-w-xs mx-auto lg:mx-0">
									Certified wild-harvested botanicals
									from ethical cooperatives.
								</p>
							</div>
							<div className="flex flex-col items-center lg:items-start gap-4">
								<Recycle className="w-10 h-10 text-primary" />
								<h4 className="text-label-md text-brand-charcoal font-semibold">
									Carbon Neutral
								</h4>
								<p className="text-xs text-secondary leading-relaxed max-w-xs mx-auto lg:mx-0">
									Reusable glass packaging and
									plastic-free shipping solutions.
								</p>
							</div>
						</div>
					</div>
					<div
						ref={rightContentRef}
						className="bg-surface/50 backdrop-blur-lg p-8 md:p-14 rounded-xl shadow-lg border border-white/30"
					>
						<h3 className="text-headline-md text-brand-charcoal mb-4">
							Join the Inner Circle
						</h3>
						<p className="text-sm md:text-body-lg text-secondary mb-8 md:mb-10 leading-relaxed">
							Receive weekly ritual guidance and exclusive
							early access to our seasonal botanical
							collections.
						</p>
						<form
							className="relative"
							onSubmit={(e) => e.preventDefault()}
						>
							<input
								type="email"
								placeholder="Your email address"
								className="w-full bg-transparent border-0 border-b border-brand-charcoal/30 py-4 pr-12 focus:ring-0 focus:border-primary placeholder:text-secondary/60 text-body-md md:text-body-lg transition-all"
							/>
							<button
								type="submit"
								className="absolute right-0 top-1/2 -translate-y-1/2 text-primary hover:text-brand-charcoal transition-colors"
							>
								<ArrowRight className="w-6 h-6" />
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
