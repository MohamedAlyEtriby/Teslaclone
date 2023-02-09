import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
    return (
    <Container>
      <Section
        id="1"
        title="Model S"
        description="Order Online"
        backgroundimg="model-s.jpg"
        leftButton="Custom Order"
        rightButton="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online"
        backgroundimg="model-Y.jpg"
        leftButton="Custom Order"
        rightButton="Existing inventory"
        />
      <Section
        title="Model 3"
        description="Order Online"
        backgroundimg="model-3.jpg"
        leftButton="Custom Order"
        rightButton="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online"
        backgroundimg="model-X.jpg"
        leftButton="Custom Order"
        rightButton="Existing inventory"
        />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarante"
        backgroundimg="solar-panel.jpg"
        leftButton="order now"
        rightButton="Learn more"
      />
      <Section
        title="Solar for new Roofs"
        description="Solar Roof Costs less than a New Roof Plus Solar panels"
        backgroundimg="solar-roof.jpg"
        leftButton="order now"
        rightButton="Learn more"
      />
      <Section
        title="Accesories"
        description=""
        backgroundimg="accessories.jpg"
        leftButton="Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 1;
`;
