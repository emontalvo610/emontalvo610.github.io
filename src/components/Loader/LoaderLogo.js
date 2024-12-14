import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const Logo = styled.svg`
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
`;

class LogoLoader extends React.Component {
  render() {
    return (
      <Container>
        <Logo width="300" height="300" viewBox="0 0 300 300">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#ffffff", stopOpacity: 0.1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ffffff", stopOpacity: 0.3 }}
              />
            </linearGradient>
          </defs>

          {/* Main circle */}
          <circle cx="150" cy="150" r="140" fill="url(#gradient)" />

          {/* Letter E */}
          <path
            d="M90,80 L90,220 L180,220 M90,150 L170,150 M90,80 L180,80"
            stroke="#ffffff"
            strokeWidth="15"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0,1000"
              to="1000,0"
              dur="3s"
              fill="freeze"
            />
          </path>

          {/* Letter M */}
          <path
            d="M120,220 L120,100 L150,140 L180,100 L180,220"
            stroke="#ffffff"
            strokeWidth="15"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0,1000"
              to="1000,0"
              dur="3s"
              fill="freeze"
            />
          </path>

          {/* Outer ring */}
          <circle
            cx="150"
            cy="150"
            r="135"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          >
            <animate
              attributeName="r"
              values="135;140;135"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Inner decorative circle */}
          <circle
            cx="150"
            cy="150"
            r="120"
            stroke="#ffffff"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
          >
            <animate
              attributeName="r"
              values="120;125;120"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        </Logo>
      </Container>
    );
  }
}

export default LogoLoader;
