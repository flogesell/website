'use client';

import { motion, type Variants } from 'framer-motion';
import {
  ArrowLeft,
  Coffee,
  ExternalLink,
  Github,
  Globe,
  Heart,
  Instagram,
  Linkedin,
  Mail,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Me from '@/public/me.jpg';

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
      staggerChildren: 0.1,
    },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

export default function LinksPage() {
  const links = [
    {
      title: 'Portfolio Website',
      description: 'Check out my full portfolio and projects',
      icon: Globe,
      url: '/',
      color: 'bg-blue-500/10',
      textColor: 'text-blue-600 dark:text-blue-400',
      iconColor: 'text-blue-600 dark:text-blue-400',
      category: 'portfolio',
    },
    {
      title: 'GitHub',
      description: 'Follow my coding journey and open source projects',
      icon: Github,
      url: 'https://github.com/flogesell',
      color: 'bg-gray-500/10',
      textColor: 'text-gray-600 dark:text-gray-400',
      iconColor: 'text-gray-600 dark:text-gray-400',
      category: 'social',
    },
    {
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/flogesell/',
      color: 'bg-blue-600/10',
      textColor: 'text-blue-600 dark:text-blue-400',
      iconColor: 'text-blue-600 dark:text-blue-400',
      category: 'social',
    },
    {
      title: 'Instagram',
      description: 'Behind the scenes of my developer life',
      icon: Instagram,
      url: 'https://www.instagram.com/flo_gesell',
      color: 'bg-pink-500/10',
      textColor: 'text-pink-600 dark:text-pink-400',
      iconColor: 'text-pink-600 dark:text-pink-400',
      category: 'social',
    },
    {
      title: 'Email Me',
      description: "Let's chat about opportunities or collaborations",
      icon: Mail,
      url: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
      color: 'bg-green-500/10',
      textColor: 'text-green-600 dark:text-green-400',
      iconColor: 'text-green-600 dark:text-green-400',
      category: 'contact',
    },
  ];

  const projects = [
    {
      title: 'LunchLeague',
      description: 'Competitive gaming platform for colleagues',
      url: 'https://lunchleague.de/',
      icon: ExternalLink,
      color: 'bg-purple-500/10',
      textColor: 'text-purple-600 dark:text-purple-400',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-bold">Back to Portfolio</span>
          </Link>
        </div>
      </header>

      <main className="w-full py-8">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl mx-auto"
          >
            {/* Profile Section */}
            <motion.div variants={fadeIn} className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative inline-block mb-6"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-xl"></div>
                <Image
                  src={Me}
                  width={120}
                  height={120}
                  alt="Florian Gesell"
                  className="relative rounded-full border-4 border-background shadow-2xl"
                />
              </motion.div>

              <h1 className="text-3xl font-bold mb-2">Florian Gesell</h1>
              <p className="text-muted-foreground mb-4">IT Consultant & Full Stack Developer</p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Building digital experiences</span>
                <Coffee className="h-4 w-4 text-amber-500" />
              </div>
            </motion.div>

            {/* Main Links */}
            <motion.div variants={fadeIn} className="space-y-4 mb-8">
              <h2 className="text-xl font-semibold mb-6 text-center">Connect with me</h2>
              {links.map((link, _index) => (
                <motion.a
                  key={link.title}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={linkVariants}
                  whileHover="hover"
                  className={`block w-full p-4 rounded-xl border border-border/50 ${link.color} backdrop-blur-sm transition-all duration-300 hover:shadow-lg group`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg bg-background/50 ${link.iconColor}`}>
                        <link.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${link.textColor}`}>{link.title}</h3>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Projects Section */}
            <motion.div variants={fadeIn} className="space-y-4 mb-8">
              <h2 className="text-xl font-semibold mb-6 text-center">Featured Projects</h2>
              {projects.map((project, _index) => (
                <motion.a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={linkVariants}
                  whileHover="hover"
                  className={`block w-full p-4 rounded-xl border border-border/50 ${project.color} backdrop-blur-sm transition-all duration-300 hover:shadow-lg group`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg bg-background/50 ${project.iconColor}`}>
                        <project.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${project.textColor}`}>{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Status Card */}
            <motion.div
              variants={fadeIn}
              className="bg-card border border-border/50 rounded-xl p-6 text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-3 animate-pulse"></div>
                <h3 className="text-lg font-semibold">Current Status</h3>
              </div>
              <p className="text-2xl font-bold mb-2">Happily Employed</p>
              <p className="text-muted-foreground mb-4">
                Not accepting new opportunities, but always open to connecting with fellow
                developers!
              </p>
              <div className="flex flex-wrap justify-center gap-2">
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
            </motion.div>

            {/* Footer */}
            <motion.div
              variants={fadeIn}
              className="text-center mt-12 pt-8 border-t border-border/50"
            >
              <p className="text-sm text-muted-foreground">
                Thanks for visiting! Feel free to connect with me on any platform above.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  href="/datenschutz"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/impressum"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Legal Notice
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
