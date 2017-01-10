# EXAM: Web Apps

### Getting Started
 - Fork this repository under your own account
 - Clone the forked repository to your computer
 - Commit your progress frequently and with descriptive commit messages
 - All your answers and solutions should go in this repository

### What can I use?
- You can use any resource online, but **please work individually**
- **Don't just copy-paste** your answers and solutions, use your own words instead.


## Tasks

### 0. Initialize a node package in this folder.
- the test command should be `node test.js`

### 1. frontend: HTML, DOM & events
- the frontend should have the following components:
  - a paragraph of text containing this copy: "Thank you for visiting our website! To get early access to our planned projects, please fill in the following quick questionnaire."
  - a textarea with the label "Describe your experience with Green Fox Academy so far"
  - a number input with the label "On a scale of 1 to 10, how likely are you to recommend Green Fox Academy to a friend?"
  - an email input with the label "Your email address:"
  - a button

- clicking the button should display a 'loading' message

### 2. frontend: XHR
- clicking the button should send a `post` request to the `/exam` endpoint
  - the request body should follow this format:
  ```json
  {
    "feedback": "stellar experience with stupendous people. simply perfect",
    "scale": "10",
    "email": "lobab@greenfox.academy"
  }
  ```
  - the frontend should display the server response in a list
  - the frontend should hide the 'loading' message when the response arrives

### 3. backend: node, express
- the backend should serve the static files for the frontend
- the backend should have a `post` endpoint on `/exam/`
  - if the received data passes validation - more on that later -, the backend should send a response in the following format:   
  ```json
  {
    "status": "ok",
    "projects": [
      "secret project 1",
      "secret project 2"
    ]
  }
  ```
  - if any error occures, or the received data did not pass validation, the server should respond with:   
  ```json
    {
      "status": "error",
      "message": "thank you"
    }
  ```

### 4. backend: unit testing, array methods
- create a separate file for the input validation module
  - the validator function should return true if:
    - the email has an @ sign
    - AND the scale is equal to or bigger than 10
    - AND the feedback text contains at least 3 nice words from the following list:
    `["amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"]`
  - the validator function should return false otherwise
  - use an array method to process the feedback
  - write unit tests for the cases in `test.js` found in this repository
  - write 3 more test cases

### 5. backend: database, mysql
- create the `secretprojects` database and fill it by importing `secretprojects.sql` found in this repository
- if the validator finds the received data valid, get all data from database and return it in the response in the format given in #3
