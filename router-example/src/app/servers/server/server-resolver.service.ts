import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Server } from "src/app/modal/server.modal";
import { ServersService } from "../servers.service";

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(private serverService : ServersService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
        return this.serverService.getServer(+route.params['id'])
    }

}