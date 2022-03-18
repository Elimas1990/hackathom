const BurbujaQuest = ({kye,pregunta,user,time}) =>{
    console.log(kye)
    console.log(user)
    console.log(pregunta)
    return (
        <>
            <div className="border message-quest rounded p-2 m-2 border-3">
                <p>{user.nombre} {user.apellido}: {pregunta}</p>      
            </div>
        </>
    )
}
export default BurbujaQuest