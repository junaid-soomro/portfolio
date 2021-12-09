import React from 'react';
import { DiFirebase, DiReact, DiVisualstudio, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider/>
   <br/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>

    It all started with C and C++. Then i jumped to native android application development. After that I have been on javascript ever since. I am a fast learner and picker.
    The technologies that I have worked on were all new to me when I first started but I caught up fast thanks to my consistent practice.

   </SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem"/>
         <ListContainer>
           <ListTitle>Front-End</ListTitle>
         <ListParagraph>React JS, Typescript, HTML, CSS, jQuery</ListParagraph>
         </ListContainer>
     </ListItem>
     <ListItem>
       <DiVisualstudio size="3rem"/>
         <ListContainer>
           <ListTitle>Back-End</ListTitle>
         <ListParagraph>NodeJS, Django, Java Spring, Swagger API</ListParagraph>
         </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size="3rem"/>
         <ListContainer>
           <ListTitle>Database</ListTitle>
         <ListParagraph>MYSQL, Mongo, INFLUX</ListParagraph>
         </ListContainer>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
