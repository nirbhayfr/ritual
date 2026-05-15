import { useState } from "react";

const INTENTIONS = [
	"Digestion",
	"Sleep",
	"Radiance",
	"Calm",
	"Clarity",
	"Detox",
];

const TIMES = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

function getDaysInMonth(year, month) {
	return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
	return new Date(year, month, 1).getDay(); // 0=Sun
}

const MONTH_NAMES = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export default function BookingSection() {
	const today = new Date();
	const [viewYear, setViewYear] = useState(today.getFullYear());
	const [viewMonth, setViewMonth] = useState(today.getMonth());
	const [selectedDay, setSelectedDay] = useState(today.getDate());
	const [selectedTime, setSelectedTime] = useState("09:00 AM");
	const [selectedIntent, setSelectedIntent] = useState("Sleep");

	const daysInMonth = getDaysInMonth(viewYear, viewMonth);
	// getDay() returns 0=Sun; we want 0=Mon grid, so shift
	const rawFirst = getFirstDayOfMonth(viewYear, viewMonth);
	const firstDow = (rawFirst + 6) % 7; // Mon=0 … Sun=6

	const prevMonth = () => {
		if (viewMonth === 0) {
			setViewMonth(11);
			setViewYear((y) => y - 1);
		} else setViewMonth((m) => m - 1);
		setSelectedDay(null);
	};

	const nextMonth = () => {
		if (viewMonth === 11) {
			setViewMonth(0);
			setViewYear((y) => y + 1);
		} else setViewMonth((m) => m + 1);
		setSelectedDay(null);
	};

	const handleConfirm = () => {
		console.log({
			intent: selectedIntent,
			day: selectedDay,
			month: viewMonth + 1,
			year: viewYear,
			time: selectedTime,
		});
	};

	// Trailing days from previous month
	const prevDays = getDaysInMonth(
		viewYear,
		viewMonth - 1 < 0 ? 11 : viewMonth - 1,
	);
	const leadingCells = Array.from(
		{ length: firstDow },
		(_, i) => prevDays - firstDow + 1 + i,
	);

	const totalCells = Math.ceil((firstDow + daysInMonth) / 7) * 7;
	const trailingCells = Array.from(
		{ length: totalCells - firstDow - daysInMonth },
		(_, i) => i + 1,
	);

	return (
		<section className="w-full min-h-screen bg-[#32302B] flex items-center justify-center section-padding">
			<div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 md:gap-14 items-start">
				{/* ── Left panel ── */}
				<div>
					<h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-light leading-[1.1] text-cream mb-5">
						Begin Your
						<br />
						Journey
					</h2>
					<p className="font-sans text-[13px] font-light leading-relaxed text-cream/60 mb-10 max-w-[260px]">
						Select your primary intention for this
						consultation. Each session is a 45-minute virtual
						immersive experience.
					</p>

					{/* Intent grid */}
					<div className="grid grid-cols-2 gap-2.5">
						{INTENTIONS.map((intent) => {
							const active = selectedIntent === intent;
							return (
								<button
									key={intent}
									onClick={() =>
										setSelectedIntent(intent)
									}
									className={`
										px-5 py-3 text-left font-sans text-[10px] font-semibold
										tracking-[0.22em] uppercase transition-all duration-200
										border rounded-[var(--radius-btn)]
										${
											active
												? "bg-brand-seafoam border-brand-seafoam text-black"
												: "bg-transparent border-cream/15 text-cream/50 hover:border-brand-seafoam-mist/50 hover:text-cream/80"
										}
									`}
								>
									{intent}
								</button>
							);
						})}
					</div>
				</div>

				{/* ── Right panel (calendar card) ── */}
				<div
					className="rounded-[var(--radius-card)] p-7 md:p-8"
					style={{ background: "var(--color-brand-cream)" }}
				>
					{/* Calendar header */}
					<div className="flex items-center justify-between mb-5">
						<span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-moss">
							{MONTH_NAMES[viewMonth]} {viewYear}
						</span>
						<div className="flex items-center gap-1">
							<button
								onClick={prevMonth}
								className="w-7 h-7 flex items-center justify-center rounded-full
									text-moss hover:bg-brand-stone transition-colors duration-200"
							>
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.8"
								>
									<path d="M15 18l-6-6 6-6" />
								</svg>
							</button>
							<button
								onClick={nextMonth}
								className="w-7 h-7 flex items-center justify-center rounded-full
									text-moss hover:bg-brand-stone transition-colors duration-200"
							>
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.8"
								>
									<path d="M9 18l6-6-6-6" />
								</svg>
							</button>
						</div>
					</div>

					{/* Day-of-week headers */}
					<div className="grid grid-cols-7 mb-2">
						{["M", "T", "W", "T", "F", "S", "S"].map(
							(d, i) => (
								<div
									key={i}
									className="text-center font-sans text-[10px] font-semibold tracking-[0.1em] text-moss/50 py-1"
								>
									{d}
								</div>
							),
						)}
					</div>

					{/* Calendar grid */}
					<div className="grid grid-cols-7 gap-y-1 mb-7">
						{/* Leading cells */}
						{leadingCells.map((d) => (
							<div
								key={`lead-${d}`}
								className="flex items-center justify-center h-9"
							>
								<span className="font-sans text-[12px] text-moss/20">
									{d}
								</span>
							</div>
						))}

						{/* Current month days */}
						{Array.from(
							{ length: daysInMonth },
							(_, i) => i + 1,
						).map((day) => {
							const isSelected = selectedDay === day;
							const isToday =
								day === today.getDate() &&
								viewMonth === today.getMonth() &&
								viewYear === today.getFullYear();
							return (
								<div
									key={day}
									className="flex items-center justify-center h-9"
								>
									<button
										onClick={() =>
											setSelectedDay(day)
										}
										className={`
											w-8 h-8 rounded-full font-sans text-[12px] font-light
											transition-all duration-200 flex items-center justify-center
											${
												isSelected
													? "bg-brand-seafoam text-black font-medium"
													: isToday
														? "border border-teal text-teal hover:bg-brand-seafoam/10"
														: "text-on-surface hover:bg-brand-stone"
											}
										`}
									>
										{day}
									</button>
								</div>
							);
						})}

						{/* Trailing cells */}
						{trailingCells.map((d) => (
							<div
								key={`trail-${d}`}
								className="flex items-center justify-center h-9"
							>
								<span className="font-sans text-[12px] text-moss/20">
									{d}
								</span>
							</div>
						))}
					</div>

					{/* Available times */}
					<div className="mb-7">
						<p className="font-sans text-[9px] font-semibold tracking-[0.22em] uppercase text-moss/50 mb-3">
							Available Times (UTC)
						</p>
						<div className="flex flex-wrap gap-2">
							{TIMES.map((t) => {
								const active = selectedTime === t;
								return (
									<button
										key={t}
										onClick={() =>
											setSelectedTime(t)
										}
										className={`
											px-4 py-2 font-sans text-[11px] font-medium tracking-[0.08em]
											border rounded-[var(--radius-btn)] transition-all duration-200
											${
												active
													? "bg-brand-seafoam border-brand-seafoam text-black"
													: "bg-transparent border-brand-stone text-moss hover:border-brand-seafoam hover:text-brand-seafoam"
											}
										`}
									>
										{t}
									</button>
								);
							})}
						</div>
					</div>

					{/* Confirm button */}
					<button
						onClick={handleConfirm}
						className="w-full font-sans
	text-[10.5px]
	tracking-[0.2em]
	font-semibold
	uppercase

	text-cream
	border-0
	rounded-[var(--radius-btn)]
	px-[30px]
	py-4
	cursor-pointer
	shadow-[var(--shadow-btn-primary)]
	transition-all
	duration-300
	ease-[cubic-bezier(0.22,1,0.36,1)]
	hover:bg-teal-light
	hover:-translate-y-[2px]
	hover:shadow-[var(--shadow-btn-hover)] flex items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-black"
					>
						Confirm Selection · $150
						<svg
							width="13"
							height="13"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							<path d="M5 12h14M13 6l6 6-6 6" />
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}
