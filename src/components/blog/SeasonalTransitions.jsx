import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const ARTICLES = [
	{
		tag: "KAPHA SEASON",
		title: "The Spring Awakening: Detoxifying the Subtle Body",
		description:
			"Discover the essential herbs and movement practices to clear stagnant energy as we transition into the blooming months.",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXC55wUfYURGKvkYCo5vRkVIELNUCm3nhQFWaFfgBgX4cRUjRJmSQD6JaHkgvHyoqnn2o3izyNG9I9UfX3fxteBKl-GasfPCe-JavfSXjDcY_3WvVGtpxRRybcEPe5wAHSDB44uFaQioiOHTi8LVipVGDoiClJBblXJRtHAsOrSBvncT0zUpZytwIOd5hLG-u-autTnIboChl401tWJAEsUaEJrLqSf2EJYMZu9T8BD3rboHkfgqp7FDAbWAUCPEWlslMrMcugxexl",
	},
	{
		tag: "DAILY RITUAL",
		title: "Abhyanga: The Art of Self-Anointment",
		description:
			"Beyond skin deep. A technical guide to the sequence of self-massage for lymphatic drainage and nervous system regulation.",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8sH8bopOQrhbbRudOrf5Hj3Kq-2t4hG2nBxTmXTkNG8VZkJ9tytCKXXQPeEDhUPeAkheOTOyhEFK21chhErkEAfUGpA8Cie64vLgN9EFtwrGJh35hOUNECfsbbUBFFafpBtOGvO7DLtvkhG36spmDu3cW70WE7-aknhZhwjJYVMs3KOxytYWVvX90I-42tBKnG0KCN7YrivUTh8QqBajgUnjwV3UmrVO9ifypuTb2W6REDatI7PQC2HtIwlW8nO-Q1TPJ0XzjvWD5",
	},
	{
		tag: "SCIENCE",
		title: "Bio-Individuality and the Three Doshas",
		description:
			"A deep dive into how genomic testing is beginning to mirror the ancient wisdom of Ayurvedic constitutional typing.",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNXyFvG7FV1U8PrhFver7MUPo6e7NmGoWHj-VR3VWlDoYUO_BgBxJEaM_CEY_98RZG3kSFonsz4n1jv3YkUvIa8Me-GavvRZv-PRdwudDG1uafs-Ba5Ko544zYbx6RrM7yQHBQM6WrHwJRvbs7gwyTaEIEQqwqJb4ZENviVBdUEtqVlEk_LfcqYgEhALTRl7dZPT8f3t0CTUWeKL5Iuwgp-T2gWiuniZ2R8Tqo7QVDkahrtJj0ZJIpJEfKTh9zQhQOpOkzov0b8kHM",
	},
];

export default function SeasonalTransitions() {
	const containerRef = useRef(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const items = containerRef.current.querySelectorAll(".ritual-card");

		gsap.fromTo(
			items,
			{ y: 100, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1.5,
				stagger: 0.3,
				ease: "expo.out",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 85%",
				},
			},
		);
	}, []);

	return (
		<section className="max-w-container-max mx-auto px-margin-desktop py-section-gap p-12">
			<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
				<div className="max-w-xl">
					<h2 className="text-headline-lg mb-4">
						Seasonal Transitions
					</h2>
					<div className="w-24 h-1 bg-primary/20"></div>
				</div>
				<p className="text-body-md text-on-surface-variant max-w-md leading-relaxed italic">
					"Aligning your internal clock with the rhythms of the
					earth. Curated guidance for the current solar cycle."
				</p>
			</div>

			<div
				ref={containerRef}
				className="grid grid-cols-1 md:grid-cols-3 gap-12"
			>
				{ARTICLES.map((article, idx) => (
					<motion.article
						key={idx}
						className="ritual-card group cursor-pointer"
						whileHover={{ y: -10 }}
						transition={{ duration: 0.5, ease: "circOut" }}
					>
						<div className="aspect-[3/4] overflow-hidden mb-8 bg-surface-container-high rounded-sm shadow-sm">
							<img
								src={article.image}
								alt={article.title}
								className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
								referrerPolicy="no-referrer"
							/>
						</div>
						<div className="px-1">
							<span className="text-[11px] text-tertiary-fixed-dim font-bold uppercase tracking-[0.2em] mb-4 block">
								{article.tag}
							</span>
							<h3 className="font-serif leading-[1.3] text-2xl mb-4 group-hover:text-primary transition-colors duration-500">
								{article.title}
							</h3>
							<p className="text-body-md text-on-surface-variant/80 border-l border-outline-variant/30 pl-4">
								{article.description}
							</p>
						</div>
					</motion.article>
				))}
			</div>
		</section>
	);
}
