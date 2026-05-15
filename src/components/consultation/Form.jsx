import { useState } from "react";

const WELLNESS_GOALS = [
	"Radiance",
	"Deep Rest & Recovery",
	"Digestive Balance",
	"Mental Clarity",
	"Stress Relief",
	"Detoxification",
	"Joint & Mobility Care",
	"Hormonal Harmony",
];

export default function Form() {
	const [form, setForm] = useState({
		fullName: "",
		email: "",
		goal: "Radiance",
		intention: "",
	});

	const handleChange = (e) =>
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

	const handleSubmit = () => console.log("Form submitted:", form);

	return (
		<section className="w-full min-h-screen bg-surface flex items-center justify-center section-padding">
			<div className="w-full max-w-xl">
				{/* Eyebrow */}
				<p className="text-eyebrow justify-center mb-5">
					Begin Your Journey
				</p>

				{/* Heading */}
				<h2 className="text-headline-lg font-serif text-on-surface text-center mb-4">
					Share Your Intent
				</h2>

				{/* Subheading */}
				<p className="font-sans text-[13px] font-light leading-relaxed text-on-surface-variant text-center max-w-sm mx-auto mb-10">
					To tailor your 45 minute journey, please provide a few
					details about your current state of being.
				</p>

				{/* Card */}
				<div
					className="border border-brand-stone rounded-[var(--radius-card)] px-8 md:px-10 py-10"
					style={{ background: "var(--color-brand-cream)" }}
				>
					{/* Full Name + Email row */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-7">
						<div>
							<label className="block font-sans text-[9px] font-semibold tracking-[0.22em] uppercase text-moss mb-2.5">
								Full Name
							</label>
							<input
								type="text"
								name="fullName"
								value={form.fullName}
								onChange={handleChange}
								placeholder="Enter your name"
								className="w-full bg-transparent border-b border-brand-stone pb-2.5
                  font-sans text-[13px] font-light text-on-surface
                  placeholder:text-on-surface-variant/40
                  focus:outline-none focus:border-primary
                  transition-colors duration-300"
							/>
						</div>

						<div>
							<label className="block font-sans text-[9px] font-semibold tracking-[0.22em] uppercase text-moss mb-2.5">
								Email Address
							</label>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="email@example.com"
								className="w-full bg-transparent border-b border-brand-stone pb-2.5
                  font-sans text-[13px] font-light text-on-surface
                  placeholder:text-on-surface-variant/40
                  focus:outline-none focus:border-primary
                  transition-colors duration-300"
							/>
						</div>
					</div>

					{/* Wellness Goal */}
					<div className="mb-7">
						<label className="block font-sans text-[9px] font-semibold tracking-[0.22em] uppercase text-moss mb-2.5">
							Primary Wellness Goal
						</label>
						<div className="relative">
							<select
								name="goal"
								value={form.goal}
								onChange={handleChange}
								className="w-full appearance-none bg-surface border border-brand-stone rounded-[var(--radius-btn)] px-4 py-3
                  font-sans text-[13px] font-light text-on-surface
                  focus:outline-none focus:border-primary
                  transition-colors duration-300 cursor-pointer"
							>
								{WELLNESS_GOALS.map((g) => (
									<option key={g} value={g}>
										{g}
									</option>
								))}
							</select>
							<div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-moss">
								<svg
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
								>
									<path d="M6 9l6 6 6-6" />
								</svg>
							</div>
						</div>
					</div>

					{/* Intention textarea */}
					<div className="mb-10">
						<label className="block font-sans text-[9px] font-semibold tracking-[0.22em] uppercase text-moss mb-2.5">
							What Brings You to the Mat Today?
						</label>
						<textarea
							name="intention"
							value={form.intention}
							onChange={handleChange}
							placeholder="Share your current state and intentions..."
							rows={5}
							className="w-full bg-surface border border-brand-stone rounded-[var(--radius-btn)] px-4 py-3 resize-none
                font-sans text-[13px] font-light text-on-surface leading-relaxed
                placeholder:text-on-surface-variant/40
                focus:outline-none focus:border-primary
                transition-colors duration-300"
						/>
					</div>

					{/* Submit */}
					<div className="flex justify-center">
						<button
							onClick={handleSubmit}
							className="btn-primary group inline-flex items-center gap-3"
						>
							Continue to Booking
							<svg
								width="13"
								height="13"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								className="transition-transform duration-300 group-hover:translate-x-1"
							>
								<path d="M5 12h14M13 6l6 6-6 6" />
							</svg>
						</button>
					</div>
				</div>

				{/* Footer note */}
				<p className="text-center font-sans text-[10px] font-light tracking-[0.12em] text-moss/60 mt-6">
					Your responses are held with complete privacy and care.
				</p>
			</div>
		</section>
	);
}
