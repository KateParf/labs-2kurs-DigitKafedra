/*export class DataJsonService {
    constructor() {
        
    }

    public getJSON() {
        let xhr = new XMLHttpRequest();
        xhr.open(
            'GET', // HTTP-метод
            './assets/data.json', // URL, куда отправляется запрос
            false // async – если указать false, тогда запрос будет выполнен синхронно
        );
        xhr.send();
        if (xhr.status !== 200) { // статус 200 = OK – запрос получен и успешно обработан;
            alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
            return null;

        } else {
            // вывод считанного
            return Array.of(xhr.responseText);
        }
    }

}
*/
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of } from "rxjs";

export interface Vehicle {
    name: string;
    brand: string;
    model: string;
    yearOfIssue: number;
    vinNumber: number;
    registrationNumber: number;
    withScratches: boolean;
}

@Injectable({ providedIn: 'root' })
export class DataService {
    constructor(private http: HttpClient) { }

    getVehicles(): Observable<Array<Vehicle>> {
        return this.http.get<Array<Vehicle>>('./assets/data.json')
            .pipe(
                catchError(err => {
                    console.log(err);
                    return of([]);
                })
            )
    }
}