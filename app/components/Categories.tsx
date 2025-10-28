import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pd-6 flex items-center space-x-12">
            <div className="pd-4 flex flex-col items-center space-y-6 border-b-2 border-white opacity-60 hover:border-gray-100 hover:opacity-100">
                <Image 
                   src="/neurology.png"
                   alt="Vasospasm"
                   width={80}
                   height={30}
                />
                <span className="text-xs">Vasospasm</span>
            </div>

            <div className="pd-4 flex flex-col items-center space-y-6 border-b-2 border-white opacity-60 hover:border-gray-100 hover:opacity-100">
                <Image 
                   src="/dashboard.png"
                   alt="Dashboard"
                   width={80}
                   height={30}
                />
                <span className="text-xs">Dashboard</span>
            </div>

            <div className="pd-4 flex flex-col items-center space-y-6 border-b-2 border-white opacity-60 hover:border-gray-100 hover:opacity-100">
                <Image 
                   src="/business-presentation.png"
                   alt="Poster"
                   width={80}
                   height={30}
                />
                <span className="text-xs">Poster</span>
            </div>
        </div>
    )
}

export default Categories;
