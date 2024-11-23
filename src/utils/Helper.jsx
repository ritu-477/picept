import broadcomImg from '../assets/images/webp/broadcom-image.webp';
import spacexImg from '../assets/images/webp/spacex-image.webp';
import pgImg from '../assets/images/webp/p&g-image.webp';
import iitImg from '../assets/images/webp/iit-image.webp';
import streeImg from '../assets/images/webp/stree-image.webp';
import ciscoImg from '../assets/images/webp/cisco-image.webp';
import trustImg from '../assets/images/webp/trust-image.webp';
import protectImg from '../assets/images/webp/protect-image.webp';
import complyImg from '../assets/images/webp/comply-image.webp';
import monitorImg from '../assets/images/webp/monitor-image.webp';
import evaluationImg from '../assets/images/webp/evaluation-image.webp';
import saasImg from '../assets/images/webp/saas-image.webp'
import apiImg from '../assets/images/webp/api-delivers.webp'
import aiPerformanceImg from '../assets/images/webp/ai-performance.webp'
import aiDeliversImg from '../assets/images/webp/ai-sleeps.webp'
import openFoldersImg from '../assets/images/webp/opening-folder.webp'


export const NAV_DATA_LINK = [
    { label: "Pricing", href: "#pricing" },
    { label: "Blogs", href: "#blogs" },
];
export const BUTTONS_DATA = ['Book a Demo', 'Join Our Waitlist'];

export const NUMBER_DATA = [
    {
        value: "+99%",
        description: "Cost",
        iconName: "downArrow",
    },

    {
        value: "+110%",
        description: "Speed",
        iconName: "upArrow",
    },

    {
        value: "-95%",
        description: "Latency",
        iconName: "downArrow",
    },

    {
        value: "15+",
        description: "Providers",
    },
];

export const REQUEST_DATA = [
    {
        value1: "100+",
        description1: "Cost",
    },

    {
        value1: "99+",
        description1: "Uptime",
    },

    {
        value1: "100%",
        description1: "Compliance",
        iconName1: "traced",
    },

    {
        value1: "5",
        description1: "Trust Score",
        iconName1: "star",
    },
];

export const CONTINUE_SLIDER_DATA = [
    { src: broadcomImg, alt: "Broadcom Logo", maxWidth: "312px"},
    { src: spacexImg, alt: "SpaceX Logo", maxWidth: "314px" },
    { src: pgImg, alt: "P&G Logo", maxWidth: "73px" },
    { src: iitImg, alt: "IIT Logo", maxWidth: "134px" },
    { src: streeImg, alt: "Stree Logo", maxWidth: "72.68px" },
    { src: ciscoImg, alt: "Cisco Logo", maxWidth: "145px" },
];

export const MISSION_CONTROL_CARDS = [
    {
        icon: "monitorEvery",
        cardText: "Monitor Every Endpoint",
        paragraph1: "Track Al interactions in real-time, catch issues early, and optimize performance with detailed analytics-all from a single dashboard.",
    },

    {
        icon: "policies",
        cardText: "Enforce Al Policies",
        paragraph1: "Set custom guardrails and stay compliant. Our automated system converts your policies into actionable. controls in minutes.",
    },

    {
        icon: "testing",
        cardText: "Continuous Testing",
        paragraph1: "Battle-test your Al with production-grade data. Catch issues before they impact users and maintain consistent performance.",
    },

    {
        icon: "team",
        cardText: "Team Collaboration",
        paragraph1: "Unite your Al initiatives. Manage policies, share insights, and coordinate responses from one central platform.",
    },
    
    {
        icon: "visibility",
        cardText: "Complete Visibility",
        paragraph1: "Make data-driven decisions with intuitive visualizations, real-time metrics, and comprehensive performance tracking.",
    },

    {
        icon: "alerts",
        cardText: "Smart Alerts",
        paragraph1: "Get instant notifications when it matters. Automated monitoring flags performance drops, compliance issues, and potential risks.",
    },
]

