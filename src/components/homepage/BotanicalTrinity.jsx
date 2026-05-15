import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

const IMAGES = {
	trinity1:
		"https://lh3.googleusercontent.com/aida-public/AB6AXuDIznot1e20Hh-mAD4qe-KW5G2BdVUnuM9fZ8W_jyJsrbTJ6bYXY91V2PgBeGkIM1YLbFfRjwMqSB_jXxGOBnRpcd3zkfcnaXoOCIqNfxMWTO4SEwGa8YVvku79LMT5ec2MAnpJxak_3fPddaFLEX45TO7b0_z2hNBA0UK6soR-0rv0rQlQWOv-MKI2_w0IlRdEAouzxaUXoylzkAZzI56OxtXMms5e7YFwD5fOaihf1HgSY15YxqcHuBQfgEimwWc6fdOQqQnKDHpl",
	trinity2:
		"https://lh3.googleusercontent.com/aida-public/AB6AXuCGIxRxW-SvOnEAxS4sE3AtdadpIxZVSMKeYt8i25hSaodLD0UYRzF6yxH-yyGmmipsrbd2s9_D_7M8hg2-1ZLKLpzZv092bcLiBiapHQ2dlutVM0BI1UiSIHgiB1oLtK16xe_a7eZ6hmdke7ugnFgXA8tqJg-5pR_4FGonbcnAmNk7SEVQWODKs-u7UzkFjDWqvfFbxTTHZgcJRN6qHf567ThkL4BjDV4FcSUDyiTKOOe437AcdO7xR9dLQQpfjgFDGp0XB5a6a6qf",
	trinity3:
		"https://lh3.googleusercontent.com/aida-public/AB6AXuBLu3ln99WjffVV4xLo336P3R-5l0XfOZVRbshysYSsgCV3dZPXqM21Rqw454uVyiD_ZBdcnrTZOobsHFFKQOaIY1cTf5T010BbUo-ssMZv4wqiBk25GnHOVzfmVgsfQiodbzF2QnBGGKqGz0aEi3Mjhd1yIHf4SrdF-qu7ymbUjT8EsEh-_HHIW4TGZpnsUfKokIknyBFd1oOZtwJCfr9az0h97kxLgmdwLgCJwqqqG5YexM-K8fTvAuCqxYoMbEelewt2Im2FQy9D",
};

/* ── Dosha badge colours ──────────────────────────────────────────── */
const DOSHA_STYLES = {
	Pitta: {
		pill: "bg-[#fdf3ee] text-[#7a3a1e] border-[#e8c4a8]",
		dot: "bg-[#c1622a]",
	},
	Vata: {
		pill: "bg-[#eef2f8] text-[#1e3255] border-[#b8cbe0]",
		dot: "bg-[#2d5a8e]",
	},
	Kapha: {
		pill: "bg-[#eef5f0] text-[#1a3d24] border-[#a8d0b0]",
		dot: "bg-[#2e7a42]",
	},
};

