import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

export const getProjects = (setProjects: any) => {
	const collRef = collection(db, "projects");
	const unsubscribe = onSnapshot(collRef, (snapshot) => {
		const projectsData = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		console.log(projectsData);
		setProjects(projectsData);
	});

	return unsubscribe;
};
