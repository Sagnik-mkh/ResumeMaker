import AxiosInstance from "@/constants/AxiosInstance";

const GetNavDetails = async () => {
	try {
		const result = await AxiosInstance.get("/navbar");
		return result.data;
	} catch (error) {
		console.log("Error in GetNavBarDetails", error);
		throw error;
	}
};

export default GetNavDetails;
