#! /usr/bin/env node

console.log(
    'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
  );
  
  // Get arguments passed on command line
  const userArgs = process.argv.slice(2);
  const bodyParser = require('body-parser');
  
  const Lecturer = require("./models/personal_info");
  const Course = require("./models/course_work");
  const Location = require("./models/location");
  
  
  const lecturers = [];
  const courses = [];
  const locations = [];

  
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  
  const mongoDB = userArgs[0];
  
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createLecturers();
    await createCourses();
    await createLocations();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }
  
  
  
  async function lecturerCreate(index, first_name, family_name, marital_status, educational_status) {
    const lecturerdetail = { first_name: first_name, family_name: family_name, marital_status: marital_status, educational_status: educational_status};
    
  
    const lecturer = new Lecturer(lecturerdetail);
  
    await lecturer.save();
    lecturers[index] = lecturer;
    console.log(`Added lecturer: ${first_name} ${family_name}`);
  }
  
  async function courseCreate(index, course_taught, lecturer_position) {
    const coursedetail = { course: course_taught, location: lecturer_position };
    
  
    const course = new Course(coursedetail);
    await course.save();
    courses[index] = course;
    console.log(`Added course_work: ${course_taught} ${lecturer_position}`);
  }
  
  async function locationCreate(index, building, office_location) {
    const locationdetail = {
      building: building,
      office_location: office_location,
      
    };
    
  
    const location = new Location(locationdetail);
    await location.save();
    locations[index] = location;
    console.log(`Added location_info: ${building} ${office_location}`);
  }
  
  

  async function createLecturers() {
    console.log("Adding lecturers");
    await Promise.all([
      lecturerCreate(0, "Dumebi", "Chukwuma", "Mr.", "Dr."),
      lecturerCreate(1, "Samuel", "Siju", "Mr.", "Phd."),
      lecturerCreate(2, "David", "Ntaji", "Mr.", "Dr."),
      lecturerCreate(3, "Joseph", "Ayodele", "Mr.", "Dr.")
    ]);
  }
  
  async function createCourses() {
    console.log("Adding course_info");
    await Promise.all([
      courseCreate(0, "TMC411", "Assistant-Lecturer"),
      courseCreate(1, "EDS121", "Head-Lecturer"),
      courseCreate(2, "GEC420", "Assistant-Lecturer"),
      courseCreate(3, "ICE417", "Head-Lecturer")
    ]);
  }


  async function createLocations() {
    console.log("Adding location_info");
    await Promise.all([
      locationCreate(0, "CMSS", "F201"),
      locationCreate(1, "CEDS", "G206"),
      locationCreate(2, "EIE", "F401"),
      locationCreate(3, "CHM", "E101")
    ]);
  }



  