function Button({content, variant}){

    return (
        <>
            {/* NavButtn */}
            {variant==='navbutton' &&
            <button className="border-b-0 text-gray-800 border-yellow-300 text-sm font-semibold p-4 px-6 hover:border-b-4 active:bg-yellow-100 smooth-default">
                {content}
            </button>}

            {/* Default */}
            {!variant &&
            <button 
                className={`bg-yellow-300 text-gray-800 font-semibold text-sm border border-gray-100 p-3 px-6 rounded-md hover:bg-yellow-200 smooth-default`}>
                {content}
            </button>}

            {variant==='primarybtn' &&
            <button 
                className={`group bg-green-700 text-gray-100 font-semibold text-3xl border-2 border-gray-100 p-6 px-10 mt-8 rounded-lg hover:font-bold hover:border-green-500 smooth-avg`}>
                {content}
                <div className="bg-gray-100 h-[0.1em] mt-2 w-0 group-hover:w-54 smooth-avg"></div>
            </button>}
        </>
    );
}

export default Button;