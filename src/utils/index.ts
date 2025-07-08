import { isAxiosError } from "axios";

export function returnErrorMessage(error: unknown) {
  if (isAxiosError(error)) {
    if (error.response) {
      return error.response.data.message as string;
    }
  }

  return "Server error. Please, try again.";
}