/* ── Product Card ────────────────────────────────────────────────── */
const ProductCard = ({ image, dosha, effect, title, price, index }) => {
	const cardRef = useRef(null);
	const imageRef = useRef(null);
	const overlayRef = useRef(null);
	const doshaStyle = DOSHA_STYLES[dosha] ?? DOSHA_STYLES.Pitta;

	const onMouseEnter = () => {
		gsap.to(cardRef.current, {
			y: -8,
			duration: 0.4,
			ease: "power3.out",
		});
		gsap.to(imageRef.current, {
			scale: 1.06,
			duration: 0.7,
			ease: "power2.out",
		});
		gsap.to(overlayRef.current, {
			opacity: 1,
			duration: 0.35,
			ease: "power2.out",
		});
	};

	const onMouseLeave = () => {
		gsap.to(cardRef.current, { y: 0, duration: 0.4, ease: "power3.out" });
		gsap.to(imageRef.current, {
			scale: 1,
			duration: 0.7,
			ease: "power2.out",
		});
		gsap.to(overlayRef.current, {
			opacity: 0,
			duration: 0.35,
			ease: "power2.out",
		});
	};

	return (
		<div
			ref={cardRef}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className="group cursor-pointer"
			style={{ willChange: "transform" }}
		>
			{/* ── Image container ── */}
			<div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-[#e8e4d8]">
				<img
					ref={imageRef}
					src={image}
					alt={title}
					className="w-full h-full object-cover"
					style={{ willChange: "transform" }}
					referrerPolicy="no-referrer"
				/>

				{/* Hover overlay with CTA */}
				<div
					ref={overlayRef}
					className="absolute inset-0 flex items-end p-6"
					style={{
						opacity: 0,
						background:
							"linear-gradient(to top, rgba(27,46,43,0.72) 0%, rgba(27,46,43,0.10) 55%, transparent 100%)",
					}}
				>
					<button className="flex items-center gap-2 bg-[#f4f1e8] text-[#1b2e2b] text-[10.5px] font-semibold uppercase tracking-[0.2em] px-5 py-3 rounded-[8px] hover:bg-white transition-colors">
						Add to ritual{" "}
						<ArrowRight className="w-3.5 h-3.5" />
					</button>
				</div>

				{/* Index number — top-right corner */}
				<span className="absolute top-4 right-4 font-sans text-[11px] font-medium tracking-[0.25em] text-white/60">
					0{index + 1}
				</span>
			</div>

			{/* ── Meta ── */}
			<div className="flex items-center gap-2 mb-3">
				{/* Dosha pill */}
				<span
					className={`inline-flex items-center gap-1.5 border text-[10px] font-semibold uppercase tracking-[0.15em] px-3 py-1 rounded-full ${doshaStyle.pill}`}
				>
					<span
						className={`w-1.5 h-1.5 rounded-full ${doshaStyle.dot}`}
					/>
					{dosha}
				</span>
				{/* Effect pill */}
				<span className="border border-[#ccc5b0] text-[#5f655f] text-[10px] font-medium uppercase tracking-[0.12em] px-3 py-1 rounded-full bg-transparent">
					{effect}
				</span>
			</div>

			{/* ── Title + price ── */}
			<h3 className="font-serif text-[20px] md:text-[22px] font-normal text-[#1d1c17] leading-[1.25] mb-2 group-hover:text-[#3f6a67] transition-colors duration-300">
				{title}
			</h3>

			<div className="flex items-center justify-between">
				<p className="font-sans text-[14px] font-medium text-[#5f655f] tracking-[0.04em]">
					{price}
				</p>
				<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#3f6a67]">
					<ArrowRight className="w-4 h-4" />
				</span>
			</div>
		</div>
	);
};

/* ── Section ─────────────────────────────────────────────────────── */
export const BotanicalTrinity = () => {
	const sectionRef = useRef(null);
	const headRef = useRef(null);
	const gridRef = useRef(null);
	const lineRef = useRef(null);

	useGSAP(
		() => {
			/* Thin divider line draws in */
			gsap.fromTo(
				lineRef.current,
				{ scaleX: 0, transformOrigin: "left center" },
				{
					scaleX: 1,
					duration: 1.2,
					ease: "power3.inOut",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 80%",
					},
				},
			);

			/* Header fades up */
			gsap.fromTo(
				headRef.current.children,
				{ y: 32, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					stagger: 0.12,
					duration: 0.9,
					ease: "power3.out",
					scrollTrigger: {
						trigger: headRef.current,
						start: "top 82%",
					},
				},
			);

			/* Cards cascade up */
			gsap.fromTo(
				gridRef.current.children,
				{ y: 48, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					stagger: 0.14,
					duration: 0.9,
					ease: "power3.out",
					scrollTrigger: {
						trigger: gridRef.current,
						start: "top 85%",
					},
				},
			);
		},
		{ scope: sectionRef },
	);

	return (
		<section
			ref={sectionRef}
			className="bg-[#f4f1e8] px-5 md:px-[64px] py-12 md:py-16"
		>
			<div className="max-w-[1280px] mx-auto">
				{/* ── Header row ── */}
				<div
					ref={headRef}
					className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-6"
				>
					{/* Left */}
					<div>
						<p
							className="text-eyebrow mb-4"
							style={{ color: "var(--color-teal-light)" }}
						>
							Curated Formulations
						</p>
						<h2
							className="font-serif font-normal text-[#1d1c17] leading-[1.1] tracking-[-0.02em]"
							style={{
								fontSize: "clamp(32px, 3.5vw, 52px)",
							}}
						>
							The Botanical Trinity
						</h2>
					</div>

					{/* Right */}
					<div className="flex flex-col items-start md:items-end gap-3">
						<p className="font-sans text-[13.5px] leading-relaxed text-[#5f655f] max-w-xs md:text-right">
							Curated formulations designed to balance your
							unique Dosha energy: Vata, Pitta, and Kapha.
						</p>
						<a
							href="#"
							className="inline-flex items-center gap-2 font-sans text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#3f6a67] group/link"
						>
							<span className="border-b border-[#3f6a67] pb-px group-hover/link:border-[#5a9490] group-hover/link:text-[#5a9490] transition-colors">
								Shop All Products
							</span>
							<ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
						</a>
					</div>
				</div>

				{/* ── Product grid ── */}
				<div
					ref={gridRef}
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-14 md:gap-x-10"
				>
					{[
						{
							image: IMAGES.trinity1,
							dosha: "Pitta",
							effect: "Soothing",
							title: "Celestial Aura Serum",
							price: "$84.00",
						},
						{
							image: IMAGES.trinity2,
							dosha: "Vata",
							effect: "Grounding",
							title: "Root Essence Balm",
							price: "$92.00",
						},
						{
							image: IMAGES.trinity3,
							dosha: "Kapha",
							effect: "Energizing",
							title: "Solar Clarity Mist",
							price: "$68.00",
						},
					].map((product, i) => (
						<ProductCard
							key={product.title}
							{...product}
							index={i}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default BotanicalTrinity;
