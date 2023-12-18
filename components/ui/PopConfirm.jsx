import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

const PopConfirm = ({ setConfirm, sendRequest, question }) => {
    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                setConfirm(false);
            }}
        >
            <div className="absolute w-52 h-18 -bottom-20 left-1/2 rounded-lg bg-orange-500 p-1 z-20">
                <p className="text-sm mb-2">{question}</p>
                <div className="flex justify-between">
                    <button className="btn text-sm" onClick={() => sendRequest()} type="button">
                        Yes
                    </button>
                    <button className="btn text-sm" onClick={() => setConfirm(false)} type="button">
                        NO
                    </button>
                </div>
            </div>
        </OutsideClickHandler>
    );
};

export default PopConfirm;
