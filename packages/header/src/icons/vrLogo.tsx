import * as React from 'react';

const VRLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={70}
    height={53}
    className="vr-logo__image vr-svg"
    data-inject-url="https://www.vr.com.br/lumis-theme/br/com/vr/portal/theme/vr-portal/img/svg/logo-vr.svg"
    style={{
      enableBackground: 'new 0 0 315.79 315.79',
    }}
    viewBox="0 0 315.79 315.79"
    {...props}
  >
    <path
      d="M309.79 309.79H52.72C26.92 309.79 6 288.87 6 263.07V6h257.06c25.8 0 46.72 20.92 46.72 46.72v257.07z"
      style={{
        fill: '#00be28',
      }}
    />
    <path
      d="M147.21 238.07H90.14c-10.38 0-16.35-4.4-20.13-13.99l-35.85-92.14h38.36c10.38 0 16.67 4.56 19.97 14.31l15.88 46.86h6.29L150.35 95h68.87c33.96 0 52.83 16.04 52.83 44.81 0 15.57-7.7 28.46-21.86 36.32 2.04 4.09 4.56 10.06 8.33 20.13 10.22 27.04 16.35 35.38 22.8 41.82H245c-16.35 0-26.26-7.23-32.23-22.8l-22.17-58.33c2.67.63 5.97.79 9.12.79 13.68 0 21.23-4.72 21.23-13.36 0-8.33-6.13-12.42-18.71-12.42h-14.47l-40.56 106.11z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
export { VRLogo };
