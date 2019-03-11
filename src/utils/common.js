import { MessageBox, Indicator } from 'mint-ui'
class Common {
    constructor(){
    }

    openMsgBox(callback, title="确定执行此操作") {
        MessageBox.confirm(title)
        .then((action)=>{
            callback && callback()
        }).catch(()=>{
            console.log('cancel');
        })
    }

    loading(isLoading=true, text=""){
        if(isLoading){
            Indicator.open({
                text: text,
                // spinnerType: 'fading-circle'
            });
        }else{
            Indicator.close()
        }
    }

}

export default Common