import { useEffect, useState } from "react";
import AdminSidebar from "../../component/adminsidebar";

const formatTime = (timeInSec:number) => {
    const hours = String(Math.floor(timeInSec / 3600));
    const min = String(Math.floor((timeInSec / 3600) / 60));
    const seconds = String(timeInSec % 60);

    const hoursInString = hours.toString().padStart(2, "0");
    const minInString = min.toString().padStart(2, "0");
    const secInString = seconds.toString().padStart(2, "0");


    return `${hoursInString}:${minInString}:${secInString}`;
}

const StopWatch = () => {

    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const restHandler = () =>{
        setTime(0);
        setIsRunning(false)
    }

    useEffect(() => {
        let intervalID : number;
        if(isRunning){
            intervalID = setInterval(() => {
                setTime(prev => prev + 1) 
            }, 100)
        }

        return () => {
           clearInterval(intervalID)
        }


    },[isRunning])


    return (
        <div className="adminContainer">
            <AdminSidebar/>
            <main className="dashboardAppContainer">
                <section>
                    <div className="stopWatch">
                        <h2>{formatTime(time)}</h2>
                        <button onClick={() => setIsRunning(prev => !prev)}>{isRunning ? "stop" : "start"}</button>
                        <button onClick={restHandler}>Reset</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default StopWatch;