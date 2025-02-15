/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import logo from "../@content/assets/images/TheDevCasa_Logo@2x.png";
import ServicesSection from "@/components/ServicesSection";
import "../styles/page.scss";

const Page = () => {
    return (
        <>
            <div className="page-container">
                {/* Logo */}
                <div className="logo-container">
                    <Image src={logo || "/placeholder.svg"} alt="logo" height={89} width={83} />
                </div>

                {/* Navbar */}
                <nav className="navbar">
                    <div className="nav-content">
                        <ThemeToggle />
                        <span>EN</span>
                        <span>About</span>
                        <span>Work</span>
                        <span>Pricing</span>
                        <button className="get-started">
                            <div className="icon-container">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <p>GET STARTED</p>
                        </button>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="main-content">
                    <div className="content-wrapper">
                        <div className="subtitle">// ENGINEERED DIGITAL TRANSFORMATION</div>
                        <h1>Custom Development</h1>
                        <h2>Seamless Design</h2>
                        <h3>Powerful Results</h3>
                        <p>
                            Your partner in custom development and design that <span>transforms your digital landscape.</span>
                        </p>
                        <div className="button-group">
                            <button className="primary-button">
                                Let&apos;s talk
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <button className="secondary-button">
                                Schedule a consultation
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </main>

                {/* Bottom Blob */}
                <div className="bottom-blob" />
            </div>
            <ServicesSection />
        </>
    );
};

export default Page;
