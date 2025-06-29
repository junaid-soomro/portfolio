import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Greetings!
          <br />I am Junaid Soomro,
        </SectionTitle>
        <SectionText>
          `A linux geek(ubuntu ;){")"} who is a big fan of writing automation
          scripts and loves witnessing the automation magic. Software
          development to me is like there is an idea in my head and I have the
          skills to bring it to life. Code optimization {">"} code refactoring
          just my opinion. I usually resonate with MERN stack and django
          framework but it doesn't just stop there. I also like creating
          makefiles.`
        </SectionText>
        <a
          href={"/images/Junaid-Soomro-CV.pdf"}
          download={"Junaid-Soomro-CV.pdf"}
        >
          <Button>Interested in reading my resume?</Button>
        </a>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
