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
        <div>
            <Breadcrumb />
            <CareerComp />
        </div>
    )
}