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
* __Product Description:__ Interactive Spatial Platform that makes interstellar space easier to reach by providing education about space exploration through a fun and accessible AR application.
* __Far Vision:__ Create the next space generation by bringing outerspace closer to earth.
* __Product Iteration Near Vision:__ Space at the tip of your fingers.
<!--* __Key Architecture:__ 
  * Infrastructure: 
  * Languages: 
  * Backend Datasource: -->
  
  
## Stakeholder type examples:
1.  Senior Educational Outreach and STEM Engagement Specialist @ NASA
2.  Masters Student studying Unmanned Systems Technology
3.  Mother of child who is learning about space

## Real-life Stakeholders:
Jamarius Reid    (Masters Student studying Unmanned Systems Technology)

Here are more a in-depth profile of our Stakeholder.
User Persona for Real Stakeholder | Details
--- | ---
Stake Holder name | Jamarius Reid  ![Jamarius Reid](JamariusReid.jpeg)
Age | 25
Education | Embry-Riddle Aeronautical University, Master of Science in Unmanned Systems, Space Operations
Skill Level in Mobile Application Development | Intermediate
Experience in Software Engineering | Beginner
Knowledge level in Astronomy | Intermediate
Motivation/Goals for Product | My motivation to share this amongst my friend would be to gauge interests and also educate them on topics that they have interests in (i.e. make it more accessible, encourage more people to apply while sharing space topics).
Inconveniences | Not have an immediate resource to reference in conversation and(or) fact check my interpretation of space events.
Features | 1. When launching the app for the 1st time the user can select topics (i.e. genres) that interest them so that relevant information can populate their feed.<br/>2. The accessibility to search prevalent information. Could double as an encyclopedia for NASA or Space exploration and initiatives.
Personality traits | Extroverted, Intuitive, Feeling, and Judging 

Jimmy Acevedo    (Senior Educational Outreach and STEM Engagement Specialist @ NASA)

