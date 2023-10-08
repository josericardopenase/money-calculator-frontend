import { AxiosApiAdapter } from "../adapters/AxiosApiAdapter";
import axiosClient from "../instances/axiosClient";

export const apiAdapter = new AxiosApiAdapter(axiosClient);