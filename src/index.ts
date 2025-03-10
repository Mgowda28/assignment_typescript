import { ReminderDatabase } from "./ReminderDatabase";


const db = new ReminderDatabase();

db.createReminder("1","Read a Book","Wanted to read a mythology book","11-03-2025");
db.createReminder("2","Buy milk","Buy milk at 1 pm","11-03-2025");
console.log("Does the reminder with id 1 exists?",db.exists("1"))

console.log(db.getAllReminders());
console.log(db.getReminder("1"));
console.log(db.removeReminder("1"));
console.log(db.getAllReminders());
db.updateReminder("2","Buy milk","Buy milk at 3 pm","11-03-2025");