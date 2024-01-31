import SlowComp from "@/app/comps/SlowComp";
import { Suspense } from "react";

export default function FastPage() {
    return (<>
        <h1>Fast Page</h1>
        <Suspense fallback={<p>Loading</p>}>
        <SlowComp />
        </Suspense>
        </>
    )
}