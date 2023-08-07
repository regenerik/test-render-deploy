const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLoading:true,
			currentList:{},
			personas: ["Pedro","Maria"],

		},
		actions: {

			register: async (name, email, password) => {
				try {
					const data = {
						name: name,
						email: email,
						password: password
					};

					const response = await fetch("https://test-deploy-back-on-render.onrender.com/users", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					});

					const statusCode = response.status;
					const responseData = await response.json();

					if (statusCode === 201) {
						setStore({ ...getStore(), registerStatus: true });
					}

					return responseData;
				} catch (error) {
					console.error("Error:", error);
					throw error;
				}
			}
		}
	};
};

export default getState;