import axios, { AxiosResponse } from "axios";

const getData = async (
  path: string
): Promise<AxiosResponse<any> | undefined> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!baseUrl) {
      throw new Error("Base URL is missing.");
    }

    const url = `${baseUrl}${path}`;
    const response = await axios.get(url);

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else {
      console.error("Unexpected error:", (error as Error).message);
    }
  }
};

export default getData;
