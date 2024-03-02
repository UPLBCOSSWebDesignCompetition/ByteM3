import Image from 'next/image'

// function to say "see more"  when character length is more than 100
function seeMore(text, length) {
    if (text.length > length) {
        return text.substring(0, length);
    }
    return text;
}

function MainTitle() {
    return (
        <div className="article-top my-20 font ">
            
            <div class="relative flex items-center">
                <span class="flex-shrink text-gray-400 mr-5"> <h1 class="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">More from the UN </span></h1>
                </span>
                <div className="flex-grow" style={{ borderTop: '5px solid gray' }}></div>
            </div> 
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Featured Stories across the United Nations and our worldwide family or agencies, funds, and Programmes.</p>
        </div>
    );
}

function ArticleComponent1(){
    return (
        <div class ="grid gap-8 lg:grid-cols-2">
            <article class="px-10 mb-10">
                <div className="article-title my-3">
                    <h2 class="text-5xl font-extrabold dark:text-white"><a href="#">Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all</a></h2>
                </div>
                <div className="article-date my-4">
                    <span class="font-semibold text-sm text-gray-500 dark:text-gray-400">14 days ago</span>
                </div>
                <div className="article-image">
                    <img class="object-cover h-500 w-300" src="https://picsum.photos/536/354" alt="Article Image" />
                </div>
                
            </article>

            <article class="px-10">
                <div className="article-title my-3">
                    <h2 class="text-5xl font-extrabold dark:text-white"><a href="#">Achieve gender equality and empower all women and girls</a></h2>
                </div>
                <div className="article-date my-4">
                    <span class="font-semibold text-sm text-gray-500 dark:text-gray-400">14 days ago</span>
                </div>
                <div className="article-image">
                    <img class="object-cover h-500 w-300" src="https://picsum.photos/536/354" alt="Article Image" />
                </div>
            </article>
        </div>
    );
}

function ArticleComponent(){
    const articleContent = "The world faces an imminent climate crisis, with current actions insufficient to prevent catastrophic impacts. Urgent and transformative measures are needed within this decade to significantly reduce greenhouse gas emissions across all sectors to meet the 1.5°C target. Failure to act risks the lives of billions of people, leading to worsening heatwaves, droughts, floods, wildfires, sea-level rise, and famines. Emissions must be nearly halved by 2030 to combat climate change effectively. Despite some progress in disaster risk reduction strategies and climate finance, global temperatures have already exceeded 1.1°C, and emissions continue to rise, surpassing pre-industrial levels. Furthermore, climate change education remains inadequate, with a significant portion of national curriculum frameworks lacking mention of climate change, highlighting the urgent need for comprehensive climate action and education.";

    return (
        <article class="my-10">
            <div class="container flex-row flex gap-10 grid lg:grid-cols-2">
                <div class="image">
                    <Image
                        src="/plant.jpg"
                        alt="Plant photo"
                        width={750}
                        height={500}
                        priority
                    />
                </div>
                <div class="text">
                    <div className="article-title my-3">
                        <h2 class="text-5xl font-extrabold dark:text-white"><a href="#">Take urgent action to combat climate change and its impacts</a></h2>
                    </div>
                    <div className="article-date my-4">
                        <span class="font-semibold text-sm text-gray-500 dark:text-gray-400">14 days ago</span>
                    </div>
                    <div className="article-content my-4">
                        <p class="text-lg text-justify font-normal text-gray-500 dark:text-gray-400">{seeMore(articleContent, 650)} <span className="underline text-blue-500 hover:text-blue-700">See more...</span></p>
                    </div>
                </div>
            </div>
        </article>
    );
}

function ArticleBottom(){
    return (
        <div className="article-top my-20 font ">
            
            <div class="relative flex items-center">
                <div className="flex-grow" style={{ borderTop: '5px solid gray' }}></div>
                    <span class="flex-shrink text-gray-400 ml-5 mr-5"> <h3 class="mb-1 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Load More</span></h3>
                    </span>
                <div className="flex-grow" style={{ borderTop: '5px solid gray' }}></div>
            </div> 

        </div>
    );
}

export default function SdgArticlesSection() {
    return (
        <div className="article-main w-full">
            <MainTitle />
            <ArticleComponent />
            <ArticleComponent />
            <ArticleBottom />
        </div>
    );
}