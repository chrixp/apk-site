import React from 'react'
import Banner from '@design/Banner'
import Container from '@design/Container'
import H2 from '@design/H2'
import RiderCard from '@images/rider-card.png'
import RiderOne from '@images/rider-1.png'
import RiderTwo from '@images/rider-2.png'
import RiderThree from '@images/rider-3.png'
import RiderFour from '@images/rider-4.png'
import RiderFive from '@images/rider-5.png'
import RiderSix from '@images/rider-6.png'
import RiderSeven from '@images/rider-7.png'
import RiderIdea from '@images/rider-ideation.png'


const Rider = () => {
    window.scrollTo(0,0)
    return (
        <div>
            <Banner pic={RiderCard} />
            <Container color="black">
                <h1 className="design-h1">Transloc Rider</h1>
                <p className="design-h1-desc">Designing a simpler, faster transit system around campus</p>
                <span className="design-info">Duration: 2 weeks</span>
                <span className="design-info">Type: Individual project</span>
            </Container>
            <Container color="white">
                <H2 top="OVERVIEW" bottom="Context" />
                <p className="design-para">TransLoc Rider is a mobile application that allows users to track transit systems. In this redesign, I will primarily be looking at the college transit service that TransLoc provides at the University of Connecticut. My goal for this redesign is to apply Neilsen’s heuristics to critique the user interface designs and functionality of the application in order to improve user experience. Even though Rider is an innovative application, there are definite issues that should be addressed specifically involving the complexity, efficiency and usability of the application.</p>
            </Container>
            <Container color="black">
                <H2 top="USER RESEARCH" bottom="Understanding the users" />
                <h3 className="design-h3">Competitive analysis</h3>
                <p className="design-para">Studying Uber and Transit helped to focus efforts in a target market and analyse where Rider stands in the market.
                <br />• Transit is a real-time transit tracking application.
                <br />• Transit App features: Automated search, real time updates, minimalist and comprehensible UI, online schedule/more departures, bus stops list.
                <br />• Uber is a ride-hailing service that allows users to find rides from nearby drivers.
                <br />• Uber app: automated search, real time updates, clear UI, efficient departure and dropoff times, home address, clear iconography. I noticed that there were many features in the Uber app and in the Transit app that can not only inspire solutions to the issues Rider had but also be helpful to better Rider.</p>
                <h3 className="design-h3">User Profile</h3>
                <p className="design-para">By conducting surveys using open-ended questions, I was able to gain an in-depth understanding of the users’ frustrations, demographics and journeys. 
                    <br />Some questions asked were:
                    <br />• Why do you use Rider?
                    <br />• How would you describe your experience with Rider?
                    <br />• What do you use Rider for?
                    <br />• What aspect of this experience would you like to change?
                    <br />• How often do you use Rider?
                    <br />• How important is the favorite feature on the application?
                </p>
                <p className="design-para">
                Target Demographic College Students and Faculty/Staff
                <br />• 18-60 years old
                <br />• Has potential to be used by other age groups and demographics such as parents and other adults/elderly visiting their children or coming to see sport games and other events on campus
                <br />• Needs to get from one place to another from the closest bus stop through the fastest bus route to the destination.
                <br />• Wishes to walk minimum amount of time
                <br />• User is on the UConn Storrs Campus to take the HuskyGo buses
                </p>
                <p className="design-para">
After conducting surveys and creating a user profile, the majority of the responses suggested that the ambiguity of the interface makes the application time-consuming and difficult to use. Using thematic analysis, the four main issue groups were the absence of automated results, uncommon and confusing icons, insufficient onboarding information and inadequacy of customizability.</p>
                <h3 className="design-h3">Usability Evaluation:</h3>
                <p className="design-para">
                To evaluate the usability of the Rider application, I used heuristic evaluation. I analysed the application by performing three pre-identified tasks and writing down any usability problems faced while making sure these observations were detailed and meticulous. While thinking from a user’s perspective, I recognized pain points, scored severity and ideated solutions. The three tasks were:
<br />1. Seaching and selecting a bus route
<br />2. Setting a timer notification
<br />3. Using the favorite feature
                </p>
            </Container>
            <Container color="white">
                <H2 top="HEURISTICS" bottom="Evaluation findings" />
                <p className="design-para">Most of the confusion was due to the absence of an onboarding process.The application was complicated and caused users to rely on self-instruction to navigate the application. The iconography was also difficult to interpret as they were uncommon and did not have any labels to clarify the vagueness.</p>
                <h3 className="design-h3 gray">Task 1: Searching and selecting a bus route to travel</h3>
                <p className="design-span bold">a) Lack of automated result</p>
                <p className="design-para"><b>Severity</b>: 4
                <br /><b>Heuristic</b>: Recognition rather than recall, Flexibility and efficiency of us
                <br /><b>Description</b>: Performing task one was extremely time consuming and difficult especially for novice users. When a user wishes to select a bus route to travel from current location to desired destination, the user has to manually click on the available bus routes to find the user’s desired location. Further, the application does not have a search option to look for destinations which causes the user to recursively search through the list of bus routes that stop at the desired destination. Due to the lack of automated results, users must manually search through the numerous bus lines and stops to figure out which buses can take them from their current location to their desired destination. Users must not only calculate the bus stop closest to them but also which bus lines stop at their nearest bus stop. This causes frustration and a sense of overwhelm especially in cases when the user is a novice user or in a hurry to go somewhere.</p>
                <br />
                <p className="design-span bold">b) Ambiguous Icons</p>
                <p className="design-para"><b>Severity</b>: 2
