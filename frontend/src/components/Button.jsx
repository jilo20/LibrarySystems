import { Link } from "react-router-dom";

function Button({content, variant, isSubmit=false,route}){

    return (
        <>
            {/* NavButtn */}
            {variant === 'navbutton' &&
                <Link to={route}>
                    <button
                        type={isSubmit ? "submit" : "button"}
                        className="border-b-0 text-gray-800 border-yellow-300 text-sm font-semibold p-4 px-6 hover:border-b-4 active:bg-yellow-100 smooth-default">
                        {content}
                    </button>
                </Link>
            }

            {/* Default */}
            {!variant &&
            <button type={isSubmit ? "submit" : "button"}
                className={`bg-yellow-300 text-gray-800 font-semibold text-sm border border-gray-100 p-3 px-6 rounded-md hover:bg-yellow-200 smooth-default`}>
                {content}
            </button>}

            {variant==='primarybtn' &&
            <button type={isSubmit ? "submit" : "button" }
                className={`group bg-green-700 text-gray-100 font-semibold text-3xl border-2 border-gray-100 p-6 px-10 mt-8 rounded-lg hover:font-bold hover:border-green-500 smooth-avg`}>
                {content}
                <div className="bg-gray-100 h-[0.1em] mt-2 w-0 group-hover:w-54 smooth-avg"></div>
            </button>}

            {variant==='secondarybtn' &&
            <button type={isSubmit ? "submit" : "button"}
                className={`hover:scale-103 group bg-green-700 text-gray-100 font-semibold text-xl border-2 border-gray-100 p-3 px-10 rounded-lg hover:bg-green-600 smooth-avg`}>
                {content}
            </button>}
        </>
    );
}

export default Button;