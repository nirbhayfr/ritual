export default function MolecularAlchemySection() {
	return (
		<section
			className="w-full section-padding"
			style={{ background: "#111210" }}
		>
			<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
				{/* ── Left panel ── */}
				<div>
					{/* Eyebrow */}
					<p
						className="font-sans text-[9px] font-semibold tracking-[0.28em] uppercase mb-6"
						style={{ color: "#7ecac8" }}
					>
						Phase 01: The Nucleus
					</p>

					{/* Heading */}
					<h2
						className="font-serif font-normal leading-[1.05] mb-6"
						style={{
							fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
							color: "#f0ede6",
						}}
					>
						Molecular
						<br />
						<em
							className="italic"
							style={{ color: "#7ecac8" }}
						>
							Alchemy
						</em>
					</h2>

					{/* Body */}
					<p
						className="font-sans text-[13px] font-light leading-relaxed mb-10 max-w-[320px]"
						style={{ color: "rgba(240,237,230,0.5)" }}
					>
						Bridging the ancient wisdom of cold-press
						extraction with modern laboratory precision. Our
						patented thermal-controlled distillation preserves
						the energetic blueprint of every botanical.
					</p>

					{/* Stats grid */}
					<div className="grid grid-cols-2 gap-x-8 gap-y-7 mb-10">
						{[
							{
								label: "Extraction Temp",
								value: "42.8°C",
								suffix: "Constant",
							},
							{
								label: "Purity Level",
								value: "99.98%",
								suffix: "USP",
							},
							{
								label: "Bio-Availability",
								value: "X4",
								suffix: "Potency",
							},
							{
								label: "Stability Ratio",
								value: "1:120",
								suffix: "Days",
							},
						].map((stat) => (
							<div key={stat.label}>
								<p
									className="font-sans text-[9px] font-semibold tracking-[0.2em] uppercase mb-1"
									style={{
										color: "rgba(126,202,200,0.5)",
									}}
								>
									{stat.label}
								</p>
								<p
									className="font-sans text-[22px] font-light leading-none"
									style={{ color: "#f0ede6" }}
								>
									{stat.value}{" "}
									<span
										className="text-[12px] font-light"
										style={{
											color: "rgba(240,237,230,0.35)",
										}}
									>
										{stat.suffix}
									</span>
								</p>
							</div>
						))}
					</div>

					{/* CTA */}
					<button
						className="inline-flex items-center gap-2.5 font-sans text-[10px] font-semibold tracking-[0.2em] uppercase
							px-7 py-3.5 transition-all duration-300 cursor-pointer"
						style={{
							background: "transparent",
							border: "1px solid rgba(126,202,200,0.45)",
							color: "#7ecac8",
							borderRadius: "var(--radius-btn)",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background =
								"rgba(126,202,200,0.08)";
							e.currentTarget.style.borderColor =
								"rgba(126,202,200,0.8)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background =
								"transparent";
							e.currentTarget.style.borderColor =
								"rgba(126,202,200,0.45)";
						}}
					>
						View Lab Report
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
					</button>
				</div>

				{/* ── Right panel (image) ── */}
				<div className="relative">
					<div
						className="relative overflow-hidden aspect-[4/5]"
						style={{
							borderRadius: "var(--radius-card)",
							border: "1px solid rgba(126,202,200,0.12)",
						}}
					>
						<img
							src="/alchemy.png"
							alt="Laboratory distillation apparatus"
							className="absolute inset-0 w-full h-full object-cover grayscale"
						/>

						{/* Top-left label */}
						<div className="absolute top-4 left-4">
							<span
								className="font-sans text-[8px] font-semibold tracking-[0.22em] uppercase"
								style={{
									color: "rgba(240,237,230,0.55)",
								}}
							>
								Refractive Analysis
							</span>
						</div>

						{/* Bottom-right watermark */}
						<div className="absolute bottom-4 right-4 text-right">
							<p
								className="font-sans text-[8px] font-light tracking-[0.15em] uppercase leading-snug"
								style={{
									color: "rgba(240,237,230,0.3)",
								}}
							>
								© Veda Ritual Labs
								<br />
								Geneva S.A.
							</p>
						</div>

						{/* Bottom-left italic label */}
						<div className="absolute bottom-14 left-4">
							<p
								className="font-serif text-[13px] font-light italic leading-tight"
								style={{
									color: "rgba(240,237,230,0.45)",
								}}
							>
								Ayurvedic
								<br />
								Alchemy
							</p>
						</div>

						{/* Vignette */}
						<div
							className="absolute inset-0 pointer-events-none"
							style={{
								background:
									"linear-gradient(to top, rgba(17,18,16,0.6) 0%, transparent 40%), linear-gradient(to bottom, rgba(17,18,16,0.35) 0%, transparent 30%)",
							}}
						/>
					</div>

					{/* Corner accents */}
					<div
						className="absolute -top-3 -right-3 w-16 h-16 pointer-events-none"
						style={{
							borderTop:
								"1px solid rgba(126,202,200,0.25)",
							borderRight:
								"1px solid rgba(126,202,200,0.25)",
							borderRadius: "0 var(--radius-card) 0 0",
						}}
					/>
					<div
						className="absolute -bottom-3 -left-3 w-16 h-16 pointer-events-none"
						style={{
							borderBottom:
								"1px solid rgba(126,202,200,0.15)",
							borderLeft:
								"1px solid rgba(126,202,200,0.15)",
							borderRadius: "0 0 0 var(--radius-card)",
						}}
					/>
				</div>
			</div>
		</section>
	);
}
