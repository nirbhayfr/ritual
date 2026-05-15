import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Droplets, Microscope } from "lucide-react";
import { useRef } from "react";

// ─── Design tokens ─────────────────────────────────────────────
const t = {
	fontSerif: "'Playfair Display', serif",
	fontSans: "'Manrope', sans-serif",
	surface: "#fef9f0",
	surfaceContainerLow: "#f8f3eb",
	inversesSurface: "#32302b",
	onSurface: "#1d1c17",
	secondary: "#5f5e5b",
	surfaceContainerHighest: "#e7e2da",
	outline: "#707979",
	primary: "#356668",
	primaryContainer: "#a8dadc",
	inversePrimary: "#9ecfd1",
};

// ─── Keyframes ─────────────────────────────────────────────────
const keyframeStyle = `
@keyframes rotate-slow {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}

@keyframes rotate-slow-reverse {
	from { transform: rotate(0deg); }
	to { transform: rotate(-360deg); }
}

@keyframes pulse {
	0%,100% { opacity: .7; transform: scale(1); }
	50% { opacity: 1; transform: scale(1.04); }
}
`;

function Deepdive() {
	gsap.registerPlugin(ScrollTrigger);

	const containerRef = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				defaults: { ease: "power3.out" },
			});

			tl.from(".hero-content > *", {
				y: 30,
				opacity: 0,
				duration: 0.8,
				stagger: 0.1,
			});

			tl.from(
				".benefit-tag",
				{
					scale: 0.8,
					opacity: 0,
					duration: 0.6,
					stagger: 0.1,
				},
				"-=0.4",
			);

			tl.from(
				".hero-visual",
				{
					scale: 0.8,
					opacity: 0,
					duration: 1.2,
				},
				"-=0.8",
			);

			tl.from(
				".detail-marker",
				{
					y: 20,
					opacity: 0,
					duration: 0.8,
					stagger: 0.2,
				},
				"-=0.6",
			);
		},
		{ scope: containerRef },
	);

	return (
		<>
			<style>{keyframeStyle}</style>

			<section
				ref={containerRef}
				className="
					overflow-hidden
					px-5
					sm:px-8
					md:px-12
					lg:px-16
					py-20
					md:py-28
					max-w-[1280px]
					mx-auto
				"
			>
				<div
					className="
						grid
						grid-cols-1
						lg:grid-cols-[5fr_7fr]
						gap-16
						lg:gap-12
						items-center
					"
				>
					{/* ── LEFT ───────────────────────── */}
					<div className="hero-content relative z-10 order-2 lg:order-1">
						<div className="mb-8 md:mb-10">
							<span
								className="
									block
									mb-4
									text-[10px]
									md:text-[11px]
									uppercase
									tracking-[0.2em]
								"
								style={{
									fontFamily: t.fontSans,
									color: t.primary,
								}}
							>
								The Sourcing Protocol
							</span>

							<h1
								className="
									text-[38px]
									sm:text-[48px]
									md:text-[64px]
									lg:text-[52px]
									xl:text-[64px]
									leading-[1.05]
									mb-6
									md:mb-8
								"
								style={{
									fontFamily: t.fontSerif,
									color: t.onSurface,
								}}
							>
								Where Ancient Wisdom meets Molecular
								Precision.
							</h1>

							<p
								className="
									text-[15px]
									sm:text-[16px]
									md:text-[18px]
									leading-[1.9]
									max-w-[520px]
								"
								style={{
									fontFamily: t.fontSans,
									color: t.secondary,
								}}
							>
								Our botanical alchemy is grounded in
								rigorous scientific validation, ensuring
								every ritual provides bio-available
								potency harvested at the peak of lunar
								alignment.
							</p>
						</div>

						{/* Tags */}
						<div className="flex flex-wrap gap-3 md:gap-4 mt-8 md:mt-12">
							{[
								"Molecular Purity",
								"Lunar Aligned",
								"Bio-Available",
							].map((tag) => (
								<div
									key={tag}
									className="benefit-tag"
									style={{
										padding: "8px 14px",
										border: "1px solid rgba(112,121,121,0.3)",
										borderRadius: 9999,
										background:
											t.surfaceContainerLow,
										display: "flex",
										alignItems: "center",
										gap: 10,
									}}
								>
									<span
										style={{
											width: 7,
											height: 7,
											borderRadius: "50%",
											background: t.primary,
											display: "inline-block",
											animation:
												"pulse 2s infinite",
										}}
									/>

									<span
										className="
											text-[9px]
											sm:text-[10px]
											uppercase
											tracking-[0.14em]
										"
										style={{
											fontFamily: t.fontSans,
										}}
									>
										{tag}
									</span>
								</div>
							))}
						</div>

						{/* Stats */}
						<div
							className="
								mt-12
								md:mt-16
								grid
								grid-cols-3
								gap-4
								sm:gap-6
								max-w-[640px]
							"
						>
							{[
								{
									label: "Traceable Origin",
									value: "100%",
								},
								{
									label: "Filtration Purity",
									value: "0.02μ",
								},
								{
									label: "Bio-Potency",
									value: "4x",
								},
							].map((stat) => (
								<div
									key={stat.label}
									className="text-center"
								>
									<div
										className="
											text-[26px]
											sm:text-[30px]
											md:text-[36px]
										"
										style={{
											fontFamily: t.fontSerif,
											color: t.primary,
										}}
									>
										{stat.value}
									</div>

									<div
										className="
											mt-1
											text-[9px]
											sm:text-[10px]
											uppercase
											tracking-[0.1em]
										"
										style={{
											fontFamily: t.fontSans,
											color: t.secondary,
										}}
									>
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* ── RIGHT VISUAL ───────────────── */}
					<div
						className="
							relative
							flex
							justify-center
							items-center
							py-8
							md:py-16
							order-1
							lg:order-2
						"
					>
						{/* Outer Ring */}

						<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-visible opacity-[0.4]">
							<div
								style={{
									animation:
										"rotate-slow 60s linear infinite",
								}}
								className="
										w-[110vw]
										h-[110vw]
										max-w-none
										max-h-none

										sm:w-[100vw]
										sm:h-[100vw]

										md:w-[100vw]
										md:h-[100vw]
										md:max-w-[700px]
										md:max-h-[700px]
									"
							>
								<svg
									viewBox="0 0 500 500"
									className="w-full h-full"
								>
									<path
										id="circlePath"
										fill="transparent"
										d="M 250,250 m -200,0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
									/>

									<text
										style={{
											fontFamily: t.fontSans,
											fontSize:
												window.innerWidth <
												768
													? 16
													: 12,
											letterSpacing:
												window.innerWidth <
												768
													? "1em"
													: "0.8em",
											fill: t.onSurface,
											textTransform:
												"uppercase",
										}}
									>
										<textPath xlinkHref="#circlePath">
											Harvested by Light —
											Extracted by Science —
											Purified by Intention —
										</textPath>
									</text>
								</svg>
							</div>
						</div>

						{/* Main Visual */}
						<div
							className="
								relative
								z-10
								w-full
								max-w-[320px]
								sm:max-w-[420px]
								md:max-w-[520px]
								aspect-square
							"
						>
							{/* Glow */}
							<div
								style={{
									position: "absolute",
									inset: 0,
									background:
										"rgba(168,218,220,0.2)",
									borderRadius:
										"60% 40% 30% 70% / 60% 30% 70% 40%",
									filter: "blur(48px)",
									animation: "pulse 3s infinite",
								}}
							/>

							{/* Image */}
							<div
								className="hero-visual"
								style={{
									position: "relative",
									width: "100%",
									height: "100%",
									borderRadius:
										"60% 40% 30% 70% / 60% 30% 70% 40%",
									overflow: "hidden",
									border: "1px solid rgba(112,121,121,0.1)",
									boxShadow:
										"0 25px 50px rgba(0,0,0,0.15)",
								}}
							>
								<img
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwLTXFaC0fR5NW7wJybQ43Ic1aBJA7W6rWnMcHtRkUVFtb7jY0ESO7YDfP5EbOftBuilFqdZgx5widzTKN-a8dcjlSBkXmnkFkWYYOTU_1L_G8g4Xr7h_SWWVzIp_Gm8EW7G-mGsBRG2m0sPC5VGGkidKslztle9vpBXIC38XnZC01wVRZ6Cg0l6G-LrahpdqDC7TzgKHa6jf7rk7Z8YF962M1Doc05B_NOB14fQVUqQqmC2UacVUXyrIthM2ET3Zs8iNuqcA5Vs-V"
									alt="Saffron"
									referrerPolicy="no-referrer"
									className="
										w-full
										h-full
										object-cover
										scale-110
										hover:scale-100
										transition-transform
										duration-[3000ms]
									"
								/>
							</div>

							{/* Top Card */}
							<div
								className="
									detail-marker
									absolute
									-top-3
									-right-2
									sm:-top-4
									sm:-right-4
									bg-[#fef9f0]
									p-4
									sm:p-6
									rounded-xl
									max-w-[180px]
									sm:max-w-[220px]
									shadow-2xl
									border
									border-black/5
								"
							>
								<div className="flex items-center gap-2 mb-2">
									<Microscope
										size={14}
										style={{ color: t.primary }}
									/>

									<span
										className="
											text-[9px]
											uppercase
											tracking-[0.1em]
											font-bold
										"
										style={{
											fontFamily: t.fontSans,
											color: t.primary,
										}}
									>
										Micro-Analysis
									</span>
								</div>

								<p
									className="text-[11px] leading-[1.7]"
									style={{
										fontFamily: t.fontSans,
										color: t.secondary,
									}}
								>
									Molecular structure shows 42%
									higher concentration of Safranal.
								</p>
							</div>

							{/* Bottom Card */}
							<div
								className="
									detail-marker
									absolute
									-bottom-6
									-left-0
									sm:-left-10
									bg-[#32302b]
									p-4
									sm:p-6
									rounded-xl
									max-w-[200px]
									sm:max-w-[240px]
									shadow-2xl
								"
							>
								<div className="flex items-center gap-2 mb-2">
									<Droplets
										size={14}
										style={{
											color: t.primaryContainer,
										}}
									/>

									<span
										className="
											text-[9px]
											uppercase
											tracking-[0.1em]
											font-bold
										"
										style={{
											fontFamily: t.fontSans,
											color: t.inversePrimary,
										}}
									>
										Cold-Press Tech
									</span>
								</div>

								<p
									className="text-[11px] leading-[1.7]"
									style={{
										fontFamily: t.fontSans,
										color: t.surfaceContainerHighest,
									}}
								>
									Solvent-free extraction maintains
									the botanical soul while removing
									impurities.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Deepdive;
