import {Injectable} from '@angular/core';
import {CountService} from './count-service';
@Injectable()
export class UserService {
    public activeUsers = ['Max', 'Anna'];
    public inactiveUsers = ['Chris', 'Manu'];

    constructor(private countService: CountService) {}

    onSetToInactive(id: number) {
        this.countService.clickCounts++;
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }
    onSetToActive(id: number) {
        this.countService.clickCounts++;
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }
}