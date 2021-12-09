import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <div>
    <Section id="projects">
      <SectionDivider/>
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({id,image,title,description,tags,source,visit})=>(
          <BlogCard key={id}>
            <Img src={image}></Img>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr/>
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <br/>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag,i)=>(
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
           <UtilityList>{
           source ? <ExternalLinks href={source}>Github</ExternalLinks> : null
            }</UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  </div>
);

export default Projects;