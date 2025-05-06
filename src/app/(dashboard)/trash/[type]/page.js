'use client'
import TrashList from "@/app/components/trashList";
import { UserContext } from "@/app/user_context";
import { checkAdmin } from "@/helpers";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function TrashTypePage() {
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const { type } = useParams();

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])
    return (
        <>
            <TrashList type={type} />
        </>
    );
}