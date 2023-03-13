import { crewData } from './crewdata'
import React, { useState } from 'react';

const CrewList = () => {
    const [view, setView] = useState(1);
    const addNum = () => {
        if (view === 4) {
            return setView(1)
        }
        setView((prev) => prev + 1)
    }

    return (
        <>
            {crewData?.map((val) => {
                return (

                    <div key={val.id}>
                        {view === val.id && (
                            <>
                                <div>
                                    <img src='' alt='img' />

                                </div>
                                <div>
                                    <div onClick={addNum}>dots
                                        <button>add 1</button>
                                    </div>
                                    <div>
                                        <div> role:{val.role}</div>
                                        <div>name:{val.name}</div>
                                        <div>content:{val.content}</div>
                                    </div>
                                </div>
                            </>
                        )}

                    </div>

                )
            })}

        </>
    )
}

export default CrewList;