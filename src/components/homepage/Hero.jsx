/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
	const containerRef = useRef(null);
	const imgRef = useRef(null);
	const contentRef = useRef(null);

	useGSAP(
		() => {
			gsap.from(imgRef.current, {
				scale: 1.1,
				duration: 1.5,
				ease: "power2.out",
			});

			gsap.from(contentRef.current, {
				opacity: 0,
				x: -50,
				duration: 0.8,
				delay: 0.5,
				ease: "power2.out",
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20"
		>
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<img
					ref={imgRef}
					src="/screen.png"
					alt="Botanical Still Life"
					className="w-full h-full object-cover object-[85%_center] md:object-top"
					referrerPolicy="no-referrer"
				/>

				<div className="absolute inset-0 bg-on-surface/10" />
			</div>

			{/* Content */}
			<div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-[64px]">
				<div
					ref={contentRef}
					className="
						max-w-full
						sm:max-w-xl
						md:max-w-2xl
						bg-surface/30
						backdrop-blur-md
						p-6
						sm:p-8
						md:p-10
						lg:p-14
						rounded-xl
					"
				>
					<h1
						className="
							text-display-lg
							text-on-surface
							mb-6
							md:mb-8
							leading-[0.95]
							text-[42px]
							sm:text-[56px]
							md:text-[72px]
						"
					>
						Ancient Wisdom,
						<br />
						Modern Stillness.
					</h1>

					<p
						className="
							text-body-lg
							text-on-surface-variant
							mb-8
							md:mb-10
							max-w-lg
							text-sm
							sm:text-base
							md:text-lg
							leading-7
						"
					>
						Elevate your daily consciousness through the
						curated rituals of Ayurvedic science and
						high-fashion botanical artistry.
					</p>

					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
						<button className="bg-primary text-on-primary px-6 sm:px-8 py-3.5 sm:py-4 text-label-md rounded-lg hover:brightness-110 transition-all shadow-sm w-full sm:w-auto">
							Explore Collections
						</button>

						<button className="border border-on-surface text-on-surface px-6 sm:px-8 py-3.5 sm:py-4 text-label-md rounded-lg hover:bg-on-surface hover:text-surface transition-all w-full sm:w-auto">
							Our Rituals
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
