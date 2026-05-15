import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SacredSpacesSection() {
	const sectionRef = useRef(null);
	const contentRef = useRef(null);
	const imageRef = useRef(null);
	const quoteRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.set(".sacred-eyebrow", {
				y: 24,
				opacity: 0,
			});

			gsap.set(".sacred-title", {
				y: 40,
				opacity: 0,
			});

			gsap.set(".sacred-body", {
				y: 28,
				opacity: 0,
			});

			gsap.set(imageRef.current, {
				scale: 1.08,
				opacity: 0,
				x: 60,
			});

			gsap.set(quoteRef.current, {
				y: 24,
				opacity: 0,
				scale: 0.94,
			});

			const tl = gsap.timeline({
				defaults: {
					ease: "power3.out",
				},
			});

			tl.to(".sacred-eyebrow", {
				y: 0,
				opacity: 1,
				duration: 0.7,
			})
				.to(
					".sacred-title",
					{
						y: 0,
						opacity: 1,
						duration: 1,
					},
					"-=0.35",
				)
				.to(
					".sacred-body",
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
					},
					"-=0.5",
				)
				.to(
					imageRef.current,
					{
						x: 0,
						scale: 1,
						opacity: 1,
						duration: 1.4,
					},
					"-=1",
				)
				.to(
					quoteRef.current,
					{
						y: 0,
						scale: 1,
						opacity: 1,
						duration: 0.8,
					},
					"-=0.7",
				);

			/* Floating ambient motion */
			gsap.to(quoteRef.current, {
				y: "-=10",
				duration: 3,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});

			/* Slow image drift */
			gsap.to(imageRef.current, {
				y: "-=12",
				duration: 5,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="
				bg-[#f4f1ea]
				px-5
				sm:px-8
				md:px-12
				lg:px-16
				py-20
				overflow-hidden
			"
		>
			<div className="max-w-[1280px] mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-10 items-center">
					{/* ───────── LEFT ───────── */}
					<div ref={contentRef} className="max-w-[560px]">
						<p
							className="
								sacred-eyebrow
								text-[9px]
								sm:text-[10px]
								tracking-[0.34em]
								font-semibold
								uppercase
								text-[#8A9D99]
								mb-6
							"
						>
							Vol. 04 — The Ritualistic Lifestyle
						</p>

						<h2
							className="
								sacred-title
								font-serif
								text-[#232321]
								leading-[0.98]
								tracking-[-0.045em]

								text-[44px]
								sm:text-[56px]
								md:text-[74px]
								lg:text-[82px]
							"
						>
							Sacred spaces,
							<br />
							<span className="italic font-normal">
								intentional presence.
							</span>
						</h2>

						<p
							className="
								sacred-body
								mt-7
								text-[#6E726D]
								leading-[1.8]

								text-[14px]
								sm:text-[15px]

								max-w-[470px]
							"
						>
							Elevating the mundane through ancient
							Ayurvedic intelligence. A curated collection
							designed for the modern seeker who finds
							luxury in silence.
						</p>
					</div>

					{/* ───────── RIGHT ───────── */}
					<div className="relative flex justify-center lg:justify-end">
						<div
							className="
								relative
								w-full
								max-w-[520px]

								sm:max-w-[560px]
								md:max-w-[620px]
							"
						>
							{/* Main Image */}
							<div
								ref={imageRef}
								className="
									overflow-hidden
									rounded-[6px]
									bg-[#d8c8b3]
									shadow-[0_24px_60px_rgba(0,0,0,0.08)]

									aspect-[0.82]
								"
							>
								<img
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWTlITLXsfkzdYLMD_6DXsHCGqgtP_VOTMuR7acky4sYlpgHm4wm4Gpl_y7c-_1zSi_LP70xrflMHMkpXvjo5aRYS7xsAyyYy8wvtJ7DyzhrLpgDNZKmyvLxJy_HuNY9c4BPVdxqR5bnD4lKU-NoHNdDBQqVVW8RSWXskyznP_ywTPbR8MT0dxgm8VvUtC9-jzWTCF0fa6J7yh6wExurJ7AkIAPTD9K2YfJDGeVVwIPvjaqUk88exjyFipzj9fqt2QOBoP6xUe-i9s"
									alt="Sacred incense space"
									className="
										w-full
										h-full
										object-cover
										scale-[1.02]
									"
								/>
							</div>

							{/* Floating Quote Card */}
							<div
								ref={quoteRef}
								className="
									absolute

									-bottom-8
									left-[-8px]

									sm:left-[-24px]
									md:left-[-40px]

									bg-[#A8DADC]
									text-[#426765]

									w-[220px]
									sm:w-[260px]

									p-5
									sm:p-6

									rounded-[8px]

									shadow-[0_18px_40px_rgba(0,0,0,0.08)]
								"
							>
								<p
									className="
										text-[13px]
										sm:text-[14px]
										leading-[1.7]
										font-medium
									"
								>
									“The ritual is the bridge between
									the self and the infinite.”
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
