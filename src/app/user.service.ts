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
                console.log(body);
                return body['results'] || [];

            })
            .map(users => {
                return users.map(user => {
                    return {
                        name: user.name.first + ' ' + user.name.last,
                        image: user.picture.large,
                        geo: user.location.city + ' ' + user.location.state + ' ' + user.location.street,
                        str: user.name.title,
                        pos: user.gender
                    };
                });
            });
    }



}