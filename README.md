# Project Overview

## Project Name

Everywhen

## Project Description

Everywhen is an Airtable and React build that serves as a self tracker for mental wellness and a daily planner. It allows users to keep track of their daily responsiblities and of their mental health. The app is composed of four fields; WorkTime, FamilyTime, MeTime and WellnessTime. Users will be able to click each WorkTime, FamilyTime, and MeTime fields and see and add "Activities", "Time", and "Priority" for each task they have to do on a daily basis. Moreover, when users click WellnessTime they will be able to asses their mental health by adding their Mood, Daily Highlight, Daily Vent, Coping Strategy, What Worked, What to Improve. Users will be able to add data to each field by clicking an "Add" button at the bottom of each field. Users will also be able to see their daily WellnessTime information displayed in card form and they will have the option to delete it as well.

## Wireframes

Home Page Desktop Wifeframe: https://i.imgur.com/gI2v9WL.png
Home Page Mobile Wireframe: https://i.imgur.com/BSu0PMF.png
WellnessTime Page Desktop Wireframe: https://i.imgur.com/tcWqVIo.png

## Component Hierarchy

https://i.imgur.com/18o6EfW.png

## API and Data Sample

```json
{
  
records: Array(5)
0: {id: "rec9W0zsxYqXQFouM", fields: {…}, createdTime: "2020-12-04T04:44:42.000Z"}
1:
createdTime: "2020-12-04T04:44:42.000Z"
fields:
copingStrategies: "taking breaks"
highlight: "Completed Project Pitch"
improve: "wireframes"
mood: "happy"
vent: "no need"
whatWorked: "taking breaks worked"
__proto__: Object
id: "recCkhPPUO0oa84GU"

}


```

#### MVP

- Create a WellnessTime page that holds the Mood, Daily Highlight, Daily Vent, Coping Strategy, What Worked, What to Improve fields
- Make buttons for describing mood
- When Clicked each button should pop up an emoji above the button that corresponds to the mood selected by the user
- Make each field clickable and expand to display the information
- Use forms to add to each field
- Create an "Add" button that when clicked brings out the form to add data to each field
- Save and display User WellnessTime information in card form 
- Create delete button for WellnessTime cards

#### PostMVP

- Create a page that holds the WorkTime, FamilyTime, and MeTime fields
- Work on advanced CSS
- Add daily goals component

## Project Schedule

| Day    | Deliverable                                             | Status     |
| ------ | ------------------------------------------------------- | ---------- |
| Dec 4  | Project Approval / Airtable Setup                       | Incomplete |
| Dec 7  | Start user interface component by making entries in Airtable and displaying them | Incomplete |
| Dec 8  | Finish User Interface Function / CSS                    | Incomplete |
| Dec 9  | Advanced CSS                                            | Incomplete |
| Dec 10 | Deployed MVP / Start PostMVP                            | Incomplete |
| Dec 11 | Presentations                                           | Incomplete |

## Timeframes

| Component                                    | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                                     |    H     |      2hrs      |      ---      |     ---     |
| Airtable Setup                               |    H     |      2hrs      |      ---      |     ---     |
| WellnessTime Mood Data Population            |    H     |      3hrs      |      ---      |     ---     |
| WellnessTime Highlight Data Population       |    H     |      2hrs      |      ---      |     ---     |
| WellnessTime Vent Data Population            |    H     |      2hrs      |      ---      |     ---     |
| WellnessTime Coping Strategy Data Population |    H     |      2hrs      |      ---      |     ---     |
| WellnessTime What Worked Data Population     |    H     |      2hrs      |      ---      |     ---     |
| WellnessTime What to Improve Data Population |    H     |      2hrs      |      ---      |     ---     |
| WellnessTime Add Form                        |    H     |      2hrs      |      ---      |     ---     |
| WellnessTime CSS                             |    H     |      4hrs      |      ---      |     ---     |
| WorkeTime Data Population                    |    H     |      3hrs      |      ---      |     ---     |
| WorkTime Add Form                            |    H     |      2hrs      |      ---      |     ---     |
| FamilyTime Data Population                   |    H     |      3hrs      |      ---      |     ---     |
| FamilyTime Add Form                          |    H     |      2hrs      |      ---      |     ---     |
| MeTime Data Population                       |    H     |      3hrs      |      ---      |     ---     |
| MeTime Add Form                              |    H     |      2hrs      |      ---      |   
| WorkTime CSS                                 |    H     |      1hrs      |      ---      |     ---     |
| FamilyTime CSS                               |    H     |      1hrs      |      ---      |     ---     |
| MeTime CSS                                   |    H     |      1hrs      |      ---      |     ---     |
| Advanced CSS                                 |    H     |      2hrs      |      ---      |     ---     |
| Total                                        |    H     |     43hrs      |      ---      |     ---     |

## SWOT Analysis

### Strengths:

I have a clear idea of what I want to do with my application and I'm confident that I have the skills and knowledge to make it look and work the way I want to.

### Weaknesses:

Im not 100% comfortable using class components, so I will be mostly using functional components for my project.

### Opportunities:

This project will give me the opportunitity to test the skills I've learned over the past 2 weeks and solidify those concepts. It will also be an opportunity to create an application that can bring balance to users' lives by helping them assess their mental health while also staying organized, which is something that a lot of people struggle with including myself.

### Threats:

I have a hard time asking for help beacuse I usually like to solve my problems on my own in order to learn more, but I end up spending a lot of time stuck in one problem. However, I will make sure to reach out to my squad lead for guidance when I feel stuck in order to use my time more efficiently.
