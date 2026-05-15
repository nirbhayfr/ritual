import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";

/* ── Icons ─────────────────────────────────── */
const SearchIcon = () => (
	<svg
		width="17"
		height="17"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.8"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="11" cy="11" r="8" />
		<path d="m21 21-4.35-4.35" />
	</svg>
);

const BagIcon = () => (
	<svg
		width="17"
		height="17"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.8"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
		<line x1="3" y1="6" x2="21" y2="6" />
		<path d="M16 10a4 4 0 0 1-8 0" />
	</svg>
);

const UserIcon = () => (
	<svg
		width="17"
		height="17"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.8"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="12" cy="8" r="4" />
		<path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
	</svg>
);

const ArrowRightIcon = () => (
	<svg
		width="14"
		height="14"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.6"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M5 12h14M12 5l7 7-7 7" />
	</svg>
);

const HamburgerIcon = ({ open }) => (
	<div className="flex flex-col gap-[5px] w-5">
		<span
			className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
		/>
		<span
			className={`block h-[1.5px] bg-current transition-all duration-300 ${open ? "opacity-0 w-0" : "w-full"}`}
		/>
		<span
			className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
		/>
	</div>
);

/* ── Nav links ──────────────────────────────── */
const NAV_LINKS = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "Shop",
		path: "/shop",
	},
	{
		label: "Consultation",
		path: "/consultation",
	},
	{
		label: "About",
		path: "/about",
	},
	{
		label: "Blog",
		path: "/blog",
	},
];

