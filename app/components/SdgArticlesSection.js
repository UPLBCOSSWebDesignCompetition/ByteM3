"use client";

import Image from "next/image";
import articleData  from "../data/articles";
import { AnimationOnScroll } from "react-animation-on-scroll";

// function to say "see more"  when character length is more than 100
function seeMore(text, length) {
    if (text.length > length) {
        return text.substring(0, length);
    }
    return text;
}

function MainTitle() {
    return (
        <div className="article-top my-20 font">
            
            <div className="relative flex items-center">
                <span className="flex-shrink text-gray-400 mr-5"> <h1 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-300 from-slate-50">More from the UN </span></h1>
                </span>
                <div
                    className="flex-grow"
                    style={{ borderTop: "5px solid gray" }}></div>
            </div> 
            <p className="text-lg font-normal  text-gray-500 lg:text-xl dark:text-gray-400">Featured Stories across the United Nations and our worldwide family or agencies, funds, and Programmes.</p>
        </div>
    );
}

function ArticleComponent() {
    return (
        <div>
            {articleData.map((article, index) => {
                const articleContent = article.article_description;
                return (
                    <AnimationOnScroll
                        animateIn="animate__fadeInLeft"
                        key={index}>
                        <article
                            key={index}
                            className="my-10">
                            <div className="container flex-row gap-10 grid lg:grid-cols-2">
                                <div className="image cursor-pointer">
                                    <img
                                        className = "rounded-3xl"
                                        src={article.article_image}
                                        alt="Plant photo"
                                        width={750}
                                        height={500}
                                    />
                                </div>
                                <div className="text">
                                    <div className="article-title mb-3">
                                        <h2 className="text-3xl font-extrabold  dark:text-white">
                                            <a href="#">{article.article_title}</a>
                                        </h2>
                                    </div>
                                    <div className="article-date  my-4">
                                        <span className="font-semibold text-sm text-gray-500 dark:text-gray-400">{article.article_date}</span>
                                    </div>
                                    <div className="article-content  my-4">
                                        <p className="text-lg text-justify font-normal text-gray-500 dark:text-gray-400">{seeMore(articleContent, 30)}… <span className="underline text-gray-300 cursor-pointer">See more...</span></p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </AnimationOnScroll>
                );
            })}
        </div>
    );
}

function ArticleBottom(){
    return (
        <div className="article-top my-20 font">
            
            <div className="relative flex items-center cursor-pointer">
                <div
                    className="flex-grow"
                    style={{ borderTop: "5px solid gray" }}></div>
                <span className="flex-shrink text-gray-400 ml-5 mr-5"> <h3 className="mb-1 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-zinc-100 from-slate-50">Load More</span></h3>
                </span>
                <div
                    className="flex-grow"
                    style={{ borderTop: "5px solid gray" }}></div>
            </div> 

        </div>
    );
}

export default function SdgArticlesSection() {
    return (
        <div className="article-main w-full font-zen-dots">
            <MainTitle />
            <ArticleComponent />
            <ArticleBottom />
        </div>
    );
}