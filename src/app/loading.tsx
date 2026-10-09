import React from 'react';

const loading = () => {
    return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 sm:flex-row">

            <span className="loading loading-spinner loading-md text-green-500"></span>

            <h2 className="text-base font-semibold text-green-500 sm:text-lg">Please wait...</h2>

        </div>
    );
};

export default loading;