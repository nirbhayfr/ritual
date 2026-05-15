import { useState, useRef } from "react";

const products = [
	{
		id: 1,
		name: "Soma Elixir",
		subtitle: "Vitality & Radiance",
		price: 74,
		rating: 4.4,
		reviews: 245,
		badge: "Customer Favorite",
		image: "/bs-1.png",
	},
	{
		id: 2,
		name: "Ojas Paste",
		subtitle: "Immune Support",
		price: 68,
		rating: 4.6,
		reviews: 189,
		badge: "Customer Favorite",
		image: "/bs-2.png",
	},
	{
		id: 3,
		name: "Prana Mist",
		subtitle: "Breathe & Focus",
		price: 42,
		rating: 4.5,
		reviews: 312,
		badge: "Customer Favorite",
		image: "/bs-4.png",
	},
	{
		id: 4,
		name: "Ritual Tool Kit",
		subtitle: "Self-Care Essentials",
		price: 96,
		rating: 4.8,
		reviews: 98,
		badge: "Customer Favorite",
		image: "/bs-3.png",
	},
	{
		id: 5,
		name: "Abhyanga Oil",
		subtitle: "Daily Nourishment",
		price: 58,
		rating: 4.7,
		reviews: 174,
		badge: "Customer Favorite",
		image: "/bs-5.png",
	},
	{
		id: 6,
		name: "Sattva Serum",
		subtitle: "Clarity & Glow",
		price: 88,
		rating: 4.5,
		reviews: 201,
		badge: "Customer Favorite",
		image: "/bs-6.png",
	},
];

function StarRating({ rating }) {
	return (
		<div className="flex items-center gap-1.5">
			<div className="flex gap-[2px]">
				{[1, 2, 3, 4, 5].map((star) => {
					const filled = rating >= star;
					const partial = !filled && rating > star - 1;
					return (
						<svg
							key={star}
							width="10"
							height="10"
							viewBox="0 0 24 24"
							className="shrink-0"
						>
							<defs>
								{partial && (
									<linearGradient
										id={`partial-${star}`}
										x1="0"
										x2="1"
										y1="0"
										y2="0"
									>
										<stop
											offset={`${(rating % 1) * 100}%`}
											stopColor="#c8a96e"
										/>
										<stop
											offset={`${(rating % 1) * 100}%`}
											stopColor="transparent"
										/>
									</linearGradient>
								)}
							</defs>
							<polygon
								points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
								fill={
									filled
										? "#c8a96e"
										: partial
											? `url(#partial-${star})`
											: "none"
								}
								stroke="#c8a96e"
								strokeWidth="1.5"
							/>
						</svg>
					);
				})}
			</div>
			<span className="text-[10px] text-stone-400 tracking-wide">
				{rating.toFixed(1)}/5
			</span>
		</div>
	);
}

function ProductCard({ product }) {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className="flex flex-col cursor-pointer group"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{/* Image */}
			<div className="relative w-full aspect-square bg-stone-100 rounded-sm overflow-hidden mb-3">
				<img
					src={product.image}
					alt={product.name}
					className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
				/>
				{/* Badge */}
				<span className="absolute top-2.5 left-2.5 text-[7.5px] font-medium tracking-[0.14em] uppercase bg-white/85 text-stone-500 px-2 py-1 rounded-full backdrop-blur-sm">
					{product.badge}
				</span>
				{/* Price */}
				<span className="absolute top-2.5 right-2.5 text-[11px] font-normal text-stone-700 bg-stone-50/90 px-2 py-0.5 rounded-full backdrop-blur-sm">
					${product.price}
				</span>
				{/* Quick add overlay */}
				<div
					className={`absolute bottom-0 left-0 right-0 flex items-center justify-center py-3 bg-stone-900/80 backdrop-blur-sm transition-all duration-300 ${
						hovered
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-2"
					}`}
				>
					<span className="text-[9px] font-medium tracking-[0.18em] uppercase text-white">
						Add to Cart
					</span>
				</div>
			</div>

			{/* Info */}
			<div
				style={{ fontFamily: "'Cormorant Garamond', serif" }}
				className="text-[15px] font-normal text-stone-800 tracking-wide mb-1.5"
			>
				{product.name}
			</div>
			<StarRating rating={product.rating} />
			<div className="mt-1 text-[9.5px] tracking-[0.08em] uppercase text-stone-400">
				{product.subtitle}
			</div>
		</div>
	);
}

export default function BestSellers() {
	const [page, setPage] = useState(0);
	const perPage = 4;
	const totalPages = Math.ceil(products.length / perPage);
	const visible = products.slice(page * perPage, page * perPage + perPage);

	return (
		<>
			{/* Google Font */}
			<style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Jost:wght@300;400;500&display=swap');`}</style>

			<section
				className="bg-[#f5f3ee] px-8 py-10"
				style={{ fontFamily: "'Jost', sans-serif" }}
			>
				{/* Header */}
				<p className="text-[9px] tracking-[0.22em] uppercase text-stone-400 mb-2.5">
					Essentials
				</p>
				<div className="flex items-end justify-between mb-7">
					<h2
						className="text-[34px] font-light text-stone-800 leading-none"
						style={{
							fontFamily: "'Cormorant Garamond', serif",
						}}
					>
						Best Sellers
					</h2>
					<div className="flex gap-1.5 pb-1">
						<button
							onClick={() =>
								setPage((p) => Math.max(0, p - 1))
							}
							disabled={page === 0}
							className="w-[30px] h-[30px] flex items-center justify-center border border-stone-300 rounded-sm bg-white hover:bg-stone-800 hover:border-stone-800 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed group/btn"
							aria-label="Previous"
						>
							<svg
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-stone-500 group-hover/btn:text-white group-disabled:text-stone-300 transition-colors"
							>
								<polyline points="15 18 9 12 15 6" />
							</svg>
						</button>
						<button
							onClick={() =>
								setPage((p) =>
									Math.min(totalPages - 1, p + 1),
								)
							}
							disabled={page === totalPages - 1}
							className="w-[30px] h-[30px] flex items-center justify-center border border-stone-300 rounded-sm bg-white hover:bg-stone-800 hover:border-stone-800 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed group/btn"
							aria-label="Next"
						>
							<svg
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-stone-500 group-hover/btn:text-white transition-colors"
							>
								<polyline points="9 18 15 12 9 6" />
							</svg>
						</button>
					</div>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
					{visible.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>

				{/* Pagination dots */}
				{totalPages > 1 && (
					<div className="flex justify-center gap-1.5 mt-8">
						{Array.from({ length: totalPages }).map(
							(_, i) => (
								<button
									key={i}
									onClick={() => setPage(i)}
									className={`h-[3px] rounded-full transition-all duration-300 ${
										i === page
											? "bg-stone-700 w-6"
											: "bg-stone-300 w-3"
									}`}
									aria-label={`Page ${i + 1}`}
								/>
							),
						)}
					</div>
				)}
			</section>
		</>
	);
}
