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
    },
    description: `Accomate Global is the brainchild of seasoned CAs and CPAs. It is backed by industry titans “CA Rohit K Choksi”(Co-Founder) and “CA, CPA (US) Vartik R Choksi (Partner) of G K Choksi & Co., a leading taxation, audit & assurance firm in India with a 50-year legacy since 1972.`
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