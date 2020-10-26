import React, { useEffect, useRef, useState } from "react";
import Container from "../../common/Container";
import IconsContainer from "../AboutPage/IconsContainer";
import { StyledText } from "./styled";

const AboutPage = () => {
  const textToShow =
    "W 2019 roku podjęłam decyzję o przebranżowieniu się w kierunku programowania. Zaczęłam od nauki języka HTML, potem poznałam CSS i JavaScript. Po opanowaniu Bootstrapa powstała moja pierwsza strona. Każdego dnia systematycznie pogłębiam swoją wiedzę z książek, kursów online, blogów. Znam podstawy PHP, MySQL, JQuery, XML i AJAX, przy pomocy platformy Wordpress stworzyłam stronę, która już funkcjonuje w internecie. W 2019 roku podjęłam decyzję o przebranżowieniu się w kierunku programowania. Zaczęłam od nauki języka HTML, potem poznałam CSS i JavaScript. Po opanowaniu Bootstrapa powstała moja pierwsza strona. Każdego dnia systematycznie pogłębiam swoją wiedzę z książek, kursów online, blogów. Znam podstawy PHP, MySQL, JQuery, XML i AJAX, przy pomocy platformy Wordpress stworzyłam stronę, która już funkcjonuje w internecie.";
  const [textTyping, setTextTyping] = useState("");
  const [count, setCount] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const componentRef = useRef(null);

  const onScrollPage = () => {
    if ((window.pageYOffset) > (componentRef.current.offsetTop-400)) {
      setIsScrolling(true)
    } else { setIsScrolling(false) }
  };
  window.onscroll = onScrollPage;

  useEffect(() => {
    if(isScrolling){
    const timeoutId = setTimeout(() => {
      if (count < textToShow.length) {
        setCount(count => count+1);
        setTextTyping(textTyping=>textTyping+textToShow.charAt(count))
      }
    }, 5);

    return () => {
      clearInterval(timeoutId);
    };
}
  }, [count, isScrolling]);
 
  return (
    <Container>
      <IconsContainer />
          <StyledText ref={componentRef}>{textTyping}</StyledText>
          

          </Container>
  );
};

export default AboutPage;
