import { ArrowRight } from "lucide-react";

export default function VesselOfBreath() {
	return (
		<section className="bg-[#f6f2ea] px-4 sm:px-6 md:px-10 py-6 md:py-10">
			{/* Mobile Heading */}
			<div className="sm:hidden mb-5">
				<p className="font-serif text-[#496765] text-[18px] tracking-[0.18em] uppercase">
					The Vessel Of Breath
				</p>
			</div>

			<div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-4 lg:h-[600px]">
				{/* ── Left Side ───────────────────────── */}
				<div className="flex flex-1 lg:flex-[1.45] gap-3 md:gap-4 min-w-0">
					{/* Vertical Text */}
					<div className="hidden sm:flex w-[42px] md:w-[54px] items-center justify-center flex-shrink-0">
						<p
							className="font-serif text-[#496765] uppercase whitespace-nowrap"
							style={{
								writingMode: "vertical-rl",
								transform: "rotate(180deg)",
								fontSize: "clamp(18px, 2vw, 28px)",
								letterSpacing: "0.22em",
							}}
						>
							The Vessel Of Breath
						</p>
					</div>

					{/* Main Image */}
					<div className="flex-1 overflow-hidden rounded-[4px] border border-[#d8d2c8] bg-[#d9d4cc] min-h-[380px] sm:min-h-[500px] lg:min-h-0">
						<img
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoVBg8lWupF8kTRo1ZVGpp6LKjLZLCaJTQGlfZsdofwBxll2-X_0ed7toYfPxgT_6r5jzIH5vsQKlI2RH2Af_ykzS22bdcXYvCPCn7yYw7ZqWYx6zOHKJe7SPQPD7NGjKxQmf_nyHXXmgU7bv_tlT0TaItgtqh-v8IdMeVrq-Hg5MNGiYHRtyYPXvAeDwVn_ZX5WFD11KFNp3V75xNNPSKO1-CwlENVXuny_FHnxqEaM3ss2ZA7slfNCtGb4j45By0HonIuMdGbXdE"
							alt="Meditation"
							className="w-full h-full object-cover grayscale object-top"
						/>
					</div>
				</div>

				{/* ── Right Side ─────────────────────── */}
				<div className="w-full lg:w-[450px] flex flex-col gap-4">
					{/* Top Bowl Image */}
					<div className="h-[220px] sm:h-[280px] lg:h-[300px] overflow-hidden border border-[#d8d2c8] bg-[#e7dfd2] p-[3px]">
						<img
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf3nXa4iKrFCYlYC7lEiYwF5BrzSUc7omXQjuO9bVNNiL5ai4piPRJF5k_A-ImBdZFpsuoaD9ovqLEAG4Ad7PkUd6hGuwOJZtEOVdsk1qrcK2czaEpgvlYUVTFWVuTrcd87H-lJ_cqSZZVdkhpOvo8M49yHnphXdm1jtrtOSmkBSGdE-RWXg3ZXssZu7ThVwNzZIdh4skiuYv-0mga0zWGDI6n5ikwQO3aX39A3nKvaZ2SL2G0W1ge68VHhd4_ZzTw8gWkv0VgZlM8"
							alt="Bowl"
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Text Card */}
					<div className="bg-[#f8f5ef] border border-[#e1dbcf] p-6 sm:p-8 flex-1 flex flex-col justify-between min-h-[260px]">
						<div>
							<p className="text-[8px] sm:text-[9px] tracking-[0.24em] sm:tracking-[0.28em] uppercase text-[#607c79] font-semibold mb-4 sm:mb-5">
								Volume IV: Respiration
							</p>

							<h2 className="font-serif text-[24px] sm:text-[30px] lg:text-[20px] xl:text-[28px] leading-[1.08] tracking-[-0.04em] text-[#1d1d1b] max-w-[320px]">
								Exploring the intersection of ancient
								pranayama and modern cognitive science.
							</h2>

							<p className="mt-5 sm:mt-6 text-[12px] sm:text-[13px] leading-[1.8] text-[#66635d] max-w-[320px]">
								The breath is more than a biological
								necessity; it is a bridge between the
								conscious and the divine. In this
								edition, we delve into the architectural
								rhythm of life.
							</p>
						</div>

						<a
							href="#"
							className="group mt-8 inline-flex items-center gap-2 text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.22em] uppercase font-semibold text-[#1d1d1b]"
						>
							Read The Volume
							<ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
