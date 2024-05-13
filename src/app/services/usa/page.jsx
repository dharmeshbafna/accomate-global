import { Breadcrumb } from "@/components/other";
import { Usa } from "@/components/services";

export const metadata = {
    title: 'USA | Services | Accomate Global',
    icons: {
        icon: '/n_icon.png'
    }
}

export default function USA() {
    return (
        <div>
            <Breadcrumb />
            <Usa />
        </div>
    )
}