export const TAB_CONTENT = [
    {
        title: "Evaluate",
        icon: "evaluate",
        description: "From Policy to Production in Minutes",
        points: [
            "Upload any compliance document or internal policy",
            "AI automatically converts policies into evaluation criteria",
            "Continuous monitoring against your requirements",
        ],
        image: trustImg,
    },

    {
        title: "Protect",
        icon: "evaluate",
        description: "Real-time Risk Prevention That Never Sleeps",
        points: [
            "Detect and block harmful content before it reaches users",
            "Automatic protection against data leakage and privacy risks",
            "Custom guardrails that adapt to your security needs",
        ],
        image: protectImg, 
    },

    {
        title: "Comply",
        icon:"evaluate",
        description: "One-Click Compliance for Any Framework",
        points: [
            "Instant mapping to major standards (NIST, OWASP, MITRE)",
            "Automated compliance reporting and documentation",
            "Real-time alerts for any compliance violations",
        ],
        image: complyImg, 
    },

    {
        title: "Monitor",
        icon: "evaluate",
        description: "Trust Through Transparency",
        points: [
            "Live dashboard of all AI system behaviors",
            "Track performance, safety, and compliance metrics",
            "Detailed audit trails for every evaluation and action",
        ],
        image: monitorImg, 
    },
    
    {
        title: "Evaluation API",
        icon: "evaluate",
        description: "Evaluation API ",
        points: [
            "Build custom evaluations for advanced LLM capabilities - from RAG and function calling to tool interactions - using our intuitive SDK interface.",
        ],
        image: evaluationImg, 
    },
];

export const TAB_DATA = [
    {
        id: 'Quality',
        heading: 'Router 1 vs GPT4',
        stats: [
            { label: 'Quality', value: '+7%', iconName: 'redClick' },
            { label: 'Cost', value: '-89%', iconName: 'redClick' },
            { label: 'Speed', value: '+251%', iconName: 'redClick' },
            { label: 'Latency', value: '-35%', iconName: 'redClick' },
        ],
    },
    {
        id: 'Cost',
        heading: 'Cost Analysis',
        stats: [
            { label: 'Quality', value: '+3%', iconName: 'redClick' },
            { label: 'Cost', value: '-75%', iconName: 'redClick' },
            { label: 'Speed', value: '+150%', iconName: 'redClick' },
            { label: 'Latency', value: '-25%', iconName: 'redClick' },
        ],
    },
    {
        id: 'Speed',
        heading: 'Speed Performance',
        stats: [
            { label: 'Quality', value: '+5%', iconName: 'redClick' },
            { label: 'Cost', value: '-50%', iconName: 'redClick' },
            { label: 'Speed', value: '+300%', iconName: 'redClick' },
            { label: 'Latency', value: '-20%', iconName: 'redClick' },
        ],
    },
    {
        id: 'Latency',
        heading: 'Latency Comparison',
        stats: [
            { label: 'Quality', value: '+2%', iconName: 'redClick' },
            { label: 'Cost', value: '-40%', iconName: 'redClick' },
            { label: 'Speed', value: '+100%', iconName: 'redClick' },
            { label: 'Latency', value: '-10%', iconName: 'redClick' },
        ],
    },
];

export const PICEPT_DELIVER_DATA_LIST = [
    {
        text: "Blazing fast & efficient Routing",
        title: "Blazing fast & efficient Routing",
        description:
            "Our service executes in just 10ms, slashes API costs by up to 99%, boosts speed, and reduces overall latency.",
        image: saasImg,
    },

    {
        text: "Trust Through Intelligence",
        title: "Trust Through Intelligence",
        description:
            "Deploy compliant AI in minutes, not months. Reduce compliance overhead by 90%.",
        image: openFoldersImg,
    },
    {
        text: "One API, Unlimited Potential",
        title: "One API, Unlimited Potential",
        description:
            "Access 100+ AI models through a single endpoint. Manage access at user and organization levels and access new models in no time.",
        image: apiImg,
    },
    {
        text: "AI Performance, Guaranteed",
        title: "AI Performance, Guaranteed",
        description:
            "Detect issues, validate outputs, and ensure quality automatically.",
        image: aiPerformanceImg,
    },
    {
        text: "AI Observability That Never Sleeps",
        title: "AI Observability That Never Sleeps",
        description:
            "Full visibility into AI operations. Track performance, costs, and compliance in real-time.",
        image: aiDeliversImg,
    },
];

