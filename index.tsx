import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, Slide, FlexBox, Heading, SpectacleLogo } from 'spectacle'

const Presentation = () => (
  <Deck template={() => <DefaultTemplate />}>
    <Slide>
      <FlexBox height="100%">
        <Heading>cursor</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h2">Made with</Heading>
        <SpectacleLogo size={300} />
      </FlexBox>
    </Slide>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);