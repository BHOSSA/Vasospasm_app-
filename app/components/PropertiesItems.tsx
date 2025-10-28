import Image from "next/image";
const PropertiesItems = () => {
    return (
        <div className="cursor-pointer">

            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src="/vasp.jpg"
                    sizes="(max-width: 780px) 780px, (max-width: 1200px) 768px, "
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="Vasospasm"
                />  
            </div> 
            <div className="mt-2">
                <p className="text-lg font-bold">Vasospasm Type</p>
            </div>
                <div className="mt-4 flex items-center ">

            </div>

        </div>
    )
}

export default PropertiesItems;
