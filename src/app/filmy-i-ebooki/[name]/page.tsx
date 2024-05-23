import Second from "../../kurs-noszenia/components/Second";
import Seven from "../../kurs-noszenia/components/Seven";
import Eleven from "../../../components/Homepage/Contact/page";
import Ten from "../../kurs-noszenia/components/Eight";
import Nine from "../../kurs-noszenia/components/Thirteen"
// import Eight from "../../kurs-noszenia/components/Ten";
import Eight from "../../kurs-noszenia/components/Nine";

export default function Page({ params }: { params: { name: string, } }) {
    return (
        <>
        {/* <Second />
        <Seven /> */}
        {/* <Eight /> */}
        <Eight />
        <Nine />
        <Ten />
        <Eleven />
        </>
    );
}