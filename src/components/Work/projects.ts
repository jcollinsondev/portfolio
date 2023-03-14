import IProject from './project.interface';

const projects: IProject[] = [
  {
    name: 'TypedApiMapper',
    description:
      'Type safe and organized client to map your API. Allows you to create an easy to used mapper to call all your endpoints with the exact input and output types you need automatically.',
    links: {
      npm: 'https://www.npmjs.com/package/typed-api-mapper',
      github: 'https://github.com/jcollinsondev/TypedApiMapper',
    },
    stack: ['Typescript'],
  },
  {
    name: 'AnyStateJs',
    description:
      'Fast, easy to use and flexible javascript state manager based on RxJs.',
    links: {
      npm: 'https://www.npmjs.com/package/anystatejs',
      github: 'https://github.com/jcollinsondev/AnyStateJs',
    },
    stack: ['Typescript', 'RxJs'],
  },
  {
    name: 'Travel E-Commerce Design',
    description:
      'Design of a Travel E-Commerce app. The core of this app should be to allow a friend group to create trips and book flights and hotels all together.',
    links: {
      figma:
        'https://www.figma.com/file/SJvln9LjeFLDF28JCzmaH5/WonderWe?t=RFtWzffZ5v6uFrJD-6',
    },
    stack: ['Figma'],
  },
  {
    name: 'Portfolio',
    description: 'Personal portfolio to showcase my skills.',
    links: {
      github: 'https://github.com/jcollinsondev/portfolio',
      figma:
        'https://www.figma.com/file/2mQsseIVB96WlqptFarCbi/Portfolio?t=RFtWzffZ5v6uFrJD-6',
    },
    stack: ['Astro'],
  },
];

export default projects;
