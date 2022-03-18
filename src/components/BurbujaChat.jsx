const BurbujaChat = ({user,message,time}) =>{
    const userdata=JSON.parse(localStorage.getItem('user'))
    let color='message-others'
    if(userdata.object.nombre.stringValue == user.stringValue){
        color='message-me'
    }
    console.log(color)
    return (
        <>
            <div className={`border ${color} rounded p-2 m-2 border-3`}>
                <p><b>{user.stringValue}</b>: {message}</p>      
            </div>
        </>
    )
}
export default BurbujaChat