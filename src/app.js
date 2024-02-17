/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.getElementById("domain").innerHTML = generateDomain();
};
//write your code here

let generateDomain = () => {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".io", "us"];

  let domainNames = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++)
          domainNames.push(
            pronouns[i] + adjectives[j] + nouns[k] + extensions[l]
          );
      }
    }

    return domainNames;
  }
};
