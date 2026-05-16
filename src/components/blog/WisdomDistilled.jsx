import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function WisdomDistilled() {
	const sectionRef = useRef(null);
	const imageRef = useRef(null);
	const contentRef = useRef(null);
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(imageRef.current, {
				scale: 1.12,
				duration: 2,
				ease: "power2.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					scrub: 1.2,
				},
			});

			gsap.from(".wd-reveal", {
				y: 36,
				opacity: 0,
				stagger: 0.13,
				duration: 1.1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: contentRef.current,
					start: "top 75%",
				},
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        .wd-input::placeholder { color: rgba(255,255,255,0.2); }
        .wd-input:focus { outline: none; }
      `}</style>

			<section
				ref={sectionRef}
				style={{
					background: "#1c1c1c",
					fontFamily: "'Jost', sans-serif",
				}}
				className="w-full overflow-hidden"
			>
				<div className="max-w-5xl mx-auto px-6 sm:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
					{/* ── Image ── */}
					<div className="relative h-[560px] overflow-hidden rounded-sm order-last md:order-first">
						<img
							ref={imageRef}
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP5RNTzJR1f0mmVyx8fibuiCmtiS2gv8wQZfaYgQdO9CpDJw75t20jroeqQELZ4sFVYZri9CoUsW2kN1ipwR4vOnUFvL0vSJppZeYwg_VIbBqnkIBi_jrFYXktzknGG6rOVcDduQxeXsFqMkfq1dSaHz703r6iJmAOcbu8Qu7AvGr3mnHPAL5Vqb4EUWe9-PgZvMggUpSgfUlPV11sfmzWedkTvpLzznBuKqtTrWdOErvMeBuxhVTRb2kqIOVeZKSH4JAAu7q75kHZ"
							alt="Wisdom Distilled"
							className="w-full h-full object-cover"
							style={{ opacity: 0.6 }}
						/>
						{/* bottom fade into bg */}
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(180deg, transparent 40%, #1c1c1c 100%)",
							}}
						/>
						{/* sky blue left accent bar */}
						<div
							className="absolute top-0 left-0 w-[3px] h-16"
							style={{
								background:
									"var(--color-brand-seafoam)",
							}}
						/>
					</div>

					{/* ── Content ── */}
					<div ref={contentRef} className="flex flex-col">
						{/* Eyebrow */}
						<div className="wd-reveal flex items-center gap-3 mb-6">
							<div
								className="h-px w-6"
								style={{
									background:
										"var(--color-brand-seafoam)",
								}}
							/>
							<span
								className="text-[9px] tracking-[0.26em] uppercase"
								style={{
									color: "var(--color-brand-seafoam)",
								}}
							>
								The Curated Journal
							</span>
						</div>

						{/* Heading */}
						<h2
							className="wd-reveal text-[50px] sm:text-[58px] font-light leading-[1.05] mb-6"
							style={{
								fontFamily:
									"'Cormorant Garamond', serif",
								color: "#f0f0f0",
							}}
						>
							Wisdom,{" "}
							<em
								style={{
									color: "var(--color-brand-seafoam)",
								}}
							>
								Distilled.
							</em>
						</h2>

						{/* Divider */}
						<div
							className="wd-reveal w-full h-px mb-7"
							style={{
								background: "rgba(255,255,255,0.07)",
							}}
						/>

						{/* Body */}
						<p
							className="wd-reveal text-[13px] leading-loose mb-10"
							style={{
								color: "rgba(255,255,255,0.4)",
								letterSpacing: "0.02em",
							}}
						>
							Join our inner circle for{" "}
							<span
								style={{
									color: "rgba(255,255,255,0.7)",
									fontStyle: "italic",
									fontFamily:
										"'Cormorant Garamond', serif",
									fontSize: 15,
								}}
							>
								'The Weekly Invocation'
							</span>
							. Every Sunday, a curated selection of
							rituals, scientific findings, and
							philosophical prompts to ground your upcoming
							week.
						</p>

						{/* Form / Success */}
						{!submitted ? (
							<form
								className="wd-reveal space-y-4"
								onSubmit={(e) => {
									e.preventDefault();
									setSubmitted(true);
								}}
							>
								{/* Email input */}
								<div className="relative group">
									<input
										required
										type="email"
										placeholder="YOUR EMAIL ADDRESS"
										className="wd-input w-full bg-transparent py-4 text-[11px] tracking-[0.14em] transition-all"
										style={{
											color: "rgba(255,255,255,0.75)",
											borderBottom:
												"0.5px solid rgba(255,255,255,0.12)",
											fontFamily:
												"'Jost', sans-serif",
										}}
									/>

									<div
										className="absolute bottom-0 left-0 h-px w-0 group-focus-within:w-full transition-all duration-500"
										style={{
											background:
												"var(--color-brand-seafoam)",
										}}
									/>
								</div>

								{/* Submit */}
								<motion.button
									type="submit"
									whileHover={{ scale: 1.015 }}
									whileTap={{ scale: 0.985 }}
									className="w-full py-4 text-[10px] tracking-[0.22em] uppercase font-medium rounded-sm cursor-pointer transition-colors duration-200"
									style={{
										background:
											"var(--color-brand-seafoam)",
										color: "#111",
										fontFamily:
											"'Jost', sans-serif",
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.background =
											"#7dd3fc";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.background =
											"var(--color-brand-seafoam)";
									}}
								>
									Subscribe to the Invocation
								</motion.button>

								<p
									className="text-center text-[9px] tracking-widest"
									style={{
										color: "rgba(255,255,255,0.15)",
									}}
								>
									No noise. Unsubscribe anytime.
								</p>
							</form>
						) : (
							<motion.div
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									ease: "easeOut",
								}}
								className="py-8 text-center space-y-3"
							>
								<div
									className="text-[34px] font-light"
									style={{
										fontFamily:
											"'Cormorant Garamond', serif",
										color: "var(--color-brand-seafoam)",
										fontStyle: "italic",
									}}
								>
									Welcome to the circle.
								</div>
								<p
									className="text-[11px] tracking-wider"
									style={{
										color: "rgba(255,255,255,0.3)",
									}}
								>
									Your first invocation arrives this
									Sunday.
								</p>
							</motion.div>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