User Persona for Real Stakeholder #2 | Details
--- | ---
Stake Holder name | Jimmy Acevedo ![Jimmy Acevedo](https://ibb.co/jMKXf4v)
Age | 35
Role | Senior Educational Outreach and STEM Engagement Specialist @ NASA
Skill Level in Mobile Application Development | Low
Knowledge level in Astronomy | Intermediate/High
Motivation/Goals for Product |  Increased accessibility and excitement with space exploration
Inconveniences | Lack of usable AR interfaces (Snapchat etc. have high barriers to entry)
Features | 1. Easy content-management system for pushing out fresh information. 2. ‘Hot topics’ temporary way to feature content relevant to current events, e.g. optical communications facts near LCRD launch.
Personality traits | Resourceful, Creative, Empathetic, Impulsive, Playful

## Definition of Ready:
1. Item has a title, description, user story, is estimated, has a defined acceptance criteria  
2. External and internal dependencies are resolved 
3. Meets INVEST criteria 
4. All resources are available: funding, people, skills, servers, etc. 
5. Stakeholders have been interviewed

## Definition of Done:
1. All acceptance criteria has been met
2. No regressions 
3. All unit and automated tests pass which cover acceptance criteria
4. Product owner accepts the story
5. Customer is satisfied (post-demo approval)
6. Code is peer-reviewed
7. No code bugs
8. Code coverage is as good as or better than last commit 
9. Performance is as good as or better than previous deployment 
10. No new technical debt
11. All code was pair/mob programmed


## Backlog (Trello Board):
[Sinister-Six Backlog] (https://trello.com/b/bVw3Sfoo/the-sinister-six)

   ### User Stories
   Order | Title | Opening Sentence | Estimated Story Points | Details/Story | Acceptance Criteria (what you want this feature to accomplish) | Rationale for Order
   --- | --- | --- | --- |--- |--- | ---
  1 | Build filter  #1 in Spark AR | Create initial promotional material in the form of an AR instagram filter that can change space facts | 3 | We see enormous value in our final product - and want to ensure that it reaches an audience. As part of this understanding, we will build a variety of Instagram Filters in Spark AR - each acting as a well aligned AR gateway on social media that redirects people towards our App. These Filters will be fun, interactive and informative - and integrate static and live NASA data. | 1. Make sure the filter can be opened in Instagram<br/>2. Make sure the image that is part of your filter is saved when the photo is taken<br/>3. Make sure that the part of the filter that is supposed to be moving is functional | This will provide a mob coding opportunity for the team, and will act as promotional material for the final product
  2 | Build foundational mobile application | Build friendly user interface for application | 5 | Build the program that compiles the basic outline of the application with a home page and AR world(s) pages, has a mechanism that can switch between the different pages of the app & icon design that displays the name of the app underneath. | 1. Figure out which language will be used for app native<br/>2. Setup Dev environment<br/>3. Setup a separate environment for each team member<br/>4. Ensure everyone has VMWare setup on their individual laptops<br/>5. Install dependencies/packages<br/>6. Ensure everyone has Spark AR<br/>7. Setup IntelliJ inside the VM box<br/>8. Setup AR technology<br/>9. Program should compile and render in the test environment<br/>10. Has a basic outline of the application home page and AR world(s) pages<br/>11. Has a mechanism that can switch between the different pages of the app<br/>12. Has an icon design that displays the name of the app underneath | Mobile application will be the home of the filter(s), and the foundation for the users to access the StellAR platform. Application base needs to be setup in order to build other functionality
  3 | Create interactive homepage | Create a homepage which the user can interact with and from where he or she can launch the AR | 3 | The homepage serves as the portal towards the AR worlds. It must be designed to facilitate an enjoyable entry within one AR world, with the possibility of having multiple AR world portals added to the App. | 1. Landing page compiles and renders in the test environment<br/>2. Has several buttons that the user can select to enter the AR portal(s)<br/>3. Responds to selection event<br/>4. Can return to homepage after user is done with the AR page<br/>5. Is visually appealing and simple | Need to add this next, so there is a launch point for the customer into the AR world
  4 | Build additional filters in Spark AR | Create additional initial promotional material in the form of an AR instagram filter that can change space facts | 3 | One promotional filter is great - yet more promotional filters is better. To best engage with our target audience, we ought to build a variety of filters based on different space topics, each kept as exciting, interactive and informative as the last. | 1. Each filter can be exported to Instagram<br/>2. Image renders in Instagram and saves to the camera roll<br/>3. Captures the face of user<br/>4. Movement is captured by the filter<br/>5. Can shuffle between different filter types | Continued effort for people with less coding experience on the team, and this will continue to build upon promotional material for the final product
  5 | Create 1 AR world | Users can interact with planets to get interesting facts about them and later base other simmilar AR worlds on the intial one | 13 | The AR world is the heart of stellAR - where everyday citizens can explore interesting space objects that when engaged with reveal informative information and 3rd party resources. It must be visually stimulating, accessible, fun and enjoyable. | 1. Compiles and renders in the test environment<br/>2. Has a name/theme<br/>3. Has a basic space background<br/>4. Contains 3d gltf images of multiple astronomical bodies<br/>5. Has buttons on each body where facts are rendered when clicked on<br/>6. Has the ability to roam around the body and space<br/>7. Successfully redirect to external sources<br/>8. Has button to return to home page<br/>9. Each AR world should have a specific theme<br/>10. Has a basic CSS template with designated text font and color scheme for each display page and each react component<br/>11. Research AR tools<br/>12. Research what is needed to setup AR<br/>13. Setup repository of space portals<br/>14. Have an app-accessible structured repository that contains datatypes i.e. strings, gltf images, etc. | Since have a built environment, we need to add Initial model for the first AR  world
  6 | Build more outerspace user experiences | Reinvent, and reinvigorate, your 'space body' with the advanced outerspace experiences | 20 | One AR wold is great. More AR worlds is better. To captivate the end user, we ought to build out a variety of AR worlds, each accessed at random when entering the application. | 1. Create 2 more AR worlds.<br/>2. Compiles and renders in the test environment<br/>3. Has a name/theme<br/>4. Has a basic space background<br/>5. Contains 3d gltf images of multiple astronomical bodies<br/>6. Has buttons on each body where facts are rendered when clicked on<br/>7. Has ability to roam around the body and space<br/>8. Successfully redirect to external sources<br/>9. Has button to return to home page<br/>10. Should be different from AR world #1<br/>11. Has a basic CSS template with designated text font and color scheme for each display page and each react component | Since we already have 1 AR world, we now have the experience of creating 1 AR world, we can create 2 more.
  7 | Impliment Responsive Mobile App Design | Different device, same great experience | 3 | Some smartphones feature screens almost as big as a small tablet. The iPhone XS Max, for instance, features a 5.8″ screen, less than 1.5″ smaller than the smallest consumer-grade tablets. We aim to incorporate responsive app design into your mobile app development so that all of these users receive a stellar design experience. | 1. Renders in test environment<br/>2. Adjusts CSS styling/components based on dimensions<br/>3. Can fit most common screen dimensions<br/>4. Adjusts properly to change from landscape to vertical mode. | Initial AR world is now implements, need to make sure that users across multiple device platforms can use this app properly
  8 | Impliment a 'Fact of the day' push notification | Stay up to date and informed on interesting space related information | 5 | To drive long-term engagement with our product, we aim to stimulate our app downloaders with captivating facts-of-the-day.  This data needs to be collected, built into a static database, and cleaned to be ready for access by a push notification API. | 1. Research fact of the day API<br/>2. Renders in the test environment<br/>3. Contains short string of a space fact<br/>4. Is randomly generated<br/>5. Appears in the notifications section on the device<br/>6. Contains name and icon of the app<br/>7. Notification is sent at a particular time each day<br/>8. User can opt out<br/>9. Fact is based off of a app-accessible structured database that contains data can be queried to render a set of information randomly | Done with main funtionality, this offers another medium for learning. Adding next interactive functionality
  9 | Impliment a Search feature | Give your mobile app users a handy search bar so that they can find the content they need quickly. | 8 | Lots of content makes for great mobile app design, but all that content quickly becomes cumbersome and unusable if it isn’t made easily accessible to the mobile user. Most top-tier apps feature a dedicated search function to allow users to locate content that contains the keywords and key phrases relevant to what they need. This helps keep the mobile app convenient and accessible. | 1. Renders in the test environment<br/>2. Accepts search query<br/>3. Button to execute search<br/>4. Connects to database of information<br/>5. Can search all information in app | The search bar is an extraneous feature that will connect to a different backend and will be released with later versions of the app for more learning opportunities.
  10 | Allow for Compelling User Feedback | Giving users the ability to provide instant feedback is gratifying and eliminates lots of calls to the tech support department. | 3 | Allowing users to give you feedback definitely gives you and your team of mobile app developers a helpful insight into what you need to add, eliminate, and change. But it does more than that. Giving the users the ability to provide immediate feedback lets them vent their frustrations (and with a working app, there are always frustrations), meaning your mobile agency tech support staff has to field fewer angry phone calls. Win-win. | 1. Page that compiles and renders in the test environment<br/>2. Has form section where the user can enter name and feedback/rating<br/>3. Has submit button<br/>4. feedback/rating is actually saved and sent to developers<br/>5. Set up developer email that will take catalog user feedback. | One of the last 2 user feedback stories, we need users to be able to give dev team first before giving feedback to each other
  11 | Add an FAQ page | This feature will allow people of all ages to better understand how to interact and use the application to better experience outer space. | 2 | AR is enroute to becoming a mainstream technology. It is however still a technology foreign to many, and an FAQ page available within the app will allow users to best understand how to navigate and draw value from resources within our AR interface. | 1. 5+ common questions and answers are listed<br/>2. Answers are collapse-able underneath each question<br/>3. The page is easy to find within the app<br/>4. A button exists to contact support for more information<br/>5. Has button to get back to homepage. | This is a desirable - yet not critical feature. As it serves only to optimise the UX, we have placed it last within our initial Product Backlog.



## Story Point Estimating session
6/30/2020 - Everyone was involved. Lily presented the story in planningpoker.com and everyone in the dev team votes and came to a consensus on the story points for each story. 
![Story Pointing session](PlanningPokerSession.png)
