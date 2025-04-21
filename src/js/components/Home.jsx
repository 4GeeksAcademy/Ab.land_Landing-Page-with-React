import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Jumbo from "./Jumbo";
import Card from "./Card";

//create your first component
const Home = () => {

	let cardProps = [
		{
			imgSrc: "https://images.unsplash.com/photo-1744361448609-c5d3417f00ce",
			imgAlt: "a flaying seagull",
			title: "Card 1",
			content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quasi doloremque perferendis, facere dolorum eaque aliquam sapiente. Eius, et. Corporis dolore impedit atque reprehenderit fuga autem unde similique sint non!",
			lastUpdate: "Last updated 10s",
			anchorLink: "https://unsplash.com/photos/a-seagull-soars-over-the-wavy-ocean-Sh8VAhKJeu4"

		},
		{
			imgSrc: "https://images.unsplash.com/photo-1678811116814-26372fcfef1b",
			imgAlt: "A ligth halo in a frozzen landscape",
			title: "Card 2",
			content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quasi doloremque perferendis, facere dolorum eaque aliquam sapiente. Eius, et. Corporis dolore impedit atque reprehenderit fuga autem unde similique sint non!",
			lastUpdate: "Last updated 7m",
			anchorLink: "https://unsplash.com/photos/a-person-riding-skis-on-top-of-a-snow-covered-slope-Jfzke0ie6RU"

		},
		{
			imgSrc: "https://images.unsplash.com/vector-1744384271002-ed577f272ed0",
			imgAlt: "an ilustration of a man holding a torch in the dark",
			title: "Card 3",
			content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quasi doloremque perferendis, facere dolorum eaque aliquam sapiente. Eius, et. Corporis dolore impedit atque reprehenderit fuga autem unde similique sint non!",
			lastUpdate: "Last updated 9m",
			anchorLink: "https://unsplash.com/illustrations/a-person-is-holding-a-torch-in-a-dark-forest-33my-dJZ3N4"

		},
		{
			imgSrc: "https://images.unsplash.com/photo-1743247975472-611e63868a1a",
			imgAlt: "top to bottom view of a stairway",
			title: "Card 4",
			content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quasi doloremque perferendis, facere dolorum eaque aliquam sapiente. Eius, et. Corporis dolore impedit atque reprehenderit fuga autem unde similique sint non!",
			lastUpdate: "Last updated 7h",
			anchorLink: "https://unsplash.com/photos/escalators-in-a-futuristic-yellow-walled-building-f9VeYakvLiI"

		}
	]




	return (
		<>
			<Navbar />
			<div className="container ">
				<Jumbo />
				<div className="row container g-lx-2 g-1 g-md-5">
					{cardProps.map((value) => {
						return <Card
							imgSrc={value.imgSrc}
							imgAlt={value.imgAlt}
							title={value.title}
							content={value.content}
							lastUpdate={value.lastUpdate}
							anchorLink={value.anchorLink}
						/>
						})
					}
				</div>
			</div>
			<Footer />

		</>
	);
};

export default Home;