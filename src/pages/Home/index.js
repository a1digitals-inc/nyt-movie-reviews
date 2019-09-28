import React from 'react';

import reviewLogo from '../../assets/images/review-logo.svg';
import criticLogo from '../../assets/images/critic-logo.svg';

import { Container, Option } from './styles';

export default function Home() {
  return (
    <Container>
      <ul>
        <Option to="/reviews">
          <strong>Reviews</strong>
          <img src={reviewLogo} alt="ReviewLogo" />
          <span>
            Search New York Times movie reviews by keyword and opening date and
            filter by Critics&quot; Picks.
          </span>
        </Option>

        <Option to="/critics">
          <strong>Critics</strong>
          <img src={criticLogo} alt="CriticLogo" />
          <span>
            Get New York Times movie critics. You can either specify the
            reviewer name.
          </span>
        </Option>
      </ul>
    </Container>
  );
}
