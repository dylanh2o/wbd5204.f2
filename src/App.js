import React from 'react';
import SocialCard from './components/SocialCard/SocialCard'
import './App.css';

function App() {
	return (
		<div>
			<SocialCard title="Dylan Carluccio" facebook="www.facebook.com/Dylan" instagram="www.instagram/Dylan">
				Je suis  un jeune étudiant en web
			</SocialCard>
			<SocialCard title="Julio Merco" facebook="" instagram="www.instagram/Julio">
				Je suis  un vieux fou
			</SocialCard>
			<SocialCard title="Marc Costa" facebook="www.facebook.com/Marc" >
				Je suis  un jeune sans abris
			</SocialCard>

		</div>
	);
}

export default App;
