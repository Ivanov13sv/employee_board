const months = ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];

export class DateService{
    static getMonth(date: string){
        const monthIndex = new Date (Date.parse(date)).getMonth();
        return months[monthIndex + 1];
    }
    static getYear(date: string){
        const day = new Date (Date.parse(date)).getFullYear();
        return day;
    }
    static getDate(date: string){
        const day = new Date (Date.parse(date)).getDate();
        return day;
    }
}