import ang from "./../../../images/ang.png";
import astronomy from "./../../../images/astronomy.png";
import cantor from "./../../../images/cantor.png";
import diet from "./../../../images/diet.png";
import lansoft from "./../../../images/lansoft.png";
import letters from "./../../../images/letterts.png";
import money from "./../../../images/money.png";
import todo from "./../../../images/todo.png";
import kissi from "./../../../images/kissi.PNG";
import budo from "./../../../images/budo.PNG";
import movies from "./../../../images/movies.PNG";
import art from "./../../../images/art.png";
import hair from "./../../../images/hairdresser.PNG";


export const projects = [
  {
    title: "Web applications",
    description: "This category includes web applications using the React.js, Redux and Saga technologies. The Movie Browser project was made by a team of three. Movies Browser and Currency converter applications use API, ToDo List and Movies Browser allow to save data in Local Storage.",
    items: [
      {
        image: movies,
        code: "https://github.com/kamila-duda/movies-browser",
        link: "https://kamila-duda.github.io/movies-browser/",
        tags: ["React.js", "Styled Components", "Redux", "Saga"],
      },
      {
        image: todo,
        code: "https://github.com/kamila-duda/todo-list-react-redux",
        link: "https://kamila-duda.github.io/todo-list-react-redux/",
        tags: ["React.js", "StyledComponents", "Redux", "Saga"],
      },
      {
        image: cantor,
        code: "https://github.com/kamila-duda/currency-converter-react",
        link: "https://kamila-duda.github.io/currency-converter-react/",
        tags: ["React.js", "Styled Components"],
      },
    ],
  },
  {
    title: "Games",
    description: "The Piggy Bank was created to teach children to count money, and the Letter game is intended to introduce people to the layout of the letters on the keyboard. The quiz allows to test knowledge of English.",
    items: [
      {
        image: money,
        code: "https://github.com/kamila-duda/coins",
        link: "https://kamila-duda.github.io/coins/",
        tags: ["HTML", "CSS", "Sass", "JavaScript"],
      },
      {
        image: letters,
        code: "https://github.com/kamila-duda/letters_game",
        link: "https://kamila-duda.github.io/letters_game/",
        tags: ["HTML", "CSS", "Sass", "JavaScript"],
      },
      {
        image: ang,
        code: "https://github.com/kamila-duda/angielski_quiz",
        link: "https://kamila-duda.github.io/angielski_quiz/",
        tags: ["HTML", "CSS", "JavaScript"],
      },
    ],
  },
  {
    title: "Websites",
    description: "I made a diet recipe page where you can create your own shopping list and save it to Local Storage. Simple site about astronomy with a quiz, and also sample websites for companies and individuals.",
    items: [
      {
        image: diet,
        code: "https://github.com/kamila-duda/dieta",
        link: "https://kamila-duda.github.io/dieta/",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      },
      {
        image: astronomy,
        code: "https://github.com/kamila-duda/astronomia",
        link: "https://kamila-duda.github.io/astronomia/",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        image: lansoft,
        code: "https://github.com/kamila-duda/lansoft",
        link: "https://kamila-duda.github.io/lansoft/",
        tags: ["HTML", "CSS", "Sass", "JavaScript"],
      },
      {
        image: kissi,
        link: "http://www.iisi.pcz.pl/~pduda/index.php",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      },
      {
        image: budo,
        link: "http://kd2020-pl.stackstaging.com/",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      },
      {
        image: hair,
        code: "https://github.com/kamila-duda/hairdresser",
        link: "https://kamila-duda.github.io/hairdresser/",
        tags: ["HTML", "SCSS", "JavaScript"],
      },
      {
        image: art,
        link: "https://nawrot.000webhostapp.com/",
        tags: ["Wordpress"],
      },
    ],
  },
];
