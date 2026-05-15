import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function RitualsOfSourcing() {
	const sectionRef = useRef(null);
	const mainCardRef = useRef(null);
	const sideCardsRef = useRef([]);
	const imageRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			/* Initial states */
			gsap.set(".ritual-heading", {
				y: 40,
				opacity: 0,
			});

			gsap.set(mainCardRef.current, {
				y: 60,
				opacity: 0,
				scale: 0.96,
			});

			gsap.set(sideCardsRef.current, {
				x: 40,
				opacity: 0,
			});

			gsap.set(imageRef.current, {
				scale: 1.12,
			});

			/* Timeline */
			const tl = gsap.timeline({
				defaults: {
					ease: "power3.out",
				},
			});

			tl.to(".ritual-heading", {
				y: 0,
				opacity: 1,
				duration: 0.9,
				stagger: 0.12,
			})
				.to(
					mainCardRef.current,
					{
						y: 0,
						opacity: 1,
						scale: 1,
						duration: 1.1,
					},
					"-=0.45",
				)
				.to(
					imageRef.current,
					{
						scale: 1,
						duration: 1.8,
						ease: "power2.out",
					},
					"-=1",
				)
				.to(
					sideCardsRef.current,
					{
						x: 0,
						opacity: 1,
						duration: 0.9,
						stagger: 0.14,
					},
					"-=1.1",
				);
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="bg-brand-cream py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden"
		>
			<div className="max-w-[1240px] mx-auto">
				{/* Header */}
				<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 md:mb-14">
					<div className="max-w-[700px]">
						<h2 className="ritual-heading font-serif text-[34px] sm:text-[42px] md:text-[52px] leading-[0.95] text-[#1d1d1b] tracking-[-0.03em]">
							Rituals of Sourcing
						</h2>

						<p className="ritual-heading mt-3 text-[13px] sm:text-[14px] text-[#5c5c58] leading-[1.7] max-w-[520px]">
							Three pillars of the VEDA method, each
							aligned to the celestial clock.
						</p>
					</div>

					<button className="ritual-btn hidden md:flex relative overflow-hidden mt-2 items-center gap-2 text-[10px] tracking-[0.24em] uppercase text-[#2f5e5c] pb-1 transition-all duration-500 group self-start">
						<span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#2f5e5c]/20" />

						<span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#2f5e5c] transition-all duration-700 group-hover:w-full" />

						<span className="relative transition-transform duration-300 group-hover:-translate-y-[1px]">
							Shop All Rituals
						</span>

						<ArrowRight className="relative w-3.5 h-3.5 transition-all duration-500 group-hover:translate-x-1" />
					</button>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 xl:grid-cols-[1.9fr_0.92fr] gap-4">
					{/* Main Card */}
					<div
						ref={mainCardRef}
						className="group relative min-h-[420px] sm:min-h-[520px] xl:min-h-[620px] border border-[#d9d2c8] bg-[#f7f3ec] overflow-hidden will-change-transform"
					>
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,218,220,0.08),transparent_35%)]" />

						<div className="relative h-full overflow-hidden">
							{/* Background Image */}
							<img
								ref={imageRef}
								src="/bottle.png"
								alt="Midnight Bloom Serum"
								className="absolute inset-0 h-full w-full object-cover object-center max-sm:object-[85%_center]"
							/>

							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

							<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,218,220,0.18),transparent_40%)]" />

							{/* Content */}
							<div className="relative h-full flex flex-col justify-between p-5 sm:p-7 md:p-8">
								<div>
									<span className="text-[9px] sm:text-[10px] tracking-[0.26em] uppercase text-brand-seafoam">
										Peak Collection
									</span>

									<h3 className="mt-3 md:mt-4 font-serif text-[36px] sm:text-[48px] md:text-[58px] leading-[0.92] tracking-[-0.04em] text-brand-cream max-w-[420px]">
										Midnight Bloom Serum
									</h3>

									<p className="mt-4 md:mt-5 max-w-[320px] text-[13px] sm:text-[14px] leading-[1.7] text-brand-cream/80">
										Harvested exclusively during
										the 72-hour window of the Full
										Moon peak.
									</p>
								</div>

								<div className="flex items-end justify-between gap-4">
									<span className="font-serif text-[28px] sm:text-[34px] text-brand-cream">
										$142.00
									</span>

									<button className="group/arrow flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-brand-seafoam hover:border-brand-seafoam transition-all duration-300 flex-shrink-0">
										<ArrowRight className="w-5 h-5 text-brand-cream group-hover/arrow:text-brand-charcoal transition-colors" />
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Side Stack */}
					<div className="flex flex-col sm:flex-row xl:flex-col gap-4">
						{/* Dark Card */}
						<div
							ref={(el) => (sideCardsRef.current[0] = el)}
							className="relative overflow-hidden bg-[#2a2722] min-h-[220px] sm:min-h-[260px] xl:flex-1 p-6 md:p-7 flex flex-col justify-between flex-1"
						>
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,218,220,0.08),transparent_40%)]" />

							<div className="relative">
								<h4 className="font-serif text-[30px] md:text-[34px] leading-[0.95] text-brand-cream">
									Lunar Almanac
								</h4>

								<p className="mt-4 md:mt-5 max-w-[240px] text-[13px] leading-[1.8] text-[#d7d0c6]/70">
									A physical guide to aligning your
									skincare with the phases of the
									moon.
								</p>
							</div>

							<button className="relative h-[42px] sm:h-[44px] bg-brand-cream text-[#1f1f1b] text-[10px] uppercase tracking-[0.24em] font-semibold hover:bg-white transition-colors mt-8">
								Join Waitlist
							</button>
						</div>

						{/* Teal Card */}
						<div
							ref={(el) => (sideCardsRef.current[1] = el)}
							className="relative overflow-hidden bg-brand-seafoam min-h-[220px] sm:min-h-[260px] xl:flex-1 p-6 md:p-7 flex flex-col justify-between flex-1"
						>
							<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />

							<div className="relative">
								<h4 className="font-serif text-[30px] md:text-[34px] leading-[0.95] text-[#31514f]">
									Root Essence
								</h4>

								<p className="mt-4 md:mt-5 max-w-[220px] text-[13px] leading-[1.8] text-[#4f6665]">
									Subterranean nutrients harvested at
									the New Moon.
								</p>
							</div>

							<button className="relative inline-flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase text-[#31514f] font-semibold">
								Shop Now
							</button>
						</div>
					</div>
				</div>

				{/* Mobile CTA */}
				<button className="md:hidden mt-8 flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase text-[#2f5e5c] border-b border-[#2f5e5c]/40 pb-1">
					Shop All Rituals
				</button>
			</div>
		</section>
	);
}
