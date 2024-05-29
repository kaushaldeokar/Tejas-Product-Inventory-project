import { useState } from "react";
import Axios from "../utils/AxiosInstance";

function CreateModal({setShowCreateModal, setFetch}) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    async function handleCreate() {
        console.log(title, content);

        await Axios.post(`TJ`, {
            title,
            content,
        })
        
        setFetch(true);
        setShowCreateModal(false);
    }

    return (<div   className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center backdrop backdrop-blur-90 items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full border border-red-400  flex justify-center items-center h-[100vh]">
        <div className="relative bg-white w-1/3 border border-yellow-600 rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    ADD PRODUCT DETIALS
                </h3>
                <button onClick={()=>setShowCreateModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-4 md:p-5 space-y-4 flex flex-col">
              <label className='font-bold mt-1 mb-3'> Title</label>
                <input value={title}  onChange={(e) => setTitle(e.target.value)} name="title" className='px-3 py-1 border border-blue-300 rounded-md' />
                <label className='font-bold mt-1 mb-3'> Content</label>
                <input value={content} onChange={(e) => setContent(e.target.value)} name="title" className='px-3 py-1 border border-blue-300 rounded-md' />
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button onClick={handleCreate} data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
            </div>
        </div>
    </div>
</div>);
  }

export default CreateModal;