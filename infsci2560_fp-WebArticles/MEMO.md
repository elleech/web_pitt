# Plan

1. What kind of website do you want to build?

   A blog where owners (admins) can post articles and visitors can interact with owners via posting comments under articles.

2. What features will it have?

   - Log-in function for visitors an admins, sign-up function for visitors (or maybe admins?)
   - Profile page : user can add an image, name, and contact information.
   - Search box : search for specific article
   - Categories: list of article categories
   - Posts page: (contains random posts)

3. What kind of data will users C.R.U.D.?

   Two types of users: **admin** and **visitor**

   - Admin:

     - view, post, edit and delete articles.
     - view all user profiles. Edit its own user profile.
     - view, post comments under articles, edit its own comment, delete all comments.

   - Visitor:
     - view articles.
     - edit its own user profile.
     - view, post comments under articles, edit its own comment.

# Memo

- endpoints:

  - homepage (cover) -> **https://teamno1-project.glitch.me/** -> landing.ejs -> Alhanouf
  - login -> **~/login** -> login.ejs -> Alhanouf
  - sign up -> **~/register** -> register.ejs -> Alhanouf
  - user/admin page -> **~/user** ->  Jiaxiang
  - blog -> **~/blogs** -> Lulu
  - a specific blog -> **~/blogs/:bid** -> Lulu

  - comment within blog page -> yec24
    - add comment to a specific blog -> **~/blogs/:bid/comments/**
    - edit comment to a specific blog -> **~/blogs/:bid/comments/:cid/edit**
    - delete comment to a specific blog -> **~/blogs/:bid/comments/:cid/delete**

* image: upload picture or use url? -> use url first then we'll see what we can be improved later on
* endpoints:

  === index ===

  read -> GET

  /login -> GET & POST

  /signup -> GET & POST

  === user ===

  update?

  === blog ===

  create profile -> POST

  modify profile -> PUT

  create article -> POST

  modify article by id -> PUT

  delete article by id -> DELETE

  === comment ===

  create comment -> POST

  modify comment by id -> PUT

  delete comment by id -> DELETE
