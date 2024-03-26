const daysTag = document.querySelector(".days"),
      currentDate = document.querySelector(".current-date"),
      prevNextIcon = document.querySelectorAll(".icons span");
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const renderCalendar = () => {
    date = new Date(currYear, currMonth, 1); // Always reset the date here for consistency
    let firstDayOfMonth = date.getDay(),
        lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(),
        lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === new Date().getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
};

// Event listeners for prev and next icons
prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
            currMonth = (currMonth + 12) % 12; // Adjust month correctly and wrap around
        }
        renderCalendar();
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key == '37') { // Left arrow key
        currMonth = currMonth - 1;
        if (currMonth < 0) {
            currMonth = 11;
            currYear--;
        }
    } else if (e.key == '39') { // Right arrow key
        currMonth = currMonth + 1;
        if (currMonth > 11) {
            currMonth = 0;
            currYear++;
        }
    }
    renderCalendar();
});

renderCalendar(); // Initial call to render the calendar
