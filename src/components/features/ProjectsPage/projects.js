import ang from "./../../../images/ang.png";
import astronomy from "./../../../images/astronomy.png";
import cantor from "./../../../images/cantor.png";
import diet from "./../../../images/diet.png";
import lansoft from "./../../../images/lansoft.png";
import letters from "./../../../images/letterts.png";
import money from "./../../../images/money.png";
import calculator from "./../../../images/calculator.png";
import todo from "./../../../images/todo.png";
import kissi from "./../../../images/kissi.PNG";
import budo from "./../../../images/budo.PNG";
import movies from "./../../../images/movies.PNG";

export const projects = [
  {
    title: "Web applications",
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
    items: [
      {
        image: diet,
        code: "https://github.com/kamila-duda/dieta",
        link: "https://kamila-duda.github.io/dieta/",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      },
      {
        image: astronomy,
        code: "https://github.com/kamila-duda/astronomy",
        link: "https://kamila-duda.github.io/astronomy/",
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
    ],
  },
  {
    title: "Other",
    items: [
      // {
      //  image: wordpress,
      //   link: "https://nawrot.000webhostapp.com/",
      //   tags: ["Wordpress"]

      // },
      {
        image: calculator,
        code: "https://github.com/kamila-duda/calculator",
        link: "https://kamila-duda.github.io/calculator",
        tags: ["HTML", "CSS", "JavaScript"],
      },
    ],
  },
];
