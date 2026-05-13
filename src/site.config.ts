import { withBase } from "./utils/helpers";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    icon?: string;
};

export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type Blog = {
    description?: string;
};

export type ContactInfo = {
    title?: string;
    text?: string;
    email?: {
        text?: string;
        href?: string;
        email?: string;
    };
    socialNote?: string;
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
    blog?: Blog;
    postsPerPage?: number;
    recentPostLimit: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://bittorbarriola9.github.io',
    title: 'bittorbarriola9',
    description: 'A personal site built with Astro.js, Tailwind CSS & love by Bittor Barriola',
    image: {
        src: '/logo_BB.png',
        alt: '👨🏽‍💻 bittorbarriola9 - My personal site, created by Bittor Barriola.'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: withBase('/')
        },
        {
            text: 'Blog',
            href: withBase('/blog')
        },
        {
            text: 'Tags',
            href: withBase('/tags')
        },
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        },
        {
            text: 'RSS Feed',
            href: withBase('/rss.xml')
        },
                {
            text: 'Sitemap',
            href: withBase('/sitemap-index.xml')
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'http://github.com/bittorbarriola9'
        },
        {
            text: 'LinkedIn',
            href: 'http://linkedin.com/in/bittorbarriolaartieda'
        },
        {
            text: 'Instagram',
            href: 'http://instagram.com/bittorbarriola9'
        },
        {
            text: 'TikTok',
            href: 'http://tiktok.com/@bittorbarriola9'
        },
        {
            text: 'Facebook',
            href: 'http://facebook.com/bittorbarriola9'
        },
        {
            text: 'X',
            href: 'http://x.com/bittorbarriola9'
        }
    ],
    hero: {
        eyebrowText: '@bittorbarriola9',
        title: 'Bittor Barriola Artieda',
        text: 
            `🚀 Sport junkie, proud geek and certified workaholic.
            ✅ Tell me the plan and I will probably commit.
            ☕️ Powered by caffeine.`,
        image: {
            src: '/Home-BittorHelloMemoji.png',
            alt: ''
        },
        actions: [
            {
                text: 'GitHub',
                href: 'http://github.com/bittorbarriola9',
                icon: '/social-icons/github.png'
            },
            {
                text: 'LinkedIn',
                href: 'http://linkedin.com/in/bittorbarriolaartieda',
                icon: '/social-icons/linkedin.png'
            },
            {
                text: 'Instagram',
                href: 'http://instagram.com/bittorbarriola9',
                icon: '/social-icons/instagram.png'
            },
            {
                text: 'TikTok',
                href: 'http://tiktok.com/@bittorbarriola9',
                icon: '/social-icons/tiktok.png'
            },
            {
                text: 'Facebook',
                href: 'http://facebook.com/bittorbarriola9',
                icon: '/social-icons/facebook.png'
            },
            {
                text: 'X',
                href: 'http://x.com/bittorbarriola9',
                icon: '/social-icons/x.png'
            }
        ]
    },
    about: {
        title: 'About',
        text: 'Space Ahead is a blog about space exploration and travel. It is written by Astro-naut Sid, a space explorer at Beyond Earth. Sid is known for his love of adventure and his insatiable curiosity about the universe. He has explored countless planets, discovered new life forms, and made friends with aliens along the way. 🚀',
    },
    contactInfo: {
        title: 'Contact',
        text: "👋 Hi there!\n\nIf you've made it this far, congrats, you're officially more curious than 90% of internet visitors. ☕\n\nWhether you want to chat about tech, AI, product, automations, side projects, sports, or just send a random meme that absolutely had to be shared, I'm your guy.\n\nIf you prefer something more direct and less mysterious than smoke signals, you can drop me a line through any of these channels:",
        email: {
            text: "📬 Email me\n\nWorst case: a couple of espressos later, you'll have an answer.",
            href: "mailto:bittorbarriola9@gmail.com",
            email: "bittorbarriola9@gmail.com"
        },
        socialNote: "📲 Or if email feels too 2005, slide into any of my socials below — DMs are open and judgment-free (mostly). Whatever channel works best for you, works for me.",
        socialProfiles: [
            {
            text: 'GitHub',
            href: 'http://github.com/bittorbarriola9'
            },
            {
            text: 'LinkedIn',
            href: 'http://linkedin.com/in/bittorbarriolaartieda'
            },
            {
            text: 'Instagram',
            href: 'http://instagram.com/bittorbarriola9'
            },
            {
            text: 'TikTok',
            href: 'http://tiktok.com/@bittorbarriola9'
            },
            {
            text: 'Facebook',
            href: 'http://facebook.com/bittorbarriola9'
            },
            {
            text: 'X',
            href: 'http://x.com/bittorbarriola9'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Space Ahead',
        text: 'One update per week. All the latest stories in your inbox.',
        formUrl: '#'
    },
    blog: {
        description: "Read about my space adventures, explorations and the aliens I've met on my journeys."
    },
    postsPerPage: 6,
    recentPostLimit: 2
};

export default siteConfig;
