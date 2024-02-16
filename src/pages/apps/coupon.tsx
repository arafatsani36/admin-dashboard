import { useState, FormEvent, useEffect} from "react";
import AdminSidebar from "../../component/adminsidebar";

const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const allNumber = '1234567890';
const allSymbols = '~`!@#$%^&*()-_+={}[]|;:"<>,./?'


const Coupon = () => {
    const[size, setSize] = useState<number>(8);
    const[prefix, setPrefix] = useState<string>('');
    const[includeNumber, setIncludeNumber] = useState<boolean>(false);
    const[includeCharacters, setIncludeCharacters] = useState<boolean>(false);
    const[includeSymbols, setIncludeSymbols] = useState<boolean>(false);
    const[isCopied, setIsCopied] = useState<boolean>(false);
   
    const [coupon, setCoupon] = useState<string>("");

    const copyText = async(coupon : string) => {
       await window.navigator.clipboard.writeText(coupon);
       setIsCopied(true)
    }

    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!includeNumber && !includeCharacters && !includeSymbols){
            return alert('Please Select At Least');
        }

        let result: string = prefix || '';
            const loopLength: number = size - result.length;

            for (let i = 0; i < loopLength; i++) {
               let entireString: string = "";

               if(includeCharacters){entireString += allLetters}
               if(includeNumber){entireString += allNumber}
               if(includeSymbols){entireString += allSymbols}
              
               const randomNum : number =  ~~(Math.random()*entireString.length);
               result+= entireString[randomNum]
        }
        setCoupon(result)
    }

    useEffect(() => {
        setIsCopied(false)
    },[coupon])

    return (
        <div className="adminContainer">
             <AdminSidebar/>
             <main className="dashboardAppContainer">
                <section>
                   <form className="couponFrom" onSubmit={submitHandler}>
                        <input type="text" placeholder="Text to include" value={prefix} onChange={e => setPrefix(e.target.value)} maxLength={size}/>

                        <input type="number" placeholder="Coupon Length" value={size} onChange={e => setSize(Number(e.target.value))} minLength={8} maxLength={20}/>

                        <fieldset>
                           <legend>include</legend>
                           <input type="checkbox" checked={includeNumber} onChange={() => setIncludeNumber(prev => !prev)} minLength={8} maxLength={20}/>
                           <span>Number</span>

                           <input type="checkbox" checked={includeCharacters} onChange={() => setIncludeCharacters(prev => !prev)} minLength={8} maxLength={20}/>
                           <span>Characters</span>

                           <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(prev => !prev)} minLength={8} maxLength={20}/>
                           <span>Symbols</span>
                        </fieldset>
                        <button type="submit">Generate</button>
                   </form>

                   {
                    coupon && <code>{coupon} <span onClick={() => copyText(coupon)}>{isCopied ? "Copied" : "Copy"}</span></code>
                   }
                </section>
             </main>
        </div>
    );
};

export default Coupon;