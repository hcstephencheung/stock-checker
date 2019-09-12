# Hi Lendesk!

First off, thank you for taking the time in reviewing the project. Interviewing is time consuming for both parties so I appreciate the time.

To begin, please read the following:

1. How to run
2. Project architecture and approaches
3. Dependencies, Tooling, Frameworks
4. Notes

## How to run

Before you start:
1. This project connects to iexcloud as an API, so please register an account with them.
2. Once you have an account, you can [navigate to their site here](https://iexcloud.io/console/tokens) to see your API tokens.
3. I'm calling their sandbox APIs, so please toggle on "Viewing Sandbox Data", then click API tokens.
4. Please copy the client secret token (_it should start with Tsk_).
5. Please clone the project or unzip it.
6. In the root project, please create a .env.development file, and within it add this line:
`CLIENT_SECRET=_YourTokenHere_`

To run the project:
1. In the root of the project directory, please run `npm i` and `npm start` after everything is installed.
2. Running `npm start` should open your browser with a new `localhost:1234` tab!

## Project Architecture and Approaches

I chose a project structure close to what I'm currently using at work since it's been working really well. The only questionable folder is
called "providers", which uses React hooks to do my data fetching. I imagined thsoe Hooks would've been used elsewhere, which is why I wanted
to abstract out the data fetchers (ideally paired with Typescript so the data model would be clear). Everything else is pretty self-explanatory.

I think there were several places that could've used more refactoring or restructuring (generic fetch hook that updates states), but of course
there is always room for improvement.

## Dependencies, Tooling, Framework

I chose the following list of tooling/framework for develop:

### Bundler
Parcel bundler 📦🚀
Reason: easy installation, easy setup, lightning fast build times, has Code splitting and hot reload and all the goodes. Great for quick development. However, support for heavy customizations is still not on par with Webpack, so in a work environment Webpack might still be
the tooling of choice.

### React, React Hooks
Well, this was specified in the assignment. React is great though, front-end stack of choice. I chose to use Hooks because of its
reusability across components and also I don't get a chance to practice it enough. I use React/Redux at work but for this project
Hooks is great because it's even more declarative in changing parts of the state of a component.

I'm a fan of Typescript so if I had time I might've chosen to use Typescript with React, but I started simple to get a working
project going first.

### Jest, Enzyme
I didn't get much time to write a lot of test cases. If I had time, I would write more unit tests for individual components with mocked
props. The main page component uses hooks so unit testing will be a little bit more difficult.

### CSS Modules
The scoped styles in CSS modules is my styling of choice, but I've used other styling approaches and they all have pros and cons.
I enjoy CSS Modules' scoping the most and also how explicit the class names are in my JS code so I know exactly what styles are
being used. However, I can see the con being global styles not freely flowing down and CSS bundling issues when having deep
package dependencies (ie. global components -> project components -> local page components, each with its own build configuration)

### ESLint
It came with Parcel, no particular reason here. Most linters are the same I find, as long as everyone is onboard then I have no
preference.

## Notes

1. I noticed that when I ran `npm audit` there was 1 package with vulnerability. I understand that Lendesk is a Fintech company and this 
might cause some concern in a real work environment, so if given more time I would pay attention to that as well. The npm packages I
chose to explicitly use are the major ones with MIT licenses and lots of downnloads.

2. I .gitignored a couple files, so hopefully this will still be ok. If the project doesn't run or anything doesn't work, please feel
free to let me know!


I gave a lot of thought into this assignment, I hope it wasn't too much to review! Hope to hear from you guys soon!

Cheers,

Stephen
