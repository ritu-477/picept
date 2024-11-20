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

