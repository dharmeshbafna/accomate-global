import { Breadcrumb } from "@/components/other"
import { Team } from "@/components/about"

export const metadata = {
    title: 'Team | Accomate Global',
    icons: {
        icon: '/n_icon.png'
    }
}

export default function TeamPage() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <Team />
        </div>
    )
}