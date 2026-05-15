export default function BioActiveSection() {
	const features = [
		{ num: "01", label: "Rapid Absorption Matrix" },
		{ num: "02", label: "Neuro-Protective Compounds" },
		{ num: "03", label: "Adaptive Dosage System" },
	];

	return (
		<section
			style={{
				fontFamily: "'Manrope', sans-serif",
				background: "#F9F6F1",
				width: "100%",
			}}
		>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					width: "100%",
				}}
			>
				{/* ── Left Image ───────────────────────── */}
				<div
					style={{
						flex: "1 1 45%",
						minWidth: "320px",
						position: "relative",
						background: "#EDE9E1",
						display: "flex",
						overflow: "hidden",
						minHeight: "520px",
					}}
				>
					{/* Overlay */}
					<div
						style={{
							position: "absolute",
							top: "28px",
							left: 0,
							right: 0,
							textAlign: "center",
							zIndex: 2,
							padding: "0 20px",
						}}
					>
						<p
							style={{
								fontSize: "9px",
								letterSpacing: "0.28em",
								fontWeight: 500,
								color: "#5f655f",
								textTransform: "uppercase",
								marginBottom: "4px",
							}}
						>
							Formula 7
						</p>

						<h3
							style={{
								fontFamily: "'Cinzel', serif",
								fontSize: "clamp(18px, 2vw, 22px)",
								fontWeight: 400,
								letterSpacing: "0.12em",
								color: "#38383a",
								margin: 0,
							}}
						>
							ESSENCE
						</h3>
					</div>

					<img
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3exxeOh08T34xgoR5pGraZyhvE3aodDR9kQcspuzCPCS1dE34pHGm3Bn6rdAXL9XtjpLXZfIKdRGCfGfCoCGVfcN9G1UzabZFjTCt3oIYMEsAyiM4bbsK4GLX5M1Kng0fBfSxpttBk_DzNGDh5swaex6q8uX1vQ7oyZa9ube8F-A5GRm3Yr-6v1PDVQMKxp3WBWms5mO_Wu-hXG8ogoC21CG3F1ctLp-i-fW_DwP2U20e7hA3GQJxdbm59U-A-zxZX1zQYLqGmHGt"
						alt="product"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							display: "block",
							flex: 1,
						}}
					/>
				</div>

				{/* ── Right Content ────────────────────── */}
				<div
					style={{
						flex: "1 1 55%",
						minWidth: "320px",
						display: "flex",
						alignItems: "center",
						padding: "clamp(32px, 6vw, 60px)",
					}}
				>
					<div style={{ width: "100%", maxWidth: "520px" }}>
						{/* Eyebrow */}
						<p
							style={{
								fontSize: "9.5px",
								letterSpacing: "0.32em",
								fontWeight: 500,
								color: "#5a9490",
								textTransform: "uppercase",
								marginBottom: "16px",
								display: "flex",
								alignItems: "center",
								gap: "10px",
								flexWrap: "wrap",
							}}
						>
							<span
								style={{
									display: "block",
									width: "28px",
									height: "1px",
									background: "#5a9490",
									opacity: 0.6,
									flexShrink: 0,
								}}
							/>
							Molecular Outcome
						</p>

						{/* Headline */}
						<h2
							style={{
								fontFamily: "'Playfair Display', serif",
								fontSize: "clamp(32px, 6vw, 46px)",
								fontWeight: 400,
								lineHeight: 1.12,
								letterSpacing: "-0.01em",
								color: "#1D1D1F",
								margin: "0 0 20px 0",
							}}
						>
							The Bio-Active
							<br />
							Concentrate
						</h2>

						{/* Body */}
						<p
							style={{
								fontSize: "clamp(13px, 2vw, 14px)",
								lineHeight: 1.72,
								color: "#404848",
								marginBottom: "28px",
								maxWidth: "420px",
							}}
						>
							The result of our extraction process is a
							concentrate with 4x the bio-availability of
							standard extracts. A potent, cellular-ready
							formula for modern resilience.
						</p>

						{/* Features */}
						<div style={{ marginBottom: "32px" }}>
							{features.map((f, i) => (
								<div
									key={i}
									style={{
										display: "flex",
										alignItems: "center",
										gap: "14px",
										padding: "12px 0",
										borderBottom:
											"1px solid #E5E0D8",
										flexWrap: "wrap",
									}}
								>
									<span
										style={{
											fontSize: "10px",
											fontWeight: 500,
											color: "#5a9490",
											letterSpacing: "0.05em",
											minWidth: "20px",
										}}
									>
										{f.num}
									</span>

									<span
										style={{
											fontSize: "11px",
											fontWeight: 600,
											letterSpacing: "0.16em",
											textTransform:
												"uppercase",
											color: "#1D1D1F",
											lineHeight: 1.6,
										}}
									>
										{f.label}
									</span>
								</div>
							))}
						</div>

						{/* CTA */}
						<button
							style={{
								fontSize: "10px",
								letterSpacing: "0.22em",
								fontWeight: 600,
								textTransform: "uppercase",
								background: "#356668",
								color: "#F4F1E8",
								border: "none",
								borderRadius: "6px",
								padding: "15px 24px",
								cursor: "pointer",
								boxShadow:
									"0 4px 20px rgba(63, 106, 103, 0.38)",
								transition: "all 0.3s ease",
								width: "fit-content",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background =
									"#5a9490";
								e.currentTarget.style.transform =
									"translateY(-2px)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background =
									"#356668";
								e.currentTarget.style.transform =
									"translateY(0)";
							}}
						>
							Experience the Ritual
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
