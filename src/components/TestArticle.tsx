import React, { useContext } from "react";
import styled from "styled-components";
import { useTitleStickEffect } from "../hooks/hooks";
import TheDunKnowLogo from "./TheDunKnowLogo";
import ctx from "../context/ArticleContext"
import { ctxType } from "../types/Context";

interface Props {
  expandedMenu: boolean;
  screenSize: string;
}

const Container = styled.div`
  section {
    padding: 20px 0;
    max-width: 700px;
    margin: 0 auto;
  }
  article {
    padding: 20px 40px;
    }
    `;
const BannerImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 400px;

`;

const Image = styled.img`
  height: 400px;
  width: auto;
  object-fit:cover;
  z-index:-1;
  top: 120%;
  position: absolute;
`;

const MainHeading = styled.div<{ expandedMenu: boolean, screenSize: string }>`
  padding: 40px 20px;
  position: sticky;
  top: ${(props) => props.expandedMenu && props.screenSize === "TABLET" ? "300px" : "90px"};
  background: black;
  color:#fff;
  z-index: 10;
  h1 {
    text-align:center;
    font-weight:400;
    max-width: 1200px;
    margin: 0 auto;
    font-size: 3em;
}

span {
  font-weight:900;
}

`;

const SubHeading = styled.div`
  padding-top: 60px;
  /* max-width: 400px; */
  
  h2 {
    max-width: 400px;
    margin: 0 auto;
    font-weight:400;
    text-align:center;
    font-size: 2.5rem;
  }
  span {
    font-weight:900;
  }

  @media(max-width:880px) {
    padding-top: 20px;

    h2 {
    padding: 20px;
  }
  }
`;
const ImageSection = styled.div`
box-sizing:content-box;
`;

const ArticleContent = styled.div`
padding: 20px;
display: grid;
column-gap: 20px;
grid-template-columns: 1fr 700px 1fr;

@media(max-width: 1300px) {
  grid-template-columns: 1fr 700px;
  div:nth-child(3) {
    display:none;
  }
}

  @media(max-width: 880px) {
  max-width: 600px;
  margin: 0 auto;
  display: block;

  div:nth-child(1) {
    display:none;
  }
}

@media(max-width: 600px) {
 article {
   padding: 0 10px;
 }
}
`;
const Quote = styled.h3`
text-transform: capitalize;
padding: 20px 0;
border-top: 4px solid yellow;
border-bottom: 4px solid yellow;
max-width: 200px;
margin: 0 auto;
/* text-align: center; */
font-size: 2em;
font-weight: 400;
span {
  font-weight: 900;

}
`;

const Time = styled.p`
border-bottom: 4px solid yellow;
max-width: 200px;
padding: 10px 0;
margin-bottom: 10px;
span {
  font-weight:700;
}
`;
const Author = styled.p`
border-bottom: 4px solid yellow;
max-width: 100px;
padding: 10px 0;
margin-bottom: 10px;
span {
  font-weight:700;
}
`;

const Info = styled.div`
padding: 20px 0;
display:flex;
flex-flow:row wrap;
justify-content: space-between;
`;


const TestArticle: React.FC<Props> = ({ expandedMenu, screenSize }) => {
  const articleContext: ctxType = useContext(ctx)
  const effect = useTitleStickEffect()


  return (
    <>
      <Container>
        <BannerImage src="/assets/kaytranada.jpg" alt="image of canadian producer and dj kaytranada"></BannerImage>
        {/* <TheDunKnowLogo invert={articleContext.invert} size={"large"} /> */}
        <MainHeading expandedMenu={expandedMenu} screenSize={screenSize}>
          <h1>
            The <span>Beauty</span> of the Beat with <span>Kaytranada</span>
          </h1>
        </MainHeading>
        <SubHeading>
          <h2>
            How he learned to embrace the<span> silence</span> and his <span>sound</span>
          </h2>
        </SubHeading>
        <ArticleContent>
          <ImageSection>
            <Image src="/assets/kaytranada2.jpg" alt="image of kaytranada" />
          </ImageSection>

          <article>
            <Info>
              <Author>Words by <span>Juno</span></Author><Time>Published on 12th June 2021</Time>
            </Info>
            <section>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores neque laborum ut animi molestiae aspernatur harum, ipsam dolor consequatur dolore, nobis cupiditate aliquid distinctio ab vel exercitationem dolorem velit voluptatem.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores neque laborum ut animi molestiae aspernatur harum, ipsam dolor consequatur dolore, nobis cupiditate aliquid distinctio ab vel exercitationem dolorem velit voluptatem.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores neque laborum ut animi molestiae aspernatur harum, ipsam dolor consequatur dolore, nobis cupiditate aliquid distinctio ab vel exercitationem dolorem velit voluptatem.
      </section>
            <section>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores neque laborum ut animi molestiae aspernatur harum, ipsam dolor consequatur dolore, nobis cupiditate aliquid distinctio ab vel exercitationem dolorem velit voluptatem.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores neque laborum ut animi molestiae aspernatur harum, ipsam dolor consequatur dolore, nobis cupiditate aliquid distinctio ab vel exercitationem dolorem velit voluptatem.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores neque laborum ut animi molestiae aspernatur harum, ipsam dolor consequatur dolore, nobis cupiditate aliquid distinctio ab vel exercitationem dolorem velit voluptatem.
      </section>
            <section>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores neque laborum ut animi molestiae aspernatur harum, ipsam dolor consequatur dolore, nobis cupiditate aliquid distinctio ab vel exercitationem dolorem velit voluptatem.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores neque laborum ut animi molestiae aspernatur harum, ipsam dolor consequatur dolore, nobis cupiditate aliquid distinctio ab vel exercitationem dolorem velit voluptatem.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores neque laborum ut animi molestiae aspernatur harum, ipsam dolor consequatur dolore, nobis cupiditate aliquid distinctio ab vel exercitationem dolorem velit voluptatem.
      </section>
            <Quote>
              Lorem, <span>ipsum dolor</span> sit amet <span>consectetur</span> adipisicing elit.
      </Quote>
            <section>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores neque laborum ut animi molestiae aspernatur harum, ipsam dolor consequatur dolore, nobis cupiditate aliquid distinctio ab vel exercitationem dolorem velit voluptatem.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores neque laborum ut animi molestiae aspernatur harum, ipsam dolor consequatur dolore, nobis cupiditate aliquid distinctio ab vel exercitationem dolorem velit voluptatem.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores neque laborum ut animi molestiae aspernatur harum, ipsam dolor consequatur dolore, nobis cupiditate aliquid distinctio ab vel exercitationem dolorem velit voluptatem.
      </section>
          </article>
          <ImageSection>
            <Image src="/assets/kaytranada3.jpg" alt="image of kaytranada" />
          </ImageSection>
        </ArticleContent>
      </Container>
    </>

  )
}

export default TestArticle;