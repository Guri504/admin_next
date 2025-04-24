'use client'
// import TrashList from '../TrashList';

import TrashList from "@/app/components/trashList";
import { useParams } from "next/navigation";

export default function TrashTypePage() {
    const { type } = useParams();
    return (
        <>
            <TrashList type={type} />
        </>
    );
}