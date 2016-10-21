var bio = {
  "name" : "Gustaf Jarnling",
  "role" : "Front End Developer",
  "contacts" : {
    "mobile" : "+46723379278",
    "email" : "gustaf@jarnling.eu",
    "github" : "https://github.com/gjarnling",
    "facebook" : "https://www.facebook.com/gjarnling",
    "location" : "Gothenburg, Sweden"
  },
  "welcomeMessage" : "Welcome to my resume",
  "skills" : [
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "Grunt",
    "Git",
    "Bower",
    "NPM",
    "Atom.io",
    "Illustrator",
    "Photoshop",
    "Typekit",
    "Fonts.com",
    "Wikia"
  ],
  "biopic" : "./images/gustaf-2-cropped-q70.jpg",
  "display" : function(){
    // Select variables
    var header = $("#header");
    var topContacts = $("#topContacts");
    var footerContacts = $("#footerContacts");

    // Replace variables
    var headerRole = HTMLheaderRole.replace("%data%", bio.role);
    var headerName = HTMLheaderName.replace("%data%", bio.name);
    var headerBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var headerWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var contactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var contactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var contactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var contactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var contactsFacebook = HTMLfacebook.replace("%data%", bio.contacts.facebook);

    // Render header
    header.prepend(headerRole);
    header.prepend(headerName);
    header.append(headerBioPic);
    header.append(headerWelcomeMsg);

    // Render skills if any found
    if (bio.skills.length > 0) {
      header.append(HTMLskillsStart);
      for(var i=0; i < bio.skills.length; i++){
        var skill = $("#skills");
        var skillImage, formattedSkill;

        // Replace some skills with images instead
        switch (bio.skills[i]) {
          case "Atom.io":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="Atom.io logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "Bootstrap":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="Bootstrap logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "Bower":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="Bower logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "CSS3":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="CSS3 logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "Fonts.com":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="Fonts.com logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "Git":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="Git logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "Grunt":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="Grunt logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "HTML5":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="HTML5 logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "Illustrator":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="Adobe Illustrator logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "JavaScript":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="JavaScript logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "jQuery":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="jQuery logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "NPM":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="NPM logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "Photoshop":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="Adobe Photoshop logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "Typekit":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="Typekit logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          case "Wikia":
            skillImage = '<img src="../images/logo-' + bio.skills[i].toLowerCase() + '.svg" alt="Wikia logo" class="skill-image">';
            formattedSkill = HTMLskills.replace("%data%", skillImage);
            break;
          default:
            formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            break;
        }

        // Render skill
        skill.append(formattedSkill);
      }
    }

    // Render top contacts
    topContacts.prepend(contactsLocation);
    topContacts.prepend(contactsGithub);
    topContacts.prepend(contactsFacebook);
    topContacts.prepend(contactsEmail);
    topContacts.prepend(contactsMobile);

    // Render footer contacts
    footerContacts.prepend(contactsLocation);
    footerContacts.prepend(contactsGithub);
    footerContacts.prepend(contactsFacebook);
    footerContacts.prepend(contactsEmail);
    footerContacts.prepend(contactsMobile);
  }
};

