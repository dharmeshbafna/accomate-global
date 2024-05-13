import { Breadcrumb } from "@/components/other";
import { Infrastructure } from "@/components/infrastructure";

export const metadata = {
    title: 'Infrastructure | Accomate Global',
    icons: {
        icon: '/n_icon.png'
    }
}

export default function INFRA() {
    return (
        <div>
            <Breadcrumb />
            <Infrastructure />
        </div>
    )
}