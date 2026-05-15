import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Homepage />} />
					<Route path="/shop" element={<Shop />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
