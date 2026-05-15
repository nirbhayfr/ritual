import { useEffect, useRef } from "react";

export default function ConsultationHero() {
	const sectionRef = useRef(null);

	useEffect(() => {
		const els = sectionRef.current?.querySelectorAll("[data-reveal]");
		if (!els) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(
							"opacity-100",
							"translate-y-0",
						);
						entry.target.classList.remove(
							"opacity-0",
							"translate-y-3",
						);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15 },
		);
		els.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	return (
		<>
			{/* Google Fonts */}
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap"
				rel="stylesheet"
			/>

			<section
				ref={sectionRef}
				className="relative w-full min-h-screen overflow-hidden"
			>
				{/* Background image — fill in src */}
				<img
					src="/consultation.png"
					alt="Ayurvedic healing space"
					className="absolute inset-0 w-full h-full object-cover object-top"
				/>

				{/* Left-heavy dark gradient */}
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(to right, rgba(14,10,7,0.72) 0%, rgba(14,10,7,0.38) 55%, rgba(14,10,7,0.10) 100%)",
					}}
				/>

				{/* Bottom vignette */}
				<div
					className="absolute bottom-0 left-0 right-0 h-1/4"
					style={{
						background:
							"linear-gradient(to top, rgba(14,10,7,0.55), transparent)",
					}}
				/>

				{/* ── Main content ── */}
				<div className="relative z-10 flex flex-col justify-center min-h-screen px-[7vw] py-24 max-w-2xl">
					{/* Eyebrow */}
					<p
						data-reveal
						className="opacity-0 translate-y-3 transition-all duration-700 ease-out mb-7
              font-['Jost'] text-[10px] font-light tracking-[0.28em] uppercase text-white"
					>
						The Lineage of Care
					</p>

					{/* Heading */}
					<h1
						data-reveal
						className="opacity-0 translate-y-4 transition-all duration-700 delay-100 ease-out mb-8
              font-['Cormorant_Garamond'] font-light leading-[1.08] tracking-[-0.01em] text-white 
              text-5xl md:text-6xl lg:text-[5.25rem]"
					>
						An unbroken chain of{" "}
						<em className="italic text-white">
							healing wisdom.
						</em>
					</h1>

					{/* Divider rule */}
					<hr
						data-reveal
						className="opacity-0 transition-all duration-700 delay-200 ease-out
              w-10 border-none h-px bg-[#c9b99a] mb-8"
					/>

					{/* Body copy */}
					<p
						data-reveal
						className="opacity-0 translate-y-3 transition-all duration-700 delay-300 ease-out mb-12
              font-['Jost'] text-sm font-light leading-[1.85] text-[rgba(242,237,228,0.72)] max-w-[420px]"
					>
						Our Vaidyas represent a heritage that spans
						millennia. They are the custodians of sacred
						knowledge, blending the rigorous science of
						Ayurveda with a profound understanding of the
						human spirit. Each consultation is an invitation
						to step into this timeless stream of wellness.
					</p>

					{/* CTA row */}
					<div
						data-reveal
						className="opacity-0 translate-y-3 transition-all duration-700 delay-500 ease-out
              flex items-center gap-8"
					>
						<a
							href="#"
							className="group inline-flex items-center gap-2.5 px-7 py-3.5
                border border-[rgba(201,185,154,0.6)] text-[#f2ede4]
                font-['Jost'] text-[10px] font-normal tracking-[0.22em] uppercase
                hover:bg-[rgba(201,185,154,0.12)] hover:border-[rgba(201,185,154,0.9)]
                transition-all duration-300 no-underline"
						>
							Meet Our Vaidyas
							<svg
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								className="transition-transform duration-300 group-hover:translate-x-1"
							>
								<path d="M5 12h14M13 6l6 6-6 6" />
							</svg>
						</a>

						<button
							className="font-['Jost'] text-[10px] font-light tracking-[0.2em] uppercase
                text-[rgba(201,185,154,0.8)] border-b border-[rgba(201,185,154,0.3)] pb-0.5
                hover:text-[#f2ede4] hover:border-[rgba(201,185,154,0.7)]
                transition-all duration-300 bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer"
						>
							Our Philosophy
						</button>
					</div>
				</div>

				{/* ── Floating badge (bottom-right) ── */}
				<div
					data-reveal
					className="opacity-0 translate-y-3 transition-all duration-700 delay-700 ease-out
            absolute bottom-14 right-[6vw] z-10
            w-24 h-24 rounded-full
            border border-[rgba(201,185,154,0.35)]
            flex flex-col items-center justify-center gap-0.5
            bg-[rgba(14,10,7,0.35)] backdrop-blur-md"
				>
					<span className="font-['Cormorant_Garamond'] text-[28px] font-light text-[#e8d8be] leading-none">
						5000
					</span>
					<span className="font-['Jost'] text-[8px] font-light tracking-[0.2em] uppercase text-[rgba(201,185,154,0.75)] text-center leading-snug">
						years of
						<br />
						tradition
					</span>
				</div>

				{/* ── Scroll hint (bottom-left) ── */}
				<div
					data-reveal
					className="opacity-0 translate-y-3 transition-all duration-700 delay-[900ms] ease-out
            absolute bottom-12 left-[7vw] z-10 flex items-center gap-2.5"
				>
					<div className="relative w-8 h-px bg-[rgba(201,185,154,0.3)] overflow-hidden">
						<span
							className="absolute top-0 left-0 h-full w-full bg-[#c9b99a]"
							style={{
								animation:
									"scanline 2.4s ease-in-out infinite",
							}}
						/>
					</div>
					<span className="font-['Jost'] text-[9px] font-light tracking-[0.25em] uppercase text-[rgba(201,185,154,0.6)]">
						Scroll
					</span>
				</div>

				{/* Scanline keyframe — one tiny style block kept for the custom animation */}
				<style>{`
          @keyframes scanline {
            0%   { transform: translateX(-100%); }
            50%  { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
			</section>
		</>
	);
}
