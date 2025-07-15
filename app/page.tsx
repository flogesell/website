"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  Twitter,
  ExternalLink,
  Instagram,
} from "lucide-react";
import ProjectCard from "../components/ProjectCard";

import Me from "/public/me.jpg";
import LunchLeagueLogo from "/public/lunchleague.png";
import AngularLogo from "/public/logos/angular.png";
import ReactLogo from "/public/logos/react.png";
import ReactNativeLogo from "/public/logos/react-native.svg";
import CssLogo from "/public/logos/css.webp";
import HtmlLogo from "/public/logos/html.png";
import JsLogo from "/public/logos/javascript.png";
import TypescriptLogo from "/public/logos/typescript.svg";
import NextJsLogo from "/public/logos/nextjs.svg";
import IonicLogo from "/public/logos/ionic.png";
import TailwindLogo from "/public/logos/tailwind-css.svg";
import GitLogo from "/public/logos/git.png";
import DockerLogo from "/public/logos/docker.png";
import AppStoreConnectLogo from "/public/logos/app-store-connect.png";
import FirebaseLogo from "/public/logos/firebase.png";
import GooglePlayConsoleLogo from "/public/logos/google-play-console.png";
import FigmaLogo from "/public/logos/figma.png";
import NodeLogo from "/public/logos/node.png";
import ShutdownLogo from "/public/shutdown.png";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hover: {
    height: "auto",
    y: -10,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
};

