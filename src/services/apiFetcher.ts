import axios from "axios";

export async function fetchApiData(url: string) {
  const response = await axios.get(url);
  return response.data;
}
