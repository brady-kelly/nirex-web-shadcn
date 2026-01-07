import { Building, Cloud, GraduationCap, HeartPulse, Landmark, ShoppingCart } from "lucide-react";
import type { UseCase4Props } from "./usecase4";

export const usecase4Demo: UseCase4Props = {
    badge: { label: "Industries", variant: "secondary" },
    heading: "Trusted Across Industries",
    description:
        "See how leading companies in various sectors leverage our platform to drive growth and innovation.",
    columns: 3,
    items: [
        {
            id: "healthcare",
            icon: <HeartPulse className="size-5" />,
            title: "Healthcare",
            description:
                "HIPAA-compliant solutions for patient data management, telehealth, and medical records.",
            image: {
                src: "https://images.unsplash.com/photo-1621253339533-fb93d1e5e0ab?q=80&w=3111&auto=format&fit=crop",
                alt: "Healthcare",
            },
            features: [
                { id: "h1", text: "HIPAA compliant" },
                { id: "h2", text: "Telehealth ready" },
            ],
        },
        {
            id: "fintech",
            icon: <Landmark className="size-5" />,
            title: "Financial Services",
            description:
                "Secure banking solutions with real-time fraud detection and regulatory compliance built-in.",
            image: {
                src: "https://images.unsplash.com/photo-1661155636384-3ce2911d9772?q=80&w=2950&auto=format&fit=crop",
                alt: "Finance",
            },
            features: [
                { id: "f1", text: "Bank-grade security" },
                { id: "f2", text: "SOC 2 Type II" },
            ],
        },
        {
            id: "ecommerce",
            icon: <ShoppingCart className="size-5" />,
            title: "E-Commerce",
            description:
                "Scalable storefronts with inventory management, payment processing, and analytics.",
            image: {
                src: "https://images.unsplash.com/photo-1561133350-0a798c546e93?q=80&w=3132&auto=format&fit=crop",
                alt: "E-commerce",
            },
            features: [
                { id: "e1", text: "Multi-payment support" },
                { id: "e2", text: "Inventory sync" },
            ],
        },
        {
            id: "education",
            icon: <GraduationCap className="size-5" />,
            title: "Education",
            description:
                "Learning management systems with course creation, student tracking, and certification.",
            image: {
                src: "https://images.unsplash.com/photo-1675894661450-270b00dea37e?q=80&w=2874&auto=format&fit=crop",
                alt: "Education",
            },
            features: [
                { id: "ed1", text: "Course builder" },
                { id: "ed2", text: "Certifications" },
            ],
        },
        {
            id: "saas",
            icon: <Cloud className="size-5" />,
            title: "SaaS",
            description:
                "Build and scale your software products with multi-tenancy, billing, and user management.",
            image: {
                src: "https://images.unsplash.com/photo-1577108786363-f273694ff170?q=80&w=2940&auto=format&fit=crop",
                alt: "SaaS",
            },
            features: [
                { id: "s1", text: "Multi-tenant" },
                { id: "s2", text: "Billing integration" },
            ],
        },
        {
            id: "real-estate",
            icon: <Building className="size-5" />,
            title: "Real Estate",
            description:
                "Property management systems with listing management, tenant management, and rental analytics.",
            image: {
                src: "https://images.unsplash.com/photo-1650953745406-41602ae284e3?q=80&w=2940&auto=format&fit=crop",
                alt: "Real Estate",
            },
            features: [
                { id: "r1", text: "Listing management" },
                { id: "r2", text: "Tenant management" },
            ],
        },
    ],
};