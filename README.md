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

