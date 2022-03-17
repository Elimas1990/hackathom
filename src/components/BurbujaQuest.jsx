const BurbujaQuest = ({kye,pregunta,user,time}) =>{
    console.log(user)
    return (
        <>
        {console.log(user)}
            <div className="border message-quest rounded p-2 m-2 border-3">
                <p>{user}: {pregunta}</p>      
            </div>
        </>
    )
}
export default BurbujaQuest