var education = {
  "schools" : [
    {
      "name" : "Stockholm University",
      "location" : "Stockholm, Sweden",
      "degree" : "No degree",
      "majors" : [
        "Philosophy"
      ],
      "dates" : "2006-09 - 2007-06",
      "url" : "http://www.philosophy.su.se/"
    },
    {
      "name" : "Stockholm University",
      "location" : "Stockholm, Sweden",
      "degree" : "No degree",
      "majors" : [
        "Culture Sciences"
      ],
      "dates" : "2005-09 - 2006-06",
      "url" : "http://www.historia.su.se/utbildning/alla-utbildningar/grundniv%C3%A5/kandidatprogram/kulturvetarlinjen-kandidatprogram-180-hp-1.28221"
    },
    {
      "name" : "Stockholm University",
      "location" : "Stockholm, Sweden",
      "degree" : "No degree",
      "majors" : [
        "Culture",
        "Aesthetics"
      ],
      "dates" : "2003-09 - 2005-06",
      "url" : "http://www.su.se/ike/musikvetenskap"
    },
    {
      "name" : "University i Skövde",
      "location" : "Sköve, Sweden",
      "degree" : "No degree",
      "majors" : [
        "Philosophy",
        "Cognitive Neuroscience"
      ],
      "dates" : "2002-09 - 2003-06",
      "url" : "http://www.his.se/om-oss/Utbildningar-och-amnen/Beteendevetenskap/Kognitiv-neurovetenskap/"
    },
    {
      "name" : "Elektronmusikstudion",
      "location" : "Stockholm, Sweden",
      "degree" : "Diploma",
      "majors" : [
        "Electro-Acoustic Music"
      ],
      "dates" : "2000-09 - 2002-06",
      "url" : "http://www.elektronmusikstudion.se/"
    },
    {
      "name" : "Stockholm University",
      "location" : "Stockholm, Sweden",
      "degree" : "No degree",
      "majors" : [
        "Philosophy"
      ],
      "dates" : "2000-09 - 2002-06",
      "url" : "http://www.philosophy.su.se/"
    },
    {
      "name" : "Vilunda Gymnasium",
      "location" : "Stockholm, Sweden",
      "degree" : "Diploma",
      "majors" : [
        "Electrical Engineering",
        "Computer Science"
      ],
      "dates" : "1998-06 - 2000-06",
      "url" : ""
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Font-End Developer Nanodegree Program",
      "school" : "Udacity",
      "dates" : "2016-10",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe2"
    }
  ],
  "display" : function(){
    // Global select variables
    var educationDiv = $("#education");

    // Go through schools
    for(var i=0; i < education.schools.length; i++) {
      // Create a new education entry
      educationDiv.append(HTMLschoolStart);

      // Local select variables
      var lastSchool = $(".education-entry:last");

      // Replace variables
      var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
      schoolName = schoolName.replace("#", education.schools[i].url);
      var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var schoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

      // Render school(s)
      lastSchool.append(schoolName + schoolDegree);
      lastSchool.append(schoolDates);
      lastSchool.append(schoolLocation);
      lastSchool.append(schoolMajor);
    }

    // Add heading if any online courses
    if (education.onlineCourses.length > 0) {
      educationDiv.append(HTMLonlineClasses);

      // Go through online courses
      for(var j=0; j < education.onlineCourses.length; j++) {
        // Create a new education entry
        educationDiv.append(HTMLschoolStart);

        // Local select variables
        var lastCourse = $(".education-entry:last");

        // Replace variables
        var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        onlineTitle = onlineTitle.replace("#", education.onlineCourses[j].url);
        var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        onlineURL = onlineURL.replace("#", education.onlineCourses[j].url);

        // Render online course
        lastCourse.append(onlineTitle + onlineSchool);
        lastCourse.append(onlineDates);
        lastCourse.append(onlineURL);
      }
    }
  }
};

var work = {
  "jobs" : [
    {
      "employer" : "Nokas Security AB",
      "title" : "Operations Manager",
      "location" : "Gothenburg, Sweden",
      "dates" : "2015-11 - current",
      "description" : "Managing the daily workload, educating new aswell as old recrutes, dealing with vacancies, job interviews, maintaining the departments main software, supporting the personel.",
      "url" : "https://nokas.com/"
    },
    {
      "employer" : "Nokas Security AB",
      "title" : "Operations Manager",
      "location" : "Stockholm, Sweden",
      "dates" : "2014-11 - 2015-11",
      "description" : "Managing the building and deployment of a camera central for one of Swedens largets property owners. From the initial architecture to technological infrastructure, software use and tuning, document resource databases, personel education and planning, etc.",
      "url" : "https://nokas.com/"
    },
    {
      "employer" : "Svensk Bevakningstjänst AB",
      "title" : "Operations Manager",
      "location" : "Stockholm, Sweden",
      "dates" : "2012-01 - 2014-11",
      "description" : "Managing the daily workload, educating new aswell as old recrutes, dealing with vacancies, job interviews, maintaining the departments main software, supporting the personel.",
      "url" : "https://nokas.com/"
    },
    {
      "employer" : "Svensk Bevakningstjänst AB",
      "title" : "Alarm Operator",
      "location" : "Stockholm, Sweden",
      "dates" : "2009-04 - 2012-01",
      "description" : "Receving and handling alarms and emergency phone calls.",
      "url" : "https://nokas.com/"
    }
  ],
  "display" : function(){
    // Global select variables
    var workExperienceDiv = $("#workExperience");

    // Go through jobs
    for(var i=0; i < work.jobs.length; i++) {
      // Create a new job entry
      workExperienceDiv.append(HTMLworkStart);

      // Local select variables
      var lastJob = $(".work-entry:last");

      // Replace variables
      var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      workEmployer = workEmployer.replace("#", work.jobs[i].url);
      var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var workDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var workLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var workDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

      // Render job
      lastJob.append(workEmployer + workTitle);
      lastJob.append(workDates);
      lastJob.append(workLocation);
      lastJob.append(workDescription);
    }
  }
};