<br /><b>Heuristic</b>: Consistency and standards, Recognition rather than recall
<br /><b>Description</b>: Since the bus travelling icon is the same as the current location icon, it creates confusion within the user. Users would have to remember that the icon that moves is the bus and not the current location icon. Further, the bus stop icon used in the menu bar differs from the one on the map. When the user clicks on the bus stop icon on the map, it transforms into the icon used in the menu bar.</p>
                <img className="center-mg max-width-100" alt="Rider 1" src={RiderOne} />
                <h3 className="design-h3 gray">Task 2: Setting a timer notification</h3>
                <p className="design-span bold">a) Limits customization</p>
                <p className="design-para"><b>Severity:</b> 2
                <br /><b>Heuristic evaluation</b>: Flexibility and efficiency of use
                <br /><b>Description</b>: When setting a reminder, users are only given the option of times that are in 5 minute intervals. Although this gives the user an opportunity to save time by setting a notification, the user is not given the liberty to customize the amount of time that they would like to be notified. This affected the ease of use, satisfaction of the user and time efficiency negatively.</p>
                <img className="center-mg max-width-100" alt="Rider 1" src={RiderTwo} />
                <h3 className="design-h3 gray">Task 3: Using the favorite feature</h3>
                <p className="design-span bold">a) Insufficient information regarding the favorite feature.</p>
                <p className="design-para"><b>Severity: 3</b>
                <br /><b>Heuristic evaluation</b>: Help and Documentation
                <br /><b>Description: </b>The favorite feature has a lot of scope for improvement. Due to the lack of clarity, users may have to wander through the application to figure out how to use it. When users clicked on the heart icon in the menu bar, they were met with a message saying “Hi, looks like you don’t have any favorites yet. Tap on a heart and give it a try!”. These instructions do not provide what this feature is used for, more specifically what can be favorited: bus line or bus stop, and where the heart can be found.</p>
                <p className="design-span bold">b) Icon ambiguity</p>
                <p className="design-para"><b>Severity</b>: 3
                <br /><b>Heuristic evaluation</b>: Consistency and Standards, Error prevention
                <br /><b>Description</b>: While some users may be unsure which heart the instructions were referring to, other users may struggle to find the heart. Since the heart is a very small icon, it emphasised the ambiguity of whether the heart was an indicator or a clickable button. Additionally, there are other icons surrounding the small heart icon making it easy for users to accidently click the other icons. Overall, the favorite feature needs to be better.</p>
                <img className="center-mg max-width-100" alt="Rider 1" src={RiderThree} />
            </Container>
            <Container color="black">
                <H2 top="EXPLORATION" bottom="Ideation" />
                <img className="center-mg max-width-100" alt="Rider 1" src={RiderIdea} />
            </Container>
            <Container color="white">
                <H2 top="DESIGN" bottom="To Figma we go!" />
                <h3 className="design-h3">Organization</h3>
                <p className="design-para">With further inspection, I noticed that the settings tab consisted of a bunch of miscellaneous actions along with actual setting actions. The navigation bar restricted the design to four actions resulting in various other actions being grouped in the settings tab. Transforming the navigation bar into a menu allows for the grouping of more actions in an organized manner and is easier to understand as there are symbols along with the titles.
