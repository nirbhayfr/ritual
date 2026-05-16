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

const CloseIcon = () => (
	<svg
		width="13"
		height="13"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.8"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M18 6 6 18M6 6l12 12" />
	</svg>
);

const TrashIcon = () => (
	<svg
		width="12"
		height="12"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.6"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<polyline points="3 6 5 6 21 6" />
		<path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
		<path d="M10 11v6M14 11v6M9 6V4h6v2" />
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

/* ── Nav links ─────────────────────────────── */
const NAV_LINKS = [
	{ label: "Home", path: "/" },
	{ label: "Shop", path: "/shop" },
	{ label: "Consultation", path: "/consultation" },
	{ label: "About", path: "/about" },
	{ label: "Blog", path: "/blog" },
];

/* ── Demo cart ─────────────────────────────── */
const INITIAL_CART = [
	{
		id: 1,
		name: "Triphala Ritual Oil",
		subtitle: "100ml · Daily Nourishment",
		price: 74,
		qty: 1,
		image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=120&q=80",
	},
	{
		id: 2,
		name: "Ashwagandha Elixir",
		subtitle: "60ml · Adaptogenic Blend",
		price: 68,
		qty: 2,
		image: "https://plus.unsplash.com/premium_photo-1694112647431-2ac31b3885c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

/* ── Shared CartPanel ──────────────────────── */
function CartPanel({ cart, onUpdateQty, onRemove, onClose, isMobile = false }) {
	const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
	const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

	return (
		<div className="flex flex-col">
			{/* Header */}
			<div className="flex items-center justify-between px-6 py-5 border-b border-black/[0.06]">
				<div>
					<p
						style={{
							fontFamily: "var(--font-sans)",
							fontSize: 10,
							letterSpacing: "0.22em",
							textTransform: "uppercase",
							color: "var(--color-teal)",
							fontWeight: 500,
						}}
					>
						Your Ritual
					</p>
					<p
						style={{
							fontFamily: "var(--font-sans)",
							fontSize: 9,
							letterSpacing: "0.12em",
							textTransform: "uppercase",
							color: "var(--color-moss)",
							opacity: 0.45,
							marginTop: 2,
						}}
					>
						{itemCount} {itemCount === 1 ? "item" : "items"}
					</p>
				</div>
				<button
					onClick={onClose}
					className="w-8 h-8 flex items-center justify-center rounded-full border border-black/[0.08] hover:border-teal/40 hover:text-teal transition-colors duration-200"
					style={{ color: "var(--color-moss)" }}
				>
					<CloseIcon />
				</button>
			</div>

			{/* Items */}
			<div
				className="overflow-y-auto veda-scrollbar px-5 py-4"
				style={{ maxHeight: isMobile ? "48vh" : 320 }}
			>
				{cart.length === 0 ? (
					<div className="flex flex-col items-center justify-center py-14 gap-3">
						<div
							style={{
								color: "var(--color-teal)",
								opacity: 0.2,
							}}
						>
							<BagIcon />
						</div>
						<p
							style={{
								fontFamily: "var(--font-serif)",
								fontSize: 15,
								color: "var(--color-bark)",
								opacity: 0.5,
							}}
						>
							Your bag is empty
						</p>
						<p
							style={{
								fontFamily: "var(--font-sans)",
								fontSize: 9,
								letterSpacing: "0.16em",
								textTransform: "uppercase",
								color: "var(--color-moss)",
								opacity: 0.35,
							}}
						>
							Begin your ritual
						</p>
					</div>
				) : (
					<ul className="flex flex-col gap-5 list-none p-0 m-0">
						{cart.map((item) => (
							<li key={item.id} className="flex gap-3">
								{/* Thumbnail */}
								<div
									className="shrink-0 overflow-hidden"
									style={{
										width: 64,
										height: 64,
										borderRadius: 12,
										background:
											"var(--color-brand-stone)",
									}}
								>
									<img
										src={item.image}
										alt={item.name}
										className="w-full h-full object-cover"
									/>
								</div>

								{/* Info */}
								<div className="flex-1 min-w-0">
									<p
										style={{
											fontFamily:
												"var(--font-serif)",
											fontSize: 14,
											color: "var(--color-bark)",
											lineHeight: 1.3,
										}}
									>
										{item.name}
									</p>
									<p
										style={{
											fontFamily:
												"var(--font-sans)",
											fontSize: 9,
											letterSpacing: "0.1em",
											textTransform:
												"uppercase",
											color: "var(--color-moss)",
											opacity: 0.4,
											marginTop: 2,
										}}
									>
										{item.subtitle}
									</p>

									{/* Qty + price */}
									<div className="flex items-center justify-between mt-2.5">
										{/* Stepper */}
										<div className="flex items-center border border-black/[0.08] rounded-full overflow-hidden">
											<button
												onClick={() =>
													onUpdateQty(
														item.id,
														item.qty -
															1,
													)
												}
												className="w-6 h-6 flex items-center justify-center hover:bg-teal/[0.08] transition-colors"
												style={{
													color: "var(--color-teal)",
													fontSize: 14,
												}}
											>
												−
											</button>
											<span
												className="w-6 text-center"
												style={{
													fontFamily:
														"var(--font-sans)",
													fontSize: 11,
													color: "var(--color-bark)",
												}}
											>
												{item.qty}
											</span>
											<button
												onClick={() =>
													onUpdateQty(
														item.id,
														item.qty +
															1,
													)
												}
												className="w-6 h-6 flex items-center justify-center hover:bg-teal/[0.08] transition-colors"
												style={{
													color: "var(--color-teal)",
													fontSize: 14,
												}}
											>
												+
											</button>
										</div>

										<div className="flex items-center gap-2.5">
											<span
												style={{
													fontFamily:
														"var(--font-serif)",
													fontSize: 15,
													color: "var(--color-bark)",
												}}
											>
												$
												{item.price *
													item.qty}
											</span>
											<button
												onClick={() =>
													onRemove(
														item.id,
													)
												}
												className="opacity-25 hover:opacity-60 transition-opacity"
												style={{
													color: "var(--color-moss)",
												}}
												aria-label="Remove"
											>
												<TrashIcon />
											</button>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>

			{/* Footer */}
			{cart.length > 0 && (
				<div
					className="px-6 py-5 border-t border-black/[0.06]"
					style={{ background: "rgba(244,241,232,0.7)" }}
				>
					{/* Subtotal */}
					<div className="flex items-center justify-between mb-1">
						<span
							style={{
								fontFamily: "var(--font-sans)",
								fontSize: 10,
								letterSpacing: "0.16em",
								textTransform: "uppercase",
								color: "var(--color-moss)",
							}}
						>
							Subtotal
						</span>
						<span
							style={{
								fontFamily: "var(--font-serif)",
								fontSize: 20,
								color: "var(--color-bark)",
							}}
						>
							${subtotal}
						</span>
					</div>

					<p
						className="text-center mb-4"
						style={{
							fontFamily: "var(--font-sans)",
							fontSize: 9,
							letterSpacing: "0.1em",
							textTransform: "uppercase",
							color: "var(--color-moss)",
							opacity: 0.35,
						}}
					>
						Shipping &amp; taxes calculated at checkout
					</p>

					<button className="btn-primary w-full flex items-center justify-center gap-2">
						Proceed to Checkout
						<ArrowRightIcon />
					</button>

					<button
						onClick={onClose}
						className="w-full mt-2 py-2 transition-colors duration-200 hover:opacity-60"
						style={{
							fontFamily: "var(--font-sans)",
							fontSize: 9.5,
							letterSpacing: "0.16em",
							textTransform: "uppercase",
							color: "var(--color-moss)",
							opacity: 0.45,
						}}
					>
						Continue Shopping
					</button>
				</div>
			)}
		</div>
	);
}

/* ── Navbar ────────────────────────────────── */
export default function Navbar() {
	const pillRef = useRef(null);
	const drawerRef = useRef(null);
	const itemRefs = useRef([]);
	const footerRef = useRef(null);
	const cartDesktopRef = useRef(null);
	const cartMobileRef = useRef(null);
	const searchDesktopRef = useRef(null);
	const searchMobileRef = useRef(null);

	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [cart, setCart] = useState(INITIAL_CART);

	const location = useLocation();
	const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

	const SEARCH_ITEMS = [
		"Triphala Ritual Oil",
		"Ashwagandha Elixir",
		"Golden Saffron Serum",
		"Breathwork Consultation",
		"Evening Ritual Kit",
		"Journal — The Vessel Of Breath",
	];
	const filteredResults = SEARCH_ITEMS.filter((i) =>
		i.toLowerCase().includes(searchValue.toLowerCase()),
	);

	const updateQty = (id, qty) => {
		if (qty < 1)
			return setCart((prev) => prev.filter((i) => i.id !== id));
		setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
	};
	const removeItem = (id) =>
		setCart((prev) => prev.filter((i) => i.id !== id));

	const toggleSearch = () => {
		setSearchOpen((v) => !v);
		setCartOpen(false);
	};
	const toggleCart = () => {
		setCartOpen((v) => !v);
		setSearchOpen(false);
	};

	/* ── Animate search ── */
	useEffect(() => {
		const tween = searchOpen
			? {
					y: 0,
					opacity: 1,
					duration: 0.35,
					ease: "power3.out",
					pointerEvents: "auto",
				}
			: {
					y: -10,
					opacity: 0,
					duration: 0.25,
					ease: "power2.in",
					pointerEvents: "none",
				};
		if (searchDesktopRef.current)
			gsap.to(searchDesktopRef.current, tween);
		if (searchMobileRef.current) gsap.to(searchMobileRef.current, tween);
	}, [searchOpen]);

	/* ── Animate cart ── */
	useEffect(() => {
		const desktop = cartDesktopRef.current;
		const mobile = cartMobileRef.current;
		if (cartOpen) {
			if (desktop)
				gsap.fromTo(
					desktop,
					{ y: -10, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.35,
						ease: "power3.out",
						pointerEvents: "auto",
					},
				);
			if (mobile)
				gsap.fromTo(
					mobile,
					{ y: "100%" },
					{
						y: "0%",
						duration: 0.42,
						ease: "power3.out",
						pointerEvents: "auto",
					},
				);
		} else {
			if (desktop)
				gsap.to(desktop, {
					y: -10,
					opacity: 0,
					duration: 0.25,
					ease: "power2.in",
					pointerEvents: "none",
				});
			if (mobile)
				gsap.to(mobile, {
					y: "100%",
					duration: 0.3,
					ease: "power2.in",
					pointerEvents: "none",
				});
		}
	}, [cartOpen]);

	/* ── Entrance + scroll ── */
	useEffect(() => {
		gsap.set(pillRef.current, { y: -30, opacity: 0 });
		gsap.to(pillRef.current, {
			y: 0,
			opacity: 1,
			duration: 0.9,
			ease: "power3.out",
			delay: 0.1,
		});
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	/* ── Animate mobile drawer ── */
	useEffect(() => {
		const drawer = drawerRef.current;
		if (!drawer) return;
		if (menuOpen) {
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

	return (
		<>
			{/* ── Navbar bar ── */}
			<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
				<div
					ref={pillRef}
					className={`pointer-events-auto flex items-center justify-between w-full h-14 px-6 bg-[rgba(244,241,232,0.82)] backdrop-blur-xl border-b border-black/[0.07] transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/[0.08]" : ""}`}
				>
					<a
						href="#"
						className="font-heading text-[11.5px] font-normal tracking-[0.2em] text-teal whitespace-nowrap"
					>
						VEDA RITUAL
					</a>

					<ul className="hidden md:flex items-center gap-8 list-none p-0 m-0">
						{NAV_LINKS.map((item) => {
							const isActive =
								location.pathname === item.path;
							return (
								<li key={item.path}>
									<Link
										to={item.path}
										className={`text-[11px] uppercase tracking-[0.09em] font-normal relative transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-teal after:transition-[width] after:duration-200 ${isActive ? "text-teal after:w-full" : "text-moss hover:text-teal after:w-0 hover:after:w-full"}`}
									>
										{item.label}
									</Link>
								</li>
							);
						})}
					</ul>

					<div className="flex items-center gap-[14px]">
						<button
							className="text-bark/45 hover:text-teal transition-colors p-1"
							aria-label="Search"
							onClick={toggleSearch}
						>
							<SearchIcon />
						</button>

						{/* Cart — desktop + mobile (always visible) */}
						<button
							className="relative text-bark/45 hover:text-teal transition-colors p-1"
							aria-label="Cart"
							onClick={toggleCart}
						>
							<BagIcon />
							{itemCount > 0 && (
								<span
									className="absolute -top-0.5 -right-0.5 w-[15px] h-[15px] rounded-full flex items-center justify-center text-[8px] font-semibold leading-none"
									style={{
										background:
											"var(--color-teal)",
										color: "var(--color-cream)",
										fontFamily:
											"var(--font-sans)",
									}}
								>
									{itemCount}
								</span>
							)}
						</button>

						<button
							className="hidden md:flex text-bark/45 hover:text-teal transition-colors p-1"
							aria-label="Account"
						>
							<UserIcon />
						</button>

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

			{/* ── Mobile nav drawer ── */}
			<div
				ref={drawerRef}
				className="fixed top-14 left-0 right-0 z-40 md:hidden"
				style={{
					opacity: 0,
					transform: "translateY(-8px)",
					pointerEvents: "none",
				}}
			>
				<div className="bg-[rgba(249,246,241,0.97)] backdrop-blur-2xl saturate-[1.3] border-b border-black/[0.08] shadow-[0_12px_40px_rgba(45,58,46,0.10)]">
					<div
						className="h-px w-full"
						style={{
							background:
								"linear-gradient(to right, transparent, rgba(63,106,103,0.25), transparent)",
						}}
					/>
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
										onClick={() =>
											setMenuOpen(false)
										}
										className={`relative flex items-center justify-between px-[22px] py-[10px] transition-colors duration-200 group ${isActive ? "bg-teal/[0.07]" : "hover:bg-teal/[0.05]"}`}
									>
										{isActive && (
											<span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-teal" />
										)}
										<div className="flex items-center gap-3">
											<span
												className={`text-[9px] font-medium tracking-[0.08em] min-w-[16px] ${isActive ? "text-teal/65" : "text-teal/35"}`}
											>
												{String(
													i + 1,
												).padStart(2, "0")}
											</span>
											<span
												className={`font-serif text-[17px] font-normal tracking-[0.01em] transition-colors duration-200 ${isActive ? "text-teal" : "text-bark/60 group-hover:text-bark"}`}
											>
												{item.label}
											</span>
										</div>
										<span
											className={`transition-all duration-200 ${isActive ? "opacity-40" : "opacity-0 -translate-x-1 group-hover:opacity-30 group-hover:translate-x-0"}`}
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
					<div
						ref={footerRef}
						className="flex items-center justify-between px-[22px] py-3 border-t border-black/[0.06]"
					>
						<div className="flex gap-2">
							{[{ Icon: UserIcon, label: "Account" }].map(
								({ Icon, label }) => (
									<button
										key={label}
										aria-label={label}
										className="w-[34px] h-[34px] rounded-full border border-teal/20 bg-teal/5 flex items-center justify-center text-teal/65 hover:border-teal/45 hover:bg-teal/10 transition-colors duration-200"
									>
										<Icon />
									</button>
								),
							)}
						</div>
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

			{/* ── Desktop Cart dropdown ── */}
			<div
				ref={cartDesktopRef}
				className="hidden md:block fixed top-14 right-0 z-[60]"
				style={{
					opacity: 0,
					transform: "translateY(-10px)",
					pointerEvents: "none",
				}}
			>
				<div
					className="mr-4 mt-3 w-[400px] overflow-hidden border border-black/[0.06] shadow-[0_20px_60px_rgba(45,58,46,0.14)]"
					style={{
						background: "rgba(249,246,241,0.97)",
						backdropFilter: "blur(24px)",
						borderRadius: "var(--radius-card)",
					}}
				>
					<CartPanel
						cart={cart}
						onUpdateQty={updateQty}
						onRemove={removeItem}
						onClose={() => setCartOpen(false)}
					/>
				</div>
			</div>

			{/* ── Mobile Cart bottom sheet ── */}
			<div
				ref={cartMobileRef}
				className="md:hidden fixed inset-0 z-[70]"
				style={{ pointerEvents: "none" }}
			>
				{/* Backdrop */}
				<div
					onClick={() => setCartOpen(false)}
					className="absolute inset-0 bg-black/25 backdrop-blur-sm"
				/>
				{/* Sheet */}
				<div
					className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-black/[0.06] shadow-[0_-12px_40px_rgba(45,58,46,0.14)]"
					style={{
						background: "rgba(249,246,241,0.98)",
						backdropFilter: "blur(24px)",
						borderRadius: "20px 20px 0 0",
					}}
				>
					{/* Drag handle */}
					<div className="flex justify-center pt-3 pb-1">
						<div className="w-8 h-[3px] rounded-full bg-black/[0.1]" />
					</div>
					<CartPanel
						cart={cart}
						onUpdateQty={updateQty}
						onRemove={removeItem}
						onClose={() => setCartOpen(false)}
						isMobile
					/>
				</div>
			</div>

			{/* ── Desktop Search ── */}
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
					className="mx-auto w-full max-w-[760px] mt-4 overflow-hidden border border-black/[0.06] bg-[rgba(249,246,241,0.92)] backdrop-blur-2xl shadow-[0_20px_60px_rgba(45,58,46,0.12)]"
					style={{ borderRadius: 28 }}
				>
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
							className="flex-1 bg-transparent outline-none border-none font-sans text-[15px] text-bark placeholder:text-moss/40"
						/>
						<button
							onClick={() => setSearchOpen(false)}
							className="text-[10px] tracking-[0.18em] uppercase text-moss/60 hover:text-teal transition-colors"
						>
							Close
						</button>
					</div>
					<div className="p-3 max-h-[420px] overflow-y-auto veda-scrollbar">
						{filteredResults.length > 0 ? (
							filteredResults.map((item, i) => (
								<button
									key={i}
									className="w-full flex items-center justify-between px-4 py-4 text-left group hover:bg-teal/[0.05] transition-all duration-300"
									style={{ borderRadius: 18 }}
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

			{/* ── Mobile Search ── */}
			<div
				ref={searchMobileRef}
				className="md:hidden fixed inset-0 z-[70]"
				style={{
					opacity: 0,
					transform: "translateY(-10px)",
					pointerEvents: "none",
				}}
			>
				<div
					onClick={() => setSearchOpen(false)}
					className="absolute inset-0 bg-black/20 backdrop-blur-sm"
				/>
				<div className="absolute top-0 left-0 right-0 bg-[rgba(249,246,241,0.97)] backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_12px_40px_rgba(45,58,46,0.12)]">
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
							className="flex-1 bg-transparent outline-none border-none text-[15px] font-sans text-bark placeholder:text-moss/40"
						/>
						<button
							onClick={() => setSearchOpen(false)}
							className="text-[10px] tracking-[0.18em] uppercase text-moss/60"
						>
							Close
						</button>
					</div>
					<div className="px-3 py-2 max-h-[70vh] overflow-y-auto veda-scrollbar">
						{filteredResults.length > 0 ? (
							filteredResults.map((item, i) => (
								<button
									key={i}
									className="w-full flex items-center justify-between px-3 py-4 text-left hover:bg-teal/[0.05] transition-colors"
									style={{ borderRadius: 16 }}
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
