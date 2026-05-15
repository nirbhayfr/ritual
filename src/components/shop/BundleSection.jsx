import { useState } from "react";

const bundleItems = [
	{
		id: 1,
		name: "Soma Body Polish",
		description: "Himalayan salts infused with...",
		value: 65,
		image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&q=80",
	},
	{
		id: 2,
		name: "Ojas Facial Nectar",
		description: "Liquid gold serum to revitalize and...",
		value: 110,
		image: "/bs-2.png",
	},
	{
		id: 3,
		name: "Prana Mist",
		description: "Botanical hydrosol for instant...",
		value: 70,
		image: "/bs-3.png",
	},
];

export default function BundleSection() {
	const [added, setAdded] = useState(false);

	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Jost:wght@300;400;500&display=swap');
        .bundle-section * { box-sizing: border-box; }
      `}</style>

			<section
				className="bundle-section bg-[#ede9e2] p-5 sm:p-7"
				style={{ fontFamily: "'Jost', sans-serif" }}
			>
				<div className="flex flex-col lg:flex-row gap-4 max-w-5xl mx-auto">
					{/* ── Left: hero image + overlay card ── */}
					<div className="relative w-full lg:w-[48%] rounded-lg overflow-hidden min-h-[420px] lg:min-h-0 shrink-0">
						<img
							src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=900&q=85"
							alt="The Solar Harmony Set"
							className="absolute inset-0 w-full h-full object-cover"
						/>
						{/* dark gradient at bottom for card legibility */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

						{/* Overlay card */}
						<div className="absolute bottom-5 left-5 right-5 bg-white/88 backdrop-blur-md rounded-md px-5 py-4">
							{/* Badge */}
							<span className="inline-flex items-center border border-[#2d7a6e] text-[#2d7a6e] text-[8px] tracking-[0.18em] uppercase px-2 py-0.5 rounded-full mb-3">
								Most Revered Ritual
							</span>

							{/* Title */}
							<h2
								className="text-[28px] font-light text-stone-800 leading-tight mb-2"
								style={{
									fontFamily:
										"'Cormorant Garamond', serif",
								}}
							>
								The Solar Harmony Set
							</h2>

							{/* Description */}
							<p className="text-[12px] text-stone-500 leading-relaxed mb-4 max-w-xs">
								A complete morning transition for
								Vata-Pitta balance, centering the spirit
								before the day begins.
							</p>

							{/* Price + CTA */}
							<div className="flex items-center gap-4">
								<div className="flex items-baseline gap-2">
									<span className="text-[13px] text-stone-400 line-through">
										$245
									</span>
									<span
										className="text-[26px] font-light text-stone-800"
										style={{
											fontFamily:
												"'Cormorant Garamond', serif",
										}}
									>
										$185
									</span>
								</div>
								<button
									onClick={() => setAdded(true)}
									className={`flex-1 h-10 text-[10px] tracking-[0.18em] uppercase font-medium rounded-sm transition-all duration-300 ${
										added
											? "bg-[#2d7a6e] text-white"
											: "bg-stone-800 hover:bg-stone-700 text-white"
									}`}
								>
									{added
										? "Added to Bag ✓"
										: "Add Set to Bag"}
								</button>
							</div>
						</div>
					</div>

					{/* ── Right: bundle items + synergy card ── */}
					<div className="flex flex-col gap-3 flex-1 min-w-0">
						{bundleItems.map((item) => (
							<div
								key={item.id}
								className="bg-white rounded-md flex items-center gap-3 p-3 group hover:shadow-sm transition-shadow duration-200"
							>
								{/* Thumbnail */}
								<div className="w-[76px] h-[76px] rounded-sm overflow-hidden shrink-0 bg-stone-100">
									<img
										src={item.image}
										alt={item.name}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>

								{/* Info */}
								<div className="flex-1 min-w-0">
									<div className="flex items-center gap-2 mb-0.5">
										<span
											className="text-[14px] font-normal text-stone-800 truncate"
											style={{
												fontFamily:
													"'Cormorant Garamond', serif",
											}}
										>
											{item.name}
										</span>
										<span className="shrink-0 text-[7px] tracking-[0.14em] uppercase bg-[#dff0ed] text-[#2d7a6e] px-1.5 py-0.5 rounded-sm font-medium">
											Part of Bundle
										</span>
									</div>
									<p className="text-[11px] text-stone-400 mb-2 truncate">
										{item.description}
									</p>
									<div className="flex items-center justify-between">
										<span className="text-[12px] text-[#2d7a6e] font-normal">
											${item.value} Value
										</span>
										<button className="text-[9px] tracking-[0.16em] uppercase text-stone-400 hover:text-stone-700 transition-colors border-b border-stone-200 hover:border-stone-500 pb-px">
											Learn More
										</button>
									</div>
								</div>
							</div>
						))}

						{/* Synergy promise card */}
						<div className="bg-[#2a3530] rounded-md p-4 mt-auto">
							<div className="flex items-center gap-2 mb-2.5">
								{/* icon */}
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#8bbdb5"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
								</svg>
								<span className="text-[9px] tracking-[0.2em] uppercase text-[#8bbdb5] font-medium">
									The Synergy Promise
								</span>
							</div>
							<p className="text-[11.5px] text-stone-300 leading-relaxed mb-4">
								When used in sequence, these three
								rituals amplify one another, providing a
								40% increase in skin barrier hydration
								and a noticeable shift in energetic
								clarity within 7 days.
							</p>
							<div className="flex items-center gap-3">
								<button className="text-[9px] tracking-[0.16em] uppercase bg-[#3d9e8f] hover:bg-[#2d7a6e] text-white px-3 py-1.5 rounded-sm transition-colors duration-200 font-medium whitespace-nowrap">
									Save $60 Today
								</button>
								<span className="text-[10px] text-stone-500 leading-snug">
									Bundle exclusive pricing applies.
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
