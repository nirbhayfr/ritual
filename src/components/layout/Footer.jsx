import { Globe, Mail, ArrowUpRight, MapPin, Phone } from "lucide-react";

const navLinks = ["Collections", "Rituals", "Journal", "Philosophy"];

const supportLinks = [
	"Shipping & Returns",
	"Sustainability",
	"Privacy Policy",
	"Contact Us",
];

function LinkRow({ label }) {
	return (
		<a
			href="#"
			className="group flex items-center justify-between text-[11px] md:text-xs text-[#5f655f] transition-colors duration-200 hover:text-[#2d3a2e]"
		>
			<span>{label}</span>

			<span className="opacity-0 transition-all duration-200 translate-x-0 translate-y-0 group-hover:opacity-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] text-[#3f6a67]">
				<ArrowUpRight size={13} />
			</span>
		</a>
	);
}

export default function Footer() {
	return (
		<footer className="bg-[#f4f1e8] font-sans relative overflow-hidden">
			{/* Top Border */}
			<div className="h-px bg-[#e8e4d8]" />

			{/* Main Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1.15fr_0.78fr_0.78fr_1fr] gap-2 xl:gap-0 border-b border-[#e8e4d8]">
				{/* ── Brand ── */}
				<div className="px-6 sm:px-8 lg:px-10 py-10">
					<p className="text-[20px] sm:text-[24px] lg:text-[26px] tracking-[0.22em] sm:tracking-[0.28em] font-semibold text-[#3f6a67] uppercase mb-4 leading-none">
						VEDA RITUAL
					</p>

					<p className="text-[13px] leading-[1.8] text-[#5f655f] max-w-[260px] mb-6">
						A contemporary ritual house blending ancient
						Ayurvedic philosophy with modern sensory design.
					</p>

					<div className="flex gap-2">
						{[
							{
								icon: <Globe size={18} />,
								label: "Website",
							},
							{
								icon: <Mail size={18} />,
								label: "Email",
							},
						].map(({ icon, label }) => (
							<button
								key={label}
								aria-label={label}
								className="w-10 h-10 rounded-full border border-[#e8e4d8] text-[#5f655f] flex items-center justify-center transition-all duration-300 hover:bg-[#3f6a67] hover:border-[#3f6a67] hover:text-[#f4f1e8]"
							>
								{icon}
							</button>
						))}
					</div>
				</div>

				{/* ── Explore ── */}
				<div className="px-6 sm:px-8 py-2 sm:py-10">
					<p className="text-[12px] tracking-[0.28em] font-semibold text-[#3f6a67] uppercase mb-5">
						Explore
					</p>

					<nav className="flex flex-col gap-2">
						{navLinks.map((l) => (
							<LinkRow key={l} label={l} />
						))}
					</nav>
				</div>

				{/* ── Support ── */}
				<div className="px-6 sm:px-8 py-2 sm:py-10">
					<p className="text-[12px] tracking-[0.28em] font-semibold text-[#3f6a67] uppercase mb-5">
						Support
					</p>

					<nav className="flex flex-col gap-2">
						{supportLinks.map((l) => (
							<LinkRow key={l} label={l} />
						))}
					</nav>
				</div>

				{/* ── Atelier ── */}
				<div className="px-6 sm:px-8 lg:px-10 py-10">
					<p className="text-[12px] tracking-[0.28em] font-semibold text-[#3f6a67] uppercase mb-5">
						Atelier
					</p>

					<div className="flex flex-col gap-4 mb-7">
						{[
							{
								icon: <MapPin size={12} />,
								text: (
									<>
										1200 Heritage Boulevard
										<br />
										Stockholm, SE 114 31
									</>
								),
							},
							{
								icon: <Mail size={12} />,
								text: "contact@vedaritual.com",
							},
							{
								icon: <Phone size={12} />,
								text: "+46 (0) 8 123 456 78",
							},
						].map(({ icon, text }, i) => (
							<div
								key={i}
								className="flex gap-3 items-start"
							>
								<span className="text-[#3f6a67] mt-[2px] flex-shrink-0">
									{icon}
								</span>

								<p className="text-[11px] sm:text-[11.5px] leading-[1.8] text-[#5f655f]">
									{text}
								</p>
							</div>
						))}
					</div>

					{/* Newsletter */}
					<div className="border-t border-[#e8e4d8] pt-5">
						<p className="text-[8px] tracking-[0.24em] font-semibold uppercase text-[#3f6a67] mb-1">
							The Ritual Letter
						</p>

						<p className="text-[11px] leading-[1.6] text-[#9fa49f] mb-4">
							Seasonal formulations & atelier notes.
						</p>

						<div className="flex flex-col sm:flex-row gap-2">
							<input
								type="email"
								placeholder="your@email.com"
								className="flex-1 bg-[#fef9f0] border border-[#e8e4d8] rounded-[5px] px-3 py-2 text-[11px] text-[#2d3a2e] outline-none"
							/>

							<button className="bg-[#3f6a67] hover:bg-[#5a9490] transition-colors text-[#f4f1e8] rounded-[5px] px-5 py-2 text-[8.5px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap">
								Join
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="flex flex-col md:flex-row items-center justify-between gap-5 px-6 sm:px-8 lg:px-16 py-6">
				<p className="text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[#6d8a87] text-center md:text-left">
					© 2026 Veda Ritual — All Rights Reserved
				</p>

				<div className="flex flex-wrap justify-center gap-5 sm:gap-7">
					{["Terms", "Privacy", "Accessibility"].map((item) => (
						<a
							key={item}
							href="#"
							className="text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[#6d8a87] no-underline transition-colors duration-200 hover:text-[#5f655f]"
						>
							{item}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
