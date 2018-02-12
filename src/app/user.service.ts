import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class UserService {

    size = 8;
    constructor(private http: HttpClient){}


    getUser(){
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results='+this.size+'&nat=gb')
            .map((response: Response) => {
                const body = response;
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

    setSize(size){
        this.size = size;
        console.log('пришло')
    }

}