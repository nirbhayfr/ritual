import { useState } from "react";

const CATEGORY_FILTERS = [
	{ label: "All", icon: "grid", count: 128 },
	{ label: "Featured", icon: "sparkles", count: 24 },
	{ label: "New", icon: "bolt", count: 12 },
	null, // divider
	{ label: "Drops", icon: "shirt", count: 36 },
	{ label: "Liquid", icon: "home", count: 29 },
	{ label: "Wellness", icon: "leaf", count: 18 },
	{ label: "Powders", icon: "laptop", count: 9 },
];

const STATUS_FILTERS = [
	{ label: "All", dot: "#888" },
	{ label: "In stock", dot: "#1e9e75" },
	{ label: "Low stock", dot: "#e09020" },
	{ label: "Sold out", dot: "#c84040" },
	null, // divider
	{ label: "On sale", icon: "tag" },
	{ label: "Members only", icon: "crown" },
];

const ICON_MAP = {
	grid: (
		<svg
			width="13"
			height="13"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="3" y="3" width="7" height="7" />
			<rect x="14" y="3" width="7" height="7" />
			<rect x="3" y="14" width="7" height="7" />
			<rect x="14" y="14" width="7" height="7" />
		</svg>
	),
	sparkles: (
		<svg
			width="13"
			height="13"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
			<path d="M5 3l.75 2.25L8 6l-2.25.75L5 9l-.75-2.25L2 6l2.25-.75z" />
		</svg>
	),
	bolt: (
		<svg
			width="13"
			height="13"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
		</svg>
	),
	shirt: (
		<svg
			width="13"
			height="13"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" />
		</svg>
	),
	home: (
		<svg
			width="13"
			height="13"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
			<polyline points="9 22 9 12 15 12 15 22" />
		</svg>
	),
	leaf: (
		<svg
			width="13"
			height="13"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M17 8C8 10 5.9 16.17 3.82 19.5c0 0 4.68-2 9.18-2 4 0 8-2 8-8.5 0-1.5-.5-3-1-4z" />
			<path d="M3.82 19.5C5 18 8 16 12 16" />
		</svg>
	),
	laptop: (
		<svg
			width="13"
			height="13"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="2" y="3" width="20" height="14" rx="2" />
			<line x1="2" y1="20" x2="22" y2="20" />
		</svg>
	),
	tag: (
		<svg
			width="13"
			height="13"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
			<line x1="7" y1="7" x2="7.01" y2="7" />
		</svg>
	),
	crown: (
		<svg
			width="13"
			height="13"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
			<line x1="5" y1="20" x2="19" y2="20" />
		</svg>
	),
};

function PillBar({ filters, activeFilter, onSelect }) {
	return (
		<div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-full p-1 ">
			{filters.map((filter, i) => {
				if (filter === null) {
					return (
						<div
							key={`divider-${i}`}
							className="mx-0.5 h-[18px] w-px bg-gray-200"
						/>
					);
				}

				const active = activeFilter === filter.label;

				return (
					<button
						key={filter.label}
						onClick={() => onSelect(filter.label)}
						className={`
              relative inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-full px-4
              text-[11px] font-medium uppercase tracking-[0.14em]
              transition-all duration-200 ease-out
              ${
				active
					? "bg-[#1e3a3b] text-[#e8f0ef] shadow-sm"
					: "bg-transparent text-gray-500 hover:bg-white hover:text-gray-900"
			}
            `}
					>
						{filter.dot && (
							<span
								className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
								style={{ backgroundColor: filter.dot }}
							/>
						)}
						{filter.icon && !filter.dot && (
							<span className="flex-shrink-0">
								{ICON_MAP[filter.icon]}
							</span>
						)}
						{filter.label}
						{filter.count !== undefined && (
							<span className="ml-0.5 text-[10px] opacity-50">
								{filter.count}
							</span>
						)}
					</button>
				);
			})}
		</div>
	);
}

