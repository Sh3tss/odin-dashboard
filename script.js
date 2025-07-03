document.addEventListener('DOMContentLoaded', () => {
  //side bar buttons
  const home = document.getElementById('home');
  const profile = document.getElementById('profile');
  const message = document.getElementById('messages');
  const history = document.getElementById('history');
  const tasks = document.getElementById('tasks');
  const communities = document.getElementById('communities');
  const settings = document.getElementById('settings');
  const support = document.getElementById('support');
  const privacy = document.getElementById('privacy');
  
  //top buttons
  const newbtn = document.getElementById('new');
  const upload = document.getElementById('upload');
  const share = document.getElementById('share');
  
  //project action when clicked
  const projitem = document.querySelectorAll('.projitem');
  const projicon = document.querySelectorAll('.imgproj');
  
  //annoucements action when clicked
  const annoucitem = document.querySelectorAll('.annoucitem');
  
  //trending action when clicked
  const trenditem = document.querySelectorAll('.trenditem');
  
  //functions to display a alert message showing what should happen when click
  //sidebar buttons
  home.addEventListener('click', event => {
    alert("Sorry, this button would lead you back to the Homepage but it's just a test website. Maybe later i put some new pages to click and go through");
  });
  profile.addEventListener('click', event => {
    alert("Sorry, this button would lead you to the Profile page but it's just a test website. Maybe later i put some new pages to click and go through");
  });
  message.addEventListener('click', event => {
    alert("Sorry, this button would lead you to the Messages page but it's just a test website. Maybe later i put some new pages to click and go through");
  });
  history.addEventListener('click', event => {
    alert("Sorry, this button would lead you to the History page but it's just a test website. Maybe later i put some new pages to click and go through");
  });
  tasks.addEventListener('click', event => {
    alert("Sorry, this button would lead you to the Tasks page but it's just a test website. Maybe later i put some new pages to click and go through");
  });
  communities.addEventListener('click', event => {
    alert("Sorry, this button would lead you to the Communities page but it's just a test website. Maybe later i put some new pages to click and go through");
  });
  settings.addEventListener('click', event => {
    alert("Sorry, this button would lead you to the Settings page but it's just a test website. Maybe later i put some new pages to click and go through");
  });
  support.addEventListener('click', event => {
    alert("Sorry, this button would lead you to the Support page but it's just a test website. Maybe later i put some new pages to click and go through");
  });
  privacy.addEventListener('click', event => {
    alert("Imagine here some awesome privacy settings, and some terms to accept.");
  });
  
  //top buttons
  newbtn.addEventListener('click', event => {
    alert("With this button you would create a new space in your projects tab, to put the title and write about what this project is about.");
  });
  upload.addEventListener('click', event => {
    alert("With this one you could upload an archive with the files of your program.");
  });
  share.addEventListener('click', event => {
    alert("Here you could share what you've done, image as a CodePen website where you can write, upload and after that share your brand new project.");
  });
  
  //each of the project items when clicked
  projitem.forEach(item => {
    item.addEventListener('click', () => {
      alert("Clicking here would send you to the project, reload the page showing the full screen page to edit and do some others things");
    })
  })
  
  //each of the icons in the project tab when clicked
  projicon.forEach(item => {
    item.addEventListener('click', () => {
      alert("Clicking here would do some actions, like favorite, mark as visualized and share this project with someone");
    })
  })
  
  //each of the annoucements items when clicked
  annoucitem.forEach(item => {
    item.addEventListener('click', () => {
      alert("Clicking here would send you to the new updates about community, maintenance and the terms or maybe some others updates about the projects.");
    })
  })
  //each of the trending items when clicked
  trenditem.forEach(item => {
    item.addEventListener('click', () => {
      alert("Clicking here would send you to the new trends of the community, to see the profile, projects and what that user is posting on your website.");
    })
  })
});
