const Streams = () =>{

    return (
        <>
            <div className="container">
                <h1 className="text-center mt-3 mb-3">Bienvenidos</h1>
                <div className="row">
                    <div className="col-9">
                        <iframe src="https://player.twitch.tv/?channel=luzu_tv&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" className="iframe"></iframe>
                    </div>
                    <div className="col-3">
                        <div className="border chat-container">
                            <div className="bg-primary">Chat Online</div>
                        </div>
                    </div>
                </div>
               
            </div>
                
        </>
    )
}
export default Streams