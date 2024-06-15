import { Breadcrumb } from "@/components/other";
import { CareerComp } from "@/components/career";

export const metadata = {
    title: 'Career | Accomate Global',
    icons: {
        icon: '/n_icon.png'
    }
}

export default function Career () {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <CareerComp />
        </div>
    )
}