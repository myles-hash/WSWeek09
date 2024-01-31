async function delay(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}

export default async function SlowComp() {
    await delay (5000);

    return (
        <div>
            <p className="text-green-400">
            I&apos;m very slow to load, but here I am at last!
            </p>
        </div>
    )
}