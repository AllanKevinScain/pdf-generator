import { getBaseUrl } from "@src/helpers";
import axios from "axios";

export function usePastoral() {
  async function getPastorals() {
    try {
      const response = await axios.get(`${getBaseUrl()}/pastorals`);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  return {
    getPastorals,
  };
}
