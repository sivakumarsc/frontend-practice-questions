`
 Implement a function chain like below snippet
 const developer = new DeveloperBuilder('John')
   .addSkill('ES6')
   .addSkill('TypeScript')
   .setFramework('React');
`

class DeveloperBuilder {
  constructor(name) {
    this.name = name;
    this.skills = [];
    this.framework = null;
  }

  addSkill(skill) {
    this.skills.push(skill);

    return this;
  }

  setFramework(framework) {
    this.framework = framework;

    return this;
  }
}

const developer = new DeveloperBuilder('John')
   .addSkill('ES6')
   .addSkill('TypeScript')
   .setFramework('React');

console.log(developer);