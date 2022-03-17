
import { useEffect, useRef, useState } from "react"
import { collection ,onSnapshot, addDoc, where, query, orderBy,limit,getDoc,exists } from "firebase/firestore"
import BurbujaChat from "../components/BurbujaChat"
import fetchChat from "../utils/fetchChat"
import { db } from "../utils/firebaseConf"
import BurbujaQuest from "../components/BurbujaQuest"


const Streams = () =>{
    const [chat,setChat]= useState([])
    const [quests,setQuests]= useState([])
    const containerMessage=useRef(null)
    const containerQuest=useRef(null)
    const conllectionName='chat'
    const userName='NuevoUsuario'
    useEffect(()=>{
        if(db){
            onSnapshot(query( collection(db,conllectionName),orderBy("time"),limit(100)),(snapChat)=>{
                const data = snapChat.docs.map(doc => ({
                    ... doc.data(),
                    id:doc.id
                }))
                setChat(data)
                scrollDown(containerMessage)
            })
            onSnapshot(query( collection(db,'consultas'),where('estadoPregunta','==',true)),(snapQuest)=>{
             
                const data=snapQuest.docs.map(doc => {
                    const obj={
                        ... doc.data(),
                        id:doc.id
                    }
                    const snapData=getRefData(doc.data().usuarios)
                    snapData.then(item => {
                        return Object.assign(obj,{user_data:item.data()})
                    })
                    return new Promise((res,rej)=>{
                        res(obj)
                    }) 
                    
                })
                data.then(item=>{
                    setQuests(data)
                    scrollDown(containerQuest)
                })
                
            })
        }
    },[db])

    const getRefData= async (docref)=>{
       
        return await getDoc(docref);
    }
    const sendMessage=async()=>{
        await addDoc(collection(db,conllectionName),{
            user:userName,
            message:document.getElementById("input-message").value,
            time:new Date
        })
        document.getElementById("input-message").value=''
    }
    const handleKeyDown=(event) =>{
        if(event.keyCode === 13) { 
            sendMessage()
        }
    }
    const scrollDown =(ref)=>{
   
        ref.current.scrollTop = containerMessage.current.scrollHeight
    }

    


    return (
        <>
            <div className="container">
                <h1 className="text-center mt-3 mb-3">Bienvenidos</h1>
                <div className="row">
                    <div className="col-9">
                        <iframe src="https://player.twitch.tv/?channel=farbenfuchs&parent=localhost"  className="iframe"></iframe>
                    </div>
                    <div className="col-3">
                        <div className="border chat-container border-2 border-dark rounded-3 position-relative mb-3">
                            <div className="bg-teco text-light text-center">Chat Online</div>
                            <div className="message-container" id="message-container" ref={containerMessage}>
                                {
                                    chat.map(item =>{
                                        return <BurbujaChat
                                        key={item.id} 
                                        user={item.user}
                                        message={item.message}
                                        time={item.time}/>
                                    })
                                }
                            </div>
                                
                            <div className="input-group position-absolute bottom-0 ">
                                <input type="text" className="form-control " id="input-message" placeholder="Participa en el chat" onKeyDown={event => handleKeyDown(event)}/>
                                <button className="btn btn-flow" onClick={sendMessage} >Enviar</button>
                            </div>
                            
                        </div>
                        <div className="border chat-container border-2 border-dark rounded-3 position-relative">
                            <div className="bg-teco text-light text-center">Pregunta para oradores</div>
                            <div className="message-container" id="message-container" ref={containerQuest}>
                                {
                                    console.log(quests[0]?.user_data)
                                    /*quests.map(item => {
                                        return <BurbujaQuest
                                        key={item.id} 
                                        pregunta={item.pregunta}
                                        user={item?.user_data?.nombre}
                                        time={item.time}/>})
                                        
                                    /*quests.map(item =>{
                                        return <BurbujaQuest
                                        key={item.id} 
                                        pregunta={item.pregunta}
                                        user={item.user_data}
                                        time={item.time}/>
                                    })*/
                                }
                            </div>
                                
                            <div className="input-group position-absolute bottom-0 ">
                                <input type="text" className="form-control " id="input-message" placeholder="Envianos tu consulta" onKeyDown={event => handleKeyDown(event)}/>
                                <button className="btn btn-flow" onClick={sendMessage} >Enviar</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
               
            </div>
                
        </>
    )
}
export default Streams