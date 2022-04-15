import{useState, useEffect} from 'react'


export const useLocalStore = (key: string, initialValue: any) => {

    const [storageDate, setStorageDate] = useState(() =>{
        const savedDate = localStorage.getItem(key);
        return savedDate? JSON.parse(savedDate) : initialValue;
    })

    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(storageDate));
    },[storageDate, key])

  return [storageDate, setStorageDate];
}
