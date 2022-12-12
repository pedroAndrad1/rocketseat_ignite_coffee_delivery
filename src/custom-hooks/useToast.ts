import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//O toast pode receber de uma string ate um component como content
//api https://fkhadra.github.io/react-toastify/api/toast


const configPadrao = {
    closeButton: false,
    hideProgressBar: true,
    autoClose: 2000,
    position: toast.POSITION.TOP_RIGHT,
}

const success = (content: string, config?: any) => {

    config? toast.success(content, config) : toast.success(content, configPadrao);

}
const info = (content: string, config?: any) => {

    config? toast.info(content, config) : toast.info(content, configPadrao);

}
const warning = (content: string, config?: any) => {

    config? toast.warn(content, config) : toast.warn(content, configPadrao);

}
const error = (content: string, config?: any) => {

    config? toast.error(content, config) : toast.error(content, configPadrao);
}

const useToast = () =>{
    return {
        success,
        info,
        warning,
        error
    }
}

export default useToast;