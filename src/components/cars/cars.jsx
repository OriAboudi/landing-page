
import axios from 'axios'
import { useState, useEffect } from 'react';
import Item from './item';


function Cars() {
    const [ar, setAR] = useState([]);
    const [category, setCategory] = useState([]);
    const [query] = use

    const getCategory = (_data) => {
        const cat = [];
        _data.forEach(item => {
            if (!cat.includes(item.category)) {
                cat.push(item.category);
            }
        });
        setCategory(cat)
        console.log(cat);
    }

    const doApi = async () => {
        try {
            let url = `https://project-yarin.herokuapp.com/cars${"?perPage=99"}`;
            const { data } = await axios.get(url);
            console.log(data);
            getCategory(data)




            setAR(data)

        } catch (err) {
            console.log(err.response);
        }
    }



    useEffect(() => {
        doApi();
    }, []);



    return (
        <div>
            <h1 className='text-center display-3 my-4'>List Cars</h1>
            <div className='container'>
                <div className="row p-0 g-3 m-4 justify-content-around">
                    {ar?.map((item, i) => {
                        return (
                            <Item key={i} item={item} />
                        )
                    })}



                    {/* {ar?.map((item, i) => {
                return (

                    <p key={i}>{item.model}</p>
                )
            })}

 */}

                    {/* 
            {ar[0]?.model &&
                <div>{ar[0].model}</div>
            }
            {ar[1]?.model    ? <div>{ar[0].model}</div> : <p>loading</p>} */}
                </div>
            </div>
        </div>


    )
}

export default Cars