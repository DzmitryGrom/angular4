import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class UserService {


    constructor(private http: HttpClient){}


    getUser(){
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
            .map((response: Response) => {
                const body = response;
                return body['results'] || [];

            })
            .map(users => {
                return users.map(u => {
                    return {
                        name: u.name.first + ' ' + u.name.last,
                        image: u.picture.large,
                        geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street,
                        str: u.name.title
                    };
                });
            });
    }



}