import { Breadcrumb } from "@/components/other";
import {
    Whoweare,
    MissionVision,
    Team,
    Director
} from "@/components/about";

export const metadata = {
    title: 'About | Accomate Global',
    icons: {
        icon: '/n_icon.png'
    }
}

export default function AboutPage() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <Whoweare />
            <MissionVision />
            <Director />
            {/* <Team /> */}
        </div>
    )
}