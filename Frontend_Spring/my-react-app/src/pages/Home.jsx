import { useEffect, useState } from 'react'
import Axios from '../utils/AxiosInstance';
import UpdateModal from '../ui/UpdateModal';
import CreateModal from '../ui/CreateModal';

export default function Home() {
  const [fetchData, setFetchData] = useState([]);
  const [showUpdateModal,setShowUpdateModal] = useState(false);
  const [showCreateModal,setShowCreateModal] = useState(null);
  const [fetch, setFetch] = useState(true);

  useEffect(() => {
    if(fetch) {

      (async function () {
        let data = await Axios.get("TJ");
        console.log(data.data);
        
        setFetchData(data.data);
        setFetch(false);
      })();
    }
  }, [fetch]);

  async function handleDelete(ele) {
    await Axios.delete(`TJ/id/${ele.id}`)

    setFetch(true);
  }

 

  return <>
    <div className='container mx-auto mt-10'>
      <h1 className='font-bold text-red-400 text-center'>Tejas Products</h1>
      <button onClick={() => setShowCreateModal(true)} className='mt-4 px-4 py-1 rounded-md border shadow-md'>Create</button>
      <div className='grid grid-cols-5 mt-10' >
        {fetchData.length != 0 && fetchData.map((ele) => {
          return (
            <div key={ele.id} className="flex mt-3 shadow-sm  rounded bg-gray-100 mx-auto  px-4 py-5">

              <div className="px-5 flex flex-col">
                <h3 className="text-lg font-bold">{ele?.title}</h3>
                <span>{ele?.content}</span>
                <button onClick={()=>setShowUpdateModal(ele)} className='mt-4 px-4 py-1 rounded-md border shadow-md'>Edit</button>
                <button onClick={()=>handleDelete(ele)} className='mt-4 px-4 py-1 rounded-md border shadow-md'>Delete</button>
              </div>
            </div>
          );
        })}
      </div>

      {showUpdateModal && <UpdateModal element={showUpdateModal} setShowUpdateModal={setShowUpdateModal} setFetch={setFetch} />}
      {showCreateModal && <CreateModal setShowCreateModal={setShowCreateModal} setFetch={setFetch}/>}
    </div>

  </>
}
