import axios, { AxiosResponse } from "axios";

interface DeleteDataResponse {
  data: any; // Adjust according to your expected response data type
}

const deleteData = async (
  path: string
): Promise<DeleteDataResponse | undefined> => {
  try {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!token || !baseUrl) {
      throw new Error("API token or base URL is missing.");
    }

    const url = `${baseUrl}${path}`;
    const response: AxiosResponse<DeleteDataResponse> = await axios.delete(
      url,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response);
    } else {
      console.error("Unexpected error:", (error as Error).message);
    }
  }
};

export default deleteData;
