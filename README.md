# CampsiteExplorer

## Description 
A campsite directory for users to add, edit and delete there own campsites. Also, the user has the ability to review other campgrounds using comments and a star rating system. The use of cluster and pinpoint maps makes it easier for the user to located the campgrounds.

## WHY?
This project was developed as part of a web developer's boot camp, providing me with an opportunity to apply the programming languages I had been learning, such as HTML, CSS, JavaScript, Node.js, and Express.js, in a practical setting. It offered valuable insights into working with APIs and implementing security measures for web applications. By integrating a non-SQL database, I gained hands-on experience with CRUD (Create, Read, Update, Delete) operations and their application in a real-world scenario

## Model
### Home
<p align="center">
    <img src="READMEimages\home.png">
</p>

Leveraging EJS (Embedded JavaScript) templates, I created a boilerplate layout that could be reused across multiple pages, maintaining a consistent theme throughout the application. This approach streamlined the coding process, making it more manageable. Additionally, I utilized the CSS linear-gradient function to soften the background image, resulting in a more inviting and visually appealing user interface. The home page was intentionally kept simple and straightforward, enhancing the user experience and ensuring easy navigation

### Campgrounds
<p align="center">
    <img src="READMEimages\campgrounds.png">
</p>

The campground page serves as the central hub of the website, where users can view a list of campgrounds and their corresponding locations on a cluster map powered by MapBox. This page displays essential information about each campground, including the title, description, and location, providing users with a comprehensive overview.

The campground data is stored in a MongoDB database. Through a GET request and the use of the catchAsync utility, the campgrounds are fetched and rendered on the page. An if statement is employed using EJS to iterate over the campground collection, dynamically generating a div element for each campground entry.

The cluster map is a valuable addition to the site, as it allows users to visually pinpoint the geographic locations of the campgrounds. The location data, stored alongside other campground information, is converted into longitude and latitude coordinates, enabling the precise plotting of campground markers on the map.

### New Campgrounds
<p align="center">
    <img src="READMEimages\newCampground.png">
</p>

To access the 'New Campground' feature, users must be authenticated and logged in. This access control is implemented through Express Session, which checks the user's login status. If the user is not logged in, Connect Flash is utilized to display a flash card with an error message, redirecting the user to the login page.

Multer middleware is employed to validate form input and prevent potential security attacks. This middleware also simplifies the process of accepting image uploads by handling the image data and storing it in Cloudinary, with the corresponding image ID saved in the database table.

Bootstrap, a popular CSS framework, was instrumental in streamlining the styling and positioning of the form elements. It also enhanced the user experience by providing visual cues for unfilled or invalid form inputs, ensuring a smoother and more intuitive form submission process.
### Log In
<p align="center">
    <img src="READMEimages\login.png">
</p>

The Bootstrap card component was utilized to create a professional and clean layout for the form, taking advantage of Bootstrap's form styling capabilities. This framework provided visual cues and alerts to users in case of any input mistakes, enhancing the overall user experience.

Mongoose was employed to define the Schema, which enforced data validation and ensured correct input into the form fields. Passport, an authentication middleware, was used to validate the user's input after the POST request. It cross-referenced the provided details with the data stored in the application. If the validation failed, Express and Connect Flash handled the error by displaying an appropriate message. However, if the validation succeeded, the user was redirected to the Campgrounds page, allowing them to continue browsing and interacting with the application.

### Register
<p align="center">
    <img src="READMEimages\register.png">
</p>

Leveraging the Bootstrap styling from the login page, I maintained a consistent design across both the login and registration pages, ensuring a cohesive user experience.

The same Mongoose Schema used for the login page was employed for the registration form, enabling data validation and preventing potential security vulnerabilities. Passport, in conjunction with Mongoose, verified the user's input against the defined Schema. Upon successful validation, the user's data was securely stored in the MongoDB database.

Express Sessions played a crucial role in maintaining the user's authenticated state, allowing them to browse the application without interruption. After successful registration, the user was seamlessly redirected to the Campgrounds page, where they could continue exploring and interacting with the site's features.

### Campground
<p align="center">
    <img src="READMEimages\campground.png">
</p>

The Show Campground page provides users with comprehensive details about a specific campground, including its name, location (displayed on a small MapBox map), description, author, and price. This page serves as a central hub for accessing and interacting with the campground's information.

Leveraging Express Sessions and Mongoose, users who are the authors of a particular campground have the ability to edit or delete that campground from the site. Similarly, users who have submitted reviews for a campground can also edit or delete their own reviews.

Joi Schemas play a crucial role in securing the application by validating user input and preventing potential security attacks. This validation process helps to identify and block any harmful data that users may attempt to input.

Utilizing EJS and if statements, the application iterates over the campground's images and seamlessly displays them in a Bootstrap carousel. The remaining campground data is dynamically rendered within an empty div element, ensuring a consistent display and styling across the site, maintaining a cohesive user experience.

## Problems encountered

- Getting to grips with MapBox and API's.
- Setting up Schemas correctly.
- Handling user input.
- Import and exporting files correctly.

## New skills

- Working with GeoAPI.
- Understanding the importance of Passport and its uses.
- Working with a Non-SQl database.
- Setting up and understanding EJS.
- Creating an Express application.

## languages
- Javascript
- HTML
- CSS
- Node.js
- Frameworks:
     - Bootstrap
     - Express.js
     - EJS
- Other Dependencies:
     - MongodDB
     - Mongoose
     - Cloudinary
     - Joi
     - Passport

## Running Locally

### Running Web Page
- Make sure to have Flask and Python installed before proceeding.

Clone the repository:
```
git clone https://github.com/SReddy-96/CampsiteExplorer
```
Navigate into directory:
```
cd CampsiteExplorer
```
Install Dependencies:
```
npm install
```
Run the Application:
```
npm start
```
Open your web browser and navigate to http://localhost:3000 to access CampsiteExplorer.

## Usage
Once the application is running, users can:

- Create an account.
- Search for campsites using the search functionality.
- View details about each campsite by clicking on its listing.
- Contribute by adding new campsites using the provided form.

