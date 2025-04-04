import { tree, decorate, addChild } from "@forest-js/core";

const About = decorate(tree("main"), addChild(["about", "about-title"]));

export default About;
