# Bell-Hackathon
Solution to the Bell Hackworks Hackathon 2023

1. Create login page
2. JS to check if email not case sensitive and Password case sensitive
3. If it passes go to 2factorauth.html and send email
4. 2factorauth.html shows a grid where we need to click each box in order
5. Give them 3 chances, if they got it go to HomePage.html

.JS
Confirm that the email exists, if so check if the password matches correctly
make sure to prevent form submission if both of these pass
if it passes change the html to 2factorauth.html
Create a random combination of grid squares, assign this info to a string or array
Grid can be buttons or divs, addEventListener on click
when it gets clicked it adds the number to either a string (use format string and .replace "xxxx") or array
Add a reset button that resets the variable and boxes back to default
Add a submission button and it checks if the array/string===answe
If it passes change html to Homepage