
import { useEffect, useRef, useState } from "react"
import { collection ,onSnapshot, addDoc, where, query, orderBy,limit,getDoc, Timestamp, doc } from "firebase/firestore"
import BurbujaChat from "../components/BurbujaChat"
import { db } from "../utils/firebaseConf"
import BurbujaQuest from "../components/BurbujaQuest"
import BtnEvents from "../components/BtnEvents"
import { useParams } from "react-router-dom"


const Streams = () =>{
    const [chat,setChat]= useState([])
    const [quests,setQuests]= useState([])
    const [events,setEvents]= useState([])
    const [eventSelect,setEventSelect]= useState({})
    const param=useParams()
    const containerMessage=useRef(null)
    const containerQuest=useRef(null)
    const conllectionName='chat'
    const userName=JSON.parse(localStorage.getItem('user'))
    useEffect(async()=>{
        const docSnap=await getDoc(doc(db,"eventos",param.id))
        if (docSnap.exists()) {
            setEventSelect(docSnap.data())
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
    },[param])
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
            onSnapshot(query( collection(db,'eventos'),where("fechaFin", ">=", Timestamp.now())),(snapEvents)=>{
                const data = snapEvents.docs.map(doc => ({
                    ... doc.data(),
                    id:doc.id
                }))
                setEvents(data)
            })
            onSnapshot(query( collection(db,'consultas'),where('estadoPregunta','==',true)),async(snapQuest)=>{
            
                const data= await Promise.all(
                    await snapQuest.docs.map(async doc => {
                        const obj={
                            ... doc.data(),
                            id:doc.id
                        }
                        const snapData= await getRefData(obj.idUsuarios)

                        return {...obj,user:snapData.data()}
                    })
                )
                setQuests(data)
                scrollDown(containerQuest)

            })
        }
    },[db])

    const getRefData= async (docref)=>{
       
        return await getDoc(docref);
    }
    const sendMessage=async()=>{
        let chat_name="NN"
        if(userName.object.nombre){
            chat_name=userName.object.nombre
        }
        await addDoc(collection(db,conllectionName),{
            user:chat_name,
            message:document.getElementById("input-message").value,
            time:Timestamp.now()
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
                    <div className="col-12 col-md-7 col-lg-9">
                        {
                            <iframe src={`https://player.twitch.tv/?channel=${eventSelect.canal}&parent=hackathom-7e6dc.web.app`}  className="iframe"></iframe>
                          
                        }
                        
                        <div className="btn-container">
                            <div className="btn-group">
                            {
                                events.map(item =>{
                                    return <BtnEvents
                                    key={item.id}
                                    btn={item.nombreEvento}
                                    id={item.id}
                                    />
                                })
                            }
                            </div>
                        

                        </div>
                        
                    </div>
                    <div className="col-12 col-md-5 col-lg-3">
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
                                    
                                    quests.map(item => {
                                        return <BurbujaQuest
                                        key={item.id} 
                                        pregunta={item.pregunta}
                                        user={item.user}
                                        time={item.time}/>})

                                }
                            </div>
                                
                            <div className="input-group position-absolute bottom-0 ">
                                <input type="text" className="form-control " id="input-message" placeholder="Envianos tu consulta" onKeyDown={event => handleKeyDown(event)}/>
                                <button className="btn btn-flow"  >Enviar</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
               
            </div>
                
        </>
    )
}
export default Streams