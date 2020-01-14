import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {Injectable} from "@angular/core";
import {AppConfig} from "../config/config";

@Injectable()
export default abstract class AbstractService {

  protected connection: AxiosInstance;

  constructor() {
    this.initializeAxiosConnect();
  }

  private initializeAxiosConnect(): void {
    const config: AxiosRequestConfig = {
      baseURL: AppConfig.API_URL
    };
    this.connection = axios.create(config);
  }

}



