import { Breadcrumb } from "@/components/other";
import { Canada } from "@/components/services";

export const metadata = {
    title: 'Canada | Services | Accomate Global',
    icons: {
        icon: '/n_icon.png'
    }
}

export default function CANADA() {
    return (
        <div>
            <Breadcrumb />
            <Canada />
        </div>
    )
}