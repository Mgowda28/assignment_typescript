type ReminderData = {
    id: string;
    title: string;
    description: string;
    dueDate: string;
};

export class Reminder {
    id: string;
    title: string;
    description: string;
    dueDate: string;

    constructor(id: string, title: string, description: string, dueDate: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    toObject(): ReminderData {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
        };
    }
}

export {ReminderData};