import { Breadcrumb } from "@/components/other";
import { Australia, Softwares } from "@/components/services";

export const metadata = {
    title: 'Australia | Services | Accomate Global',
    icons: {
        icon: '/n_icon.png'
    }
}

export default function AUSTRALIA() {
    return (
        <div>
            <Breadcrumb />
            <Australia />
            <Softwares />
        </div>
    )
}