import { Fragment } from "react";

export default function About({data}){
    const style = {
        margin: "20px 15px",
    }
    
    return <Fragment>
    {data.map(({title ,id})=>{
        return <div key={id} style={style}>
            <span>{title}</span>
        </div>
    })}
</Fragment>
}

export const getStaticProps = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        return {
            props: {
                data
            }
        }
    }
    catch(e){
        console.log(e)
    }
}