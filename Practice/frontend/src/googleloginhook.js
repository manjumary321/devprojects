import './app.css';
import { GoogleLogin} from 'react-google-login';

const clientId = 'YOUR_CLIENT-ID.apps.googleusercontent.com';

function Loginhook(){
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:',res.profileObj);
        alert('Logout made sucessfully');
    };

    const onFaliure = (res) => {
        console.log('[Login failed] res:',res);
    };
    return(
        <div className="app">
          
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFaliure={onFaliure}
                cookiePolicy={'single-host-origin'}
                style={{marginTop:'100px'}}
                isSignedIn={true}
            />
        </div>
    );
}
export default Loginhook;