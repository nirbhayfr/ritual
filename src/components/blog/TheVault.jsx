import { useState } from "react";

const CATEGORIES = [
	"All Explorations",
	"Philosophy",
	"Science",
	"Rituals",
	"Interviews",
];

const ARTICLES = [
	{
		id: 1,
		date: "OCT 2023",
		category: "Science",
		title: "The Circadian Rhythm: Why 10PM is the Most Critical Hour for Beauty",
	},
	{
		id: 2,
		date: "SEP 2023",
		category: "Philosophy",
		title: "Sourcing Purity: A Journey to the High Altitudes of the Himalayas",
	},
	{
		id: 3,
		date: "AUG 2023",
		category: "Rituals",
		title: "Micro-Dosing Stillness: 3-Minute Meditations for the Modern Executive",
	},
	{
		id: 4,
		date: "JUL 2023",
		category: "Interviews",
		title: "In Conversation: An Ayurvedic Physician on the Myth of the Quick Fix",
	},
	{
		id: 5,
		date: "JUN 2023",
		category: "Philosophy",
		title: "On Slowness: Reclaiming the Art of the Unhurried Morning",
	},
	{
		id: 6,
		date: "MAY 2023",
		category: "Science",
		title: "Adaptogenic Herbs and the HPA Axis: What the Research Actually Says",
	},
];

const SearchIcon = () => (
	<svg
		width="13"
		height="13"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.8"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="11" cy="11" r="8" />
		<path d="m21 21-4.35-4.35" />
	</svg>
);

const ArrowIcon = () => (
	<svg
		width="15"
		height="15"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M5 12h14M12 5l7 7-7 7" />
	</svg>
);

export default function TheVault() {
	const [activeCategory, setActiveCategory] = useState("All Explorations");
	const [search, setSearch] = useState("");
	const [hovered, setHovered] = useState(null);

	const filtered = ARTICLES.filter((a) => {
		const matchCat =
			activeCategory === "All Explorations" ||
			a.category === activeCategory;
		const matchSearch = a.title
			.toLowerCase()
			.includes(search.toLowerCase());
		return matchCat && matchSearch;
	});

	return (
		<section
			className="w-full min-h-screen section-padding"
			style={{
				background: "var(--color-surface)",
				fontFamily: "var(--font-sans)",
			}}
		>
			<div style={{ maxWidth: 780, margin: "0 auto" }}>
				{/* ── Eyebrow ── */}
				<p className="text-eyebrow mb-5">The Curated Journal</p>

				{/* ── Title ── */}
				<h1
					className="text-headline-lg mb-8"
					style={{ color: "var(--color-on-surface)" }}
				>
					The Vault
				</h1>

				{/* ── Filters + Search ── */}
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
					{/* Category tabs */}
					<div className="flex flex-wrap items-center gap-x-6 gap-y-2">
						{CATEGORIES.map((cat) => {
							const isActive = activeCategory === cat;
							return (
								<button
									key={cat}
									onClick={() =>
										setActiveCategory(cat)
									}
									style={{
										background: "transparent",
										border: "none",
										borderBottom: isActive
											? "1px solid var(--color-teal)"
											: "1px solid transparent",
										padding: "0 0 4px 0",
										cursor: "pointer",
										fontFamily:
											"var(--font-sans)",
										fontSize: 10.5,
										letterSpacing: "0.18em",
										fontWeight: 500,
										textTransform: "uppercase",
										color: isActive
											? "var(--color-teal)"
											: "var(--color-moss)",
										transition:
											"color 0.25s, border-color 0.25s",
									}}
								>
									{cat}
								</button>
							);
						})}
					</div>

					{/* Search box */}
					<div
						className="flex items-center gap-2 px-3 py-2.5"
						style={{
							border: "1px solid var(--color-brand-stone)",
							borderRadius: "var(--radius-btn)",
							background: "var(--color-brand-cream)",
							minWidth: 200,
						}}
					>
						<span style={{ color: "var(--color-teal-mist)" }}>
							<SearchIcon />
						</span>
						<input
							type="text"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search archive..."
							style={{
								background: "transparent",
								border: "none",
								outline: "none",
								fontFamily: "var(--font-sans)",
								fontSize: 11,
								letterSpacing: "0.06em",
								color: "var(--color-on-surface)",
								width: "100%",
							}}
						/>
					</div>
				</div>

				{/* ── Article rows ── */}
				<div className="flex flex-col">
					{filtered.length === 0 && (
						<p
							className="text-label-md py-10 text-center"
							style={{
								color: "var(--color-moss)",
								opacity: 0.5,
							}}
						>
							No articles found.
						</p>
					)}

					{filtered.map((article, i) => (
						<div key={article.id}>
							<div
								className="flex items-center gap-8 py-8 cursor-pointer"
								onMouseEnter={() =>
									setHovered(article.id)
								}
								onMouseLeave={() => setHovered(null)}
							>
								{/* Date */}
								<span
									className="shrink-0 w-[72px]"
									style={{
										fontFamily:
											"var(--font-sans)",
										fontSize: 10,
										letterSpacing: "0.18em",
										fontWeight: 500,
										textTransform: "uppercase",
										color:
											hovered === article.id
												? "var(--color-teal)"
												: "var(--color-teal-mist)",
										transition: "color 0.25s",
									}}
								>
									{article.date}
								</span>

								{/* Title */}
								<h2
									className="flex-1"
									style={{
										fontFamily:
											"var(--font-serif)",
										fontSize:
											"clamp(18px, 2.4vw, 24px)",
										fontWeight: 400,
										lineHeight: 1.35,
										color:
											hovered === article.id
												? "var(--color-teal)"
												: "var(--color-on-surface)",
										transition: "color 0.3s",
									}}
								>
									{article.title}
								</h2>

								{/* Arrow */}
								<span
									style={{
										color:
											hovered === article.id
												? "var(--color-teal)"
												: "var(--color-brand-stone)",
										transform:
											hovered === article.id
												? "translateX(5px)"
												: "translateX(0)",
										transition:
											"transform 0.3s cubic-bezier(0.22,1,0.36,1), color 0.25s",
										flexShrink: 0,
									}}
								>
									<ArrowIcon />
								</span>
							</div>

							{/* Divider */}
							{i < filtered.length - 1 && (
								<div
									style={{
										height: "0.5px",
										background:
											"var(--color-brand-stone)",
									}}
								/>
							)}
						</div>
					))}
				</div>

				{/* ── View Full Archive ── */}
				<div className="flex justify-center mt-16">
					<button
						className="btn-primary"
						style={{
							background: "transparent",
							color: "var(--color-teal)",
							border: "1px solid var(--color-teal-mist)",
							boxShadow: "none",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background =
								"var(--color-teal)";
							e.currentTarget.style.color =
								"var(--color-cream)";
							e.currentTarget.style.borderColor =
								"var(--color-teal)";
							e.currentTarget.style.boxShadow =
								"var(--shadow-btn-primary)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background =
								"transparent";
							e.currentTarget.style.color =
								"var(--color-teal)";
							e.currentTarget.style.borderColor =
								"var(--color-teal-mist)";
							e.currentTarget.style.boxShadow = "none";
						}}
					>
						View Full Archive
					</button>
				</div>
			</div>
		</section>
	);
}
