import { Breadcrumb } from "@/components/other";
import { Usa, Softwares } from "@/components/services";

export const metadata = {
    title: 'USA | Services | Accomate Global',
    icons: {
        icon: '/n_icon.png'
    },
    description: `USA services includes accounting, tax complication, etc.`,
}

export default function USA() {
    return (
        <div>
            <Breadcrumb />
            <Usa />
            <Softwares />
        </div>
    )
}