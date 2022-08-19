import btn from "./Buttons.module.css";
function Buttons(props){
    let btnStyle = btn.Default

    if(props.Btn === 1)
        btnStyle = btn.Btn1;

    if(props.Btn === 2)
        btnStyle = btn.Btn2;
    
    if(props.Btn === 3)
        btnStyle = btn.Btn3;
    return (
        <>
            <span><button className={btnStyle}>{props.Content}</button></span>
        </>
    );

}
export default Buttons;