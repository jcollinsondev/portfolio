export default interface IProject {
  name: string;
  description: string;
  links: {
    website?: string;
    github?: string;
    figma?: string;
    npm?: string;
  };
  stack: string[];
}
