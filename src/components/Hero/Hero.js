import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Greetings!<br/>
          I am Junaid Soomro,
        </SectionTitle>
        <SectionText>
          I love programming for two basic reasons. One is the feeling when small and chunks of pieces make up to something big and meaningful. This also excites and motivates me to move further and learn more. The other reason is programming can just help you solve your everyday problems. In my case I usually code to automate my recurring tasks. 
        </SectionText>
        <Button onClick={()=>{window.open('https://drive.google.com/file/d/1NmxdSqiRFwG0l-6MLVmVrFEaXF748SO0/view?usp=sharing')}}>Interested in reading my resume?</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;