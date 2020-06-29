# Team Name: The Sinister Six

## Scrum Team
 - Morgan Hulsey (Scrum Master)
 - Lily Nguyen (Product Owner) 
 - Nitya Pandeti (Dev)
 - Bear Kruz (Dev)
 - Reema Amhaz (Dev)
 - Polina Ibragimova (Dev)
 
   ### Slack Channel: thesinistersix
 
 
## Product Iteration (Summer 2020)
* __Name:__ StellAR
* __Product Description:__ Interactive Spactial Platform that makes interstellar space easier to reach by providing education about space exploration through fun, and accessible, AR application
* __Far Vision:__ Create the next space generation by bringing outerspace closer to earth.
* __Product Iteration Near Vision:__ Space at the tip of your fingers 
<!--* __Key Architecture:__ 
  * Infrastructure: 
  * Languages: 
  * Backend Datasource: -->
  
  
## Stakeholder type examples:
1.  Senior Educational Outreach and STEM Engagement Specialist @ NASA
2.  Masters Student studying Unmanned Systems Technology
3.  Mother of child who is learning about space

## Real-life Stakeholder:
Jamarius Reid    (Masters Student studying Unmanned Systems Technology)

Here are more a in-depth profile of our Stakeholder.
User Persona for Real Stakeholder | Details
--- | ---
Stake Holder name | Jamarius Reid  ![Jamarium Reid](https://octodex.github.com/images/yaktocat.png)
Age | 25
Education | Embry-Riddle Aeronautical University, Master of Science in Unmanned Systems, Space Operations
Skill Level in Mobile Application Development | Intermediate
Experience in Software Engineering | Beginner
Knowledge level in Astronomy | Intermediate
Motivation/Goals for Product | My motivation to share this amongst my friend would be to gauge interests and also educate them on topics that they have interests in (i.e. make it more accessible, encourage more people to apply while sharing space topics).
Inconveniences | Not have an immediate resource to reference in conversation and(or) fact check my interpretation of space events.
Features | 1. When launching the app for the 1st time the user can select topics (i.e. genres) that interest them so that relevant information can populate their feed.<br/>2. The accessibility to search prevalent information. Could double as an encyclopedia for NASA or Space exploration and initiatives.
Personality traits | Extroverted, Intuitive, Feeling, and Judging 


## Backlog (Trello Board):
[Sinister-Six Backlog] (https://trello.com/b/bVw3Sfoo/the-sinister-six)
   ### Full Backlog
   Order | Backlog Item Type | Title
   --- | --- | ---
   1 | Research	Task | Which language will be used for app native
   2 | User Story | Setup Dev environment
   3 | User Story | Build filter  #1 in Spark AR
   4 | User Story | Mock up for interface with prototyping app
   5 | User Story | Interface CSS document for app background
   6 | User Story | Build fadditional filters in Spark AR
   7 | Research	Task | What is needed to setup AR
   8 | Research	Task | Research AR tools
   9 | User Story | Setup repository of space portals
   10 | Research	Task | How to randomize AR start points
   11 | User Story | Create homepage 
   12 | User Story | Create 1 AR world 
   13 | Research	Task | Research fact of the day API
   14 | User Story | Create data for fact of day 
   15 | User Story | Fact of the day push notification

   ### User Stories
   Order | Title | Opening Sentence | Details/Story | Acceptance Criteria (what you want this feature to accomplish) | Rationale for Order
   --- | --- | --- | --- |--- |---
   1 | Setup Dev environment | Make sure all members of the team have a working environment to create code and filters | The development environment needs to be fully accesible and fully resourced for all team members to effectively contribute towards development goals. | 1. Setup a separate environment for each team member <br/>2. Ensure everyone has VMWare setup on their individual laptops<br/>3. Install dependencies/packages<br/>4. Ensure everyone has Spark AR installed <br/>5. Setup IntelliJ inside the VM box<br/>6. Setup AR technology  | This will provide the foundation for us to code the application
   2 | Build filter  #1 in Spark AR | Create initial promotional material in the form of an AR instagram filter that can change space facts | We see enormous value in our final product - and want to ensure that it reaches an audience. As part of this understanding, we will build a variety of Instagram Filters in Spark AR - each acting as a well aligned AR gateway on social media that redirects people towards our App. These Filters will be fun, interactive and informative - and integrate static and live NASA data. | 1. Make sure the filter can be opened in Instagram<br/>2. Make sure the image that is part of your filter is saved when the photo is taken<br/>3. Make sure that the part of the filter that is supposed to be moving is functional | This will provide a mob coding opportunity for the team, and will act as promotional material for the final product
   3 | Mock up for interface with prototyping app | Create mock interface for testing the code that is in process | Map out UI and UX to ensure that all team members have a coherent and consistent vision of the expected final product. | 1. Program should compile and render in the test environment<br/>2. Has a basic outline of the application home page and AR world(s) pages<br/>3. Has a mechanism that can switch between the different pages of the app<br/>4. Has an icon design that displays the name of the app underneath | Build the basic template in which to build more features upon 
   4 | Interface CSS document for app background | Create interface where we will add the code for the AR later | Build a foundation for the App, whilst introducing team members to React Native and paired/mob programming. | 1. Basic CSS template with designated text font and color scheme<br/>2. Renders in the test environment<br/>3. Has a CSS page completed for each display page<br/>4. Has a section of CSS element designated for each react component | Build initial background as foundation for AR
   5 | Build additional filters in Spark AR | Create additional initial promotional material in the form of an AR instagram filter that can change space facts | One promotional filter is great - yet more promotional filters is better. To best engage with our target audience, we ought to build a variety of filters based on different space topics, each kept as exciting, interactive and informative as the last.  | 1. Each filter can be exported to Instagram<br/>2. Image renders in Instagram<br/>3. Image saves to the camera roll<br/>4. Image captures the face of user<br/>5. Movement is captured by the filter<br/>6. User can shuffle between different filter types | Continued effort for people with less coding experience on the team, and this will continue to build upon promotional material for the final product 
   6 | Setup repository of space artifacts | Building a foundation for future development of AR world via creating a repository of space objects | Through an engaging AR interface, our AR app informs everyday citizens of interesting and unknown space facts. To ensure that we build out AR worlds of 'space bodies' with the most valuable experiences for our end user, we must collect data, facts, graphics and other 3rd party resources. This repository will inform us of what we space bodies we know the most about - and what best assets we have, allowing us to determine the priority of  AR 'space bodies' to build. | 1. Structured container that is accessible by the app<br/>2. Contains and can handle various datatypes i.e. strings, gltf images, etc.<br/>3. Can be queried to render a set of information<br/>4. Is organized by type and categorized into sections based on functions that will be able to query it<br/>5. Can tag data (i.e. can be labeled by the kind of fact of it whether it be on stars, planets, or other astronomical bodies - then we can set a random selection for each day)<br/>6. Organizes into containers | Create a repository of space artifacts so that we can then create the AR world 
   7 | Create homepage | Create a homepage which the user can interact with and from where he or she can launch the AR | The homepage serves as the portal towards the AR worlds. It must be designed to facilitate an enjoyable entry within one AR world, with the possibility of having multiple AR world portals added to the project. | 1. Landing page compiles and renders in the test environment<br/>2. Has several buttons that the user can select to enter the AR portal(s)<br/>3. Responds to selection event<br/>4. Can be returned to after user is done with the AR page<br/>5. visually appealing and simple | This will act as the launch point for the customer into the AR world
   8 | Create 1 AR world | Create an AR world where the user can interact with planets to get interesting facts about them and later base other simmilar AR worlds on the intial one | The AR world is the heart of stellAR - where everyday citizens can explore interesting space objects that when engaged with reveal informative information and 3rd party resources. It must be visually stimulating, accessible, fun and enjoyable. | 1. Compiles and renders in the test environment<br/>2. Has a name/theme<br/>3. Has a basic space background<br/>4. Contains 3d gltf images of multiple astronomical bodies<br/>5. Has points/buttons on each body where facts are rendered when clicked on<br/>6. Has ability to zoom in/out and roam around the body<br/>7. Any external media that the points contain can successfully redirect to desired location<br/>8. Has a button to return to home page<br/>9. Has the ability to move between different bodies<br/>10. Each AR world should have a specific theme | Initial model for the first AR  world 
   9 | Create database for fact of day | Create a database from where interesting facts about space can be pulled up | To drive long-term engagement with our product, we aim to stimulate our app downloaders with captivating facts-of-the-day. This data needs to be collected, built into a static database, and cleaned to be ready for access by a push notification API. | 1. Is a structured database that is accessible by the app<br/>2. Contains strings<br/>3. Can be queried to render a set of information randomly<br/>4. Organized by type and categorized into sections based on functions that will be able to query it<br/>5. Can tag data (i.e. can be labeled by the kind of fact of it whether it be on stars, planets, or other astronomical bodies - then we can set a random selection for each day) <br/>6. Is organized into tables | This database will provide the foundation of information to be gathered in order to make the push notification functional
   10 | Fact of the day push notification | Make sure the user gets push nostifications with interesting facts about the space from the database, hence maintaining user interaction with the application daily | To deliver the fact-of-the-day, we must integrate our database of facts with a push-notification API that seamlessly delivers captivating information to our end users. | 1. Renders in the test environment<br/>2. Contains short string of a space fact<br/>3. Is randomly generated<br/>4. Appears in the notifications section on the device<br/>5. Contains name and icon of the app<br/>6. Notification is sent at a particular time each day<br/>7. User can opt out | Implement final feature for customer engagement