export const PICEPT_RATED_DATA = [
    {
        id: 1,
        rating: 5,
        feedback:
            "Picept slashed our LLM costs by routing requests to the most affordable models without compromising quality.",
        name: "John Rivera",
        role: "Web Developer",
        image: require("../assets/images/webp/john-web-developer.webp"),
    },

    {
        id: 2,
        rating: 5,
        feedback:
            "The ability to automatically convert our policies into evaluation criteria has transformed how we manage AI safety. What used to take weeks now takes minutes.",
        name: "Sarah Chen",
        role: "Chief Security Officer",
        image: require("../assets/images/webp/sarah-chief.webp"),
    },

    {
        id: 3,
        rating: 5,
        feedback:
            "Real-time protection against harmful content gives us peace of mind. Their system caught several potential data leaks that our previous solution missed.",
        name: "Michael Thompson",
        role: "Head of Risk Management",
        image: require("../assets/images/webp/michael-head.webp"),
    },

    {
        id: 1,
        rating: 5,
        feedback:
            "Picept slashed our LLM costs by routing requests to the most affordable models without compromising quality.",
        name: "John Rivera",
        role: "Web Developer",
        image: require("../assets/images/webp/john-web-developer.webp"),
    },

    {
        id: 2,
        rating: 5,
        feedback:
            "The ability to automatically convert our policies into evaluation criteria has transformed how we manage AI safety. What used to take weeks now takes minutes.",
        name: "Sarah Chen",
        role: "Chief Security Officer",
        image: require("../assets/images/webp/sarah-chief.webp"),
    },
    
    {
        id: 3,
        rating: 5,
        feedback:
            "Real-time protection against harmful content gives us peace of mind. Their system caught several potential data leaks that our previous solution missed.",
        name: "Michael Thompson",
        role: "Head of Risk Management",
        image: require("../assets/images/webp/michael-head.webp"),
    },
    
];

export const FORM_DATA = [
    {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'Enter your first name',
        validation: { required: 'First name is required' },
    },

    {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Enter your last name',
        validation: { required: 'Last name is required' },
    },

    {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
        validation: {
            required: 'Email is required',
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
            },
        },
    },

    {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'Enter your message',
        validation: { required: 'Message is required' },
    },
];

 export const FOOTER_DATA = [
    {
        title: 'Product',
        links: [
            { text: 'Smart Routing', href: '' },
            { text: 'Universal API', href: '' },
            { text: 'LLM Observability', href: '' },
        ],
    },
    {
        title: 'Company',
        links: [
            { text: 'Pricing', href: '' },
            { text: 'About Us', href: '' },
            { text: 'Blogs', href: '' },
            { text: 'Book A Demo', href: '' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { text: 'Careers', href: '' },
            { text: 'Community', href: '' },
            { text: 'Terms & Conditions', href: '' },
            { text: 'Privacy Policy', href: '' },
        ],
    },
];

export const FOOTER_LINKS = [
    { href: 'https://github.com/', iconName: 'github' },
    { href: 'https://x.com/i/flow/login', iconName: 'twitter' },
    { href: 'https://www.linkedin.com/', iconName: 'linkedin' },
    { href: 'https://www.youtube.com/', iconName: 'youtube' },
];

export const PRICING_PLANS = [
    {
        id: 1,
        type: "Started",
        price: "$0/ Month",
        tag: "Free",
        tagClass: "bg-semi-transparent-gray",
        iconName: "rocket",
        iconClass: "bg-jet-black",
        features: [
            "$1 free credit",
            "Free unlimited universal API calls",
            "$0.0005 / request for Smart Routing",
            "$0.0005 / request for Tracing",
            "LLM observability",
            "Automatic failover and retry",
            "Automatic load balancing",
            "Role-Based Access Control",
            "Prompt Caching",
            "Key & Provider management",
            "20 days log retention",
            "Community support",
        ],
        buttonText: "Get Started",
        buttonClass: "bg-orange",
    },
    {
        id: 2,
        type: "PRO",
        price: "$100/ Month",
        tag: "POPULAR",
        tagClass: "bg-vivid-green-transparent",
        iconName: "dash",
        iconClass: "bg-orange",
        features: [
            "$1 free credit",
            "Free unlimited universal API calls",
            "20% cheaper per-request fees",
            "$0.0004 / request for Smart Routing",
            "$0.0004 / request for Tracing",
            "$0.0008 / request for Router Training & Evaluations",
            "LLM observability",
            "Automatic failover and retry",
            "Automatic load balancing",
            "Role-Based Access Control",
            "Prompt Caching",
            "60 Days log retention",
            "Key & Provider Management",
            "Unlimited Organizations",
            "Dedicated support channel",
        ],
        buttonText: "Get Started",
        buttonClass: "bg-orange",
    },
];


