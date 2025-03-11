import { ReminderDatabase } from "./ReminderDatabase";
import * as readline from "readline";

const db = new ReminderDatabase();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ShowMenu() {
    console.log("1. Create Reminder");
    console.log("2. Get All Reminders");
    console.log("3. Get Reminder By Id");
    console.log("4. Remove Reminder By Id");
    console.log("5. Mark Reminder As Completed");
    console.log("6. Unmark Reminder As Completed");
    console.log("7. Get Completed Reminders");
    console.log("8. Get Uncompleted Reminders");
    console.log("9. Get All Reminders Due Today");
    console.log("10. Filter Reminders By Date");
    console.log("11. Exit");
    rl.question("Enter an option [1-11]: ", (option) => {
        handleInput(option);
    });
}

function CreateReminder() {
    rl.question("Enter Reminder Id: ", (id) => {
        rl.question("Enter Reminder Title: ", (title) => {
            rl.question("Enter Reminder Description: ", (description) => {
                rl.question("Enter Reminder Date (dd-mm-yyyy): ", (date) => {
                    db.createReminder(id, title, description, date);
                    ShowMenu();
                });
            });
        });
    });
}


function handleInput(option: string) {
    switch (option) {
        case "1":
            CreateReminder();  
            break;
        case "2":
            console.log("All Reminders\n",db.getAllReminders());    
            ShowMenu();
            break;
        case "3":
            rl.question("Enter Reminder Id: ", (id) => {
                console.log("Reminder\n",db.getReminder(id));
                ShowMenu();
            }
            );      
            break;
        case "4":
            rl.question("Enter Reminder Id: ", (id) => {
                console.log("Remove Reminder By Id\n",db.removeReminder(id));
                ShowMenu();
            }
            );          
            break;
        case "5":   
            rl.question("Enter Reminder Id: ", (id) => {
                console.log("Mark Reminder As Completed\n",db.markReminderAsCompleted(id));
                ShowMenu();
            }
            ); 
            break;
        case "6":
            rl.question("Enter Reminder Id: ", (id) => {
                console.log("Unmark Reminder As Completed\n",db.unmakReminderAsCompleted(id));
                ShowMenu();
            }
            );
            break;
        case "7":
            console.log("Completed Reminders\n",db.getCompletedReminders());        
            ShowMenu();
            break;  
        case "8":
            console.log("Uncompleted Reminders\n",db.getUncompletedReminders());
            ShowMenu();
            break;
        case "9":
            console.log("Reminders Due Today\n",db.getAllRemindersDueByToday());        
            ShowMenu();
            break;
        case "10":  
            rl.question("Enter Date (dd-mm-yyyy): ", (date) => {
                console.log("Filter Reminders By Date\n",db.filterRemindersByDate(date));
                ShowMenu();
            }
            ); 
            break;
        case "11":
            rl.close();
            break;
        default:        
            ShowMenu();
            break;
    }
}

ShowMenu();


// db.createReminder
// ("1","Buy groceries","Buy groceries at 3 pm","11-03-2025");
// db.createReminder("2","Buy bread","Buy bread at 3 pm","11-03-2025");
// db.createReminder("3","Buy milk","Buy milk at 3 pm","12-03-2025");
// console.log("Does the reminder with id 1 exists?",db.exists("1"))


// console.log("Mark Reminder 1 as Completed: ",db.markReminderAsCompleted("1"));
// console.log("Completed Reminders\n",db.getCompletedReminders());
// console.log("Mark 1 as Not Completed: ",db.unmakReminderAsCompleted("1"));
// console.log("Uncompleted Reminders\n",db.getUncompletedReminders());
// console.log("Reminders Due Today\n",db.getAllRemindersDueByToday());


// console.log("Get All Reminders\n",db.getAllReminders());
// console.log("Get Reminder with id 1\n",db.getReminder("1"));
// console.log("Remove Reminder with id 1\n",db.removeReminder("1"));
// console.log("Does the reminder with id 1 exists?",db.exists("1"))
// console.log("All reminders\n",db.getAllReminders());
// console.log("Filter Reminder By Date\n",db.filterRemindersByDate("11-03-2025"));
// db.updateReminder("2","Buy milk","Buy milk at 3 pm","11-03-2025");