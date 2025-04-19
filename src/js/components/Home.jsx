import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Jumbo from "./Jumbo";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbo/>
				<div className="row container">
				
					
					<Card 
					aLink="https://unsplash.com/photos/a-seagull-soars-over-the-wavy-ocean-Sh8VAhKJeu4"
					cardDate="Last updated 10s"
					cardContent= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
					Dolor quasi doloremque perferendis, facere dolorum eaque aliquam sapiente. 
					Eius, et. Corporis dolore impedit atque reprehenderit fuga autem unde similique sint non!"
					cardTitle= "Card 1"
					imgAlt= "a flaying seagull"
					imgSrc="https://images.unsplash.com/photo-1744361448609-c5d3417f00ce"
					/>
					<Card 
					aLink="https://unsplash.com/photos/a-person-riding-skis-on-top-of-a-snow-covered-slope-Jfzke0ie6RU"
					cardDate="Last updated 1m"
					cardContent= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
					Dolor quasi doloremque perferendis, facere dolorum eaque aliquam sapiente. 
					Eius, et. Corporis dolore impedit atque reprehenderit fuga autem unde similique sint non!"
					cardTitle= "Card 2"
					imgAlt= "A ligth halo in a frozzen landscape"
					imgSrc="https://images.unsplash.com/photo-1678811116814-26372fcfef1b"
					/>
					<Card 
					aLink="https://unsplash.com/illustrations/a-person-is-holding-a-torch-in-a-dark-forest-33my-dJZ3N4"
					cardDate="Last updated 9m"
					cardContent= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
					Dolor quasi doloremque perferendis, facere dolorum eaque aliquam sapiente. 
					Eius, et. Corporis dolore impedit atque reprehenderit fuga autem unde similique sint non!"
					cardTitle= "Card 1"
					imgAlt= "an ilustration of a man holding a torch in the dark"
					imgSrc="https://images.unsplash.com/vector-1744384271002-ed577f272ed0"
					/>
					<Card 
					aLink="https://unsplash.com/photos/escalators-in-a-futuristic-yellow-walled-building-f9VeYakvLiI"
					cardDate="Last updated 7h"
					cardContent= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
					Dolor quasi doloremque perferendis, facere dolorum eaque aliquam sapiente. 
					Eius, et. Corporis dolore impedit atque reprehenderit fuga autem unde similique sint non!"
					cardTitle= "Card 4"
					imgAlt= "top to bottom view of a stairway"
					imgSrc="https://images.unsplash.com/photo-1743247975472-611e63868a1a"
					/>
				</div>

			</div>
			<Footer />

		</>
	);
};

export default Home;