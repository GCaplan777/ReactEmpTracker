# Fitness Tracker

## Description

Keeping track of employees is no joke, and as we've seen in our favorite tv show, "The Simpsons" (at least the "classic era"), management needs the latest in online rosters to search and sort their workers by name.
<br><br>
View the Gitbhub repository: <br>
https://github.com/GCaplan777/ReactEmpTracker
<br>
View the deployed app on Heroku:<br>
https://reacttracker.herokuapp.com/

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
- [Demos](#Demos)

## Installation

With access to Node.js, you can open your terminal and run: "$npm init" to create your package-lock.json. If already there from a fork of my repo, simply run "$npm install".
To use Eat-Da-Burger web application application from your local environment, you must accomplish the following steps below:

**Step 1 - Clone my repo using the command line below.**

```
git clone https://github.com/GCaplan777/ReactEmpTracker.git
```

**Step 2 - Change directory to the cloned repo folder.**

```
cd ReactEmpTracker
```

**Step 3 - Install all required NPM packages.**

```
npx create-react-app ReactEmpTracker. ***Here you may want to first delete the "src" folder from your React app. Go into the cloned repo, and copy and paste the src folder from the cloned repo into your React app.
```

**Step 4 - Start the application server using the command line below**

```
npm run start
```

## Usage

Node.js, React.js, Heroku, Github

## License

License Copyright: Unknown. <br>https://opensource.org/licenses/MIT

## Contributing

https://github.com/kao-ring

## Tests

All test requirements met.

## Questions

https://github.com/gcaplan777

gabriel.caplan@gmail.com
<br><br>

## DEMOS

Gif!<br><br>
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/67020051/91687136-0f3e0580-eb2d-11ea-8489-1113600ac161.gif)

<br><br>
Screenshots
<br><br>
In App.js, our handleInputChange listened for letters typed into the search bar. A variable was created to filter the results, comparing the letter typed with letters in the our compared object, "Employee" by name. We then reset the state.
<br><br>
<img width="505" alt="Screen Shot 2020-08-31 at 1 24 24 AM" src="https://user-images.githubusercontent.com/67020051/91686390-27ad2080-eb2b-11ea-821d-4ed5cdc8a155.png">

<br><br>
In App.JS, line 9, a second property for state "order" was set to ascending. That away, when "name" is clicked, we are listening and rendering ascending or descending based on the state. As we are in ascending to start, the first click will put us in ascending order, and also reset the state to descending, so that the next click received will use the descending funciton in our "if/ if else" statement. Our state is our switch back and forth.

<br><br>
<img width="491" alt="Screen Shot 2020-08-31 at 1 24 39 AM" src="https://user-images.githubusercontent.com/67020051/91686528-78bd1480-eb2b-11ea-8d45-deb5575857f4.png">

<br><br>
In TableBody.js, we're receiveing the props being rendered in the App.js file.
<img width="601" alt="Screen Shot 2020-08-31 at 1 24 52 AM" src="https://user-images.githubusercontent.com/67020051/91686997-b8383080-eb2c-11ea-9a2e-9f33b570a809.png">
