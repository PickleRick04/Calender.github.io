document.addEventListener('DOMContentLoaded', function () {
    const currentDateElement = document.querySelector('.current-date');
    const prevMonthButton = document.getElementById('prev');
    const nextMonthButton = document.getElementById('next');
    const daysContainer = document.querySelector('.days');

    // Function to initialize the calendar and add event listeners
    function initCalendar() {
        // Assuming you already have a function to render the calendar
        renderCalendar();

        // Add click event listener to each day in the calendar
        daysContainer.querySelectorAll('li').forEach(day => {
            day.addEventListener('click', function() {
                const selectedDate = this.textContent; // Get the clicked date text
                const currentMonthYear = currentDateElement.textContent; // Assuming this contains the current month and year
                
                // Construct the URL for the new site with the selected date as a query parameter
                const newSiteURL = `http://example.com/new-calendar-page.html?date=${selectedDate}-${currentMonthYear}`;
                
                // Open the new site in a new tab
                window.open(newSiteURL, '_blank');
            });
        });
    }

    // Call the initialize function
    initCalendar();

    // Add more functions here as needed, e.g., for handling month navigation
    prevMonthButton.addEventListener('click', function() {
        // Logic to go to previous month and re-initialize the calendar
        initCalendar();
    });

    nextMonthButton.addEventListener('click', function() {
        // Logic to go to next month and re-initialize the calendar
        initCalendar();
    });
});
