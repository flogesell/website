import { motion, type Variants } from 'framer-motion';
import { Code, PlayIcon } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

type ProjectCardProps = {
  title: string;
  description: string;
  image: StaticImageData | string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
  comingSoon?: boolean;
  demoText?: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hover: {
    y: -10,
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3 },
  },
};

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  demoText,
  codeLink,
  comingSoon = false,
}: ProjectCardProps) => {
  return (
    <motion.div variants={cardVariants} whileHover="hover" className="w-full flex rounded-lg">
      <Card className="relative flex-1">
        {comingSoon && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10 rounded-md">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold rotate-12">
              COMING SOON
            </div>
          </div>
        )}
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <Image
            src={image}
            width={400}
            height={200}
            alt={title}
            className="rounded-md object-cover w-full"
          />
          <p className="mt-4 text-sm text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          {!!demoLink && (
            <Button variant="outline" size="sm" asChild disabled={comingSoon}>
              <Link
                data-umami-event={`Open Demo ${title}`}
                href={comingSoon ? '#' : demoLink}
                target={comingSoon ? '_self' : '_blank'}
              >
                {demoText || 'Demo'} <PlayIcon />
              </Link>
            </Button>
          )}
          {!!codeLink && (
            <Button variant="outline" size="sm" asChild disabled={comingSoon}>
              <Link
                data-umami-event={`Open Code ${title}`}
                href={comingSoon ? '#' : codeLink}
                target={comingSoon ? '_self' : '_blank'}
              >
                Code <Code />
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
