const STEPS = [
	{
		number: "01",
		tag: "Botanical Sourcing",
		title: "Wild Harvested",
		body: "Every essence begins with wild-harvested botanicals sourced from high-altitude Himalayan regions, hand-picked during the peak lunar cycle for maximum metabolic activity.",
	},
	{
		number: "02",
		tag: "Sonic Vibration",
		title: "Ultrasonic Fusion",
		body: "We utilize low-frequency sonic waves to rupture cell walls without heat, ensuring the delicate terpenes and flavonoids remain biologically active and structurally intact.",
	},
	{
		number: "03",
		tag: "Quantum Purity",
		title: "Nano Filtration",
		body: "Three-stage micro-filtration removes any impurities at the sub-molecular level, resulting in an elixir that is crystal clear, potent, and exceptionally shelf-stable.",
	},
];

export default function PrecisionSynthesisSection() {
	return (
		<section className="w-full bg-brand-cream section-padding">
			<div className="max-w-5xl mx-auto">
				{/* ── Header row ── */}
				<div className="flex items-start justify-between mb-14 gap-6">
					<h2
						className="font-serif font-normal text-on-surface leading-tight"
						style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
					>
						Precision Synthesis
					</h2>
					<p className="font-sans text-[9px] font-semibold tracking-[0.28em] uppercase text-moss/60 pt-3 whitespace-nowrap">
						Standardizing Serenity
					</p>
				</div>

				{/* ── 3-column grid ── */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-0">
					{STEPS.map((step, i) => (
						<div
							key={step.number}
							className={`pt-6 pb-2 ${i < 2 ? "md:border-r border-brand-stone md:pr-10" : ""} ${i > 0 ? "md:pl-10" : ""} border-t-0`}
						>
							{/* Teal top accent line */}
							<div
								className="w-full h-px mb-5"
								style={{
									background:
										"linear-gradient(to right, #356668 0%, rgba(53,102,104,0.15) 100%)",
								}}
							/>

							{/* Step label */}
							<p className="font-sans text-[9px] font-semibold tracking-[0.22em] uppercase text-moss/50 mb-4">
								{step.number} / {step.tag}
							</p>

							{/* Title */}
							<h3
								className="font-serif font-normal text-on-surface mb-4 leading-snug"
								style={{
									fontSize:
										"clamp(1.35rem, 2.5vw, 1.75rem)",
								}}
							>
								{step.title}
							</h3>

							{/* Body */}
							<p className="font-sans text-[12.5px] font-light leading-relaxed text-on-surface-variant">
								{step.body}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
