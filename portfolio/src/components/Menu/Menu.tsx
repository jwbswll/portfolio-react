import { useState } from "react";
import style from "./Menu.module.scss";
import Nav from "../Nav/Nav";

const Menu = () => {
	const [clicked, setClicked] = useState(false);

	const toggleMenu = () => {
		setClicked(!clicked);
	};

	return (
		<>
			<div className={style.menu}>
				<div onClick={toggleMenu} className={style.border}>
					<div
						className={clicked ? `${style.top} ${style.rotate_top}` : style.top}
					/>
					<div
						className={
							clicked ? `${style.middle} ${style.rotate_middle}` : style.middle
						}
					/>
					<div
						className={
							clicked ? `${style.bottom} ${style.rotate_bottom}` : style.bottom
						}
					/>
				</div>
				<div
					onClick={toggleMenu}
					className={
						clicked ? `${style.drawer} ${style.drawer_open}` : style.drawer
					}
				>
					<div className={style.nav_container}>
						<Nav />
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;