</p>
                <img className="center-mg max-width-100" alt="Rider 1" src={RiderFour} />
                <h3 className="design-h3">Consistent and clear iconography</h3>
                <p className="design-para">To make the application clearer, new and improved iconography is needed. I noticed that there were two inconsistent icons: bus stop and current location. By implementing improved icons for the bus stop icon and current location, the application will become more consistent and clear. Furthermore, adding relevant symbols to the menu options helps users to visually interpret actions as well.</p>
                
                <h3 className="design-h3">Lack of automated result</h3>
                <p className="design-para">By implementing an automated result function the user is provided the nearest bus stop to the user’s destination when the user searches for their desired destination. This reduces time, makes the interaction faster and builds trust between the system and user. It eliminates the painful manual search making the process of finding transits much more efficient.</p>
                <p className="design-para">To make this even more convenient, the transfer feature allows users to choose various routes with or without a transfer option. A transfer route is a route that has one or more bus transfers. There may be times when the user would like to go to a particular destination that does not have a direct route. It may require the user to either walk for a while or hop on an additional bus line to get to the desired location. This provides users with the option to choose the most suitable route for their trip.</p>
                <img className="center-mg max-width-100" alt="Rider 1" src={RiderFive} />
                <h3 className="design-h3">Bus routes directory</h3>
                <p className="design-para">By adding a bus routes feature, it provides the user with necessary information such as the bus stops a particular bus line makes and the route the bus travels in. Users can leisurely view this list by clicking on the bus routes feature in the menu bar or by simply clicking on the icon of a bus line.</p>
                <img className="center-mg max-width-100" alt="Rider 1" src={RiderSix} />
                <h3 className="design-h3">Notification feature</h3>
                <p className="design-para">The notification feature was redesigned to give the user more control and freedom. This feature enables the user to select a specific amount of time before the user wants to receive the bus arrival notification. In addition, in the case of transfer routes, the user can select which bus line to be notified for, providing the user with ultimate control and customisation over the interaction.</p>
                <img className="center-mg max-width-100" alt="Rider 1" src={RiderSeven} />
                <h3 className="design-h3">Home address</h3>
                <p className="design-para">Most users did not know how to use the favorite feature due to the lack of instruction.
Favoriting a bus line seemed impractical since users were most likely to select a favorite/most visited destination rather than a particular bus line. Users most likely would not travel to and from the same locations, therefore, a home address seemed more fitting.</p>
                <h3 className="design-h3">Rudimentary instructions</h3>
                <p className="design-para">Overall, the application does provide enough context and instruction for the user to thoroughly understand all of it’s functionality. The dearth of help and documentation proves to be detrimental to the user experience. Creating an instructional help section and introduction instruction will give first time users more assistance to navigate through the application and an overview of the features available within the application.</p>
            </Container>
            <Container color="black">
                <H2 top="REFLECTION" bottom="Summary" />
                <p className="design-para">Undoubtedly, the team at TransLoc conducted a lot of research and iterations in order to produce the product that we see today. They created the application based on the amount of data that they had while conducting user research and consequently, the features and how they have been laid out must have been the outcome of that research while prioritising the company’s personal agenda and goals.</p>
                <p className="design-para">It would be the height of hubris to say that this redesign has “fixed” all the current issues in TransLoc Rider.The amount of research that has been done by me within a limited period of time is fairly small compared to what the TransLoc Rider team did. I absolutely think a lot more research, usability testing, and iterations can be done to improve the application’s user experience; after all, design is a continuous process!</p>
                <p className="design-para">As a designer, my main priority was to think from the user’s perspective and address their respective wants and needs. I hope I was able to create a new and more user friendly Rider user interface, and I look forward to new additions from TransLoc that will further make the application open to a broadening population.</p>
            </Container>
        </div>
    )
}

export default Rider