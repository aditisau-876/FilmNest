import API from "./api";

export const getAIRecommendations = async (prompt) => {
    const response = await API.post(
        "/ai/recommend",
        {
            prompt,
        }
    );

    return response.data;
};