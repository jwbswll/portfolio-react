import IMG_2137 from "./IMG_2137.jpg";
import style from "./ProfileImage.module.scss";

const ProfileImage = () => {
	return (
		<div className={style.container}>
			<img className={style.img} src={IMG_2137} alt="photo of me" />
		</div>
	);
};

export default ProfileImage;
