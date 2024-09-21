const List = ({ data }) => {
	return (
		<>
			<ul>
				{data.map((films) => (
					<li key={films.id}>{films.title}</li>
				))}
			</ul>
		</>
	);
};

export default List;
