const profilepicurl="https://lh3.googleusercontent.com/a/ACg8ocK0mIgtGfk231zQztt13Dgkl4E0uTCEUevRUvbCjdwoFrQ9RlUrm-B710TlN37Sri0cyJvnRvPg2tyYnePjRme95HvaFGSn=s360-c-no";

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilepicurl} alt="Profile"></img>
            <h2>Yugandhar Ganteda</h2>
            <p>I am final year student at KL University.</p>
        </div>

    );
}

export default Card