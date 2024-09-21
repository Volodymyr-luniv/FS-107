import Header from "./components/Header/Header";
import List from "./components/List/List";
import Section from "./components/Section/Section";

const App = () => {
	const filmsData = [
		{ id: "1", title: "XXX" },
		{ id: "2", title: "Terminator" },
		{ id: "3", title: "Gold" },
		{ id: "4", title: "GP" },
		{ id: "5", title: "Moon" },
	];
	const songsData = [
		{ id: "1", title: "Xnpo" },
		{ id: "2", title: "Termi" },
		{ id: "3", title: "Gold Yers" },
		{ id: "4", title: "GP-song" },
		{ id: "5", title: "Moon List" },
	];
	return (
		<>
			<h2>Hello React</h2>
			<Header
				logo="Logo"
				title="H2"
				home="Home"
				portfolio="Portfolio"
				about="About"
			/>
			<Section title="Product">
				<h2>Frog</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Corporis, molestiae.
				</p>
				<button>Yes</button>
				<button>No</button>
			</Section>
			<Section title="No Name">
				<h2>Dog</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Corporis, molestiae.
				</p>
				<button>Yes</button>
				<button>No</button>
			</Section>
			<List data={filmsData} />
			<List data={songsData} />
		</>
	);
};

export default App;
