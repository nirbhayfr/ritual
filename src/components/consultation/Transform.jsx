export default function Transform() {
	return (
		<section className="w-full bg-brand-cream overflow-hidden relative flex items-center justify-center section-padding">
			{/* Watermark word */}
			<span
				className="absolute inset-0 flex items-center justify-center
					font-serif font-normal select-none pointer-events-none
					text-[clamp(80px,18vw,200px)] text-on-surface/[0.04] leading-none tracking-tight whitespace-nowrap"
				aria-hidden="true"
			>
				Ritual
			</span>

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center text-center max-w-xl">
				{/* Heading */}
				<h2 className="text-headline-lg font-serif text-on-surface mb-5 leading-tight">
					Begin Your Transformation
				</h2>

				{/* Body */}
				<p className="font-sans text-[13px] font-light leading-relaxed text-on-surface-variant max-w-xs mb-10">
					Step into a lifestyle aligned with your nature. Our
					master Vaidyas are ready to guide you home to yourself.
				</p>

				{/* CTA row */}
				<div className="flex flex-wrap items-center justify-center gap-4">
					<a
						href="#"
						className="btn-primary inline-flex items-center gap-2.5 no-underline"
					>
						Book Your Consult
						<svg
							width="13"
							height="13"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							<path d="M5 12h14M13 6l6 6-6 6" />
						</svg>
					</a>

					<a
						href="#"
						className="inline-flex items-center gap-2.5 no-underline
							font-sans text-[10.5px] font-semibold tracking-[0.2em] uppercase
							text-on-surface border border-on-surface/25 rounded-[var(--radius-btn)]
							px-[30px] py-4
							hover:border-on-surface/60 hover:bg-on-surface/5
							transition-all duration-300"
					>
						View All Rituals
					</a>
				</div>
			</div>
		</section>
	);
}
