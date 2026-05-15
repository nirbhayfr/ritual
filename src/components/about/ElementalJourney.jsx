export default function ElementalJourneySection() {
	return (
		<section className="w-full bg-brand-cream section-padding">
			<div className="max-w-5xl mx-auto">
				{/* ── Header ── */}
				<div className="text-center mb-10">
					<p className="text-eyebrow justify-center mb-4">
						The Elemental Journey
					</p>
					<h2
						className="font-serif text-on-surface mb-6 leading-tight"
						style={{
							fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
							fontWeight: 400,
						}}
					>
						Stillness &amp; Water
					</h2>
					<p className="font-sans text-[13px] font-light leading-relaxed text-on-surface-variant max-w-lg mx-auto">
						In the ancient wisdom of Ayurveda, water
						represents the principle of cohesion and the seat
						of emotions. Our water-inspired rituals are
						designed to cleanse the vessel and quiet the mind,
						returning you to a state of profound equilibrium.
					</p>
				</div>

				{/* ── Hero image + overlay card ── */}
				<div
					className="relative w-full rounded-[var(--radius-card)] overflow-hidden mb-12"
					style={{ height: "clamp(320px, 50vw, 480px)" }}
				>
					{/* Image */}
					<img
						src="/about.png"
						alt="Copper vessel with white flowers in water"
						className="absolute inset-0 w-full h-full object-cover"
					/>

					{/* Subtle dark vignette on right side for card readability */}
					<div
						className="absolute inset-0"
						style={{
							background:
								"linear-gradient(to left, rgba(27,46,43,0.35) 0%, transparent 55%)",
						}}
					/>

					{/* Overlay card — bottom right */}
					<div
						className="absolute bottom-6 right-6 w-[260px] md:w-[300px] rounded-[var(--radius-card)] p-6"
						style={{
							background: "rgba(249,246,241,0.96)",
							backdropFilter: "blur(16px)",
							WebkitBackdropFilter: "blur(16px)",
							border: "1px solid rgba(229,224,216,0.7)",
						}}
					>
						{/* Label */}
						<div className="flex items-center gap-2 mb-3">
							<div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
							<span className="font-sans text-[9px] font-semibold tracking-[0.22em] uppercase text-teal">
								Jala: The Water Element
							</span>
						</div>

						{/* Quote */}
						<blockquote className="font-serif text-[14px] font-light italic text-on-surface leading-snug mb-5">
							"Like the ocean, the mind seeks its own depth
							in the silence of reflection."
						</blockquote>

						{/* CTA */}
						<button className="btn-primary w-full text-center text-[9.5px]">
							Begin the Ritual
						</button>
					</div>
				</div>

				{/* ── 3-column sensory breakdown ── */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-brand-stone">
					{[
						{
							tag: "Sight",
							title: "Visual Fluidity",
							body: "Observe the soft ripple of surface tension. The reflection of white petals against hammered copper creates a meditative focal point for the wandering eye.",
						},
						{
							tag: "Sense",
							title: "Tactile Cooling",
							body: "The thermal conductivity of copper keeps the water at a temperature that draws heat from the body, grounding the Pitta energy within.",
						},
						{
							tag: "Spirit",
							title: "Emotional Release",
							body: "As water flows, so do the stagnant emotions. This ritual invites a shedding of the old, making space for the clarity of a mountain stream.",
						},
					].map((col, i) => (
						<div
							key={col.tag}
							className={`pt-8 pb-2 ${i < 2 ? "md:border-r border-brand-stone" : ""} ${i > 0 ? "md:pl-8" : ""}`}
						>
							<p className="font-sans text-[9px] font-semibold tracking-[0.22em] uppercase text-teal mb-2">
								{col.tag}
							</p>
							<h3 className="font-serif text-[18px] font-normal text-on-surface mb-3 leading-snug">
								{col.title}
							</h3>
							<p className="font-sans text-[12px] font-light leading-relaxed text-on-surface-variant">
								{col.body}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
