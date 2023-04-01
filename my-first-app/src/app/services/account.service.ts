export class AccountService {

    account = [
        {
            name : 'Master Account' ,
            status : 'active'
        },
        {
            name : 'Test Account' ,
            status : 'inactive'
        },
        {
            name : 'Hidden Account' ,
            status : 'unknown'
        }
    ];

    addAccount (name: string , status: string) {
        this.account.push({name : name , status : status})
    }

    updateStatus(id: number , status: string) {
        this.account[id].status = status;
    }

}