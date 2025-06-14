
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Timeline } from "@/components/Timeline";
import {TechStack} from "@/components/TechStack"
import { Button } from "@/components/ui/button";
import {ContactForm} from "@/components/ContactForm"
import { Mail, Twitter, Linkedin } from "lucide-react";
import x from "../../public/images/x.png"
import mail from "../../public/images/mail.png"
import linkedin from "../../public/images/linkedin.png"
import github from "../../public/images/github.png"
import { useState } from "react";




const Index = () => {
  const title = "Hello World";

  return (
    <ThemeProvider>
      <div className="min-h-screen max-w-full bg-[url('/images/gtav.jpg')] bg-cover bg-center bg-fixed md:max-w-lg lg:max-w-full ">
        <Navbar />

        <main className="container mx-auto px-4 pt-24">
          <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
            <h1 className="pixel-text text-[30px] sm:text-4xl md:text-6xl mb-4 sm:mb-6 text-white pixel-letter flex">
              {title.split("").map((letter, index) => (
                <span
                  key={index}
                  className="pixel-letter inline-block"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    textShadow: "5px 5px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
              <span style={{ color: "#8df2f7" }} className="inline-block">
                _
              </span>
            </h1>
            <p
              className="max-w-2xl text-lg mb-12 text-white/80 animate-fade-in delay-100"
              style={{
                fontWeight: 800,
                color: "#FFF",
                textShadow: "5px 5px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              I’m a software engineer exlporing the 
              world of Blockchains, AI and Web development.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a
                href="https://twitter.com/kunalpaliwall13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={"/images/x.png"} style={{ color: "white", height: "28px" }}></img>
              </a>
              <a
                href="mailto:kunalpaliwal2003@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={"/images/mail.png"}
                  style={{ color: "white", height: "28px" }}
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/in/kunal-paliwal-431072237/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={"/images/linkedin.png"}
                  style={{ color: "white", height: "28px" }}
                ></img>
              </a>
              <a
                href="https://www.github.com/kunalpaliwal13/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={"/images/github.png"}
                  style={{ color: "white", height: "28px" }}
                ></img>
              </a>
              <a
                href="https://medium.com/@kunalpaliwal13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={"/images/medium.png"}
                  style={{ color: "white", height: "28px" }}
                ></img>
              </a>
            </div>
          </section>

          <section className="py-20">
            <h2 className="pixel-text text-2xl mb-12 text-center text-white">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              <ProjectCard
                title="Fieldly"
                description="Fieldly is a smart farming assistant that helps farmers choose the right crops, recommends fertilizers (including natural alternatives), and provides real-time weather updates. Powered by data and built for ease."
                devstack={[
                  "Flask",
                  "Python",
                  "React-JS",
                  "Gemini API",
                  "Pytorch",
                  "Linear-Regression",
                ]}
                image="/images/fieldly.png"
                url="https://fieldly-ai.vercel.app/"
              />
              <ProjectCard
                title="InvoSol"
                description="Generate and manage crypto invoices effortlessly on Solana! Create professional invoices, track payments in real-time, and enjoy low transaction fees with blockchain speed and security. Simplify your billing process with a decentralized, transparent solution."
                devstack={[
                  "ReactJS",
                  "Solana-web3.js",
                ]}
                image="/images/invosol.png"
                url="https://invo-sol.vercel.app/"
              />
              <ProjectCard
                title="Calpred"
                description="Track your fitness progress with ease! Log your exercise sessions, predict the calories burned for each workout, and explore your data through an interactive dashboard. Get personalized insights to optimize your fitness journey and stay motivated."
                devstack={[
                  "Flask",
                  "HTML-CSS-JS",
                  "XGBoost",
                  "Tpot",
                  "Sqllite",
                ]}
                image="/images/calpred.png"
                url="https://caloriepredictionproject.onrender.com"
              />
              <ProjectCard
                title="SafeSpace AI"
                description="Track your mental health with ease! Journal your moods, get personalized mental wellness exercises, and explore your emotional trends through an interactive dashboard. Receive AI-powered insights to better understand your mind, build healthier habits, and stay emotionally balanced."
                devstack={[
                  "Flask",
                  "ReactJS",
                  "NodeJS",
                  "Gemini Flash 1.5 API",
                  "MongoDB",
                ]}
                image="/images/safespace.png"
                url="https://safespacefrontend.vercel.app/"
              />
              <ProjectCard
                title="Food Demand Forecast (Unhosted)"
                description="Our project addresses the challenge of unpredictable demand in meal delivery by forecasting the demand for different meal types in the coming weeks, helping optimize raw material procurement and staffing."
                devstack={[
                  "Python",
                  "Flask",
                  "Kafka",
                  "Pyspark",
                  "DVC",
                  "Sqllite",
                  "MongoDB",
                  "HTML-CSS-JS",
                  "SKlearn",
                ]}
                image="/images/fooddemand.png"
                url="https://github.com/kunalpaliwal13/Food-Demand-Forecasting-MLOps-with-Data-Pipeline"
              />
            </div>
          </section>

          <div style={{ width: "95%", marginLeft: "2.5%" }}>
            <TechStack />
          </div>

          <section className="py-20">
            <h2 className="pixel-text text-2xl mb-12 text-center text-white">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <Timeline />
            </div>
          </section>

          <section className="py-20">
            <h2
              className="pixel-text text-2xl mb-12 text-center text-white"
              style={{ textShadow: "5px 5px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Get in touch
            </h2>
            <div
              className=" mx-auto glass rounded-lg p-8"
              style={{ width: "70%" }}
            >
              <p className="text-center mb-8">
                Feel free to reach out! I'm always open to discussing new
                projects and opportunities.
              </p>
              <ContactForm />
              
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
