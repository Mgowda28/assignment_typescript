import { ReminderDatabase } from "./ReminderDatabase";


const db=new ReminderDatabase();

db.createReminder("1","Read a Book","Wanted to read a mythology book","11-03-2025");
db.updateReminder("2","Buy milk","Buy milk at 1 pm","11-03-2025");
console.log("Does the reminder with id 1 exixts?",db.exists("1"))

db.getAllReminders();
db.getReminder("1");
db.removeReminder("1");
db.getAllReminders();
db.updateReminder("2","Buy milk","Buy milk at 3 pm","11-03-2025");