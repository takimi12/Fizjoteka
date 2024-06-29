import Nauka from "./components/NaukaNoszenia";
import Asymetria from "./components/Asymetriaulozeniowa"
import Rozwoj from "./components/RozwojDziecka"

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
    if (params.category === 'Nauka-noszenia') {
        return [
            // In Next.js, generateStaticParams should return static params for dynamic routes, not React components
            { category: 'Nauka-noszenia' }
        ];
    }
    if (params.category === 'Rozwoj-dziecka') {
        return [
            { category: 'Rozwoj-dziecka' }
        ];
    }
    if (params.category === 'Asymetria-ulozeniowa') {
        return [
            { category: 'Asymetria-ułozeniowa' }
        ];
    }

    return [];
}

export default function Page({ params }: { params: { category: string } }) {
    let content;
    
    if (params.category === 'Nauka-noszenia') {
        content = <Nauka />;
    } else if (params.category === 'Rozwoj-dziecka') {
        content = <Rozwoj />; // Replace with actual component or content
    } else if (params.category === 'Asymetria-ulozeniowa') {
        content = <Asymetria />; // Replace with actual component or content
    } else {
        content = <div>Default content or 404 page</div>;
    }

    return (
        <div>
            {content}

        </div>
    );
}
