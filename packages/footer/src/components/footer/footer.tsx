import React from 'react';

import { FooterContainer, FooterContent, FooterWrapper } from './footer.styles';
import { VRLogo } from '../../icons/vrLogo';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <div data-testid="vr-logo">
            <VRLogo />
          </div>
          <div>
            © 2024 VR TEST. <br />
            All rights reserved.
          </div>
        </FooterContent>
      </FooterContainer>
    </FooterWrapper>
  );
};

export { Footer };