export default function CollectionSection() {
	const products = [
		{
			id: 1,
			name: "Midnight Bloom Serum",
			price: "$84.00",
			tag: "PITTA • NIGHT",
			image: "/p-1.jpg",
		},
		{
			id: 2,
			name: "Ojas Facial Oil",
			price: "$92.00",
			tag: "VATA • NOURISH",
			image: "/p-2.jpg",
		},
		{
			id: 3,
			name: "Sacred Saffron",
			price: "$45.00",
			tag: "TRIDOSHIC • PURE",
			image: "/p-3.jpg",
		},
		{
			id: 4,
			name: "Botanical Essence",
			price: "$38.00",
			tag: "VATA • PURE",
			image: "/p-4.jpg",
		},
		{
			id: 5,
			name: "Celestial Aura",
			price: "$84.00",
			tag: "PITTA • PURE",
			image: "/p-5.png",
		},
		{
			id: 6,
			name: "Vedic Clay Balm",
			price: "$65.00",
			tag: "KAPHA • EARTH",
			image: "/p-6.jpg",
		},
	];

	const [activeCategory, setActiveCategory] = useState("All");
	const [activeStatus, setActiveStatus] = useState("All");

	return (
		<section className="bg-brand-cream px-5 md:px-10 py-14 md:py-20">
			<div className="max-w-[1280px] mx-auto">
				{/* Header */}
				<div className="flex flex-col items-center text-center mb-10 md:mb-14">
					<h2 className="font-serif text-[34px] md:text-[48px] leading-none tracking-[-0.03em] text-brand-charcoal">
						The Collection
					</h2>

					<div className="w-16 h-px bg-brand-seafoam mt-3" />
				</div>

				{/* ── Filters ───────────────────────────── */}
				<div className="flex flex-col items-center gap-6 py-8">
					<div className="flex flex-col items-center gap-2.5">
						<span className="text-[11px] font-medium uppercase tracking-widest text-gray-400">
							Category
						</span>
						<PillBar
							filters={CATEGORY_FILTERS}
							activeFilter={activeCategory}
							onSelect={setActiveCategory}
						/>
					</div>

					<div className="flex flex-col items-center gap-2.5">
						<span className="text-[11px] font-medium uppercase tracking-widest text-gray-400">
							Status
						</span>
						<PillBar
							filters={STATUS_FILTERS}
							activeFilter={activeStatus}
							onSelect={setActiveStatus}
						/>
					</div>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-5 gap-y-10 md:gap-y-14">
					{products.map((product) => (
						<div
							key={product.id}
							className="group flex flex-col"
						>
							{/* Image */}
							<div className="relative overflow-hidden rounded-[4px] bg-[#ece7de] aspect-[0.92/1] border border-[#e7e1d7]">
								<img
									src={product.image}
									alt={product.name}
									className="
										w-full h-full object-cover
										transition-transform duration-700
										group-hover:scale-[1.04]
									"
								/>

								{/* Tag */}
								<div className="absolute top-3 left-3">
									<span
										className="
											inline-flex items-center
											bg-[#cfe6e5]/90
											backdrop-blur-sm
											text-[8px]
											tracking-[0.22em]
											font-medium
											text-[#4f7775]
											uppercase
											px-2.5 py-1
											rounded-full
										"
									>
										{product.tag}
									</span>
								</div>

								{/* Overlay */}
								<div
									className="
										absolute inset-0
										bg-gradient-to-t
										from-black/10 via-transparent to-transparent
										opacity-0
										group-hover:opacity-100
										transition-opacity duration-500
									"
								/>
							</div>

							{/* Content */}
							<div className="pt-4">
								<h3
									className="
										font-serif
										text-[24px]
										md:text-[28px]
										leading-[1.1]
										tracking-[-0.02em]
										text-brand-charcoal
									"
								>
									{product.name}
								</h3>

								<p
									className="
										mt-1.5
										text-[12px]
										font-medium
										text-[#4f6665]
									"
								>
									{product.price}
								</p>

								<button
									className="
										mt-5
										w-full h-[42px]
										border border-[#cfc8bc]
										text-[9px]
										md:text-[10px]
										tracking-[0.28em]
										font-semibold
										uppercase
										text-[#4f6665]
										bg-transparent
										transition-all duration-300
										hover:bg-[#356668]
										hover:border-[#356668]
										hover:text-brand-cream
									"
								>
									Add To Ritual
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
