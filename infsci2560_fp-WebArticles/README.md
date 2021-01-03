## Final Project - CRUD Application

A blogging website that allows users to signup, login in, post/update/delete articles and comments.

Tools: Express.js, Passport.js, EJS (Embedded JavaScript), Bootstrap, and MongoDB Atlas

_P.S. We don't own any photos of this website. They are resources from the Internet._

# View Here -> [https://infsci2560-fp-webarticles.herokuapp.com/](https://infsci2560-fp-webarticles.herokuapp.com/)

## Introduction

_(Introduce the team and provide a high level description of the project. Be sure to include full names and Pitt IDs.)_

Team members:

- Alhanouf Alqahtani (Hanno) - Pitt ID: 4392341 - email: Ala184@pitt.edu
- Chuanlu Chen (Lulu)- Pitt ID: 4342604 - email: Chc303@pitt.edu
- Yen-Ming Chen (Ellee)- Pitt ID: 4371814- email: Yec24@pitt.edu
- Jiaxiang Leng (Jiaxiang)- Pitt ID:4292906 - email: Jil252@pitt.edu

Our project is a blog web application for free articles that is called WebArticle. The user can explore
the blog and view the posts/comments. However, if the user wants to post or comment on a post, the user should register first and create a profile. Also, there is an Admin view which is like the manager of the blog that he can edit and delete any users' posts.

## Objective

_(Describe with more specific details what your objectives and goals are for the project. What problems did you want to solve or what did you want to learn in developing this application? What features, beyond the ones listed in the assignment requirements, did you implement?)_

Each of us has experienced searching for an article, but getting free articles is not easy sometimes.
Thus, we decided to create WebArticle blog to handle this problem, so people can view and share free articles and have conversations about them.

Also, learning how to create a Blog as a part of social media is essential because most people rely on social platforms to get the information they need. So, we want to learn the skills and the requirement for creating a social sharing network.

One of the features we implemented beyond the ones listed is google API to show the location of the user when he posts an article or makes a comment. We also
made this feature to be optional for the user if he wants to share the location or not for privacy concerns.

## Team member’s contributions

_(Describe in detail what each member of the team did on the project.)_

- Schemas

  - Blog: _models/blog.js_ -> Lulu
  - Comment: _models/comment.js_ -> Ellee
  - User: _models/user.js_ -> Jiaxiang

- Routes

  - Server: _server.js_ -> Hanno & Jiaxiang
  - Middleware: _middleware/index.js_ -> Hanno
  - Blog: _routes/blog.js_ -> Lulu
  - Comment: _routes/comment.js_ -> Ellee
  - Index: _routes/index.js_ -> Hanno
  - User: _routes/user.js_ -> Jiaxiang

- Views

  - Homepage (cover): _landing.ejs_ -> Hanno
  - Login: _login.ejs_ -> Hanno
  - Sign up: _register.ejs_ -> Hanno
  - User/Admin: _userHome.ejs_ & _adminHome.ejs_ -> Jiaxiang
  - Blogs: _allBlog.ejs_ & _editBlog.ejs_ & _newBlog.ejs_ & _oneBlog.ejs_ & _searchBlog.ejs_ -> Lulu
  - Comment (within one blog): _oneBlog.ejs_ -> Ellee

## Technical Architecture

_(What are the libraries, frameworks, and other technologies you used and how did you put them together. Use the MVC conceptual model to provide a guide (i.e. what are the models/views/controllers and what do they do).)_

- Libraries

  - Front-end:

    - Boostrap
    - css
    - ejs template
    - HTML5
    - Responsive Design
    - Javascript

  - Back-end:

    - Mongoose DB
    - Passport Authentication

- Frameworks

  - Express + Node.js

- Other technologies

  - Google Maps API

- MVC conceptual model:

  - Models

    - Our application runs with collections in database. We use mongoose to connect the application with MongoDB atlas. Every model in the database represent respective schema in the database.

  - Views

    - Using EJS template we are displaying our application and simultaneously transferring data to our database depending upon the functions. We also used bootstrap and CSS for our view architecture.

  - Controllers

    - We have created multiple and specific routes for various pages in our application. Various control functionalities have been implemented in the entire project.

## Challenges

_(Discuss any challenges you faced in trying to develop this app. Were there libraries or technologies you wanted to use but we’re frustrating? Where there features you couldn’t get working?)_

- Difficulties when using libraries/technologies:

  When using a bootstrap modal, even if it's inside a for loop, we still need to specify the corresponding id so the submit button of the form inside each modal knows where to point to. Otherwise, it'll always point to the first iteration.

  We spent a lot of time dealing with Google Map API. Intially, although we checked our code back and forth and tried different API keys, it only worked for one of our team member. Finally, it turns out that most of our team member did not turn on the location service in our browsers. It is not a tricky problem, but something we need to keep in mind.

- Features that couldn’t get to work:

  We use a fake button to trick form submission, but in the meanwhile, trigger Google API. It works fine with creating a new blog. However, for the comment section, since we have 2 forms (create & edit) in the same ejs file, the whole "fake button" mechanism couldn't work. The ejs just don't know which form a user is submitting.

## Future Work

_(What features would you like to add to your application? If you had more time what technologies would you like to learn?)_

- We hope to offer rich text editor and file upload function. If so, we need to incorporate some third-party tools or packages, such as Multer.

- Users might leave comments in the same time in the same blog. Yet, ejs doesn't provide dynamic response. One of the ways to do it is by using React.js.

- Image can be uploaded locally instead of typing the image url address.

## Conclusion

_(Reflect upon the web technologies and standards you learned in this course, did you learn what you wanted? What technologies or standards do you think would be useful in future iterations of this course?)_

NFSCI 2560 is an excellent class for us. We have learned the concepts, architecture, and the developing cycle of web applications, which is extremely useful to our future career.
Now we have a clearer picture of both front-end and back-end development.
For the front-end, we gain useful skills to design the interface with three primary standards - HTML, CSS, and javascript.
For the back-end, we have a more profound knowledge of server development with the express and Node.js frameworks and MongoDB.
Besides, this final project provides us an excellent chance to experience collaborative web development. Also, we have learned how to build a website from scratch. What we have learned and applied this semester is a perfect start for future work.

## Documentation

_(List any resources that you used in creating this project.)_

1. https://www.w3schools.com/default.asp

2. https://getbootstrap.com/docs/4.0/getting-started/introduction/

==========================================================

(Include any specific instructions for testing the functionality of your application.)

you can test our blog by creating an account or by using these usernames examples:

- admin:

  - admin_username=admin
  - admin_password=admin

- user:
  - test_username=test
  - test_password=123
