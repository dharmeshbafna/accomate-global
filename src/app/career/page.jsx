import { Breadcrumb } from "@/components/other";
import { CareerComp } from "@/components/career";

export const metadata = {
    title: 'Career | Accomate Global',
    icons: {
        icon: '/n_icon.png'
    },
    description: `We are dedicated to nurturing talent and providing opportunities for professional development.`
}

export default function Career () {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <CareerComp />
        </div>
    )
}