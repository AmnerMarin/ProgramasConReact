import { useEffect } from "react";

function Nosotros() {

    useEffect(() => {
        const clickear = () => {
            console.log("CLICK");
        }

        window.addEventListener("click", clickear);

        return ()=>{
            window.removeEventListener("click",clickear);
        }
    }, [])
    return (
        <div className="container">
            <h1 className="main-title">Nosotros</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolor inventore itaque nobis natus harum eligendi ea! Veniam, delectus voluptatem inventore non quia fugiat alias aspernatur voluptatibus, laudantium esse ipsum.</p>
        </div>
    );
}

export default Nosotros;