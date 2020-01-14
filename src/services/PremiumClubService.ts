import AbstractService from "./AbstractService";
import {Injectable} from "@angular/core";
import {AxiosPromise} from "axios";


@Injectable()
export class PremiumClubService extends AbstractService {

  public findAllEventos(): AxiosPromise<any> {
    return this.connection.get<any>('/eventos/read.php');
  }

  public findAllMembros(): AxiosPromise<any> {
    return this.connection.get<any>('/membros/read.php');
  }

  public findAllParceiros(): AxiosPromise<any> {
    return this.connection.get<any>('/parceiros/read.php');
  }
}