function AnimatedSection({
  children,
  className,
  id,
  ...otherProps
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  [key: string]: any;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
      className={className}
      id={id}
      {...otherProps}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Close mobile menu if open
      setIsOpen(false);

      // Use setTimeout to ensure the menu is closed before scrolling
      setTimeout(() => {
        const headerOffset = 65;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 justify-center flex">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <span className="inline-block font-bold">Flo Gesell</span>
            </Link>
          </motion.div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px]">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <Link
                      href="/"
                      className="flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-bold text-lg">Flo Gesell</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    <Link
                      href="#about"
                      className="text-lg font-medium py-2 border-b border-border"
                      onClick={(e) => scrollToSection(e, "about")}
                    >
                      About
                    </Link>
                    <Link
                      href="#technologies"
                      className="text-lg font-medium py-2 border-b border-border"
                      onClick={(e) => scrollToSection(e, "technologies")}
                    >
                      Technologies
                    </Link>
                    <Link
                      href="#projects"
                      className="text-lg font-medium py-2 border-b border-border"
                      onClick={(e) => scrollToSection(e, "projects")}
                    >
                      Projects
                    </Link>
                    <Link
                      href="#"
                      className="text-lg font-medium py-2 border-b border-border"
                      onClick={(e) => scrollToSection(e, "contact")}
                    >
                      Let's Connect
                    </Link>
                  </nav>
                  <div className="mt-auto pt-6">
                    <div className="flex justify-center space-x-4">
                      <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                      <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Twitter className="h-6 w-6" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex items-center space-x-1"
          >
            <nav className="flex items-center space-x-1">
              <Link
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#technologies"
                onClick={(e) => scrollToSection(e, "technologies")}
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Technologies
              </Link>
              <Link
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Let's Connect
              </Link>
            </nav>
          </motion.div>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="hero"
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 justify-center flex"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col justify-center space-y-4 text-center lg:text-left"
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                    Hi, I'm Florian
                  </h1>
                  <p className="mx-auto lg:mx-0 max-w-[600px] text-muted-foreground md:text-xl">
                    Full-stack web & app developer specializing in building
                    exceptional digital experiences.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="#"
                      data-umami-event="Scroll to Contact"
                      onClick={(e) => scrollToSection(e, "contact")}
                    >
                      <Button>Let's connect</Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="#"
                      data-umami-event="Scroll to Projects"
                      onClick={(e) => scrollToSection(e, "projects")}
                    >
                      <Button variant="outline">View my work</Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mx-auto lg:mx-0 max-w-[400px] lg:max-w-none"
              >
                <Image
                  src={Me || "/placeholder.svg"}
                  width={550}
                  height={550}
                  alt="Portrait of Flo Gesell"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <AnimatedSection
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted justify-center flex"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
                About Me
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                I'm a passionate IT-Consultant and Fullstack Developer with a
                strong focus on creating modern and efficient applications. I
                love solving complex problems and bringing ideas to life through
                elegant code. When I'm not coding, you can find me fishing,
                playing video games, or experimenting with new technologies.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="technologies"
          className="w-full py-12 md:py-24 lg:py-32 bg-background justify-center flex"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
                My Tech Stack
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-12">
                Technologies and tools I work with on a daily basis
              </p>

              <div className="w-full space-y-16">
                {/* Programming Languages */}
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold">
                    Programming Languages
                  </h3>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-full overflow-visible"
                  >
                    {[
                      {
                        name: "JavaScript",
                        logo: JsLogo,
                      },
                      {
                        name: "TypeScript",
                        logo: TypescriptLogo,
                      },
                      {
                        name: "HTML",
                        logo: HtmlLogo,
                        disclaimer:
                          "I know it's not a programming language, but it looked like I would be some script kiddie without it.",
                      },
                      {
                        name: "CSS",
                        logo: CssLogo,
                        disclaimer:
                          "I know it's not a programming language, but it looked like I would be some script kiddie without it.",
                      },
                    ].map((lang) => (
                      <motion.div
                        key={lang.name}
                        variants={fadeIn}
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center"
                      >
                        <div
                          className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg border border-border bg-card p-3 sm:p-4 flex items-center justify-center shadow-sm relative group"
                          title={lang.disclaimer}
                        >
                          <Image
                            src={lang.logo || "/placeholder.svg"}
                            width={48}
                            height={48}
                            alt={lang.name}
                            className="h-10 w-10 object-contain "
                          />

                          {lang.disclaimer && (
                            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs bg-black text-white rounded-md w-48 pointer-events-none z-10">
                              {lang.disclaimer}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                            </div>
                          )}
                        </div>
                        <span className="mt-2 text-xs sm:text-sm font-medium">
                          {lang.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Frameworks & Libraries */}
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold">
                    Frameworks & Libraries
                  </h3>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-full overflow-visible"
                  >
                    {[
                      {
                        name: "React",
                        logo: ReactLogo,
                      },
                      {
                        name: "Next.js",
                        logo: NextJsLogo,
                      },
                      {
                        name: "React Native",
                        logo: ReactNativeLogo,
                      },
                      {
                        name: "Angular",
                        logo: AngularLogo,
                      },
                      {
                        name: "Ionic",
                        logo: IonicLogo,
                      },
                      {
                        name: "TailwindCSS",
                        logo: TailwindLogo,
                      },
                    ].map((framework) => (
                      <motion.div
                        key={framework.name}
                        variants={fadeIn}
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center"
                      >
                        <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg border border-border bg-card p-3 sm:p-4 flex items-center justify-center shadow-sm">
                          <Image
                            src={framework.logo || "/placeholder.svg"}
                            width={48}
                            height={48}
                            alt={framework.name}
                            className="h-10 w-10 object-contain"
                          />
                        </div>
                        <span className="mt-2 text-xs sm:text-sm font-medium">
                          {framework.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Tools & Platforms */}
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold">Tools & Platforms</h3>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-full overflow-visible"
                  >
                    {[
                      {
                        name: "Git",
                        logo: GitLogo,
                      },
                      {
                        name: "Docker",
                        logo: DockerLogo,
                      },
                      {
                        name: "Node.js",
                        logo: NodeLogo,
                      },
                      {
                        name: "Firebase",
                        logo: FirebaseLogo,
                      },
                      {
                        name: "App Store Connect",
                        logo: AppStoreConnectLogo,
                      },
                      {
                        name: "Google Play Console",
                        logo: GooglePlayConsoleLogo,
                      },
                      {
                        name: "Figma",
                        logo: FigmaLogo,
                      },
                    ].map((tool) => (
                      <motion.div
                        key={tool.name}
                        variants={fadeIn}
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center max-w-16 sm:max-w-20"
                      >
                        <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg border border-border bg-card p-3 sm:p-4 flex items-center justify-center shadow-sm">
                          <Image
                            src={tool.logo || "/placeholder.svg"}
                            width={48}
                            height={48}
                            alt={tool.name}
                            className="h-10 w-10 object-contain"
                          />
                        </div>
                        <span className="mt-2 text-xs sm:text-sm font-medium">
                          {tool.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted justify-center flex"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
                Projects
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
                Here are some of my recent projects:
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full"
              >
                <ProjectCard
                  title="LunchLeague"
                  description="Apps to challenge you colleagues in competitive games like Fifa, Mario Kart, and more! Also created the online website with colleagues to manage the leagues and tournaments."
                  image={LunchLeagueLogo}
                  demoText="Website"
                  technologies={[
                    "Next.js",
                    "React Native",
                    "Tailwind CSS",
                    "Supabase",
                  ]}
                  demoLink="https://lunchleague.de/"
                />
                <ProjectCard
                  comingSoon
                  title="supaconfig"
                  description="An easy to use remote config and feature flagging open source tool for your React Native apps."
                  image="/placeholder.svg?height=200&width=400"
                  technologies={[
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Supabase",
                    "shadcn/ui",
                  ]}
                  demoLink="#"
                />
                <ProjectCard
                  title="shutdown"
                  description="Shutdown is a visualisation of the effects of everydays life on the climate change goals. The user can shutdown entire emission categories to see the impact on the climate change goals."
                  technologies={["Vue", "SASS"]}
                  image={ShutdownLogo}
                  demoLink="https://flogesell.github.io/shutdown/"
                  codeLink="https://github.com/flogesell/shutdown"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted justify-center flex"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute -bottom-[10%] left-[30%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl mb-4">
                  Let's Connect
                </h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2 items-center">
                {/* Status Card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl transform -rotate-3"></div>
                  <div className="relative bg-card border border-border/40 rounded-xl p-8 backdrop-blur-sm shadow-xl">
                    <div className="flex items-center mb-6">
                      <div className="h-3 w-3 rounded-full bg-green-500 mr-3 animate-pulse"></div>
                      <h3 className="text-xl font-semibold">Current Status</h3>
                    </div>

                    <p className="text-2xl font-bold mb-4">Happily Employed</p>
                    <p className="text-muted-foreground mb-6">
                      I'm currently not accepting new opportunities, but I'm
                      always open to connecting with fellow developers and tech
                      enthusiasts.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        Not Available for Hire
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                        Open to Collaboration
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                        Open to Networking
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-4 max-w-full">
                    {[
                      {
                        name: "GitHub",
                        icon: Github,
                        color: "bg-[#333]/10",
                        textColor: "text-[#333] dark:text-white",
                        link: "https://github.com/flogesell",
                      },
                      {
                        name: "LinkedIn",
                        icon: Linkedin,
                        color: "bg-[#0077B5]/10",
                        textColor: "text-[#0077B5] dark:text-[#0077B5]",
                        link: "https://www.linkedin.com/in/flogesell/",
                      },
                      {
                        name: "Instagram",
                        icon: Instagram,
                        color: "bg-[#1DA1F2]/10",
                        textColor: "text-[#1DA1F2] dark:text-[#1DA1F2]",
                        link: "https://www.instagram.com/flo_gesell",
                      },
                      {
                        name: "Email",
                        icon: Mail,
                        color: "bg-primary/10",
                        textColor: "text-primary",
                        link: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
                      },
                    ].map((social) => (
                      <motion.a
                        key={social.name}
                        data-umami-event={`Open Social Media ${social.name}`}
                        href={social.link}
                        target="_blank"
                        whileHover={{
                          scale: 1.05,
                          rotate: 2,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl ${social.color} backdrop-blur-sm border border-border/30 transition-all duration-300 hover:shadow-lg group`}
                        rel="noreferrer"
                      >
                        <social.icon
                          className={`h-8 w-8 sm:h-10 sm:w-10 mb-2 sm:mb-3 ${social.textColor} group-hover:scale-110 transition-transform duration-300`}
                        />
                        <span
                          className={`font-medium text-sm sm:text-base ${social.textColor}`}
                        >
                          {social.name}
                        </span>
                        <div className="flex items-center mt-1 sm:mt-2 text-[10px] sm:text-xs text-muted-foreground">
                          <span>Connect</span>
                          <ExternalLink className="h-2 w-2 sm:h-3 sm:w-3 ml-1" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Bottom message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-center mt-16"
              >
                <p className="text-muted-foreground">
                  Thanks for stopping by! Feel free to check out my work or
                  connect with me on social media.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} Florian Gesell. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              data-umami-event="Open Datenschutz"
              href="/datenschutz"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              data-umami-event="Open Impressum"
              href="/impressum"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Legal Notice
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