/* ── Component ──────────────────────────────── */
export default function Navbar() {
	const pillRef = useRef(null);
	const drawerRef = useRef(null);
	const itemRefs = useRef([]);
	const footerRef = useRef(null);
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();
	/* ── Add these states ───────────────────────── */
	const [searchOpen, setSearchOpen] = useState(false);
	const [searchValue, setSearchValue] = useState("");

	const searchDesktopRef = useRef(null);
	const searchMobileRef = useRef(null);

	/* ── Demo search data ───────────────────────── */
	const SEARCH_ITEMS = [
		"Triphala Ritual Oil",
		"Ashwagandha Elixir",
		"Golden Saffron Serum",
		"Breathwork Consultation",
		"Evening Ritual Kit",
		"Journal — The Vessel Of Breath",
	];

	/* ── Filtered results ───────────────────────── */
	const filteredResults = SEARCH_ITEMS.filter((item) =>
		item.toLowerCase().includes(searchValue.toLowerCase()),
	);

	/* ── Add this useEffect ─────────────────────── */
	useEffect(() => {
		const desktop = searchDesktopRef.current;
		const mobile = searchMobileRef.current;

		if (searchOpen) {
			if (desktop) {
				gsap.fromTo(
					desktop,
					{
						y: -10,
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: 0.35,
						ease: "power3.out",
						pointerEvents: "auto",
					},
				);
			}

			if (mobile) {
				gsap.fromTo(
					mobile,
					{
						y: -10,
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: 0.35,
						ease: "power3.out",
						pointerEvents: "auto",
					},
				);
			}
		} else {
			if (desktop) {
				gsap.to(desktop, {
					y: -10,
					opacity: 0,
					duration: 0.25,
					ease: "power2.inOut",
					pointerEvents: "none",
				});
			}

			if (mobile) {
				gsap.to(mobile, {
					y: -10,
					opacity: 0,
					duration: 0.25,
					ease: "power2.inOut",
					pointerEvents: "none",
				});
			}
		}
	}, [searchOpen]);

	useEffect(() => {
		// Entrance animation
		gsap.set(pillRef.current, { y: -30, opacity: 0 });
		gsap.to(pillRef.current, {
			y: 0,
			opacity: 1,
			duration: 0.9,
			ease: "power3.out",
			delay: 0.1,
		});

		// Scroll shadow toggle
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Animate drawer open/close
	useEffect(() => {
		const drawer = drawerRef.current;
		if (!drawer) return;

		if (menuOpen) {
			// Slide drawer down from nav
			gsap.fromTo(
				drawer,
				{ y: -8, opacity: 0, pointerEvents: "none" },
				{
					y: 0,
					opacity: 1,
					duration: 0.3,
					ease: "power3.out",
					pointerEvents: "auto",
				},
			);

			// Stagger nav items
			itemRefs.current.forEach((el, i) => {
				if (!el) return;
				gsap.fromTo(
					el,
					{ y: -6, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.32,
						ease: "power2.out",
						delay: 0.05 + i * 0.055,
					},
				);
			});

			// Footer
			if (footerRef.current) {
				gsap.fromTo(
					footerRef.current,
					{ y: 5, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.35,
						ease: "power2.out",
						delay: 0.42,
					},
				);
			}
		} else {
			gsap.to(drawer, {
				y: -8,
				opacity: 0,
				duration: 0.25,
				ease: "power2.in",
				pointerEvents: "none",
			});
		}
	}, [menuOpen]);

	const closeMenu = () => setMenuOpen(false);

	return (
		<>
			{/* ── Navbar ── */}
			<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
				<div
					ref={pillRef}
					className={`
						pointer-events-auto
						flex items-center justify-between
						w-full h-14 px-6
						bg-[rgba(244,241,232,0.82)] backdrop-blur-xl
						border-b border-black/[0.07]
						transition-all duration-300
						${scrolled ? "shadow-lg shadow-black/[0.08]" : ""}
					`}
				>
					{/* Logo */}
					<a
						href="#"
						className="font-heading text-[11.5px] font-normal tracking-[0.2em] text-teal whitespace-nowrap"
					>
						VEDA RITUAL
					</a>

					{/* Desktop links */}
					<ul className="hidden md:flex items-center gap-8 list-none p-0 m-0">
						{NAV_LINKS.map((item) => {
							const isActive =
								location.pathname === item.path;

							return (
								<li key={item.path}>
									<Link
										to={item.path}
										className={`
						text-[11px] uppercase tracking-[0.09em] font-normal
						relative transition-colors duration-200
						after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-teal
						after:transition-[width] after:duration-200
						${
							isActive
								? "text-teal after:w-full"
								: "text-moss hover:text-teal after:w-0 hover:after:w-full"
						}
					`}
									>
										{item.label}
									</Link>
								</li>
							);
						})}
					</ul>

					{/* Icon buttons */}
					<div className="flex items-center gap-[14px]">
						<button
							className="text-bark/45 hover:text-teal transition-colors p-1"
							aria-label="Search"
							onClick={() => setSearchOpen((v) => !v)}
						>
							<SearchIcon />
						</button>

						<button
							className="hidden md:flex text-bark/45 hover:text-teal transition-colors p-1"
							aria-label="Cart"
						>
							<BagIcon />
						</button>
						<button
							className="hidden md:flex text-bark/45 hover:text-teal transition-colors p-1"
							aria-label="Account"
						>
							<UserIcon />
						</button>
						{/* Hamburger — mobile only */}
						<button
							className="flex md:hidden text-bark/60 hover:text-teal transition-colors p-1"
							aria-label={
								menuOpen ? "Close menu" : "Open menu"
							}
							onClick={() => setMenuOpen((v) => !v)}
						>
							<HamburgerIcon open={menuOpen} />
						</button>
					</div>
				</div>
			</nav>

			{/* ── Mobile drawer (compact, not full-screen) ── */}
			<div
				ref={drawerRef}
				className="fixed top-14 left-0 right-0 z-40 md:hidden"
				style={{
					opacity: 0,
					transform: "translateY(-8px)",
					pointerEvents: "none",
				}}
			>
				{/* Panel */}
				<div
					className="
						bg-[rgba(249,246,241,0.97)] backdrop-blur-2xl saturate-[1.3]
						border-b border-black/[0.08]
						shadow-[0_12px_40px_rgba(45,58,46,0.10)]
					"
				>
					{/* Top accent line */}
					<div
						className="h-px w-full"
						style={{
							background:
								"linear-gradient(to right, transparent, rgba(63,106,103,0.25), transparent)",
						}}
					/>

					{/* Nav links */}
					<ul className="list-none p-0 m-0 pt-1.5 pb-1">
						{NAV_LINKS.map((item, i) => {
							const isActive =
								location.pathname === item.path;

							return (
								<li
									key={item.label}
									ref={(el) =>
										(itemRefs.current[i] = el)
									}
								>
									{i > 0 && (
										<div className="h-px bg-black/[0.05] mx-[22px]" />
									)}

									<Link
										to={item.path}
										onClick={closeMenu}
										className={`
						relative flex items-center justify-between
						px-[22px] py-[10px]
						transition-colors duration-200
						group
						${isActive ? "bg-teal/[0.07]" : "hover:bg-teal/[0.05]"}
					`}
									>
										{isActive && (
											<span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-teal" />
										)}

										<div className="flex items-center gap-3">
											<span
												className={`
								text-[9px] font-medium tracking-[0.08em] min-w-[16px]
								${isActive ? "text-teal/65" : "text-teal/35"}
							`}
											>
												{String(
													i + 1,
												).padStart(2, "0")}
											</span>

											<span
												className={`
								font-serif text-[17px] font-normal tracking-[0.01em]
								transition-colors duration-200
								${isActive ? "text-teal" : "text-bark/60 group-hover:text-bark"}
							`}
											>
												{item.label}
											</span>
										</div>

										<span
											className={`
							transition-all duration-200
							${
								isActive
									? "opacity-40 translate-x-0"
									: "opacity-0 -translate-x-1 group-hover:opacity-30 group-hover:translate-x-0"
							}
						`}
											style={{
												color: "var(--color-teal)",
											}}
										>
											<ArrowRightIcon />
										</span>
									</Link>
								</li>
							);
						})}
					</ul>

					{/* Footer row */}
					<div
						ref={footerRef}
						className="
							flex items-center justify-between
							px-[22px] py-3
							border-t border-black/[0.06]
						"
					>
						{/* Icon pills */}
						<div className="flex gap-2">
							{[
								{ Icon: BagIcon, label: "Cart" },
								{ Icon: UserIcon, label: "Account" },
							].map(({ Icon, label }) => (
								<button
									key={label}
									aria-label={label}
									className="
										w-[34px] h-[34px] rounded-full
										border border-teal/20 bg-teal/5
										flex items-center justify-center
										text-teal/65
										hover:border-teal/45 hover:bg-teal/10
										transition-colors duration-200
									"
								>
									<Icon />
								</button>
							))}
						</div>

						{/* Tagline */}
						<span
							className="text-right"
							style={{
								fontFamily: "var(--font-sans)",
								fontSize: "8.5px",
								letterSpacing: "0.2em",
								color: "rgba(95,101,95,0.4)",
								textTransform: "uppercase",
								lineHeight: 1.6,
							}}
						>
							Ancient wisdom
							<br />
							modern ritual
						</span>
					</div>
				</div>
			</div>

			{/* ── Desktop Search Overlay ───────────────── */}
			<div
				ref={searchDesktopRef}
				className="hidden md:block fixed top-14 left-0 right-0 z-[60]"
				style={{
					opacity: 0,
					transform: "translateY(-10px)",
					pointerEvents: "none",
				}}
			>
				<div
					className="
			mx-auto
			w-full max-w-[760px]
			mt-4
			rounded-[28px]
			overflow-hidden
			border border-black/[0.06]
			bg-[rgba(249,246,241,0.92)]
			backdrop-blur-2xl
			shadow-[0_20px_60px_rgba(45,58,46,0.12)]
		"
				>
					{/* Input */}
					<div className="flex items-center gap-4 px-6 h-[72px] border-b border-black/[0.05]">
						<div className="text-teal/50">
							<SearchIcon />
						</div>

						<input
							autoFocus
							type="text"
							value={searchValue}
							onChange={(e) =>
								setSearchValue(e.target.value)
							}
							placeholder="Search rituals, formulations, journals..."
							className="
					flex-1
					bg-transparent
					outline-none
					border-none
					font-sans
					text-[15px]
					text-bark
					placeholder:text-moss/40
				"
						/>

						<button
							onClick={() => setSearchOpen(false)}
							className="
					text-[10px]
					tracking-[0.18em]
					uppercase
					text-moss/60
					hover:text-teal
					transition-colors
				"
						>
							Close
						</button>
					</div>

					{/* Results */}
					<div className="p-3 max-h-[420px] overflow-y-auto veda-scrollbar">
						{filteredResults.length > 0 ? (
							filteredResults.map((item, i) => (
								<button
									key={i}
									className="
							w-full
							flex items-center justify-between
							px-4 py-4
							rounded-[18px]
							text-left
							group
							hover:bg-teal/[0.05]
							transition-all duration-300
						"
								>
									<div>
										<p className="font-serif text-[12px] text-bark group-hover:text-teal transition-colors">
											{item}
										</p>

										<p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-moss/40">
											Veda Ritual
										</p>
									</div>

									<div className="text-teal/30 group-hover:text-teal/70 transition-colors">
										<ArrowRightIcon />
									</div>
								</button>
							))
						) : (
							<div className="py-16 text-center">
								<p className="font-serif text-[22px] text-bark/80">
									No results found
								</p>

								<p className="mt-2 text-[11px] tracking-[0.14em] uppercase text-moss/40">
									Try another search term
								</p>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* ── Mobile Search Overlay ────────────────── */}
			<div
				ref={searchMobileRef}
				className="md:hidden fixed inset-0 z-[70]"
				style={{
					opacity: 0,
					transform: "translateY(-10px)",
					pointerEvents: "none",
				}}
			>
				{/* Backdrop */}
				<div
					onClick={() => setSearchOpen(false)}
					className="absolute inset-0 bg-black/20 backdrop-blur-sm"
				/>

				{/* Panel */}
				<div
					className="
			absolute top-0 left-0 right-0
			bg-[rgba(249,246,241,0.97)]
			backdrop-blur-2xl
			border-b border-black/[0.06]
			shadow-[0_12px_40px_rgba(45,58,46,0.12)]
		"
				>
					{/* Header */}
					<div className="flex items-center gap-3 px-5 h-16 border-b border-black/[0.05]">
						<div className="text-teal/50">
							<SearchIcon />
						</div>

						<input
							autoFocus
							type="text"
							value={searchValue}
							onChange={(e) =>
								setSearchValue(e.target.value)
							}
							placeholder="Search..."
							className="
					flex-1
					bg-transparent
					outline-none
					border-none
					text-[15px]
					font-sans
					text-bark
					placeholder:text-moss/40
				"
						/>

						<button
							onClick={() => setSearchOpen(false)}
							className="
					text-[10px]
					tracking-[0.18em]
					uppercase
					text-moss/60
				"
						>
							Close
						</button>
					</div>

					{/* Results */}
					<div className="px-3 py-2 max-h-[70vh] overflow-y-auto veda-scrollbar">
						{filteredResults.length > 0 ? (
							filteredResults.map((item, i) => (
								<button
									key={i}
									className="
							w-full
							flex items-center justify-between
							px-3 py-4
							rounded-[16px]
							text-left
							hover:bg-teal/[0.05]
							transition-colors
						"
								>
									<div>
										<p className="font-serif text-[12px] text-bark">
											{item}
										</p>

										<p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-moss/40">
											Veda Ritual
										</p>
									</div>

									<div className="text-teal/40">
										<ArrowRightIcon />
									</div>
								</button>
							))
						) : (
							<div className="py-16 text-center">
								<p className="font-serif text-[20px] text-bark/80">
									No results
								</p>

								<p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-moss/40">
									Try another term
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
