import Marquee from "react-fast-marquee";

const kTickerNodes = [
    "SUSTAINABLE DEVELOPMENT GOALS"
];

function TickerNode(aProps) {
    const { label } = aProps;
    return (
        <div className="text-5xl font-zen-dots whitespace-nowrap px-5">
        {label}
        </div>
    )
}

function handleTickerNodesMap(aItem, aIndex) {
    return (
        <TickerNode label={aItem} key={aIndex} />
    );
}

export default function TickerSection() {
    return (
        <Marquee className="overflow-hidden">
        {
            kTickerNodes.map(handleTickerNodesMap)
        }
        </Marquee>
    );
}