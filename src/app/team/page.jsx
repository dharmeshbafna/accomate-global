import { Breadcrumb } from "@/components/other"
import { Team } from "@/components/about"

export const metadata = {
    title: 'Team | Accomate Global',
    icons: {
        icon: '/n_icon.png'
    },
    description: `We boast a team of self-driven, reliable, and qualified 30+ skilled professionals. Their goal is to deliver exceptional outcomes to our partners.`
}

export default function TeamPage() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <Team />
        </div>
    )
}