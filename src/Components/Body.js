import {React, useState, useEffect} from 'react'
import './Body.css'
import {Container,Row,Col} from 'react-bootstrap'


function Body(props) {
    const [figure, setfigure] = useState([]);
    const [updateData, setupdateData] = useState(props.data);

    console.log(updateData)

    useEffect(() => {
        updateFigure(updateData,null,null,null);
    }, [])


    const randomize = () => {
        var temp = Array.from({length: props.sliderValue}, () => Math.max(Math.floor(Math.random()*50),1))
        setupdateData(temp);
        updateFigure(temp,null,null,null);
    };

    const updateFigure = (Udata,fPos,tPos,color) => {
        var temp = [];
        var screenWidth = window.screen.availWidth;
        var width = screenWidth/Udata.length

        for(var index = 0; index < Udata.length; index++){
            if(index == fPos || index == tPos){
                var bColor = color
            }
            else{
                var bColor = 'orange'
            } 
            temp.push({
                "element":<Col><div style = {{textAlign:'center',color:'black',height:`${Udata[index]*10}px`,width:`${width}`, backgroundColor:`${bColor}`}}>{Udata[index]}</div></Col>,
                "element2":<div style = {{borderLeft:`4px solid ${bColor}`,height:`${Udata[index]*10}px`,marginLeft:'1px',position:'relative',display:'inline',float:'left'}}></div>,
                "value":<Col><div>{Udata[index]*10}</div></Col>
            })
        };
        setfigure(temp);
    };
 
    const startSorting = () => {
        console.log(updateData)
        if(props.algorithm == "Insertion Sort"){insertionSort(updateData,updateData.length);}
        if(props.algorithm == "Selection Sort"){selectionSort(updateData,updateData.length);}
    };

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    };

    /// ******************************* Algorithms ********************************    
    const insertionSort = async(arr,n) => {
        console.log("Starting Insertion Sort",arr)
        let i, key, j;
        for (i = 1; i < n; i++){ 
            key = arr[i]; 
            j = i - 1; 
            while (j >= 0 && arr[j] > key){ 
                await sleep(10);
                updateFigure(arr,j+1,j,"green");
                arr[j + 1] = arr[j];
                j = j - 1;
        } 
        arr[j + 1] = key;
        }
        updateFigure(arr,null,null,null);
        console.log("After Soring : ",arr)
    }

    const swap = (arr,xp, yp) => {
        var temp = arr[xp];
        arr[xp] = arr[yp];
        arr[yp] = temp;
    };

    const selectionSort = async(arr,n) => {
        var i, j, min_idx;
     
        // One by one move boundary of unsorted subarray
        for (i = 0; i < n-1; i++)
        {
            // Find the minimum element in unsorted array
            min_idx = i;
            for (j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
     
            // Swap the found minimum element with the first element
            swap(arr,min_idx, i);
            await sleep(100);
            updateFigure(arr,min_idx,i,"green");
        }
        updateFigure(arr,null,null,null);
    };

    /// ******************************* Algorithms End ********************************
    useEffect(() => {
        props.setRandomize(false);
        props.setStart(false);
        randomize();
    },[props.sliderValue,props.random])  
    
    
    useEffect(() => {
        if(props.start){
            startSorting();
        }}, [props.start])
 
    
    return (
        <div>
            <Container fluid={true}>
            {figure.map((x) => {return x.element2})}
            </Container>
        </div>
    )
}

export default Body
