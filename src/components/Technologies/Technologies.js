import React from 'react';
import { DiFirebase, DiJavascript,DiBrackets,DiAws,DiZend } from 'react-icons/di';
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
       <DiJavascript size="3rem"/>
         <ListContainer>
           <ListTitle>Front-End</ListTitle>
         <ListParagraph>React JS, Typescript, HTML, CSS, jQuery</ListParagraph>
         </ListContainer>
     </ListItem>
     <ListItem>
       <DiBrackets size="3rem"/>
         <ListContainer>
           <ListTitle>Back-End</ListTitle>
         <ListParagraph>NodeJS, Django, Java Spring, Java android Swagger API</ListParagraph>
         </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size="3rem"/>
         <ListContainer>
           <ListTitle>Database</ListTitle>
         <ListParagraph>MYSQL, Mongo, INFLUX</ListParagraph>
         </ListContainer>
     </ListItem>
     <ListItem>
       <DiAws size="3rem"/>
         <ListContainer>
           <ListTitle>DevOps</ListTitle>
         <ListParagraph>Kubernetes, Docker, Openstack, Hystax, AWS object storage</ListParagraph>
         </ListContainer>
     </ListItem>
     <ListItem>
       <DiZend size="3rem"/>
         <ListContainer>
           <ListTitle>Other Applications</ListTitle>
         <ListParagraph>Jira, Azure Devops, AWS Code Commit, Killbill billing, NTOP, Keycloak</ListParagraph>
         </ListContainer>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