var projects = {
  "projects" : [
    {
      "title" : "Udacity Online Resume",
      "dates" : "2016-10",
      "description" : "Create a online resume using HTML5, CSS5, JavaScript, and jQuery.",
      "images" : [
        "./images/logo-atom.io.svg",
        "./images/logo-html5.svg",
        "./images/logo-css3.svg",
        "./images/logo-git.svg",
        "./images/logo-javascript.svg",
        "./images/logo-jquery.svg",
        "./images/logo-bootstrap.svg",
        "./images/logo-illustrator.svg",
        "./images/logo-fonts.com.svg",
      ],
      "url" : "https://gjarnling.github.io/udacity-build-a-portfolio-site/"
    },
    {
      "title" : "Udacity Build a Portfolio Site",
      "dates" : "2016-10",
      "description" : "Build a portfolio and make it fully responsive, including images.",
      "images" : [
        "./images/logo-atom.io.svg",
        "./images/logo-html5.svg",
        "./images/logo-css3.svg",
        "./images/logo-git.svg",
        "./images/logo-npm.svg",
        "./images/logo-grunt.svg",
        "./images/logo-illustrator.svg",
        "./images/logo-typekit.svg"
      ],
      "url" : "https://gjarnling.github.io/udacity-build-a-portfolio-site/"
    },
    {
      "title" : "Udacity Animal Trading Cards",
      "dates" : "2016-10",
      "description" : "Recreate a design mockup using valid HTML5 and CSS3.",
      "images" : [
        "./images/logo-atom.io.svg",
        "./images/logo-html5.svg",
        "./images/logo-css3.svg",
        "./images/logo-git.svg"
      ],
      "url" : "https://gjarnling.github.io/udacity-animal-trading-cards/"
    },
    {
      "title" : "Udacity Mockup to Article",
      "dates" : "2016-10",
      "description" : "Turn a design mockup into a valid HTML5 document.",
      "images" : [
        "./images/logo-atom.io.svg",
        "./images/logo-html5.svg",
        "./images/logo-git.svg"
      ],
      "url" : "https://gjarnling.github.io/udacity-mockup-to-article/"
    },
    {
      "title" : "Camera Central for Humlegården Fastigheter AB",
      "dates" : "2014-11 - 2015-11",
      "description" : "Implementing and on a daily basis fine tuning a software camera platform used in the daily operations to perform survaillance of the customers properties. Also created a wikia wiki that used several external APIs like Google Drive.",
      "images" : [
        "./images/logo-html5.svg",
        "./images/logo-css3.svg",
        "./images/logo-wikia.svg"
      ],
      "url" : "https://www.mediawiki.org/"
    },
    {
      "title" : "Wikia for Svensk Bevakningstjänst AB's Alarm Central",
      "dates" : "2009-04 - 2014-11",
      "description" : "Implementing and maintaining a wikia wiki for Svensk Bevakningstjänst AB's Alarm Central. It included all relevant instructions that was needed in the daily operations but not necessary in the main software used to treat alarms.",
      "images" : [
        "./images/logo-html5.svg",
        "./images/logo-css3.svg",
        "./images/logo-wikia.svg"
      ],
      "url" : "https://www.mediawiki.org/"
    }
  ],
  "display" : function(){
    // Global select variables
    var projectsDiv = $("#projects");

    // Go through projects
    for(var i=0; i < projects.projects.length; i++) {
      // Create a new project entry
      projectsDiv.append(HTMLprojectStart);

      // Local select variables
      var lastProject = $(".project-entry:last");

      // Replace variables
      var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      projectTitle = projectTitle.replace("#", projects.projects[i].url);
      var projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      // Render project
      lastProject.append(projectTitle);
      lastProject.append(projectDates);
      lastProject.append(projectDescription);

      // Render image(s) if any found
      if(projects.projects[i].images.length > 0){
        for(var j=0; j < projects.projects[i].images.length; j++){
          var projectImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
          lastProject.append(projectImages);
        }
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);
