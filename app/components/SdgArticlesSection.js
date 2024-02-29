import Image from 'next/image'


function MainTitle() {
    return (
        <div className="article-top my-20 font ">
            
            <div class="relative flex items-center">
                <span class="flex-shrink text-gray-400 mr-5"> <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">More from the UN </span></h1>
                </span>
                <div className="flex-grow" style={{ borderTop: '5px solid gray' }}></div>
            </div> 
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Featured Stories across the United Nations and our worldwide family or agencies, funds, and Programmes.</p>

        </div>
    );
}

function ArtileComponent1(){
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
    return (
        <article class="my-10">
            <div class="container flex-row flex gap-10">
                <div class="image">
                {/* <Image
                    loader={imageLoader}
                    src="me.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    /> */}
                    <img class="object-cover h-500 w-300" src="https://picsum.photos/536/354" alt="Article Image" />
                </div>
                <div class="text">
                    <div className="article-title my-3">
                        <h2 class="text-5xl font-extrabold dark:text-white"><a href="#">Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all</a></h2>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function SdgArticlesSection() {
    return (
        <div className="article-main w-full">

            {/* <div class="relative flex py-5 items-center">
                <span class="flex-shrink mx-4 text-gray-400">Content</span>
                <div class="flex-grow border-t border-gray-400"></div>
            </div> */}

            <MainTitle />
            <ArticleComponent />
            <ArticleComponent />
        </div>
    );
}