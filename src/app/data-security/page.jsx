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
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <Infrastructure />
        </div>
    )
}