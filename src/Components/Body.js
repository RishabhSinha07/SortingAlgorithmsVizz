import {React, useState, useEffect} from 'react'
import './Body.css'
import {Col} from 'react-bootstrap'


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
        if(props.algorithm == "Bubble Sort"){bubbleSort(updateData,updateData.length);}
        if(props.algorithm == "Count Sort"){countSort(updateData);}
        if(props.algorithm == "Cyclic Sort"){cycleSort(updateData,updateData.length);}
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
            await sleep(10);
            updateFigure(arr,min_idx,i,"green");
        }
        updateFigure(arr,null,null,null);
    };

    async function bubbleSort( arr, n){
    var i, j;
    for (i = 0; i < n-1; i++)
    {
        for (j = 0; j < n-i-1; j++)
        {
            if (arr[j] > arr[j+1])
            {
            swap(arr,j,j+1);
            await sleep(10);
            updateFigure(arr,j,j+1,"green");
            }
        }
    }};

    async function countSort(arr){
        var max = Math.max.apply(Math, arr);
        var min = Math.min.apply(Math, arr);
    
        var range = max - min + 1;
        var count = Array.from({length: range}, (_, i) => 0);
        var output = Array.from({length: arr.length}, (_, i) => 0);
        for (var i = 0; i < arr.length; i++) {
            count[arr[i] - min]++;
        }
    
        for (i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }
    
        for (i = arr.length - 1; i >= 0; i--) {
            output[count[arr[i] - min] - 1] = arr[i];
            await sleep(10);
            updateFigure(arr,null,i,"red");
            count[arr[i] - min]--;
        }
    
        for (i = 0; i < arr.length; i++) {
            arr[i] = output[i];
            await sleep(10);
            updateFigure(arr,null,i,"green");
        }
    };

    async function cycleSort(arr, n)
    {
     
        // count number of memory writes
        let writes = 0;
   
        // traverse array elements and put it to on
        // the right place
        for (let cycle_start = 0; cycle_start <= n - 2; cycle_start++)
        {
         
            // initialize item as starting point
            let item = arr[cycle_start];
            await sleep(10);
            updateFigure(arr,null,cycle_start,"red");
   
            // Find position where we put the item. We basically
            // count all smaller elements on right side of item.
            let pos = cycle_start;
            for (let i = cycle_start + 1; i < n; i++)
                if (arr[i] < item)
                    pos++;
   
            // If item is already in correct position
            if (pos == cycle_start)
                continue;
   
            // ignore all duplicate elements
            while (item == arr[pos])
                pos += 1;
   
            // put the item to it's right position
            if (pos != cycle_start)
            {
                let temp = item;
                item = arr[pos];
                arr[pos] = temp;
                await sleep(10);
                updateFigure(arr,null,pos,"green");
                writes++;
            }
   
            // Rotate rest of the cycle
            while (pos != cycle_start)
            {
                pos = cycle_start;
   
                // Find position where we put the element
                for (let i = cycle_start + 1; i < n; i++)
                    if (arr[i] < item)
                        pos += 1;
   
                // ignore all duplicate elements
                while (item == arr[pos])
                    pos += 1;
   
                // put the item to it's right position
                if (item != arr[pos]) {
                    let temp = item;
                    item = arr[pos];
                    arr[pos] = temp;
                    await sleep(10);
                    updateFigure(arr,null,pos,"green");
                    writes++;
                }
            }
        }
        await sleep(10);
        updateFigure(arr,null,null,"orange");
    }

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
        <div className = 'body'>
            {figure.map((x) => {return x.element2})}
        </div>
    )
}

export default Body
