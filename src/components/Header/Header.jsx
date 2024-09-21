const Header = ({ logo, title, home, portfolio, about }) => {
	return (
		<>
			<h2>{title}</h2>
			<a href="http://">{logo}</a>
			<ul>
				<li>{home}</li>
				<li>{portfolio}</li>
				<li>{about}</li>
			</ul>
		</>
	);
};
export default Header;
