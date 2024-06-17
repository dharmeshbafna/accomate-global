import { Breadcrumb } from "@/components/other";
import { Infrastructure } from "@/components/infrastructure";

export const metadata = {
    title: 'Infrastructure | Accomate Global',
    icons: {
        icon: '/n_icon.png'
    },
    description: `Safeguarding clients' sensitive financial information is paramount in today's digital landscape. We deeply understand the critical need to protect this data from theft and cyber threats.`
}

export default function INFRA() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <Infrastructure />
        </div>
    )
}