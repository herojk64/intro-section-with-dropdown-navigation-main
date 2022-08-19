import Drop from "./Drop.module.css";
import classes from "./Company.module.css";
function Company(){
    var link = "#";
    return (
            <div className={`${Drop.DropDown} ${classes.Company}`}>
                <span><a href={link}>History</a></span>
                <span><a href={link}>Our Team</a></span>
                <span><a href={link}>Blog</a></span>
            </div>
    );
}

export default Company;