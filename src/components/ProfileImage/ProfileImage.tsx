import IMG_2137 from "./IMG_2137.jpg";
import style from "./ProfileImage.module.scss";
import React from "react";

const ProfileImage = () => {
	console.log(React);
	return (
		<div className={style.container}>
			<img className={style.img} src={IMG_2137} alt="photo of me" />
		</div>
	);
};

export default ProfileImage;
