# Hourly Day Planner


## Description

This website allows you to enter daily plans on a work day basis. The website displays a user-friendly page with spacious text areas to input your tasks/plans for your work day. It is a great helper to keep your day organized and current.

## Visuals

We were given starter code for this website and the task to update the HTML, CSS and write javascript using jQuery to make the site interactive.

### Starter code:

![image](https://user-images.githubusercontent.com/118077000/212954409-e90f0830-3a96-4e00-a90c-25eb811b181f.png)

![image](https://user-images.githubusercontent.com/118077000/212954588-706da4ae-1732-4d84-b148-2e405f3ebbf0.png)

![image](https://user-images.githubusercontent.com/118077000/212954676-29c379c2-cde5-4a78-9411-a9404d0b19c2.png)

-----
### HTML modifications:

- past, present and future classes were removed from html and only linked in css to javascript for color coding.
- time-block was renamed in HTML and CSS to work with how I would name my classes.
- hours started at 9AM, I added time blocks through to 5PM, named time ID's using military time so the hour loop would be able to tell if the time was past, present or future but kept the times displayed on page as 12-hour time format.
- Removed any unnecessary ID or class not being used with my code.

![image](https://user-images.githubusercontent.com/118077000/212954880-deca932d-8bb4-46bf-ae28-4d0d769c0e2c.png)

-----

### Javascript Code:

The time and day was set in the header using Day.js for you to reference when completing your planner.

![image](https://user-images.githubusercontent.com/118077000/212957026-526ddb20-41e3-42d9-9859-26eb55c8fc25.png)

![image](https://user-images.githubusercontent.com/118077000/212956958-018a9442-88cf-4768-8713-4056486a9e39.png)

-----
A function was written for the save button to be able to click and save to local storage.

![image](https://user-images.githubusercontent.com/118077000/212957610-1a2df40e-b6d1-4883-b365-638472f58b4f.png)

![image](https://user-images.githubusercontent.com/118077000/212958044-b35c5efc-0124-423a-a9c9-9fd3a313cf07.png)

-----
A loop function was written to loop through hours and update the coloring on each time block every 12 seconds to keep current. Also, getting the saved data in local storage to display on screen even when page is refreshed.

![image](https://user-images.githubusercontent.com/118077000/212959424-9a6548b6-7ac2-462a-bc0a-f40b277457d7.png)

![image](https://user-images.githubusercontent.com/118077000/212958516-d07ef1f4-585a-4a31-84bc-421fabd1849f.png)

## Usage

This website allows you to enter daily plans on a work day basis. The plans are entered into the text area and then saved to local storage. The current day and time is shown at the top of the page and the color coated text fields coincide with the time of day. Past time being gray, present time being red, and future time being green.

Website URL: https://tessaec.github.io/day-work-planner/
