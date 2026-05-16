import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Consultation from "./pages/Consultation";
import About from "./pages/About";
import Blog from "./pages/Blog";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Homepage />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/about" element={<About />} />
					<Route path="/blog" element={<Blog />} />
					<Route
						path="/consultation"
						element={<Consultation />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
