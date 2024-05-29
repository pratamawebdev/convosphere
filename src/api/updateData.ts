import { responseAlert } from "@/utils/responseAlert";
import axios, { AxiosResponse } from "axios";

interface UpdateDataResponse {
  data: any;
}

const updateData = async (
  path: string,
  data: any
): Promise<UpdateDataResponse | undefined> => {
  try {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!token || !baseUrl) {
      throw new Error("API token or base URL is missing.");
    }

    const url = `${baseUrl}${path}`;
    const response: AxiosResponse<UpdateDataResponse> = await axios.put(
      url,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    responseAlert({
      title: "Success",
      message: "Data updated successfully.",
      icon: "success",
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response);
      responseAlert({
        title: "Error",
        message: error.response?.data?.message || "An Axios error occurred.",
        icon: "error",
      });
    } else {
      console.error("Unexpected error:", (error as Error).message);
      responseAlert({
        title: "Error",
        message: (error as Error).message || "An unexpected error occurred.",
        icon: "error",
      });
    }
  }
};

export default updateData;
