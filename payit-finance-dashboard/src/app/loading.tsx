export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-[50vh]">
            <div className="relative size-12">
                <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20"></div>
                <div className="absolute inset-0 rounded-full border-t-2 border-indigo-500 animate-spin"></div>
            </div>
        </div>
    )
}
