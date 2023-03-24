// //Initial

// // console.log("Redux Starter Project");

// //Modified

// // import { compose, pipe } from "lodash/fp";
// // import { produce } from "immer";

// // let userName = " Yash ";
// //Traditional way
// // let greetingMsg = "Hello " + userName.trim() + " Good Morning !";
// // console.log(greetingMsg);

// // let trim = (name) => name.trim();
// // let greetings = (name) => `Hello ${name} Good Morning !`;
// // let upperCase = (name) => name.toUpperCase();

// // Two problems, increasing complexity and we are reading from right to left
// // let output = greetings(upperCase(trim(userName)));

// // Complexity is reduced but still we have the problem of reading right to left
// // let newFunc = compose(greetings, upperCase, trim);
// // let output = newFunc(userName);
// // console.log(output);

// // let newFunc = pipe(trim, upperCase, greetings);
// // let output = newFunc(userName);
// // console.log(output);

// // Curring example

// // let userName = " Yash ";
// // let trim = (name) => name.trim();
// // Errors out saying expected a function.....hence we go for currying
// // let greetings = (message, name) => `Hello ${name} ${message} !`;

// // by using currying
// // let greetings = (message) => (name) => `Hello ${name} ${message} !`;

// // let upperCase = (name) => name.toUpperCase();

// // let newFunc = pipe(trim, upperCase, greetings("Have a nice day"));
// // let output = newFunc(userName);
// // console.log(output);

// // Immutability

// // const employee = {
// //   name: "Yash",
// //   age: 25,
// //   company: { country: "USA", city: "Mineapolis" },
// // };

// // const newEmp = Object.assign({}, employee, { name: "Prakash" });
// // const newEmp = {
// //   ...employee,
// //   age: 27,
// //   name: "Prakash",
// //   company: { ...employee.company, city: "Vinis" },
// // };

// // For more complex objects we use immer library
// // const newEmp = produce(employee, (draftState) => {
// //   draftState.name = "Prakash";
// //   draftState.company.city = "Newyork";
// // });

// // console.log(employee);
// // console.log(newEmp);

// // const numbers = [10, 20, 30, 40];

// //Adding Items
// // const index = numbers.indexOf(30);
// // const addedNumbers = [...numbers.slice(0, index), 50, ...numbers.slice(index)];
// // console.log(addedNumbers);

// //Updating Items
// // const updated = numbers.map((a) => (a === 40 ? 80 : a));
// // console.log(updated);

// //Removing Items
// // const removed = numbers.filter((a) => a !== 30);
// // console.log(removed);

// // Excercise

// // const book = {
// //   author: "Robert Kiyosaki",
// //   book: {
// //     name: "Rich Dad Poor Dad",
// //     price: "$8",
// //     rating: 4.7,
// //   },
// // };

// // const newBook = { ...book, book: { ...book.book, price: "$10", rating: 4.8 } };
// // const newBook = produce(book, (draftState) => {
// //   draftState.book.price = "$10";
// //   draftState.book.rating = 4.8;
// // });

// // console.log(newBook);

// // const arrayOfBooks = ["Book1", "Book2", "Book3"];

// // const newBookArray = arrayOfBooks.map((el) => (el === "Book2" ? "Book4" : el));

// // console.log(newBookArray);

// // Redux implementation

// import store from "./store/store";
// import {
//   addTask,
//   completedTask,
//   fetchTodo,
//   removeTask,
// } from "./store/tasks/action";

// // Logs whenever there is a change in the state data
// const unsubscribe = store.subscribe(() => {
//   console.log("Updated", store.getState());
// });

// store.dispatch(addTask("Task 1"));
// store.dispatch(addTask("Task 2"));

// // Once we unsubscribe, we don't get further notification from store
// // unsubscribe();

// // console.log(store.getState());
// store.dispatch(removeTask(1));
// // console.log(store.getState());
// store.dispatch(completedTask(2));
// store.dispatch(fetchTodo());

// Redux tool kit

// import store from "./store/store";
// import {
//   addTask,
//   completedTask,
//   fetchTodo,
//   removeTask,
// } from "./store/tasks/action";

// // Logs whenever there is a change in the state data
// const unsubscribe = store.subscribe(() => {
//   console.log("Updated", store.getState());
// });

// store.dispatch(addTask({ task: "Task 1" }));
// store.dispatch(addTask({ task: "Task 2" }));

// // Once we unsubscribe, we don't get further notification from store
// // unsubscribe();

// // console.log(store.getState());
// store.dispatch(removeTask({ id: 1 }));
// // console.log(store.getState());
// store.dispatch(completedTask({ id: 2 }));
// // store.dispatch(fetchTodo());

// With create slice
import store from "./store/configureStore";
import { addTask, completedTask, removeTask } from "./store/tasks";
import { addEmployee, removeEmployee } from "./store/employees";

// Logs whenever there is a change in the state data
const unsubscribe = store.subscribe(() => {
  console.log("Updated", store.getState());
});

store.dispatch(addTask({ task: "Task 1" }));
store.dispatch(addTask({ task: "Task 2" }));

// Once we unsubscribe, we don't get further notification from store
// unsubscribe();

// console.log(store.getState());
store.dispatch(removeTask({ id: 1 }));
// console.log(store.getState());
store.dispatch(completedTask({ id: 2 }));
// // store.dispatch(fetchTodo());

store.dispatch(addEmployee({ name: "Harley" }));
store.dispatch(addEmployee({ name: "David" }));
store.dispatch(removeEmployee({ id: 1 }));
unsubscribe();
