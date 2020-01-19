# Backend Project: todevs API
This simple api is responsible for providing resources for the todevs front-end application.

# TODOS:
- Introduce abstraction layer to prevent handlers from knowing about http status codes.
- Introduce validators to allow for input validation and other status codes being responded without having to determine the status in the handlers.
- Implement repository class so that it connects to the MongoDB and not the mock-dataset file.
- Implement unit tests for every class

## Requirements for the MVP:
- Authentication Module - Signup and Signin functionalities (Using JWT)
- Users Module - User data storage
- Posts Module - Article creation functionalities
- Comments Module - A module that will allow users to comment on articles

## DRY X WET: Don't Repeat Yourself | Write Everything Twice

## Getting Started:
* To install the dependencies run:

        npm install

* Running the application:

        npm start

* Running the application in development mode:

        npm run dev

* Running the automated test suits
        
        npm tests