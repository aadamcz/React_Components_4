var movies = [
	{
		id: 1,
		title: "Harry Potter",
		desc: "Film o czarodzieju",
		img:
			"https://upload.wikimedia.org/wikipedia/en/b/bc/Prisoner_of_azkaban_UK_poster.jpg"
	},
	{
		id: 2,
		title: "Król Lew",
		desc: "Film o królu sawanny",
		img: "http://1.fwcdn.pl/ph/68/78/6878/213976.2.jpg"
	},
	{
		id: 3,
		title: "Minionki",
		desc: "Jak ukraść księżyc?",
		img: "http://1.fwcdn.pl/po/04/13/680413/7695336.6.jpg"
	},
	{
		id: 4,
		title: "Masza i Niedźwiedź",
		desc: "Masza wraz z niedźwiedziem doczekali się świąt!",
		img: "https://pbs.twimg.com/media/B8XdZr3CAAATk2Q.jpg"
	}
];

/*Tworzenie komponentu
var XXX = React.createClass({
	render: function(){
		return React.createElement('nazwaKlasyElementu', {atrybuty}, elementy)
	}
})
*/

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function() {
		return React.createElement(
			"li",
			{ key: movie.id },
			React.createElement(
				MovieTitle,
				{ title: this.props.movie.title },
				movie.title
			),
			React.createElement(
				MovieDesc,
				{ desc: this.props.movie.desc },
				movie.desc
			),
			React.createElement(MovieImage, { img: this.props.movie.img })
		);
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement("h2", {}, this.props.movies.title);
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement("p", {}, this.props.movies.desc);
	}
});

var MovieImage = React.createClass({
	propTypes: {
		img: React.PropTypes.object.isRequired,
	},
	render: function() {
		return React.createElement("img", { src: this.props.movie.img });
	}
});

//Jak utworzyć MoviesList?
var MoviesList = React.createClass({
	propTypes: {
		list: React.PropTypes.object.isRequired, // a może array ?
	},
	render: function(){
		var movies = this.props.movies.map(function(movie) {
		return React.createElement(//????
		});
	}
});

var element = React.createElement("div", {},
	React.createElement(MoviesList, {})
);


ReactDOM.render(element, document.getElementById("app"));
