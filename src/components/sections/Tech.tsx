import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';
import { DiReact, DiNodejs, DiLaravel, DiJsBadge, DiPhp, DiJava, DiPython, DiLinux, DiAws, DiCss3, DiHtml5 } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiTensorflow } from "react-icons/si";
import Container from '../elements/Container';
import Grid from '../elements/Grid';

export default function Tech() {
  const languages = [
    {
      icon: <DiJsBadge size="4em" className="m-auto mt-4" color="#F0DB4E" />,
      title: 'JavaScript',
      desc: 'Vanilla JS.',
      link: '/tag/javascript',
    },
    {
      icon: <DiPhp size="4em" className="m-auto mt-4" color="#767BB3" />,
      title: 'PHP',
      desc: 'PHP.',
      link: '/tag/php',
    },
    {
      icon: <DiPython size="4em" className="m-auto mt-4" color="#ffd43b" />,
      title: 'Python',
      desc: 'HTML5 & CSS3.',
      link: '/tag/python',
    },
  ]

  const frameworks = [
    {
      icon: <BiLogoTypescript size="4em" className="m-auto mt-4" color="blue" />,
      title: 'Typescript',
      desc: 'JavaScript Superscript.',
      link: '/tag/typescript',
    },
    {
      icon: <DiNodejs size="4em" className="m-auto mt-4" color="green" />,
      title: 'Node & Express',
      desc: 'Backend JavaScript Framework.',
      link: '/tag/node',
    },
    {
      icon: <DiReact size="4em" className="m-auto mt-4" color="#00D8FF" />,
      title: 'React',
      desc: 'Frontend JavaScript Framework.',
      link: '/tag/react',
    },
    {
      icon: <SiNextdotjs size="4em" className="m-auto mt-4" />,
      title: 'Next',
      desc: 'Frontend JavaScript Framework.',
      link: '/tag/next',
    },
    {
      icon: <FaVuejs size="4em" className="m-auto mt-4" color="#3178C6" />,
      title: 'Vue',
      desc: 'Frontend JavaScript Framework.',
      link: '/tag/vue',
    },
    {
      icon: <DiLaravel size="4em" className="m-auto mt-4" color="red" />,
      title: 'Laravel',
      desc: 'PHP Framework.',
      link: '/tag/laravel',
    },
    {
      icon: <SiTensorflow size="4em" className="m-auto mt-4" color="orange" />,
      title: 'Tensorflow',
      desc: 'Python Data Analysis Tools & Machine Learning.',
      link: '/tag/tensorflow',
    },
    {
      icon: <DiLinux size="4em" className="m-auto mt-4" />,
      title: 'Linux',
      desc: 'Linux OS & Bash Scripts.',
      link: '/tag/linux',
    },
  ]

  return (
    <Container>
      <div className='text-center my-4 min-w-full'>
        <h2>Top Languages</h2>
        <Grid classes="mt-4 rounded-lg">
          {languages.map(lang => (
            <Card className="pb-4 m-4" key={lang.title} >
              <Link href={lang.link}>
                {lang.icon}
                <CardBody>
                  <h4 className="font-bold text-large text-center">{lang.title}</h4>
                </CardBody>
              </Link>
            </Card>
          ))}
        </Grid>
      </div>

      <div className='text-center my-4 min-w-full'>
        <h2>Top Frameworks & Skills</h2>
        <Grid classes="mt-4 rounded-lg">
          {frameworks.map(framework => (
            <Card className="pb-4 m-4" key={framework.title} >
              <Link href={framework.link}>
                {framework.icon}
                <CardBody>
                  <h4 className="font-bold text-large text-center">{framework.title}</h4>
                  <p className="text-center">{framework.desc}</p>
                </CardBody>
              </Link>
            </Card>
          ))}
        </Grid>
      </div>
    </Container>
  )
}
