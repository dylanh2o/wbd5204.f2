import React from 'react';
import {Card} from 'antd'
import LogoFacebook from '../SocialCard/facebook.png'
import LogoInstagram from '../SocialCard/instagram.png'
import 'antd/dist/antd.css';
import './SocialCard.css';

const SocialCard = ({children, title, facebook, instagram}) => {

	var ShowFacebook = "";
	var ShowInstagram = "";
	var LinkFacebook = "";
	var LinkInstagram = "";


	if ((facebook !== '') && (facebook != null)) {
		var ShowFacebook = <img src={LogoFacebook} alt="Facebook Logo" width="50px" height="50px"/>;
		LinkFacebook = '-' + facebook;
	}

	if ((instagram !== '') && (instagram != null)) {
		var ShowInstagram = <img src={LogoInstagram} alt="Instagram Logo" width="50px" height="50px"/>;
		LinkInstagram = '-' + instagram;
	}
	return (
		<>
			<div class="SocialCard">
				<Card size="small" title={title} style={{width: 300}}>
					<p>{children}</p>
					<p>    {ShowFacebook} {LinkFacebook}</p>
					<p>    {ShowInstagram} {LinkInstagram}</p>
				</Card>
			</div>


		</>
	);
};


export default SocialCard;

