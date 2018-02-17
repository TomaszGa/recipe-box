import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import RecipeList from "./RecipeList";
import { Panel } from "react-bootstrap";
configure({ adapter: new Adapter() });

describe("<RecipeList />", () => {
  let wrapper = shallow(
    <RecipeList
      recipes={[
        {
          name: "React.js knowledge",
          text: "Skill, Time, Perservance"
        },
        {
          name: "Web dev job",
          text: "More skill, More time, Social skills"
        },
        {
          name: "Cool single page apps",
          text: "Ideas, React skills, Time"
        },
        {
          name: "Energy to learn more",
          text: "Sleep, Breaks, Relaxation"
        }
      ]}
    />
  );
  it("should render four <Panel /> elements when passed the default array", () => {
    console.log("wrapper:", wrapper);
    expect(wrapper.find(Panel)).toHaveLength(4);
  });
});
