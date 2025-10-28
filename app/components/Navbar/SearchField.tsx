const SearchField = () => {
    return(
        <div className="h-[64px] flex flex-row items-center justify-between border rounded-full">
            <div>
                <div className="flex flex-row items-center justify-between">
                    <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-sm font-semibold">Search</p>
                    </div>

                    <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-sm font-semibold">Contact</p>
                    </div>
                </div>

                    
                
            </div>
        </div>
    )
}

export default SearchField;
