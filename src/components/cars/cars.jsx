
import axios from 'axios'
import { useState, useEffect, useRef } from 'react';
import Item from './item';

//TODO: return function to array

function Cars() {
    const [ar, setAR] = useState([]);// to get all cars.
    const [category, setCategory] = useState([]); // to enter to array cat the category from data.  
    const [categoryC, setCategoryC] = useState("All"); // to save the category that user choose and renter the app by useEffect.
    const selectRef = useRef();// lesening select ref and get the choice that choose. 


    const getCategory = (_data) => {// enter to arr[]=cat, all category in data get one times
        const cat = [];
        cat.push("All");
        _data.forEach(item => {
            if (!cat.includes(item.category)) {// if cat not includes this category that we cheeck
                cat.push(item.category); // enter this category to arr[] - cat
            }
        });
        setCategory(cat);
    }

    const doApi = async () => {
        try {
            let url = `https://api-cars-oriaboudi.cyclic.app/cars/?perPage=999`;
            const { data } = await axios.get(url);
            getCategory(data)
            let carsFilterd = [...data]
            if (categoryC !== "All" && selectRef.current.value) {
                carsFilterd = data.filter(item => item.category === categoryC)
            }
            setAR(carsFilterd);
        } catch (err) {
            console.log(err.response);
        }
    }
    useEffect(() => {//lesening to chenge
        doApi()

    }, [categoryC]);

    return (
        <div>
            <h1 className='text-center display-3 my-4'>List Of Cars</h1>
            <div className='container'>
                <div className='col-md-3 ms-5'>
                    <select ref={selectRef} onChange={() => {
                        console.log(selectRef.current.value);
                        setCategoryC(selectRef.current.value);
                    }} className='form-select'>

                        {category?.map((item, i) =>
                            <option className='form-select' key={i} value={item}>{item.toUpperCase()}</option>
                        )}

                    </select>
                </div>

                <div className="row p-0 g-3 m-4 justify-content-around">
                    {ar?.map((item, i) => {
                        return (
                            <Item key={i} item={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cars