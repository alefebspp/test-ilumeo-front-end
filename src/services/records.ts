import api from "@/lib/axios";
import { Record } from "@/types";

export type GetAllRecordsResponse = {
  data: Record[];
  total: number;
  nextOffset: number | null;
  hasMore: boolean;
};

export async function getAllRecords(params?: string) {
  const response = await api.get<GetAllRecordsResponse>("/record" + params);

  return response.data;
}

export async function createRecord(body: {
  type: "start" | "end";
  createdAt: string;
}) {
  const response = await api.post<{
    message: string;
  }>("/record", body);

  return response;
}
