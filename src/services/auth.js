export const auth = () => {
	const data = localStorage.getItem('dataUser');
	const dataUser = JSON.parse(data);
	return dataUser ? dataUser.access_token : null;
};
