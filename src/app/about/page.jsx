import { Breadcrumb } from "@/components/other";
import {
    Whoweare,
    MissionVision
} from "@/components/about";

export const metadata = {
    title: 'About | Accomate Global',
    icons: {
        icon: '/icon.png'
    }
}

export default function AboutPage() {
    return (
        <div>
            <Breadcrumb />
            <Whoweare />
            <MissionVision />
        </div>
    )
}