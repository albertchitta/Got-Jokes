# Got Jokes  [![Netlify Status](https://api.netlify.com/api/v1/badges/a57a42e2-4966-4c21-aa3e-f9a326269139/deploy-status)](https://app.netlify.com/sites/awc-got-jokes/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

A fun and simple joke generator using React.js.

[View App](https://awc-got-jokes.netlify.app)

## Get Started <!-- OPTIONAL, but doesn't hurt -->
```
$ git clone git@github.com:albertchitta/Got-Jokes.git
$ cd Got-Jokes
```
## About the User <!-- This is a scaled down user persona -->
- The ideal users for this site are those that want to find a funny and random computer science joke.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- A button appears on the DOM that reads "Get a Joke"
- When the user presses the button, an API call is made, and the joke setup appears on the DOM
- The button changes to "Get Punchline"
- When a user presses the button, both the joke setup and delivery are on the DOM
- The button changes to "Get Another Joke," and the app starts over

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://awc-got-jokes.netlify.app)
- [Wireframes](https://www.figma.com/file/dUTnw5fZfWCB2RCRJpS7Af/JJ-Wireframe-(JS)?node-id=0%3A1)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
These functions utilize the states introduced in React.
```
  // setBtnText sets the value of btnText
  // default state
  const [btnText, setBtnText] = useState('GET A JOKE');

  // setJoke sets the value of joke
  // default state
  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setButton('GET PUNCHLINE');
    });
  };
```

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
![Joke Generator](https://user-images.githubusercontent.com/83558122/136861639-07038421-50ba-4fe6-959d-210a24bc3479.PNG)

## Contributors
- [Albert Chittaphong](https://github.com/albertchitta)
