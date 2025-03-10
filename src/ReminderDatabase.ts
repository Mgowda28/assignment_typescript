import { Reminder,ReminderData  } from "./Reminder";
 

export class ReminderDatabase {
    private reminders: Map<string, Reminder>;

    constructor() {
        this.reminders = new Map<string, Reminder>();
    }

    createReminder(id: string, title: string, description: string, dueDate: string): string {
        const reminder = new Reminder(id, title, description, dueDate);
        this.reminders.set(id, reminder);
        return id;
    }

    exists(id: string): boolean {
        return this.reminders.has(id);
    }

    getAllReminders(): ReminderData[] {
        return Array.from(this.reminders.values()).map(reminder => reminder.toObject());
    }

    getReminder(id: string): ReminderData | null {
        return this.reminders.has(id) ? this.reminders.get(id)!.toObject() : null;
    }

    removeReminder(id: string): boolean {
        return this.reminders.delete(id);
    }

    updateReminder(id: string, title?: string, description?: string, dueDate?: string): boolean {
        if (this.reminders.has(id)) {
            const reminder = this.reminders.get(id)!;
            if (title) reminder.title = title;
            if (description) reminder.description = description;
            if (dueDate) reminder.dueDate = dueDate;
            return true;
        }
        return false;
    }
}
