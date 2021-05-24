export default class Alert{
    constructor(alertId) {
        this.alert = document.getElementById('alert');
        this.alert = document.getElementById('modal-alert');
    }

    show(message){
        this.alert.classList.remove('d-none');
        this.alert.innerText = message;
    }

    hide(){
        this.alert.classList.add('d-none');
    }
}


