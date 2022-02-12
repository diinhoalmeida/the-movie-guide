import styled from 'styled-components'; 

interface ContentProps {
  isRecommendation: undefined | boolean;

}

export const Container = styled.ul`
  max-width: 85vw;
  margin: 30px auto;
 
`
export const Content = styled.ul<ContentProps>`
   display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); 
  gap: 32px;

  @media(min-width: 500px) {
    grid-auto-flow: ${({isRecommendation}) => isRecommendation && 'column'};
    overflow-x: ${({isRecommendation}) => isRecommendation && 'scroll'};
    
  }
  
  @media(max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    
  }

  ::-webkit-scrollbar {
    background-color: #DDDDDD;
    height: 12px;
    border-radius: 100px;
    
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ADADAD;
    border-radius: 100px;

    &:hover {
      background: var(--primary);
  
    }

  }


`

export const SectionTitle = styled.h2`
  color: var(--primary);
  font-weight: bold;
  font-size: 24px;
  margin: 40px 0;
  

`