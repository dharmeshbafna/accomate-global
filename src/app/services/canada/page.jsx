import { Breadcrumb } from "@/components/other";
import { Canada, Softwares } from "@/components/services";

export const metadata = {
    title: 'Canada | Services | Accomate Global',
    icons: {
        icon: '/n_icon.png'
    },
    description: `Canada services includes accounting, tax complication, etc.`,
}

export default function CANADA() {
    return (
        <div>
            <Breadcrumb />
            <Canada />
            <Softwares />
        </div>
    )
}