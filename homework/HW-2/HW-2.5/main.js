// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері
// за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу.

let Days_of_the_weekdays = [
    {day: 'Monday', morningTemp: 3, afternoonTemp: 10, eveningTemp: 7},
    {day: 'Tuesday', morningTemp: 4, afternoonTemp: 16, eveningTemp: 9},
    {day: 'Wednesday', morningTemp: 1, afternoonTemp: 8, eveningTemp: 22},
    {day: 'Thursday', morningTemp: 2, afternoonTemp: 30, eveningTemp: 44},
    {day: 'Friday', morningTemp: 7, afternoonTemp: 21, eveningTemp: 43},
    {day: 'Saturday', morningTemp: 54, afternoonTemp: 33, eveningTemp: 12},
    {day: 'Sunday', morningTemp: 33, afternoonTemp: 11, eveningTemp: 5}
];
console.log(Days_of_the_weekdays[6]);